---
title: extends
---
`extends` 的值是一个字符串，包含另一个`被继承的`配置文件的路径（即基础配置文件）。路径可以使用Node.js风格方式。

该基础配置文件会先被加载，然后被继承的配置文件覆写。在配置文件中找到的所有相对路径都将相对于它们起源的配置文件进行解析。

::: warning
值得注意的是，继承的配置文件中的 [files](./files) , [include](./include) & [exclude](./exclude) 会 `改写` 基础配置文件中的这些配置项，并且配置文件之间的循环是不允许的。
:::
目前，在继承中被排除继承的最顶级属性只有 [references](./references)。

示例🌰： `configs/base.json`
```json
{
  "compilerOptions": {
    "noImplicityAny": true,
    "strictNullChecks": true
  }
}
```
`tsconfig.json`：
```json
{
  "extends": "./config/base",
  "files": ["main.ts", "supplemental.ts"]
}
```

`tsconfig.nostrictnull.json`：
```json
{
  "extends": "./tsconfig",
  "compilerOptions": {
    "strictNullChecks": false
  }
}
```
在配置文件中找到的具有相对路径的属性(不会被排除在继承之外)将相对于它们最初所在的配置文件进行解析。

默认：`false`
