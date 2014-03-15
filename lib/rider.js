/**
 * rider
 * 
 * @author firede(firede@firede.us)
 */


/**
 * stylus plugin
 * 
 * @param {Object} options
 * @return {Function}
 */
function plugin(options) {
    options = options || {};
    var implicit = options.implicit;

    if (typeof implicit !== 'boolean') {
        implicit = true;
    }

    return function(style) {
        // include rider
        style.include(__dirname);

        // implicit import handling
        if (implicit) {
            style.import('rider');
        }
    };
}

module.exports = plugin;

exports.version = require('../package.json').version;
