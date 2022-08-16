---
title: exclude
---

只针对解析的 [include](./include) 文件； 使用这个配置项，它指定一个数组，包含文件名或者模式，表示要跳过（排除）的文件。

::: warning
🚨：`exclude` 只会改变 [include](./include) 配置中包含的文件。被 `exclude` 指定排除的文件仍可成为你代码的一部分，因为代码中 `import` 语句的存在，或 `types` 包含或者 `/// <reference` 指令，又或者在 [files](./files)中包含了该文件。
:::

默认值：`['node_modules', 'bower_components']`
相关：
- [include](./include)
- [files](./files)
