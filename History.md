
2.0.0 / 2015-06-17
==================

 * **Breaking Change** 改进 Function：`bg()`, `ir()` [#18](https://github.com/ecomfe/rider/issues/18)
 * **Breaking Change** 改进 Root Mixin：`font-face()` [#16](https://github.com/ecomfe/rider/issues/16) [#24](https://github.com/ecomfe/rider/issues/24)
 * **Breaking Change** 改进 Block Mixin：`+breakpoint()`，移除组合能力，迁出 retina 支持 [#19](https://github.com/ecomfe/rider/issues/19)
 * **Breaking Change** 移除：retina 支持中的浏览器兼容代码 [#17](https://github.com/ecomfe/rider/issues/17)
 * **Breaking Change** 移除 全局变量：`$-image-dppx`，retina 图片机制已更新
 * 增加 全局变量：`$-code-font-family` 作为代码段默认字体
 * 增加 全局变量：`$-image-dppx-range` 作为 retina 图片的探测范围
 * 增加 全局变量：`$-image-dppx-separator` 作为 retina 图片的分隔符
 * 增加 全局变量：`$-image-dppx-quality-first` 作为 retina 图片质量优先模式的开关
 * 增加 全局变量：`$-unit-precision` 作为单位转换的小数点精度控制
 * 增加 Function：`bg2x()`, `bg3x()`, `bg-dppx()` [#23](https://github.com/ecomfe/rider/issues/23)
 * 增加 Function：`file-exists()`, `is-url()`, `get-retina-src()` [#15](https://github.com/ecomfe/rider/issues/15)
 * 增加 Mixin：`normalize()` 作为布局初始化的补充 [#8](https://github.com/ecomfe/rider/issues/8)
 * 增加 Mixin：`circle()` 生成圆形或椭圆
 * 增加 Block Mixin：`+retina()` [#20](https://github.com/ecomfe/rider/issues/20)
 * 改进 Function：`rem()`, `em()`, `px()` 单位转换定义截取小数点位数 [#4](https://github.com/ecomfe/rider/issues/4)
 * 改进 Mixin：`animate()` 升级至 animate.css 3.2.6 版 [#5](https://github.com/ecomfe/rider/issues/5)
 * 改进：测试脚本启用 inline diff [#7](https://github.com/ecomfe/rider/issues/7)
 * 改进：简化 demo 的支持部分 [#6](https://github.com/ecomfe/rider/issues/6)
 * 改进：文档重新经过深入整理 [#21](https://github.com/ecomfe/rider/issues/21)

0.4.4 / 2014-11-06
==================

 * **修复** breakpoint 对最小值的判断
 * **更新** `stylus` 版本至 `0.49.3`（上一个版本存在较严重 bug）

0.4.3 / 2014-09-24
==================

 * 升级开发依赖并测试，将 `stylus` 升级至 `0.49.0`（性能略有提升）

0.4.2 / 2014-08-05
==================

 * **增加** `nav` 元素的 `tap-highlight` 修复
 * 升级开发依赖并测试，其中将 `stylus` 升级至 `0.47.3`

0.4.0 / 2014-06-13
==================

 * **修复** breakpoint 对切片边界值的处理
 * **移除** 对 node 0.8.x 的支持
 * 升级开发依赖并测试，其中将 `stylus` 升级至 `0.46.3`

0.3.4 / 2014-05-12
==================

 * **增加** 动画 `slideInUp`，`slideOutDown`
 * 升级开发依赖并测试，其中将 `stylus` 升级至 `0.45.0`

0.3.3 / 2014-04-28
==================

 * **修复** `animate` 内部实现中的一个逻辑错误
 * **修复** 文档链接
 * 升级开发依赖并测试，其中将 `stylus` 升级至 `0.44.0`

0.3.2 / 2014-04-18
==================

 * 升级开发依赖并测试，将 `stylus` 升级至 `0.43.1`

0.3.1 / 2014-03-25
==================

 * **修改** `initialize()`：增加了表单部分的初始化
 * **修改** `ir()`：删除了冗余的逻辑
 * 完善 `breakpoint` 的测试用例
 * 增加 API、代码风格、FAQ 文档

0.3.0 / 2014-03-17
==================

* 初始版本
