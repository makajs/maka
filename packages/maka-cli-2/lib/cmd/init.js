'use strict';

const debug = require('debug')('maka-cli');
const os = require('os');
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const urllib = require('urllib');
const updater = require('npm-updater');
const mkdirp = require('mkdirp');
const inquirer = require('inquirer');
// const yargs = require('yargs');
const glob = require('globby');
const is = require('is-type-of');
const homedir = require('node-homedir');
const compressing = require('compressing');
const rimraf = require('mz-modules/rimraf');
const isTextOrBinary = require('istextorbinary');
const ProxyAgent = require('proxy-agent');
const Command = require('../command');

require('colors');

class InitCommand extends Command {
  constructor(rawArgv) {
    super(rawArgv);
    this.usage = 'Usage: maka2 init [directory] [options]';
    this.options = {
      type: {
        type: 'string',
        // description: 'boilerplate type',
        description: '模板类型',
      },
      dir: {
        type: 'string',
        // description: 'target directory',
        description: '目标目录',
      },
      force: {
        type: 'boolean',
        // description: 'force to override directory',
        description: '强制覆盖目录',
        alias: 'f',
      },
      template: {
        type: 'string',
        // description: 'local path to boilerplate',
        description: '本地模板路径',
      },
      package: {
        type: 'string',
        // description: 'boilerplate package name',
        description: '模板npm包名',
      },
      registry: {
        type: 'string',
        // description: 'npm registry, support china/npm/custom, default to auto detect',
        description: '配置npm registry, 支持 china/npm/custom, 默认自动检测',
        alias: 'r',
      },
      silent: {
        type: 'boolean',
        // description: 'don\'t ask, just use default value',
        description: '不询问，全使用默认值',
      },
    };

    /*
    this.configName = this.options.configName || 'maka-init-config';
    this.pkgInfo = this.options.pkgInfo || require('../../package.json');
    this.needUpdate = this.options.needUpdate !== false;
    */

    this.configName = 'maka-init-config';
    this.pkgInfo = require('../../package.json');
    this.needUpdate = true;
    this.httpClient = urllib.create();
    this.inquirer = inquirer;

    this.fileMapping = {
      gitignore: '.gitignore',
      _gitignore: '.gitignore',
      '_.gitignore': '.gitignore',
      '_package.json': 'package.json',
      '_.eslintignore': '.eslintignore',
      '_.npmignore': '.npmignore',
    };
  }

  get description() {
    return '初始化maka项目';
  }

