---
title: 类型识别
---
[[toc]]



类型识别只对JS项目才重要😁。在TS项目中，你需要在项目中显式的的包含类型。但是，对于JS项目，TS工具会在后台下载你的模块类型，下载到你的node_modules文件夹之外。



## `enable`

给JS项目提供一个配置，用于禁用类型识别。



```json {3}
{
  "typeAcquisition": {
    "enable": false
  }
}
```

这可能会移除编辑器对项目的自动完成功能，如果想再获得编辑器提示，可以使用 [type search](https://www.typescriptlang.org/dt/search) 找到 `@types` 包或包含types的包。



## `include`

如果你有一个JavaScript项目，TypeScript需要额外的指导来理解全局依赖，或通过 [disableFilenameBasedTypeAcquisition](#disablefilenamebasedtypeacquisition) 禁用内置推断。

你可以使用 `include` 指定应该从`DefinitelyTyped`中使用哪些类型:

```json {3}
{
  "typeAcquisition": {
    "include": ["jquery"]
  }
}
```



## `exclude`

提供配置禁用JS项目中的特定模块的类型识别。比如在主应用中不需要包含测试的一些库类型。

```json {3}
{
  "typeAcquisition": {
    "exclude": ["jest", "mocha"]
  }
}
```





## `disableFilenameBasedTypeAcquisition`

TS类型识别能基于文件名推断哪些类型应该被添加。这意味着如果项目中有一个 `jquery.js` 文件，会自动从 `DefinitelyTyped` 下载 `JQuery` 的类型。

你可以通过这个配置禁用这个功能：

```json
{
  "typeAcquisition": {
    "disableFilenameBasedTypeAcquisition": true
  }
}
```

原文档：

- [Type Acquisition](https://www.typescriptlang.org/tsconfig#type-acquisition)



2022年08月23日00:04:53
