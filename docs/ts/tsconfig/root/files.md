---
title: files选型
---
指定程序中包含的文件允许列表。如果找不到任何文件，就会出现错误。

::: tip
当你只有少量文件时很有用，不需要使用glob去引用很多文件。如果你想引用大量文件，则使用 [include](./include)
:::

比如🌰：
```json
{
  "compilerOptions": {},
  "files": [
    "core.ts",
    "sys.ts",
    "types.ts",
    "scanner.ts",
    "parser.ts",
    "utilities.ts",
    "binder.ts",
    "checker.ts",
    "tsc.ts"
  ]
}
```
默认：`false`
相关配置：
 - [include](./include)
 - [exclude](./exclude)