  * run({ cwd, argv, rawArgv }) {
    debug('rawArgv11: %s', rawArgv);

    this.cwd = cwd;
    this.argv = argv;

    const proxyHost = process.env.http_proxy || process.env.HTTP_PROXY;

    if (proxyHost) {
      const proxyAgent = new ProxyAgent(proxyHost);
      this.httpClient.agent = proxyAgent;
      this.httpClient.httpsAgent = proxyAgent;
      debug('use http_proxy: %s', proxyHost);
    }

    // 查找npm registry地址
    this.registryUrl = this.getRegistryByType(argv.registry);
    debug('use registry: %s ', this.registryUrl);

    if (this.needUpdate) {
      // check update
      yield updater({
        package: this.pkgInfo,
        registry: this.registryUrl,
        level: 'major',
      });
    }

    // 询问目标路径
    this.targetDir = yield this.getTargetDirectory();

    // use local template
    let templateDir = yield this.getTemplateDir();

    // 没指定模板路径
    if (!templateDir) {
      // support --package=<npm name>
      // 从模板配置npm包中下载模板列表
      let pkgName = this.argv.package;
      if (!pkgName) {
        // list boilerplate
        // 获取模板列表
        const boilerplateMapping = yield this.fetchBoilerplateMapping();
        // ask for boilerplate
        let boilerplate;
        // 如果存在type参数直接使用这个type的样本，否则询问
        if (argv.type && boilerplateMapping.hasOwnProperty(argv.type)) {
          boilerplate = boilerplateMapping[argv.type];
        } else {
          boilerplate = yield this.askForBoilerplateType(boilerplateMapping);
          if (!boilerplate) return;
        }
        // this.log(`use boilerplate: ${boilerplate.name}(${boilerplate.package})`);
        debug(`使用模板: ${boilerplate.name}(${boilerplate.package})`);
        pkgName = boilerplate.package;
      }
      // download boilerplate
      // 下载包解压，返回路径
      templateDir = yield this.downloadBoilerplate(pkgName);
    }

    // copy template
    // 赋值模板
    yield this.processFiles(this.targetDir, templateDir);
    // done
    this.printUsage(this.targetDir);
  }
  /**
   *
   * @param {object} obj origin Object
   * @param {string} key group by key
   * @param {string} otherKey  group by other key
   * @return {object} result grouped object
   */
  groupBy(obj, key, otherKey) {
    const result = {};
    for (const i in obj) {
      let isMatch = false;
      for (const j in obj[i]) {
        // check if obj[i]'s property is 'key'
        if (j === key) {
          const mappingItem = obj[i][j];
          if (typeof result[mappingItem] === 'undefined') {
            result[mappingItem] = {};
          }
          result[mappingItem][i] = obj[i];
          isMatch = true;
          break;
        }
      }
      if (!isMatch) {
        // obj[i] doesn't have property 'key', then use 'otherKey' to group
        if (typeof result[otherKey] === 'undefined') {
          result[otherKey] = {};
        }
        result[otherKey][i] = obj[i];
      }
    }
    return result;
  }
  /**
   * show boilerplate list and let user choose one
   * 显示模板列表，让用户选择一个
   * @param {Object} mapping - boilerplate config mapping, `{ simple: { "name": "simple", "package": "egg-boilerplate-simple", "description": "Simple egg app boilerplate" } }`
   * @return {Object} boilerplate config item
   */
  * askForBoilerplateType(mapping) {
    // group by category
    // group the mapping object by property 'category' or 'other' if item of mapping doesn't have 'category' property
    const groupMapping = this.groupBy(mapping, 'category', 'other');
    const groupNames = Object.keys(groupMapping);
    let group;
    if (groupNames.length > 1) {
      const answers = yield inquirer.prompt({
        name: 'group',
        type: 'list',
        message: 'Please select a boilerplate category',
        choices: groupNames,
        pageSize: groupNames.length,
      });
      group = groupMapping[answers.group];
    } else {
      group = groupMapping[groupNames[0]];
    }

    // ask for boilerplate
    const choices = Object.keys(group).map(key => {
      const item = group[key];
      return {
        name: `${key} - ${item.description}`,
        value: item,
      };
    });

    choices.unshift(new inquirer.Separator());
    const { boilerplateInfo } = yield inquirer.prompt({
      name: 'boilerplateInfo',
      type: 'list',
      // message: 'Please select a boilerplate type',
      message: '请选择一种模板',
      choices,
      pageSize: choices.length,
    });
    if (!boilerplateInfo.deprecate) return boilerplateInfo;

    // ask for deprecate
    const { shouldInstall } = yield inquirer.prompt({
      name: 'shouldInstall',
      type: 'list',
      message: 'It\'s deprecated',
      choices: [
        {
          name: `1. ${boilerplateInfo.deprecate}`,
          value: false,
        },
        {
          name: '2. I still want to continue installing',
          value: true,
        },
      ],
    });

    if (shouldInstall) {
      return boilerplateInfo;
    }
    console.log(`Exit due to: ${boilerplateInfo.deprecate}`);
    return;

  }

  /**
   * ask user to provide variables which is defined at boilerplate
   * 询问用户提供模板文件中定义的变量
   * @param {String} targetDir - target dir
   * @param {String} templateDir - template dir
   * @return {Object} variable scope
   */
  * askForVariable(targetDir, templateDir) {
    let questions;
    try {
      questions = require(templateDir);
      // support function
      if (is.function(questions)) {
        questions = questions(this);
      }
      // use target dir name as `name` default
      if (questions.name && !questions.name.default) {
        questions.name.default = path.basename(targetDir).replace(/^maka-/, '');
      }
    } catch (err) {
      if (err.code !== 'MODULE_NOT_FOUND') {
        // debugg(`load boilerplate config got trouble, skip and use defaults, ${err.message}`.yellow);
        debug(`加载样板配置出错，跳过并使用默认值, ${err.message}`.yellow);
      }
      return {};
    }

    // this.log('collecting boilerplate config...');
    debug('收集模板配置...');
    const keys = Object.keys(questions);
    if (this.argv.silent) {
      const result = keys.reduce((result, key) => {
        const defaultFn = questions[key].default;
        const filterFn = questions[key].filter;
        if (typeof defaultFn === 'function') {
          result[key] = defaultFn(result) || '';
        } else {
          result[key] = questions[key].default || '';
        }
        if (typeof filterFn === 'function') {
          result[key] = filterFn(result[key]) || '';
        }

        return result;
      }, {});
      debug('use default due to --silent, %j', result);
      return result;
    }
    return yield inquirer.prompt(keys.map(key => {
      const question = questions[key];
      return {
        type: question.type || 'input',
        name: key,
        message: question.description || question.desc,
        default: question.default,
        filter: question.filter,
        choices: question.choices,
      };
    }));

  }

