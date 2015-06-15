/**
 * @file rider
 * @author firede(firede@firede.us)
 */

var helpers = require('./helpers');

/**
 * stylus 插件
 *
 * @param {Object=} options 可选参数
 * @param {boolean=} options.implicit 隐式调用
 * @return {Function}
 */
function plugin(options) {
    options = options || {};
    var implicit = options.implicit;

    if (typeof implicit !== 'boolean') {
        implicit = true;
    }

    return function (style) {
        // 包含 rider 的目录
        style.include(__dirname);

        // 定义通过 JavaScript 扩展的函数
        for (var key in helpers) {
            if (helpers.hasOwnProperty(key)) {
                style.define(key, helpers[key]);
            }
        }

        // 隐式导入 rider
        if (implicit) {
            style.import('rider');
        }
    };
}

module.exports = plugin;

exports.version = require('../package.json').version;
