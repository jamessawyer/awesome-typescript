---
title: modules
---

[[toc]]



## `allowUmdGlobalAccess` 允许Umd全局访问

当设置为 `true`，`allowUmdGlobalAccess` 允许你从模块文件内部访问作为全局变量的UMD导出。`一个模块文件是用于imports &| exports 的文件`。如果不使用这个选项，使用UMD模块的导出，需要一个import声明。

使用这个配置的一个例子是在web项目中，你知道特定的库（比如 `jQuery` | `Lodash`） 将总是在运行时可访问到，但你不同通过import方式访问。



## `baseUrl` 👍

`允许你设置基础目录来解析非绝对模块名。`

你可以定义一个用于做绝对文件解析的根文件夹。

🌰：

```bash
baseUrl
├── ex.ts
├── hello
│   └── world.ts
└── tsconfig.json
```

在此项目中使用 `"baseUrl": "./"`，TS将从与 `tsconfig.json` 相同的文件夹开始的文件进行查找。

```typescript
import { helloWorld } from 'hello/world'
console.log(helloWorld)
```

如果你厌倦了类似 `'../'` 或 `./` 这种导入方式，或需要当你移动文件时需要改变它们，这是一个好的方式来修复这些问题。





## `module ` 👍

设置程序的模块系统。可查看 [Modules](https://www.typescriptlang.org/docs/handbook/modules.html) 页面指南获取更多信息。对于Node项目，你很有可能将其设置为 `"CommonJS"`。



改变 `module` 会影响到 [moduleResolution](https://www.typescriptlang.org/tsconfig#moduleResolution)，可查看 [moduleResolution](https://www.typescriptlang.org/docs/handbook/module-resolution.html) 手册。

下面示例是这个文件的输出：

```typescript
// @filename: index.ts
import { valueOfPi } from "./constants";
 
export const twoPi = valueOfPi * 2;
```

1️⃣ `CommonJS`

```js
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoPi = void 0;
const constants_1 = require("./constants");
exports.twoPi = constants_1.valueOfPi * 2;
```

2️⃣ `UMD`

```js
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./constants"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.twoPi = void 0;
    const constants_1 = require("./constants");
    exports.twoPi = constants_1.valueOfPi * 2;
});
```

3️⃣ `AMD`

```js
define(["require", "exports", "./constants"], function (require, exports, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.twoPi = void 0;
    exports.twoPi = constants_1.valueOfPi * 2;
});
```

4️⃣ `System`

```js
System.register(["./constants"], function (exports_1, context_1) {
    "use strict";
    var constants_1, twoPi;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (constants_1_1) {
                constants_1 = constants_1_1;
            }
        ],
        execute: function () {
            exports_1("twoPi", twoPi = constants_1.valueOfPi * 2);
        }
    };
});
```

5️⃣ `ESNext`

```js
import { valueOfPi } from "./constants";
export const twoPi = valueOfPi * 2;
```

6️⃣ `ES2020`

```js
import { valueOfPi } from "./constants";
export const twoPi = valueOfPi * 2;
```

7️⃣ `ES2015/ES6`

```js
import { valueOfPi } from "./constants";
export const twoPi = valueOfPi * 2;
```

::: tip

如果你疑惑 `ES2015`(即 `ES6`) 和 `ES2020`的区别是什么?

- `ES2020` 支持动态 `import`，以及 `import.meta`

:::



8️⃣ `node16/nodenext`(nightly builds)

从 `TS4.7+`开始，`node16` 和 `nodenext` 模式集成到Node的 [原生ESM支持](https://nodejs.org/api/esm.html)。生成的JS文件是 `CommonJS` 还是 `ES2020` 取决于文件扩展名以及其最近的 `package.json` 中设置的 `type` 值相关。模块解析作用也不同。可以通过 [esm-node handbook](https://www.typescriptlang.org/docs/handbook/esm-node.html) 了解更多。



9️⃣ `None`

```js
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoPi = void 0;
const constants_1 = require("./constants");
exports.twoPi = constants_1.valueOfPi * 2;
```

::: tip

默认：如果 [target](https://www.typescriptlang.org/tsconfig#target) 是 `ES3` | `ES5` 则默认是 `CommonJS`；否则则是 `ES2015`。

允许值：

- none
- commonjs
- amd
- umd
- systm
- es6/es2015
- es2020
- es2022
- esnext
- node16
- nodenext

相关联配置：

- [moduleResolution](https://www.typescriptlang.org/tsconfig#moduleResolution)

:::



## `moduleResolution` 模块解析

指定模块解析策略：

- `node` 针对Node.js的 `CommonJS` 实现
- `node12` | `nodenext` 针对 Node.js的ESM支持，🚨 需 `TS4.5+`
- `classic` 用于TS1.6之前。可能不需要在现代代码中使用classic

可查看 [moduleResolution](https://www.typescriptlang.org/docs/handbook/module-resolution.html) 手册。



::: tip

默认：如果 `module` 是 `AMD | UMD | System | ES6 | esnext`，则使用 `classic`；如果`module`是 `node12` | `nodenext`，则默认是 `node`

允许值：

- `classic`
- `node`
- `node16`
- `nodenext`

相关联配置：

- [module](https://www.typescriptlang.org/tsconfig#module)

:::

可以看出其实只有2种解析方案 `classic` | `node` 相关的



## `moduleSuffixes` - 模块后缀



提供一种方法，以覆盖解析模块时要搜索的文件名后缀的默认列表。

```json
{
  "compilerOptions": {
    "moduleSuffixes": [".ios", ".native", ""]
  }
}
```

基于上面配置，如下导入：

```typescript
import * as foo from './foo'
```

TS会查找相对文件 `./foo.ios.ts` ， `./foo.native.ts`，和最后的 `./foo.ts`。

::: warning

🚨 `moduleSuffixes` 中最后的空字符 `''` 对TS用来查找 `./foo.ts` 是必须的。

:::

这个功能对于React Native项目，每个目标平台使用包含不同 `moduleSuffixes`的不同的tsconfig.json文件有用。





## `noResolve` - 不解析

默认情况下，TS会检查`import`和`<reference`指令的初始文件集，把将这些解析的文件添加到你的程序中。

如果设置了 `noResolve`，上面过程不会发生。但是，`import` 语句仍会被检测是否解析到了一个有效的模块，所以你需要用其他方法来满足这个要求😅。



## `paths` 👍

一系列条目，它们将导入重新映射到相对于 `baseUrl` 的查找位置。（译者注：多用于设置import别名）。[path-mapping - handbook](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping) 有很大一块讲解 `paths` 的用法。

`paths` 让你声明TS该如何解析 `require|imports` 的导入。

🌰:

```json {3,5}
{
  "compilerOptions": {
    "baseUrl": ".", // 🚨如果使用 `paths`,则必须声明baseUrl选项
    "path": {
      // 这个映射是相对于 `baseUrl` 的
      "jquery": ["node_modules/jquery/dist/jquery"]
    }
  }
}
```

你可以直接使用 `import jquery`，并且本地获得所有正确的类型😎。

🌰:

```json {3}
{
  "compilerOptions": {
    "baseUrl": "src", // 注意这里的baseUrl设置未了 `src`
    "path": {
      "app/*": ["app/*"],
      "config/*": ["app/_config/*"],
      "environment/*": ["environments/*"],
      "shared/*": ["app/_shared/*"],
      "helpers/*": ["helpers/*"],
      "tests/*": ["tests/*"]
    }
  }
}
```

这种情况，你告诉TS文件解析器支持一些自定义前缀来查找代码。这个模式用于避免项目中过长的相对路径🤩。



## `resolveJsonModule` - 解析JSON模块

允许引入 `.json` 扩展的模块，这在Node项目中很常见。这包括根据静态 JSON 形状为导入生成类型。

🚨 TS默认是不支持解析JSON文件的：

```typescript {2-3}
// @filename: settings.json
🚫Cannot find module './settings/json'. Consider using '--resolveJsonModule'
to import module with '.json' extension.
{
    "repo": "TypeScript",
    "dry": false,
    "debug": false
}

// @filename: index.ts
import settings from "./settings.json";
 
settings.debug === true;
settings.dry === 2;
```

开启这个选项后，允许导入JSON，并验证JSON文件类型：

```typescript {5-6}
// @filename: settings.json
{
  "repo": "TypeScript",
  "dry": false,
  🚫This condition will always return 'false' since the types 
  'boolean' and 'number' have no overlap.
  
  "debug": false
}

// @filename: index.ts
import settings from "./settings.json";
 
settings.debug === true;
settings.dry === 2;
```



## `rootDir` 👍

默认：所有非声明输入文件的最长公共路径。如果设置了 [composite](https://www.typescriptlang.org/tsconfig#composite)，默认是包含 `tsconfig.json` 文件的目录。

当TS编译文件时，它会在输出目录中保留与输入目录中相同的目录结构。

比如，假设下面输入文件：

```bash
MyProj
├── tsconfig.json
├── core
│   ├── a.ts
│   ├── b.ts
│   ├── sub
│   │   ├── c.ts
├── types.d.ts
```

`rootDir` 的推断之是所有非声明输入文件的最长公共路径，这个例子的最长公共路径是 `core/`。

如果你的 [outDir](https://www.typescriptlang.org/tsconfig#outDir) （输出目录）是 `dist`，TS输出结果为：

```bash
MyProj
├── dist
│   ├── a.js
│   ├── b.js
│   ├── sub
│   │   ├── c.js
```

但是，你可能有意将 `core` 作为输出目录结构的一部分。通过在tsconfig.json中设置 `rootDir: "."`，TS会返回如下输出目录结构：

```bash
MyProj
├── dist
│   ├── core # core 得以保留
│   │   ├── a.js
│   │   ├── b.js
│   │   ├── sub
│   │   │   ├── c.js
```

::: warning 🚨

请注意，TS永远不会将输出文件写入 `outDir` 之外的目录，并且永远不会跳过生成文件。正因如此，`rootDir` 也强制所有需要被生成的文件都要在 `rootDir` 路径之下。

:::

比如，假设你有如下结构：

```bash
MyProj
├── tsconfig.json
├── core
│   ├── a.ts
│   ├── b.ts
├── helpers.ts
```

如果`tsconfig.json`配置如下，就会报错:

```json
{
  "compilerOptions": {
    "rootDir": "core"
  },
  "include": ["*"]
}
```

因为它导致文件（`helper.ts`） 被生成在 `outDir` 外（比如：`../helper.js`）😅。



::: tip

默认：从输入文件列表中计算

:::



## `rootDirs` 🤔

所有 `rootDirs`，你可以通知编译器，有很多 `虚拟的` 目录充当单个根（`root`）。这允许编译器解析这些“虚拟”目录中的相对模块导入，就好像它们被合并到一个目录中一样🤔。

比如：

```bash
 src
 └── views
     └── view1.ts (can import "./template1", "./view2`)
     └── view2.ts (can import "./template1", "./view1`)

 generated
 └── templates
         └── views
             └── template1.ts (can import "./view1", "./view2")
```

`tsconfig.json`:

```json
{
  "compilerOptions": {
    "rootDirs": ["src/views", "generated/templates/views"]
  }
}
```

这不会影响TS生成JS，它只是模拟了这样一个假设，即它们将能够在运行时通过这些相对路径工作。

`rootDirs` 可用于为非 TS 或 JS 的文件提供单独的“类型层(`type layer`)”，方法是在另一个文件夹中为生成的 `.d.ts` 文件提供主目录。

这个技术对于打包的应用包含非必需代码的 `import` 文件有用：

```bash
 src
 └── index.ts
 └── css
     └── main.css
     └── navigation.css
 
 generated
 └── css
     └── main.css.d.ts
     └── navigation.css.d.ts
```

`tsconfig.json`：

```json
{
  "compilerOptions": {
    "rootDirs": ["src", "generated"]
  }
}
```

这种技术可以让你提前为非代码源文件生成类型。😎

然后，导入会根据源文件的位置自然地工作。比如，`./src/index.ts` 可以导入 `./src/css/main.css` 文件，然后TS将根据生成的 `.d.ts`文件意识到打包器对该文件类型的行为。

```typescript
// @filename: index.ts
import { appClass } from "./main.css";
```



## `typeRoots` - 类型根

默认情况下，所有可见的 `@types` packages都将包含在你的编译中。在 `node_modules/@types` 中任何闭合文件夹都被认为是 `可见的（visible）` 包。比如，这意味着 `./node_modules/@types/` , `../node_modules/@types/` & `../node_modules/@types/` 等等。



如果指定了 `typeRoots`， 只有在 `typeRoots` 下的包（`packages`）才被包含。比如：

```json
{
  "compilerOptions": {
    "typeRoots": ["./typings", "./vendor/types"]
  }
}
```

这个配置文件将包含所有在 `./typings` & `./vendor/types` 下的所有包，而不包含 `./node_modules/@types` 下的包。所有路径都是相对于 `tsconfig.json` 的。



::: tip 💡

相关联配置：

- [types](https://www.typescriptlang.org/tsconfig#types)

:::





## `types` 👍

默认情况下，所有可见的 `@types` packages都将包含在你的编译中。在 `node_modules/@types` 中任何闭合文件夹都被认为是 `可见的（visible）` 包。比如，这意味着 `./node_modules/@types/` , `../node_modules/@types/` & `../node_modules/@types/` 等等。

如果指定了 `types`，只有列举了的包才会包含到`全局作用域`中。

比如：

```json
{
  "compilerOptions": {
    "types": ["node", "jest", "express"]
  }
}
```

👩‍🏫 这个 `tsconfig.json` 将 **只** 包含 `./node_modules/@types/node` & `./node_modules/@types/jest` & `./node_modules/@types/express`。其余在 `./node_modules/@types/*` 下的包将不会被包含。



> 这有什么影响呢？

这个配置不会影响 `@types/*` 如何被包含在你的应用代码中，比如，如果你有如上的编译选项，代码如下：

```typescript
import * as moment from 'moment'

moment().format("MMMM Do YYYY, h:mm:ss a");
```

这个 `moment` 导入也是具有完全类型的。

当你设置了这个选项，通过不包含某个模块到 `types` 数组中：

- 将不会添加全局到你的项目中（比如 node中的 `process`，Jest中的 `expect`）😅
- 将不会将导出显示为自动导入推荐

这个功能和 `typeRoots` 的区别在于：它是只指定你想包含的确切类型，而 `typeRoots` 支持你想要特定的文件夹。



::: tip 💡

相关联配置：

- `typeRoots`

:::



原文档：

- [tsconfig - Modules](https://www.typescriptlang.org/tsconfig#Modules_6244)



2022年08月19日00:14:46