  /**
   * copy boilerplate to target dir with template scope replace
   * 拷贝模板，并替换模板中变量
   * @param {String} targetDir - target dir
   * @param {String} templateDir - template dir, must contain a folder which named `boilerplate`
   * @return {String[]} file names
   */
  * processFiles(targetDir, templateDir) {
    const src = path.join(templateDir, 'boilerplate');
    const locals = yield this.askForVariable(targetDir, templateDir);
    const files = glob.sync('**/*', { cwd: src, dot: true });
    files.forEach(file => {
      const from = path.join(src, file);
      const to = path.join(targetDir, this.replaceTemplate(this.fileMapping[file] || file, locals));
      const content = fs.readFileSync(from);
      // this.log('write to %s', to);
      debug('write to %s', to);

      // check if content is a text file
      const result = isTextOrBinary.isTextSync(from, content)
        ? this.replaceTemplate(content.toString('utf8'), locals)
        : content;

      mkdirp.sync(path.dirname(to));
      fs.writeFileSync(to, result);
    });
    return files;
  }


  /**
   * 通过参数获取 registryUrl
   * @param {String} key - short name, support `china / npm / npmrc`, default to read from .npmrc
   * @return {String} registryUrl
   */
  getRegistryByType(key) {
    debug('processenv', process.env.npm_registry, process.env.npm_config_registry);
    switch (key) {
      // china，npm特殊处理
      case 'china':
        return 'https://registry.npm.taobao.org';
      case 'npm':
        return 'https://registry.npmjs.org';
      default: {
        // https开头
        if (/^https?:/.test(key)) {
          return key.replace(/\/$/, ''); // 去除末尾反斜杠
        }
        // 获取
        const home = homedir();
        let url = process.env.npm_registry || process.env.npm_config_registry || 'https://registry.npmjs.org';
        if (fs.existsSync(path.join(home, '.cnpmrc')) || fs.existsSync(path.join(home, '.tnpmrc'))) {
          url = 'https://registry.npm.taobao.org';
        }
        url = url.replace(/\/$/, '');
        return url;

      }
    }
  }

  /**
   * ask for target directory, will check if dir is valid.
   * 获取目标路径，如果不合法或者没在命令行中指定，询问输出
   * @return {String} Full path of target directory
   */
  * getTargetDirectory() {
    // 获取相对路径

    const dir = this.argv._[0] || this.argv.dir || '';

    // 转换为绝对类型
    let targetDir = path.resolve(this.cwd, dir);

    // 是否强制
    const force = this.argv.force;

    // 校验
    const validate = dir => {
      // create dir if not exist
      // 目录未存在，创建目录并校验通过
      if (!fs.existsSync(dir)) {
        mkdirp.sync(dir);
        return true;
      }

      // not a directory
      // 以及存在的路径不是目录，校验失败
      if (!fs.statSync(dir).isDirectory()) {
        // return `${dir} already exists as a file`.red;
        return `已经存在${dir} 文件，创建该路径目录失败`.red;
      }

      // check if directory empty
      const files = fs.readdirSync(dir).filter(name => name[0] !== '.');
      // 存在文件
      if (files.length > 0) {
        if (force) {
          // this.log(`${dir} already exists and will be override due to --force`.red);
          debug(`--force选项，强制覆盖${dir}目录`.red);
          return true;
        }

        // return `${dir} already exists and not empty: ${JSON.stringify(files)}`.red;
        return `${dir} 目录已经存在文件: ${JSON.stringify(files)}`.red;
      }
      return true;
    };

    // if argv dir is invalid, then ask user
    const isValid = validate(targetDir);
    // 校验失败，询问用户录入
    if (isValid !== true) {
      debug(isValid);
      const answer = yield this.inquirer.prompt({
        name: 'dir',
        // message: 'Please enter target dir: ',
        message: '请录入目标目录: ',
        default: dir || '.',
        filter: dir => path.resolve(this.cwd, dir), // 接受用户输入并且将值转化后返回填充入最后的answers对象内。
        validate,
      });
      targetDir = answer.dir;
    }
    debug(`target dir is ${targetDir}`);
    return targetDir;
  }

