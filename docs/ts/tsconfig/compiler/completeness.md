---
title: 完整性
---
[[toc]]



## `skipDefaultLibCheck`

请使用下面的 [skipLibCheck](#skiplibcheck-👍) 。对默认库声明文件跳过类型检查。



## `skipLibCheck` 👍

对声明文件跳过类型检查。

以类型系统的精确性作为代价，节省编译时间😎。例如，两个库可以以不一致的方式定义同一类型的两个副本。TypeScript不会对所有的`d.ts`文件进行全面检查，而是会对你应用中使用到的类型进行类型检查。

你可能会用到 `skipLibCheck` 的一个常见场景是，在 `node_modules` 中对一个库存在2个类型副本。在这种情况下，你可能需要使用 [yarn resolutions](https://yarnpkg.com/lang/en/docs/selective-version-resolutions/) 这样的功能，确保你只依赖其中某一个副本或者通过理解依赖关系解决方案，研究如何确保只有一个副本，从而在不使用其他工具的情况下修复问题。

另一种可能是，当你在不同的TypeScript版本之间迁移时，这些更改会导致node_modules和JS标准库崩溃，而你不想在TypeScript更新期间处理这些问题。

注意，如果这些问题来自于TS标准库，你可以使用 [TypeScript4.5的lib替换技术](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html#supporting-lib-from-node_modules) 替换该库。



::: tip 💡 

🚀 推荐开启

:::





原文档：

- [Completeness](https://www.typescriptlang.org/tsconfig#Completeness_6257)

2022年08月27日22:49:30



