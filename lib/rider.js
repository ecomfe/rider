module.exports = plugin;
exports.version = require('../package.json').version;

function plugin(options) {
    return function(style) {
        style.include(__dirname);
    }
}
