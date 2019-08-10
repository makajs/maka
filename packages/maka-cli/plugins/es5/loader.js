const loader = (source) => {
    const es5 = require('./es5');
    var ret = es5.transform(source)
    return ret
}

module.exports.default = loader