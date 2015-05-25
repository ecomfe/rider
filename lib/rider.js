/**
 * @file rider
 * @author firede(firede@firede.us)
 */

var helpers = require('./helpers');

/**
 * stylus plugin
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
        // include rider
        style.include(__dirname);

        // define helper
        for (var key in helpers) {
            if (helpers.hasOwnProperty(key)) {
                style.define(key, helpers[key]);
            }
        }

        // implicit import handling
        if (implicit) {
            style.import('rider');
        }
    };
}

module.exports = plugin;

exports.version = require('../package.json').version;
