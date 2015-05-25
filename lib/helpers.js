/**
 * @file helper functions
 * @author firede(firede@firede.us)
 */

var utils = require('stylus').utils;

/**
 * 检查文件是否存在
 *
 * @param {Object} file 文件路径对象
 * @return {boolean}
 */
exports['is-found'] = function isFound(file) {
    utils.assertString(file, 'file');
    return !!utils.lookup(file.val, this.paths);
};

/**
 * 检查是否是远程Url
 * 这里检查的并不严格,主要是为了快速区分path类型
 *
 * @param {Object} path Url路径对象
 * @return {boolean}
 */
exports['is-remote'] = function isRemote(path) {
    utils.assertString(path, 'path');

    var obj = path.val.match(/^(https?:)?\/\//i);

    return !!obj;
};
