---
title: Editor Support
---

[[toc]]


## `disableSizeLimit`

为了避免在处理非常大的JS项目时可能出现的内存膨胀问题，TS分配的内存有一个上限。开启这个配置，会移除这个限制😎。



## `plugins` 👍

运行在编辑器内的语言服务插件列表。



语言服务插件是基于现有TS文件，给用户提供额外信息的一种方式。它们能增强TS和编辑器之间的现有信息，或者提供它们自己的错误信息。



比如：

- [ts-sql-plugin](https://github.com/xialvjun/ts-sql-plugin#readme) - 使用模板字符串SQL构建器增加SQL lint
- [typescript-styled-plugin](https://github.com/Microsoft/typescript-styled-plugin) - 在模板字符串内提供CSS校验
- [typescript-eslint-language-service](https://github.com/Quramy/typescript-eslint-language-service) - 在编译器的输出中提供eslint错误消息和修复
- [ts-graphql-plugin](https://github.com/Quramy/ts-graphql-plugin) - 在GraphQL查询模板字符串中提供验证和自动完成功能



VS Code有能力让扩展[自动包含语言服务插件](https://code.visualstudio.com/api/references/contribution-points#contributes.typescriptServerPlugins)，所以你可以在你的编辑器中运行一些插件，而不需要在`tsconfig.json`中定义它们。



原文档：

- [Editor Support](https://www.typescriptlang.org/tsconfig#Editor_Support_6249)

2022年08月19日21:50:16

