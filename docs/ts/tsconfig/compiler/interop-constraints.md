---
title: Interop Constraints
---

[[toc]]



## `allowSyntheticDefaultImports` 👍 - 允许合成默认导入

当设置为 `true`，`allowSyntheticDefaultImports` 允许你像下面那样导入：

```typescript
import React from 'react'
```

而不是：

```typescript
import * as React from 'react'
```

👩‍🏫 当模块 `没有` 显式的指定一个默认导出时。



例如，如果没有设置 `allowSyntheticDefaultImports: true`:

```typescript {2}
// @filename: utilFunctions.js
🚫 Module '"/home/runner/worker/TS/utilFunctions"' has no default export.
const getStringLength = (str) => str.length

module.exports = {
  getStringLength,
}

// @filename: index.ts
import utils from './utilFunctions'
 
const count = utils.getStringLength('Check JS')
```

上面抛出错误的原因是，没有你能 `default` 导入的对象。即使看起来像可以。为了方便，像Babel这样的转译器会自动创建一个default，如果没有创建的话。使模块看起来更像下面的样子：

```js {7}
// @filename: utilFunctions.js
const getStringLength = (str) => str.length;
const allFunctions = {
  getStringLength,
}
module.exports = allFunctions
module.exports.default = allFunctions
```

这个配置不会影响TS生成JS，`它只用于类型检测`。这个选项会使TS的行为与Babel保持一致，其中额外的代码会被触发，以使使用模块的默认导出更符合人体工程学。



::: tip 💡

