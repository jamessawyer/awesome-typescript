---
title: tsconfig.json
---

包含 `TSConfig` 的目录表示该目录是TS或JS项目的根目录。TSConfig文件既可以是 `tsconfig.json`，也可以是 `jsconfig.json`，它们都拥有相同的配置变量。



本文将介绍所有TSConfig文件的配置项。超过了 `100` 个配置项😅 ，可以将配置项分为5大板块：

1. 所有编译器标志的分类概述
2. [root fields](./root/index) （根字段）让TS知道哪些文件可以是可以访问到的
3. [compiler options](./compiler/index) (编译选型)字段，是整个文档的主体部分
4. [watch options](./watch-options) （监听选型）字段，用于调整监听模式
5. [type acquisition](./type-acquisition) （类型识别）字段，用于调整类型添加到JavaScript项目的方式

如果你从头开始TSConfig，你可能需要使用 `tsc --init` 初始化一个 `tsconfig.json` 配置，或者使用 [tsconfig bases](https://github.com/tsconfig/bases#centralized-recommendations-for-tsconfig-bases)









原文链接：

- [tsconfig - typescriptlang.org](https://www.typescriptlang.org/tsconfig#JavaScript_Support_6247)
