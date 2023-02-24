---
title: ESM in Node.js
---

最近这些年，Node.js一直在努力支持运行ESM。但由于Node.js生态是建立在CommonJS（cjs）模块基础上的，因此对这一功能的支持是一个很艰难的过程。

在这2个模块系统之间进行互操带来了很大的挑战，因为很多功能是不兼容的。然而，Node.js中对ESM的支持现在已经在Node.js中实现了，尘埃开始落定。

这也是为什么TypeScript引入了2个新的 `module` 和 `moduleResolution` 设置：`node16` & `nodenext`.

::: code-group

``` json [tsconfig.json]
{
  "compilerOptions": {
    "module": "nodenext"
  }
}
```

:::

这些新模式带来了更高级的功能。



## `package.json`中的`type`字段和新文件扩展

Node.js支持 [新的设置项](https://nodejs.org/api/packages.html#packages_package_json_and_file_extensions)，叫做 `type`。`type` 可以设置为 `"module"` 或者 `"commonjs"`。

::: code-group

``` json [package.json]
{
  "name": "my-package",
  "type": "module", // [!code focus]
  "dependencies": {}
}
```

:::

该配置项控制 `.js` 文件是以ESM模块进行解释还是CJS模块进行解释，如果不设置，默认为CJS。当一个文件被认为是ESM时，会和CJS存在一些差异：

1. `import/export` 语句 & 支持顶层 `await`
2. 相对导入路径需要完整扩展（比如，我们必须写 `import './foo.js'` 而不能写为 `import './foo'`，忽略扩展会报错）
3. 对 `node_modules` 中的依赖导入的解析可能不同
4. 全局对象，比如 `require()` & `__dirname` & `__filename` 在ESM中是不能直接使用的
5. ESM对CommonJS模块的导入，需要满足特定的规则

我们稍后再谈这些差异。

为了覆盖TypeScript在这个系统中的工作方式，`.ts`和`.tsx`文件现在以相同的方式工作。到TypeScript碰到 `.tsx | .js | .jsx` 文件时，它会查询 `package.json`，看是否该文件是一个ESM，并据此来决定：

- 如何找到该文件所导入的其它模块
- 如果产出文件，该如何对该文件进行转换

当 `.ts` 文件以ESM被编译，`import/export` 语法会在 `.js` 产物中得以保存；当它被编译为CJS，它的产出结果和 [module](https://www.typescriptlang.org/tsconfig#module) 为 `commonjs` 时一样。

这也意味着，对ESM和CJS中的 `.ts` 文件的路径解析也是不同的。比如，假设如下代码：

```typescript
// ./foo.ts
export function helper() {
    // ...
}
// ./bar.ts
import { helper } from "./foo"; // only works in CJS
helper();
```

上面代码只能在CJS中正常运行，而不能在ESM中运行，`因为相对导入路径缺少扩展名`😅。

作为结果，我们不得不将 `foo.ts` 的输出结果带上扩展名进行重写 - 因此， `bar.ts` 将必须从 `./foo.js` 导入：

```typescript
// ./bar.ts
import { helper } from "./foo.js"; // works in ESM & CJS
helper();
```

这看起来可能有点繁琐，但是TypeScript工具，比如auto-imports和路径自动填充将为你分担这些工作。

另外，这同样也适用于 `.d.ts` 文件。当TypeScript找到package中的某个 `.d.ts` 文件时，它是被当做ESM对待还是CJS对待，取决于包含文件的package。



### 新的文件扩展

package.json中的 `type` 字段很好，因为它允许我们继续使用`.ts`和`.js`文件扩展名，这很方便;但是，你偶尔需要编写与指定类型不同的文件。你也可能只是喜欢总是明确的规定type类型。

Node.js支持2个新的扩展来帮助解决这个问题： `.mjs` & `.cjs`。`.mjs` 表示ESM，`.cjs` 表示CommonJS，它们永远也不会重叠。

作为结果，TypeScript支持2个新的源文件扩展：`.mts` & `.cts`。当TS将其转换为js时，分别生成 `.mjs` & `.cjs`文件。

另外TS同时也至此2个新的声明文件扩展：`.d.mts` & `.d.cts`。当TS生成声明文件时，分别产出 `.d.mts` & `.d.cts` 文件。

使用这些扩展完全是可选的。



## 与CommonJS互操

🎉 Node.js允许ESM导入CJS模块，就好像CJS模块是存在默认导出的ESM模块。

::: code-group

``` typescript [index.mts]
// 导入CJS模块
import foo from './helper.cjs'

foo.helper() // 打印 hello world!
```

``` js [helper.cjs]
export function helper() {
  console.log("hello world!");
}
```

:::

在某些情形下，Node.js还会合成来自CJS中有名导出（`named exports`），这会更加的方便。这种情况下，ESM可以使用 `namespace-style` 导入的方式（比如： `import * as foo from '...'`）,或者有名导入（比如：`import { helper } from '...'`）:

::: code-group

``` typescript [index.mts]
// 导入有名导出
import { helper } from './helper.cjs'

helper() // 打印 hello world!
```

``` js [helper.cjs]
export function helper() {
  console.log("hello world!");
}
```

:::

对于TypeScript来说，并不是总有办法知道这些命名的导入是否会被合成，但是TypeScript会在允许的情况下犯错，当从一个肯定是CommonJS模块的文件中导入时，它会使用一些启发式方法。

TypeScript独有的一种互操导入语法如下：

```typescript
import foo = require('foo')
```

在CommonJS模块下，它会直接调用CJS中的 `require()` 方法；而在ES模块下，通过导入 [creatRequire](https://nodejs.org/api/module.html#module_module_createrequire_filename) 方法达成相同的目的。这将降低代码在浏览器(不支持require())等运行时的可移植性，但对于互操作性通常很有用。反过来，你可以使用下面的语法来写上面的例子:

```js
// @filename: helper.cts
export function helper() {
    console.log("hello world!");
}
 
// @filename: index.mts
import foo = require("./foo.cjs");
 
foo.helper()
```

📚最后，从CJS模块中导入ESM模块的唯一方式就是通过动态调用 `import()` 。这可能会带来挑战，但这就是当今Node.js的行为。

```js
async function init() {
  // 比如在CJS模块中导入纯esm模块：chalk
  const { chalk: default } = await import('chalk')
  console.log(chalk.yellow('hi'))
}
```

更多可参考：

- [ESM/CommonJS interop in Node.js](https://nodejs.org/api/esm.html#esm_interoperability_with_commonjs)

## `package.json` Exports,Imports和自引用

Node.js支持在package.json中定义[一个称之为 exports 的新字段](https://nodejs.org/api/packages.html#packages_exports)来定义入口点。这个字段比package.json中的 `main` 字段功能更强大，它能控制package中的哪些部分能暴露给消费者😎。

下面是支持ESM和CJS不同入口点的package.json文件：

::: code-group

``` json [package.json]
{
  "name": "my-package",
  "type": "module",
  "exports": {
    ".": {
      // 对ESM使用 import 的方式
      "import": "./esm/index.js",
      // 对CJS使用 require 的方式
      "require": "./commonjs/index.cjs"
    }
  },
  // 对于Node.js老版本的fallback
  "main": "./commonjs/index.cjs"
}
```

:::

这个功能很多，可参考 [Nodejs#package文档](https://nodejs.org/api/packages.html)。我们将关注TypeScript是如何对它进行支持的。

使用TypeScript原始的Node支持，它会查找一个`main`字段，然后查找与该条目对应的声明文件。比如，`"main"` 指向 `./lib/index.js`，TypeScript会查找一个称为 `./lib.index.d.ts` 的文件。npm包的作者可以通过另一个 `types` 字段（比如 `"types": "./types/index.d.ts"`）来覆盖这一默认行为。

新的支持工作原理类似于 [Node导入条件](https://nodejs.org/api/packages.html)。默认情况下，TypeScript用导入条件覆盖了相同的规则——如果你从ES模块写导入，它会查找`import`字段，而从CommonJS模块，它会查找`require`字段。如果找到它们，它将寻找一个合并声明文件。如果需要为类型声明指向不同的位置，可以添加 `types` 导入条件。

```json
{
  "name": "my-package",
  "type": "module",
  "exports": {
    ".": {
      // 🚨typescript解析的入口点 - 必须放在第一位
      "types": "./types/index.d.ts", // [!code ++]
      // 对ESM使用 import 的方式
      "import": "./esm/index.js",
      // 对CJS使用 require 的方式
      "require": "./commonjs/index.cjs"
    }
  },
  // 对于Node.js老版本的fallback
  "main": "./commonjs/index.cjs",
  // 对老版本TypeScript的fallback
  "types": "./types/index.d.ts"
}
```

TypeScript以类似的方式同样支持 [package.json#imports](https://nodejs.org/api/packages.html#packages_imports) 字段（在相应的文件旁边寻找声明文件），并支持 [package.json自我引用](https://nodejs.org/api/packages.html#packages_self_referencing_a_package_using_its_name)。这些特性通常不怎么用到，但是是受支持的。



2023年02月23日18:08:36
