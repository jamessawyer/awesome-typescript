---
title: Publishing
---
[[toc]]



假设你按照指南已经写了一个声明文件，现在该将它发布到npm上了。主要有2种将声明文件发布到npm的方式：

1. 打包你的npm包
2. 发布到npm上的 [@types 组织](https://www.npmjs.com/~types)

如果你的类型是通过你的源代码生成的，发布源代码+类型。TypeScript和JavaScript项目都能通过 [declaration](../tsconfig/compiler/emit.html#declaration-👍) 编译选项生成类型😎。

否则，我们推荐将类型提交到 `DefinitelyTyped`，它会将类型发布到npm上的 `@types` 组织。



## 1️⃣ 在你的npm包中包含声明

如果你的包邮一个主入口 `.js` 文件，则你需要再 `package.json` 中也知名主要的声明文件。📚 设置 `types` 属性指向打包好的声明文件。比如：

```json {5-6}
{
  "name": "awesome",
  "author": "Vandelay Industries",
  "version": "1.0.0",
  "main": "./lib/main.js", // 包的主入口文件
  "types": "./lib/main.d.ts" // 声明文件位置
}
```

::: tip

注意 `typings` 字段和 `types` 同义，因此也可以使用 `typings`。



另外，如果你的主要声明文件叫 `index.d.ts`，并存放在包的根目录（紧靠着 `index.js`）则你不需要标记 `types` 属性，但还是建议显式的标出声明文件路径。

:::



## 2️⃣ 依赖

📚所有的依赖都通过npm管理。确保你所依赖的所有 `声明包` 都在 `package.json` 的 `dependencies` 中合适的标记出来。

🌰，假设你写了一个包，依赖`Browserify` 和 `TypeScript`:

```json {7-11}
{
  "name": "browserify-typescript-extension",
  "author": "Vandelay Industries",
  "version": "1.0.0",
  "main": "./lib/main.js",
  "types": "./lib/main.d.ts",
  "dependencies": {
    "browserify": "latest",
    "@types/browserify": "latest",
    "typescript": "next"
  }
}
```

🤩 这里我们的包依赖 `browserify` & `typescript`包。`browserify` 本身没有将它的声明文件和包打包在一起，因此我们需要依赖 `@types/browserify` 作为它的声明。`typescript` 包则本身就包含了声明文件，因此不需要额外的依赖了。



我们的包公开了其中每一个的声明，因此任何使用`browserify-typescript-extension`包的用户也需要有这些依赖项😅。基于这个原因，我们使用 `"dependencies"` 而不是 `"devDependencies"`， 否则我们的用户需要手动的下载安装这些包。如果我们仅仅是写一个CLI应用，而不期望我们的包用作为一个库，我们可能使用 `devDependencies`。





## 3️⃣ Red flags

❌ `不要` 在你的声明文件中使用 `/// <reference path="..." />`

```typescript {1}
/// <reference path="../typescript/lib/typescriptServices.d.ts" />
....
```

✅ `要` 使用 `/// <reference types="..." />`:

```typescript {1}
/// <reference types="typescript" />
....
```

确保在回顾一下 [Cousuming dependencies](library-structure#_6%EF%B8%8F⃣-消费依赖) 了解更多。



### 包依赖声明

如果你的类型定义依赖另一个包：

- ❌ `不要` 将它和你的类型定义合并，保持它们在各自文件中
- ❌ `不要` 将声明拷贝到你的的包中
- ✅ 如果npm类型声明包没有打包它的声明文件，则必须依赖npm类型声明包



## 4️⃣ 使用 `typesVersion` 进行版本选择

当TypeScript打开 `package.json` 文件理清它需要读取那个文件时，它首先查看 `typesVersions` 字段。



### 4.1 文件件重定向（使用 `*`）

包含 `typesVersions` 的 `package.json` 文件可能看起来如下：

```json {5-7}
{
  "name": "package-name",
  "version": "1.0.0",
  "types": "./index.d.ts",
  "typesVersions": {
    ">=3.1": { "*": ["ts3.1/*"] }
  }
}
```

📚这个 `package.json` 告诉TypeScript首先检测当前TypeScript版本。如果它是 `3.1+`，TypeScript会找出相对你包的导入路径，然后从包的 `ts3.1` 文件夹中读取。

这正是 `{"*": ["ts3.1/*"]}` 的含义 - 如果你熟悉 [path映射](../tsconfig/compiler/modules.html#paths-👍)，它工作原理类似。

上面例子，如果你从 `"package-name"` 导入，当运行TS3.1时，TypeScript将从 `[...]/node_modules/package-name/ts3.1/index.d.ts` （和其它相对路径）解析。如果从 `package-name/foo` 导入，我们将查找 `[...]/node_modules/package-name/ts3.1/foo.d.ts` 和 `[...]/node_modules/package-name/ts3.1/foo/index.d.ts` 文件。

加入你没有运行TS3.1呢？如果没有匹配上 `typesVersions`，TypeScript将再回退到 `types` 字段，因此`TS3.0`及以下版本将重定向到 `[...]/node_modules/package-name/index.d.ts` 文件。



### 4.2 文件重定向

当你只想对改变某个文件时，你可以告诉TypeScript要解析的文件不同于传入的确切文件名：

```typescript {6}
{
  "name": "package-name",
  "version": "1.0.0",
  "types": "./index.d.ts",
  "typesVersions": {
    "<4.0": { "index.d.ts": ["index.v3.d.ts"] }
  }
}
```

对`TS4.0+`，导入 `"package-name"` 将解析为 `./index.d.ts`，对 `TS3.9-` 将解析为 `"./index.v3.d.ts"`。



## 5️⃣ 匹配行为



TypeScript决定编译器和语言版本是否匹配的方法是使用Node的[semver ranges](https://github.com/npm/node-semver#ranges)。





## 6️⃣ 多个字段

📚 `typesVersions` 支持多个字段，每个字段名指定一个匹配区间：

```typescript {5-8}
{
  "name": "package-name",
  "version": "1.0.0",
  "types": "./index.d.ts",
  "typesVersion": {
    ">=3.2": {"*": ["ts3.2/*"]},
    ">=3.1": {"*": ["ts3.1/*"]}
  }
}
```

因为范围可能重叠，决定导入那个文件`和指定的顺序有关`。这意味着，上面的例子，即使 `>=3.2` 和 `>=3.1` 同时匹配支持TS3.2和以上，`反转顺序会导致不同的行为`😅。因此上面的例子不等价于：

```json {5-9}
{
  "name": "package-name",
  "version": "1.0.0",
  "types": "./index.d.ts",
  "typesVersion": {
    // 🚨 这不能正常工作！顺序很重要！！！
    ">=3.1": {"*": ["ts3.1/*"]},
    ">=3.2": {"*": ["ts3.2/*"]}
  }
}
```



## 7️⃣ 发布到 @types

在 [@types](https://www.npmjs.com/~types)组织下的包会通过 [types-publisher工具](https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/publisher) 自动从 [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) 发布。为了让你的声明作为 @types包被发布，请向  [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) 提供一个PR.



原文档：

- [Publishing](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html)



2022年09月04日17:35:57

