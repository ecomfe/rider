/**
 * @file 帮助函数
 * @author firede(firede@firede.us)
 */

var path = require('path');
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
 * @param {Object} url Url路径对象
 * @return {boolean}
 */
exports['is-url'] = function isUrl(url) {
    utils.assertString(url, 'url');

    var obj = url.val.match(/^(https?:)?\/\//i);

    return !!obj;
};

/**
 * 获取添加dppx后缀的图片地址
 *
 * @param {Object} src 图片路径对象
 * @param {Object} dppx dppx对象
 * @return {string}
 */
exports['get-retina-src'] = function getRetinaSrc(src, dppx) {
    utils.assertString(src, 'src');
    utils.assertPresent(dppx, 'dppx');

    // 校验 dppx 的类型
    if (typeof dppx.val !== 'number') {
        throw new Error('TypeError: expected number, but got: ' + dppx);
    }

    var originName = src.val;
    var extName = path.extname(originName);

    return originName.slice(0, -extName.length) + '@' + dppx.val + 'x' + extName;
};
