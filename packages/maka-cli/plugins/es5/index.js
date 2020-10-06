const es5 = require('./es5');

class MakaJsWebpackPlugin {
  constructor(options) {
    this.options = options;
    this.emit = this.emit.bind(this);
  }

  apply(compiler) {
    compiler.hooks.emit.tapPromise({ name: 'MakaJsWebpackPlugin' }, this.emit);
  }

  emit(compilation) {

    const chunks = this.options.chunkNames ?
      compilation.chunks.filter(chunk => this.options.chunkNames.includes(chunk.name)) :
      compilation.chunks;

    if (!chunks.length) {
      throw new Error('MakaJsWebpackPlugin: chunks array for makajs is empty.');
    }

    const fileNames = chunks.map(
      chunk => chunk.files.find(
        file => file.match(/.*\.js$/)
      )
    );

    const promises = fileNames.map(fileName => this.makajs(fileName, compilation));
    return Promise.all(promises).then(() => {});
  }

  makajs(fileName, compilation) {
    return new Promise(resolve => {
      if (fileName) {
        const source = compilation.assets[fileName].source();
        compilation.assets[fileName].source = function() {
          return es5.transform(source);
        };
      }

      resolve();
    });
  }
}

module.exports = MakaJsWebpackPlugin;
