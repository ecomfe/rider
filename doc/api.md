# API

## 全局配置

`默认值` 能够适应大多数场景。如有特殊需要，可覆盖全局配置。

变量名 | 默认值 | 说明
---|---|---
`$-base-font-size` | `16px` | 用于设置默认文字大小、常用单位的转换
`$-base-font-family` | `'Helvetica Neue', sans-serif` | 默认字体
`$-prevent-user-select` | `false` | 屏蔽用户选择文本的能力，通常只在 Hybrid App 场景启用
`$-prevent-text-size-adjust` | `true` | 屏蔽屏幕翻转时，浏览器缩放字体的行为
`$-prevent-tap-highlight` | `true` | 屏蔽 `a` 标签的点击高亮效果
`$-image-dppx` | `2` | 图片每像素的点数，用于支持 retina 设备
`$-breakpoint-slice` | `0 400px 600px 800px 1050px` | 响应式Web设计屏幕尺寸的划分


## 样式初始化

由于 `Webkit` 内核浏览器整体差异较小，可根据情况决定 **样式初始化** 的方式。

对于规模较大、样式定制化程度较高的移动端项目，可以采用 `initialize()` 进行整体样式初始化，这样会比较彻底。

对于需求较简单、样式定制化程度底的项目，也可采用 `normalize-form()` 初始化表单，采用 `reset-box-model()`、`reset-font()` 等方法初始化特定部分。

### initialize()

网站样式自动初始化。

考虑到移动端屏幕受限，除正文区域外自定义的性质较强，采用 `reset` 为主 `normalize` 为辅的方式处理。

使用 `initialize()` 之后，下面的样式初始化方式通常就不会用到了。

**使用方法**

    initialize()

### reset-font()

重置文字字体、尺寸、样式、垂直对齐方式。

**使用方法**

    .box
        reset-font()

### reset-box-model()

重置盒模型。处于可访问性考虑，不会重置 `outline`。

**使用方法**

    body
        reset-box-model()

### reset-list()

重置列表样式。应用于 `ul`、`ol` 类型元素。

**使用方法**

    .menu-list
        reset-list()

### reset-table()

重置表格样式。应用于 `table` 类型元素。

**使用方法**

    .data-table
        reset-table()

### reset-table-cell()

初始化单元格样式。应用于 `td`、`th` 类型元素。

**使用方法**

    .data-table td
        reset-table-cell()

### normalize-form()

初始化表单样式。

**使用方法**

    normalize-form()


## 顺时针简写

在 `CSS` 语法中，可以通过 `顺时针` 的方式简写属性的值，比如 `padding`、`margin` 等。其规则如下：

    上 右 下 左 => 1 2 3 4
    上 右 下 => 1 2 3 2
    上 右 => 1 2 1 2
    上 => 1 1 1 1

**顺时针简写** 增加了 `_` 占位符来表示 **不定义** 的状态，下面的文档中会有示例。

### absolute: top right bottom left

将当前容器设为 `absolute`，并设置定位的值。

**使用方法**

    .box
        absolute: 0
        // => position: absolute; top: 0; right: 0; bottom: 0; left: 0;

        absolute: _ 10px 20px
        // => position: absolute; right: 10px; bottom: 20px; left: 10px;

### fixed: top right bottom left

将当前容器设为 `fixed`，并设置定位的值。

**使用方法**

    .box
        fixed: _ 20px 0 _
        // => position: fixed; right: 20px; bottom: 0;

### relative: top right bottom left

将当前容器设为 `relative`，并设置定位的值。

**使用方法**

    .box
        relative: 10px _ _ _
        // => position: relative; top: 10px;

### padding: padding-top padding-right padding-bottom padding-left

替换了CSS的 `padding`，处理使用了 `_` 占位符的情况。

**使用方法**

    .box
        padding: 20px
        // => padding: 20px;

        padding: 5px _
        // => padding-top: 5px; padding-bottom: 5px;

### margin: margin-top margin-right margin-bottom margin-left