默认：如果 [module](./modules#module-👍) 是 `system`，或 [esModuleInterop](#esmoduleinterop-👍🚀🚀) 和 [module](./modules#module-👍) 不是 `es6/es2015 | esnext` ，则这个默认为 `true`；否则默认为 `false`

相关联配置：

- [esModuleInterop](#esmoduleinterop-👍🚀🚀)

:::





## `esModuleInterop` 👍🚀🚀

默认情况下（`esModuleInterop: false` 或没有设置）TS处理 `CommonJS/AMD/UMD` 模块的方式类似ES6模块（ESM）。在这样做的过程中，有两个部分被证明是错误的假设😅：

- 像 `import * as moment from 'moment'` 这样的命名空间导入和 `const moment = require('moment')` 行为一致
- 像 `import moment from 'moment'` 默认导入和 `const moment = require('moment').default` 行为一致

这种不匹配导致2个问题：

- ES6模块规范规定：命名空间导入（`import * as x`）只能是一个对象，通过让TS把它当作`= require("x")`来处理，然后TS允许这个import被当作一个函数来处理，并且是可调用的。依据规范这是不合法的。
- 尽管符合 ES6 模块规范，但大多数具有 `CommonJS/AMD/UMD` 模块的库并不像TS的实现那样严格符合。

开启 `esModuleInterop` 将在TS编译的代码中修复这两个问题🤩。第一个改变了编译器的行为，第二个通过两个新的辅助函数来修复，它们提供了一个shim来确保JS的兼容性:

```typescript
import * as fs from 'fs'
import _ from 'lodash'

fs.readFileSync('file.txt', 'utf8')
_.chunk(['a', 'b', 'c', 'd'], 2)
```

关闭 `esModuleInterop`:

```js {2}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true })
const fs = require("fs")
const lodash_1 = require("lodash")
fs.readFileSync("file.txt", "utf8")
lodash_1.default.chunk(["a", "b", "c", "d"], 2)
```

开启 `esModuleInterop`:

```js
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const lodash_1 = __importDefault(require("lodash"));
fs.readFileSync("file.txt", "utf8");
lodash_1.default.chunk(["a", "b", "c", "d"], 2);
```

::: warning 🚨

命名空间导入 `import * as fs from 'fs'` 只负责被导入对象上[自身拥有的属性](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)(基本上是在对象上设置的属性，而不是通过原型链设置的)。如果你导入的模块使用继承的属性定义了它的API，那么你需要使用默认的导入形式(`import fs from 'fs'`)，或者禁用`esModuleInterop`。

:::



注意：你可以通过开启 [importHelpers](./emit#importhelpers-👍-低版本js辅助函数) 使JS生成terser。

```js
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs = tslib_1.__importStar(require("fs"));
const lodash_1 = tslib_1.__importDefault(require("lodash"));
fs.readFileSync("file.txt", "utf8");
lodash_1.default.chunk(["a", "b", "c", "d"], 2);
```

开启 `esModuleInterop` 将同时也开启 [allowSyntheticDefaultImports](#allowsyntheticdefaultimports-👍-允许合成默认导入)。



::: tip 💡

🚀 推荐开启

相关联配置：

- [`allowSyntheticDefaultImports` 👍 - 允许合成默认导入](#allowsyntheticdefaultimports----允许合成默认导入)
- [`esModuleInterop` 👍🚀🚀](#esmoduleinterop-)
- [`isolatedModules ` 👍🚀](#isolatedmodules--)
- [`preserveSymlinks`](#preservesymlinks)
- [译者补充 🚀](#译者补充-)

:::



## `isolatedModules ` 👍🚀



你可以使用TS从TS代码中生成JS代码，使用其它转译器，比如 [Babel](https://babeljs.io/) 来完成这些也很常见。但是其它转译器只能一次操作一个文件，这也意味着它们不能在完全理解整个类型系统的基础上应用代码转换。这种限制也存在于TypeScript的 `ts.transpileModule` API上，这个API被用于某些构建工具。

::: tip

👩‍🏫 这些限制可能对某些TS功能，比如 `const enum`s & `namespace`s ，引发运行时问题。设置`isolatedModules`标志会告诉TypeScript，如果你编写的某些代码无法被单文件翻译过程正确解释，TypeScript会发出警告。

:::



它不会改变你代码的行为，也不会改变TS检测和生成产物的过程。



下面示例在开启 `isolatedModules` 开启时不能运作。



> 1️⃣ 导出非值标识符

在TS中，你可以导入类型（`tyope`），然后之后导出它：

```typescript
// 先导入
import { someType, someFunction } from 'someModule'
 
someFunction()

// 再导出
export { someType, someFunction }
```

因为 `someType` 不存在值，产出的 `export` 将不会尝试导出它（这可能在JS中引发运行时错误😅）:

```js
export { someFunction }
```

单文件转义器不知道 `someType` 是否会产生一个值，因此导出一个只指向一个类型的名称是错误的。



> 2️⃣ 非模块文件（Non-Module files）

当设置了 `isolatedModules`，所有实现文件必须是 `模块`（这意味着存在某种 `import/export` 形式）。如果某个文件不是一个模块则会出现错误：

```typescript {2-4}
function fn() {}
🚫 'index.ts' cannot be compiled under '--isolatedModules' because it is 
considered a global script file. Add an import, export, or an empty 
'export {}' statement to make it a module.
```

::: tip

这种限制不适用于 `.d.ts` 文件。

:::



> 3️⃣ 引用 `const enum` 成员

在TS中，当你引用一个 `const enum` 成员，引用会在生成的JS文件中被实际的值所取代。改变下面TS:

```typescript
declare const enum Numbers {
  Zero = 0,
  One = 1,
}
console.log(Numbers.Zero + Numbers.One)
```

生成的JS文件：

```js
"use strict";
console.log(0 + 1);
```

在不知道这些成员值得情况下，其它转译器不能取代对 `Numbers` 的引用，如果不处理的话，这会导致运行时错误😅（因为在运行时不存在 `Numbers` 对象）。正因如此，当开启了 `isolatedModules`，引用 `const enum` 枚举成员将出错。





## `preserveSymlinks`

这是为了在Node.js中反映相同的标志;它不解析符号链接的实际路径。

这个标志也显示了与Webpack的 `resolve.symlinks` 配置相反的行为(例如，设置TypeScript的`preserveSymlinks`为`true` 会并行设置Webpack的`resolve.symlinks` 为 `false`，反之亦然)。



当开启这个选项，引用模块和包（比如：`import`s 和 `/// <reference type="..." />` 指令）会相对于符号链接文件的位置进行解析，而不是相对于符号链接解析到的路径。





原文档：

- [Interop Constraints](https://www.typescriptlang.org/tsconfig#Interop_Constraints_6252)



## 译者补充 🚀

::: tip 🚀

TS 中存在多种`import`方式，分别对应了JS中不同的`export`

```typescript
// common.js 模块
// Node.js 中的模块大部分通过 `module.exports`，`exports.xx`  语法进行导出的
import * as xx from 'xx'

// 标准ESM模块
// 对应 export const = xx || export default xxx
import xx from 'xx'

// commonjs模块，类型声明为 export = xx
import xx = require('xx')

// 没有类型声明，默认导入 any 类型
const xx = require('xx')
```

`babel` 会将ESM模块的 `export default` 语法编译为 `exports.default` 语法。

针对 `babel` 编译出来的 `exports.default` 语法，ts提供了 `allowSyntheticDefaultImports` 选项可以支持，它会检测模块是否是ESM模块，如果不是，则查找模块中是否有 `exports.default` 导出，从而达到针对 `exports.default` 的兼容。

比如：`ts` 下面方式导入 `React` 会报错

```typescript
// ❌ Module `react` has no default export
import React from 'react' 
```

因为 `react` 是以 commonJS形式导出的， 必须下面方式使用：

```typescript
import * as React from 'react'
```

下面对 `tsconfig.json` 进行配置

```json
{
  "compilerOptions": {
    "module": "es2015", 
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true // 实际上 module 定义为 es2015 后，这个值会被忽略
  }
}
```

之后再使用 `import React from 'react'` 就不会报错了。



但是更建议不开启 `allowSyntheticDefaultImports`, 使用下面方式，将 `default` 重命名:（但实际项目中，上面方式更为常见😅）
以 `electron-store` 库为例：
```typescript
import { default as Store } from 'electron-store'
```

参考：

- [TypeScript 中的多种 import 解义](https://tasaid.com/blog/2019022017450863.html)
- [由 allowSyntheticDefaultImports 引起的思考](https://blog.leodots.me/post/40-think-about-allowSyntheticDefaultImports.html)

:::





2022年08月19日22:48:36

