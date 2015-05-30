/**
 * @file 帮助函数
 * @author firede(firede@firede.us)
 */

var utils = require('stylus').utils;

/**
 * 检查文件是否存在
 *
 * @param {Object} file 文件路径对象
 * @return {boolean}
 */
exports['file-exists'] = function fileExists(file) {
    utils.assertString(file, 'file');
    return !!utils.lookup(file.val, this.paths);
};

/**
 * 检查是否是Url
 * 这里检查的并不严格,主要是为了快速区分path类型
 *
 * @param {Object} path Url路径对象
 * @return {boolean}
 */
exports['is-url'] = function isUrl(path) {
    utils.assertString(path, 'path');

    var obj = path.val.match(/^(https?:)?\/\//i);

    return !!obj;
};

/**
 * 获取添加dppx后缀的图片地址
 *
 * @param {Object} path 图片路径对象
 * @param {Object} dppx dppx对象
 * @return {string}
 */
exports['get-path-with-dppx'] = function getPathWithDppx(path, dppx) {
    utils.assertString(path, 'path');
    utils.assertPresent(dppx, 'dppx');

    // 校验 dppx 的类型
    if (typeof dppx.val !== 'number') {
        throw new Error('TypeError: expected number, but got: ' + dppx);
    }

    var originName = path.val;
    var extName = require('path').extname(originName);

    return originName.slice(0, -extName.length) + '@' + dppx.val + 'x' + extName;
};