替换了CSS的 `margin`，处理使用了 `_` 占位符的情况。

**使用方法**

    .box
        margin: _ 5px
        // => margin-right: 5px; padding-left: 5px;

### border-color: border-top-color border-right-color border-bottom-color border-left-color

替换了CSS的 `border-color`，处理使用了 `_` 占位符的情况。

**使用方法**

    .box
        border-color: _ red
        // => border-right-color: red; border-left-color: red;

### border-style: border-top-style border-right-style border-bottom-style border-left-style

替换了CSS的 `border-style`，处理使用了 `_` 占位符的情况。

### border-width: border-top-width border-right-width border-bottom-width border-left-width

替换了CSS的 `border-width`，处理使用了 `_` 占位符的情况。

### clockhand($values, $property-prefix, $property-suffix, $sides)

生成符合 **顺时针简写** 规则的属性，很少会直接用到。

**使用方法**

    .test
        clockhand(1 2 3 4, 'foo', 'bar', (a b c d))
        // => foo-a-bar: 1; foo-b-bar: 2; foo-c-bar: 3; foo-d-bar: 4;


## 缓动函数

### easing(type)

CSS默认提供的缓动函数有限，我们通过贝塞尔曲线对缓动函数进行了扩充。
各缓动函数的效果可以参考 [easings.net](http://easings.net/zh-cn)。

支持的缓动函数类型有：

    'in-sine' 'out-sine' 'in-out-sine'
    'in-quad' 'out-quad' 'in-out-quad'
    'in-cubic' 'out-cubic' 'in-out-cubic'
    'in-quart' 'out-quart' 'in-out-quart'
    'in-quint' 'out-quint' 'in-out-quint'
    'in-expo' 'out-expo' 'in-out-expo'
    'in-circ' 'out-circ' 'in-out-circ'
    'in-back' 'out-back' 'in-out-back'

**使用方法**

    .box
        transition: all 1s easing('in-sine')
        // => transition: all 1s cubic-bezier(0.47, 0, 0.745, 0.715);


## 图片

### bg: path, width, height, dppx

设置背景图片。宽与高默认会读取本地文件自动获取，请注意 `build/webserver` 的 log，若获取失败需手动填写。

**参数说明**

+ `path` 图片路径
+ `width` `(选填)` 图片宽度，默认会尝试读取本地文件宽度，取不到设为 `auto`
+ `height` `(选填)` 图片高度，默认会尝试读取本地文件高度，取不到设为 `auto`
+ `dppx` `(选填)` 图片真实尺寸的倍数，默认值为全局配置 `$-image-dppx = 2`

注：当 `width` 为 `cover` 或 `contain` 时，`height` 将始终为空。

**使用方法**

stylus:

```stylus
// 图片实际大小为 150px * 88px，自动获取时根据 dppx 进行缩放
.test-1
    bg: 'img/logo.png'
// 手工指定尺寸
.test-2
    bg: 'img/banner.png' 100px 50px
```

css:

```css
.test-1 {
    background: url("img/logo.png") no-repeat;
    background-size: 75px 44px;
}
.test-2 {
    background: url("img/banner.png") no-repeat;
    background-size: 100px 50px;

}
```

### ir: path, x, y, width, height, dppx

替换图片。设置背景图片与坐标，并隐藏容器中的文字。宽高会尝试自动获取。

**参数说明**

+ `path` 图片路径
+ `x` x轴位置
+ `y` `(选填)` y轴位置
+ `width` `(选填)` 图片宽度，同 `bg()`
+ `height` `(选填)` 图片高度，同 `bg()`
+ `dppx` `(选填)` 图片真实尺寸的倍数，同 `bg()`

**使用方法**

stylus:

```stylus
.test
    ir: 'img/logo.png' -10px -20px 100px
```

css:

```css
.test {
    background: url("img/logo.png") no-repeat;
    background-size: 100px auto;
    background-position: -10px -20px;
    color: transparent;
    font: 0/0 a;
    text-shadow: none;
}
```

