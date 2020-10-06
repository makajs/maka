

const path = require('path');
const BaseCommand = require('common-bin');
const fs = require('fs');

class Command extends BaseCommand {
  constructor(rawArgv) {
    super(rawArgv);
    this.parserOptions = {
      execArgv: true,
      removeAlias: true,
    };

    // common-bin setter, don't care about override at sub class
    // https://github.com/node-modules/common-bin/blob/master/lib/command.js#L158
    this.options = {
      typescript: {
        description: 'whether enable typescript support, will load `ts-node/register` etc',
        type: 'boolean',
        alias: 'ts',
        default: undefined,
      },
      /* 暂时不支持ts-helper
      declarations: {
        description: 'whether create dts, will load `egg-ts-helper/register`',
        type: 'boolean',
        alias: 'dts',
        default: undefined,
      },*/
    };
  }

  /**
   * default error handler
   * @param {Error} err - err obj
   */
  errorHandler(err) {
    console.error(err);
    process.nextTick(() => process.exit(1));
  }

  get context() {
    const context = super.context;
    const { argv, debugPort, execArgvObj, cwd, env } = context;

    // compatible
    // 兼容参数
    if (debugPort) context.debug = debugPort;

    // remove unuse args
    argv.$0 = undefined;

    // read package.json
    let baseDir = argv.baseDir || cwd;
    if (!path.isAbsolute(baseDir)) baseDir = path.join(cwd, baseDir);

    const pkgFile = path.join(baseDir, 'package.json');
    const pkgInfo = fs.existsSync(pkgFile) ? require(pkgFile) : null;
    const makaInfo = pkgInfo && pkgInfo.maka;
    execArgvObj.require = execArgvObj.require || [];


    // read `maka.typescript` from package.json if not pass argv
    if (argv.typescript === undefined && makaInfo) {
      argv.typescript = makaInfo.typescript === true;
    }

    // read `maka.declarations` from package.json if not pass argv
    if (argv.declarations === undefined && makaInfo) {
      argv.declarations = makaInfo.declarations === true;
    }

    // read `maka.require` from package.json
    if (makaInfo && makaInfo.require && Array.isArray(makaInfo.require)) {
      execArgvObj.require = execArgvObj.require.concat(makaInfo.require);
    }

    // load ts-node
    if (argv.typescript) {
      execArgvObj.require.push(require.resolve('ts-node/register'));

      // tell maka loader to load ts file
      env.MAKA_TYPESCRIPT = 'true';

      // use type check
      env.TS_NODE_TYPE_CHECK = process.env.TS_NODE_TYPE_CHECK || 'true';

      // load files from tsconfig on startup
      env.TS_NODE_FILES = process.env.TS_NODE_FILES || 'true';
    }

    // 暂时不支持，未来参考maka-ts-helper/register
    // load maka-ts-helper
    // if (argv.declarations) {
    // execArgvObj.require.push(require.resolve('maka-ts-helper/register'));
    // }

    return context;
  }
}

module.exports = Command;