  /**
   * find template dir from support `--template=`
   * 根据参数获取本地模板路径
   * @return {undefined|String} template files dir
   */
  * getTemplateDir() {
    let templateDir;
    // when use `maka2 init --template=PATH`
    if (this.argv.template) {
      templateDir = path.resolve(this.cwd, this.argv.template);
      if (!fs.existsSync(templateDir)) {
        // this.log(`${templateDir} is not exists`.red);
        debug(`${templateDir} 不存在`.red);
      } else if (!fs.existsSync(path.join(templateDir, 'boilerplate'))) {
        // this.log(`${templateDir} should contain boilerplate folder`.red);
        debug(`${templateDir} 目录下要包含boilerplate目录`.red);
      } else {
        // this.log(`local template dir is ${templateDir.green}`);
        debug(`模板目录： ${templateDir.green}`);
        return templateDir;
      }
    }
  }

  /**
   * fetch boilerplate mapping from `maka-init-config`
   * 从maka-init-config npm包中获取模板列表
   * @param {String} [pkgName] - config package name, default to `this.configName`
   * @return {Object} boilerplate config mapping, `{ simple: { "name": "simple", "package": "maka-boilerplate-helloworld", "description": "Hello world app boilerplate" } }`
   */
  * fetchBoilerplateMapping(pkgName) {
    const pkgInfo = yield this.getPackageInfo(pkgName || this.configName, true);
    const mapping = pkgInfo.config.boilerplate;

    Object.keys(mapping).forEach(key => {
      const item = mapping[key];
      item.name = item.name || key;
      item.from = pkgInfo;
    });
    return mapping;
  }

  /**
   * print usage guide
   */
  printUsage() {
    console.log(`usage:
      - cd ${this.targetDir}
      - npm install
      - npm start / npm run dev / npm test
    `);
  }

  /**
   * replace content with template scope,
   * 替换文件名中的变量
   * - `{{ test }}` will replace
   * - `\{{ test }}` will skip
   *
   * @param {String} content - template content
   * @param {Object} scope - variable scope
   * @return {String} new content
   */
  replaceTemplate(content, scope) {
    return content.toString().replace(/(\\)?{{ *(\w+) *}}/g, (block, skip, key) => {
      if (skip) {
        return block.substring(skip.length);
      }
      return scope.hasOwnProperty(key) ? scope[key] : block;
    });
  }

  /**
   * download boilerplate by pkgName then extract it
   * 根据包名下载npm包，并解压，返回路径
   * @param {String} pkgName - boilerplate package name
   * @return {String} extract directory
   */
  * downloadBoilerplate(pkgName) {
    const result = yield this.getPackageInfo(pkgName, false);
    const tgzUrl = result.dist.tarball;

    debug(`downloading ${tgzUrl}`);

    // 操作系统的默认临时文件目录
    const saveDir = path.join(os.tmpdir(), 'maka-init-boilerplate');

    // 先删除存储目录文件rm -rf
    yield rimraf(saveDir);

    const response = yield this.curl(tgzUrl, { streaming: true, followRedirect: true });
    yield compressing.tgz.uncompress(response.res, saveDir);

    // this.log(`extract to ${saveDir}`);
    debug(`extract to ${saveDir}`);
    return path.join(saveDir, '/package');
  }

  /**
   * send curl to remote server
   * 使用urllib实现curl
   * @param {String} url - target url
   * @param {Object} [options] - request options
   * @return {Object} response data
   */
  * curl(url, options) {
    return yield this.httpClient.request(url, options);
  }

  /**
   * get package info from registry
   * 根据包名获取package.json信息
   *
   * @param {String} pkgName - package name
   * @param {Boolean} [withFallback] - when http request fail, whethe to require local
   * @return {Object} pkgInfo
   */
  * getPackageInfo(pkgName, withFallback) {
    // this.log(`fetching npm info of ${pkgName}`);
    debug(`获取npm信息： ${pkgName}`);
    try {
      debug('registryUrl:%s %s', this.registryUrl, pkgName);
      const result = yield this.curl(`${this.registryUrl}/${pkgName}/latest`, {
        dataType: 'json',
        followRedirect: true,
        maxRedirects: 5,
        timeout: 5000,
      });
      assert(result.status === 200, `npm info ${pkgName} got error: ${result.status}, ${result.data.reason}`);
      return result.data;
    } catch (err) {
      if (withFallback) {
        debug(`use fallback from ${pkgName}`);
        return require(`${pkgName}/package.json`);
      }
      throw err;

    }
  }
}

module.exports = InitCommand;
