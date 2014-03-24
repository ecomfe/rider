# API

## 全局配置

`默认值` 能够适应大多数场景。如有特殊需要，可覆盖全局配置。

变量名 | 默认值 | 说明
===|===|===
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

