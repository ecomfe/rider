图片
===

### bg: src, width, height

设置背景图片。

假如本地存在 `logo.png`, `logo@2x.png`, `logo@3x.png` 三种尺寸的图片，只需在 `src` 中填入一倍尺寸的图片路径即可，二倍、三倍尺寸的图片会自动设置妥当。

**注意**：只支持使用 **本地** 图片路径，**远程** 路径请直接写 CSS。

 * `src` - 一倍尺寸的图片路径
 * `width` _(可选)_ - 图片宽度。不填或值为 `null` 时，会自动获取一倍尺寸图片的宽度
 * `height` _(可选)_ - 图片高度。不填或值为 `null` 时，会自动获取一倍尺寸图片的高度

相关的[全局配置](./setting.md)：

 * `$-image-dppx-range`
 * `$-image-dppx-separator`
 * `$-image-dppx-quality-first`

```stylus
// 测试环境
// 存在 "../img/logo.png" 与 "../img/logo@2x.png" 文件
// 图片 "../img/logo.png" 的宽度为 120px，高度为 80px
.logo
    bg: '../img/logo.png'
```

生成的 CSS：

```css
.logo {
    background-image: url("../img/logo.png");
    background-size: 120px 80px;
    background-repeat: no-repeat;
}
@media (min-resolution: 2dppx), (min-resolution: 192dpi) {
    .logo {
        background-image: url("../img/logo@2x.png");
    }
}
```

同样是上面的例子，开启了 **质量优先模式** (`$-image-dppx-quality-first`) 后，生成的 CSS：

```css
.logo {
    background-image: url("../img/logo.png");
    background-size: 120px 80px;
    background-repeat: no-repeat;
}
@media (min-resolution: 1.5dppx), (min-resolution: 144dpi) {
    .logo {
        background-image: url("../img/logo@2x.png");
    }
}
```

可以看到，在 `dppx` 大于等于 `1.5` 时，就使用了 `@2x` 质量的图片。

### ir: src, x, y, width, height

图片替换。隐藏文字并设置背景图片，可指定背景图片坐标。

与 `bg()` 类似，具备 Retina 图片的探测与背景图片的设置能力。  
增加了容器内文字隐藏与 `background-position` 坐标设置的功能。

**注意**：只支持使用 **本地** 图片路径，**远程** 路径请直接写 CSS。

 * `src` - 一倍尺寸的图片路径
 * `x` _(可选)_ -
 * `y` _(可选)_ -
 * `width` _(可选)_ - 图片宽度。不填或值为 `null` 时，会自动获取一倍尺寸图片的宽度
 * `height` _(可选)_ - 图片高度。不填或值为 `null` 时，会自动获取一倍尺寸图片的高度

相关的[全局配置](./setting.md)：

 * `$-image-dppx-range`
 * `$-image-dppx-separator`
 * `$-image-dppx-quality-first`

相关：[排版](./typography.md)

```stylus
// 测试环境
// 存在 "../img/logo.png" 与 "../img/logo@2x.png" 文件
// 图片 "../img/logo.png" 的宽度为 120px，高度为 80px
.logo
    ir: '../img/logo.png'
```

生成的 CSS：

```css
.logo {
    color: transparent;
    font: 0/0 a;
    text-shadow: none;
    background-image: url("../img/logo.png");
    background-size: 120px 80px;
    background-repeat: no-repeat;
}
@media (min-resolution: 2dppx), (min-resolution: 192dpi) {
    .logo {
        background-image: url("../img/logo@2x.png");
    }
}
```
