[![Stories in Ready](https://badge.waffle.io/ecomfe/rider.png?label=ready&title=Ready)](https://waffle.io/ecomfe/rider)
rider [![NPM version](https://badge.fury.io/js/rider.png)](https://npmjs.org/package/rider) [![Build Status](https://travis-ci.org/ecomfe/rider.png)](https://travis-ci.org/ecomfe/rider) [![DevDependencies Status](https://david-dm.org/ecomfe/rider/dev-status.png)](https://david-dm.org/ecomfe/rider#info=devDependencies)
===

`rider` 是一个基于 [`stylus`](https://github.com/LearnBoost/stylus)、专注于 **移动 Web** 的 CSS 样式库。

安装
---

`rider` 是一个 `npm` 包，可以在项目中直接安装：

    npm install rider --save

依赖信息会自动保存在项目的 `package.json` 中。

**注：** `edp` 的用户请参考 [`edp-provider-rider`](https://github.com/ecomfe/edp-provider-rider)。

配置
---

`rider` 是一个标准的 `stylus` 插件，可以方便的与 `connect`/`express` 等框架结合：

```js
var connect = require('connect');
var stylus = require('stylus');
var rider = require('rider');

var server = connect();

function compile(str, path) {
    return stylus(str)
        .set('filename', path)
        .use(rider());
}

server.use(stylus.middleware({
    src: __dirname,
    compile: compile
}));
```

`rider` 是 **无侵入** 风格的 CSS 库，加载后如不调用相关功能，不会生成任何 CSS 代码。
默认情况下，它会 **隐式加载** 整个 CSS 库，但我们也提供了配置项关掉这个功能：

```js
function compile(str, path) {
    return stylus(str)
        .set('filename', path)
        .use(rider({
            implicit: false
        }));
}
```

如果你这么做了，那就需要在使用时手动加载 `rider`：

```stylus
@require 'rider'

normalize()

// etc...
```
