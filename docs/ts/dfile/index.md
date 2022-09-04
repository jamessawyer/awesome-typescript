---
title: 声明文件简介
---

[[toc]]



声明文件章节用于帮助你写出高质量的TS声明文件（`Declaration File`）。需要对基础的类型，模块有基本的了解。

学习 `.d.ts` 如何工作的最常见办法就是对没有类型的npm包输入类型。这种情况，你可以直接学习 [Modules .d.ts](./templates/modules-d-ts) 章节。

声明文件章节可以划分为以下几个部分。



## 声明参考手册（Declaration Reference）

当我们只有底层库的例子来指导我们时，我们经常会遇到编写声明文件的问题。[声明参考手册](./declaration-reference) 小结展示很多通用API模式，以及每种模式该如何写声明。该指南针对还不熟悉TypeScript语言的新手。



## 库结构（Library Structure）

[库结构](./library-structure) 小节帮助我们理解常见库格式，以及对每种格式该如何书写合适的声明文件。如果你正编辑已有的文件，你可能不需要阅读本小结。强烈建议新声明文件的作者阅读本节，以正确理解库的格式如何影响声明文件的编写。😎

在模板小结，你可以找到一些声明文件，并用它们当做是写新的声明文件的起点。如果你已经知道你的结构是什么了，可以在侧边栏查看 d.ts 模板小节。



## 可为与不可为（Do's and Don'ts）

声明文件中很多常见错误可以轻松避免。 [Do's and Don'ts](./do-and-not-do) 小节帮助你识别常见错误，描述如何检测它们，以及如何修复它们。

每个人都应该阅读本小节，以避免常见错误🚀。



## 深入（Deep Dive）

对声明文件底层运作机制感兴趣的老手，[Deep Dive](./deep-dive) 小节介绍了很多书写声明文件的高级概念，以及如何利用这些高级概念创建更干净直观的声明文件。



## 发布到npm（Publish to npm）

[Publishing](./publishing) 小节解释如何发布自己的声明文件到npm package，以及如何管理依赖包。



## 找到和安装声明文件（Find & Install Declaration Files）

对JS库用户，[Consumption](./consumption) 小节提供了一些用于定位和安装相应声明文件的简单步骤。



2022年08月27日23:17:46

