---
title: Emit
---
[[toc]]



## `declaration` 👍

对你项目中的每个TS或JS文件生成 `.d.ts` 文件。这些 `.d.ts` 文件是类型声明文件，描述模块外部的API。通过 `.d.ts` 文件，像TS这样的工具能对没有类型的代码提供智能识别和准确的类型。

当开启 `declaration`，对如下TS代码运行编译器：

```typescript
export let helloWorld = 'hi'
```

将生成如下 `index.js` 文件：

```js
export let helloWorld = 'hi'
```

以及生成一个与之相关联的 `helloWorld.d.ts` 文件：

```typescript
export declare let helloWorld: string;
```

当对JS文件使用 `.d.ts` 文件时，你可能想要使用 `emitDeclarationOnly` 或 使用 `outDir` 确保JS文件不会被覆写。



::: tip 💡

默认：如果 [composite](https://www.typescriptlang.org/tsconfig#composite)，默认为 `true`；否则为 `false`

相关联配置：

- [declarationDir](#declarationdir) - 生成 `.d.ts` 文件存放目录
- [emitDeclarationOnly](#emitdeclarationonly-👍-只生成声明文件) - 只生成 `.d.ts` 文件

:::



## `declarationDir`

配置声明文件生成根目录。

```bash
example
├── index.ts
├── package.json
└── tsconfig.json
```

使用如下 `tsconfig.json` ：

```json
{
  "compilerOptions": {
    "declaration": true,
    "declarationDir": "./types"
  }
}
```

则 `index.ts` 生成的 `.d.ts` 文件将存放到 `types` 文件夹中：

```bash {6-7}
example
├── index.js
├── index.ts
├── package.json
├── tsconfig.json
└── types
    └── index.d.ts
```



::: tip 💡

相关联配置：

- [declaration](#declaration-👍) - 是否生成 `.d.ts` 文件

:::





## `declarationMap`

为 `.d.ts` 文件生成source map，用于和原始 `.ts` 源文件进行映射。这使得像VSCode这种编辑器能够使用 `Go to Definition` 功能跳转到源 `.ts` 文件。



::: tip 💡

如果你使用项目引用（`project references`），则强烈建议你开启这个选项。

:::



## `downlevelIteration` - 降级迭代

降级（`Downlevel`）是一个TS名词，表示转移为老版本的JS。这个标志支持更精确地实现现代JS如何在旧JS运行时中迭代新概念。

ES6 添加了几个新迭代原始构造：`for-of` 循环，数组展开符 (`[a, ...b]`)，参数展开(`fn(...args)`)，和 `Symbol.iterator`。`downlevelIteration` 允许这些基础迭代构造在 `Symbol.iterator`出现的情况下，在ES5环境中更精确的被使用。





> for-of 例子效果

TS:

```typescript
const str = 'Hello'
for (const s of str) {
  console.log(s)
}
```

不开启 `downlevelIteration`，对任何对象的 `for-of` 循环都被降级为传统的 `for` 循环：

```js
"use strict";
var str = "Hello!";
for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
    var s = str_1[_i];
    console.log(s);
}
```

这正是人们经常所期望的，但是这不是100%兼容ECMAScript迭代协议。特别的字符串，比如emoji（😋） ，长度为 `2`（或更长），但由于 `for-of` 每次迭代一个单元。[可看这篇博文 - Jonathan New](https://blog.jonnew.com/posts/poo-dot-length-equals-two)

当开启 `downlevelIteration`，TS会利用一个辅助函数来检测 `Symbol.iterator` 实现（要么原生实现，要么polyfill）。如果实现缺失，你将回退到基于索引的实现：

```js
"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var e_1, _a;
var str = "Hello!";
try {
    for (var str_1 = __values(str), str_1_1 = str_1.next(); !str_1_1.done; str_1_1 = str_1.next()) {
        var s = str_1_1.value;
        console.log(s);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (str_1_1 && !str_1_1.done && (_a = str_1.return)) _a.call(str_1);
    }
    finally { if (e_1) throw e_1.error; }
}
```

🚀 你也可以使用 [tslib](https://www.npmjs.com/package/tslib) ，通过 [importHelpers](https://www.typescriptlang.org/tsconfig#importHelpers) 选项来减少内联JS的代码量：

```js
"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var e_1, _a;
var str = "Hello!";
try {
    for (var str_1 = __values(str), str_1_1 = str_1.next(); !str_1_1.done; str_1_1 = str_1.next()) {
        var s = str_1_1.value;
        console.log(s);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (str_1_1 && !str_1_1.done && (_a = str_1.return)) _a.call(str_1);
    }
    finally { if (e_1) throw e_1.error; }
}
```

::: warning 🚨

开启 `downlevelIteration` ，在 `Symbol.iterator` 在运行时中不存在时，并不会提升兼容性。

:::



> Array Spreads 效果示例

下面是数组展开：

```typescript
const arr = [1, ...arr2]
```

这看起来很容易降级为ES5:

```js
// 这一样，是吗？🤔
const arr = [1].concat(arr2)
```

但这在某些罕见的情况下，很明显不一样。比如，如果数组有个空洞（`hole`），通过展开，缺失的索引会创建一个自己的属性，而使用 `concat` 则不会：

```js {1}
// 有个缺失的元素，表示空洞
let missing = [0, , 1]
let spreaded = [...missing] // [0, undefined, 1]
let concated = [].concat(missing) //  [0, empty, 1]
// true
"1" in spreaded
// false
"1" in concated
```

和 `for-of` 类似，`downlevelIteration` 将使用 `Symbol.iterator` (如果出现) 更精确的模拟ES6行为。



::: tip 💡

相关联配置：

- [importHelpers](#importhelpers-👍-低版本js辅助函数)

:::



## `emitBOM` - 生成BOM

控制TS在写输出文件时，是否生成 [BOM](https://wikipedia.org/wiki/Byte_order_mark)。某些运行时环境需要BOM正确翻译JS文件；而有些则需要去除BOM。默认值是 `false`，除非有特殊的理由才会更改这个值。



## `emitDeclarationOnly` 👍 - 只生成声明文件

只声明 `.d.ts` 文件，不生成 `.js` 文件。

这个设置在如下2种情形有用：

1. 你使用非TS转译器（`transpiler`） 生成你的JS
2. 你使用TS只生成 `.d.ts` 文件给你的消费者



::: tip 💡

相关联配置：

- [declaration](#declaration-👍)

:::





## `importHelpers` 👍 - 低版本JS辅助函数

对特别降级操作，TS对某些操作使用辅助代码，比如扩展磨具个类，展开数组或对象，以及异步操作。默认情况下，这些辅助函数会插入到使用到它们的文件中。如果相同的辅助函数用于不同模块中，这可能导致代码重复。😅

如果开始 `importHelpers`，这些辅助函数会从 [tslib](https://www.npmjs.com/package/tslib) 导入。你将需要确保 `tslib` 模块能在运行时被导入。这只影响模块；而全局脚本文件不会尝试导入这些模块。



比如：🌰

```typescript
export function fn(arr: number[]) {
  const arr2 = [1, ...arr]
}
```

打开 `downlevelIteration` 配置，但 `importHelpers` 不开启的情况：

```js
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
export function fn(arr) {
    var arr2 = __spreadArray([1], __read(arr), false);
}
```

同时开启 `downlevelIteration` & `importHelper` ：

```js
import { __read, __spreadArray } from "tslib";
export function fn(arr) {
    var arr2 = __spreadArray([1], __read(arr), false);
}
```

当你想自己提供这些辅助函数，你可以使用 `noEmitHelpers`。



::: tip 💡

相关联配置：

- [noEmitHelpers](#noemithelpers) - 不生成辅助函数
- [downlevelIteration](#downleveliteration-降级迭代) - 降级为老版本JS

:::





## `importsNotUsedAsValues`



这个配置控制 `import` 如何工作，有3种选项：

- `remove`：默认行为，移除只有引用类型的 `import` 语句
- `preserve`：保存值或类型没有被使用的所有 `import` 语句。这能导致 `imports/side-effects` 得以保存
- `error`: 这会保存所有 `import`(这一点同 `preserve` 选项)，但当一个值导入只被当做类型使用时会抛出错误。如果你希望确保没有意外导入值，但仍然显式地显示副作用导入，那么这可能很有用。

这个配置能运作，是因为你可以使用 `import type` 显式的创建 `import` 语句，它应当永远不生成到JS中。





::: tip 💡

默认：`remove`

可能值：

- `remove`
- `preserve`
- `error`

:::





## `inlineSourceMap` 👍

当设置了这个选项，将不会单独生成 `.js.map` 文件来提供source maps，TS将会将source map 内容嵌入到 `.js` 文件中。尽管这会导致更大的JS文件，但它却适用于某些场景。比如，你可能想在某个不允许 `.map` 文件存在的webserver上调试JS文件。😅

这和 [sourceMap](https://www.typescriptlang.org/tsconfig#sourceMap) 互斥。

比如🌰 ts:

```typescript
const helloWorld = "hi"
console.log(helloWorld)
```

转换为JS:

```js
"use strict"
const helloWorld = "hi"
console.log(helloWorld)
```

开启 `inlineSourceMap`，会在js文件最底下包含source-map的注释：

```js {4}
"use strict";
const helloWorld = "hi";
console.log(helloWorld);
//# sourceMappingURL=data:application/json;base64,e....
```



## `inlineSources`

当开启这个配置，TS会以嵌入字符串形式将原始的 `.ts` 文件内容包含到source map中（使用source map的 `sourcesContent` 属性）。这在某些情况下很有用，类似 `inlineSourceMap` 的场景。

::: warning 🚨

使用这个配置，需要设置 `sourceMap` 或者 `inlineSourceMap`

:::

比如🌰 ts:

```typescript
const helloWorld = "hi"
console.log(helloWorld)
```

转换为JS:

```js
"use strict"
const helloWorld = "hi"
console.log(helloWorld)
```

假设开启 `inlineSources` + `inlineSourceMap`，会在js文件最底下包含source-map的注释，注意内容不同于 `inlineSourceMap`，因为它还包含了源代码内容：

```js {4}
"use strict";
const helloWorld = "hi";
console.log(helloWorld);
//# sourceMappingURL=data:application/json;base....
```



## `mapRoot` - 与sourceMap和调试相关

指定调试器（`debugger`） 应当定位map文件的位置，而不是生成的位置。此字符串在源映射中逐字处理，例如：

```json
{
  "compilerOptions": {
    "sourceMap": true,
    "mapRoot": "https://my-website.com/debug/sourcemaps/"
  }
}
```

将声明 `index.js` 文件的sourceMaps在 `https://my-website.com/debug/sourcemaps/index.js.map` 位置。





## `newLine`



指定在生成文件时使用的行结束序列：`CRLF` (windows) | `LF` (unix)



::: tip 💡

默认：与平台相关

可能值：

- `crlf`
- `lf`

:::





## `noEmit` 👍

不生成编译器输出文件，比如JS源代码，source-maps或声明文件（`.d.ts` 文件）。

这给其它工具，比如 [babel](https://babeljs.io/) 或 [swc](https://github.com/swc-project/swc) ，来处理TS文件转换为能运行在JS环境提供了操作空间。😎

然后将TS只作为对编辑器集成的工具，和源代码类型的检测器。



## `noEmitHelpers`

不使用 `importHelpers` 提供的辅助函数，你可以为你使用的辅助函数提供全局范围内的实现，并完全关闭辅助函数的生成。

比如，在ES5中使用 `async` 函数，需要运行类似 `await` & `generator` 函数：

```typescript
const getAPI = async (url: string) => {
  // Get API
  return {};
}
```

这会生成大量JS代码：

```js
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var getAPI = function (url) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        // Get API
        return [2 /*return*/, {}];
    });
}); };
```

可以通过这个配置用你自己的全局变量来替换：

```js
"use strict";
var getAPI = function (url) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        // Get API
        return [2 /*return*/, {}];
    });
}); };
```

::: tip 💡

相关联配置：

- [importHelpers](#importhelpers-👍-低版本js辅助函数)

:::



## `noEmitOnError` 👍

如果上报任何错误，都不要生成编译器输出文件 - JS源代码，source maps & 声明文件。

这个配置默认是 `false`，便于TS在 `watch` 环境工作，你可能希望在确保解决所有错误之前在另一个环境中查看代码更改的结果。



## `outDir` 👍

如果配置了，`.js` (和 `.d.ts` & `.js.map` 等) 文件将生成到该目录。原始源文件目录结构会得到保存。如果计算的根目录不是你想要的，可查看 [rootdir](./modules#rootdir-👍)。

如果没有配置，`.js` 文件将生成到 `.ts` 所在的相同目录下：

```bash {3}
$ tsc
example
├── index.js
└── index.ts
```

`tsconfig.json` 配置：

```json {3}
{
  "compilerOptions": {
    "outDir": "dist"
  }
}
```

再运行 `tsc` 命令，则生成的文件会在 `dist` 目录：

```bash {3-4}
$ tsc
example
├── dist
│   └── index.js
├── index.ts
└── tsconfig.json
```

::: tip 💡

相关联配置：

- `out`
- [outFile](#outfile) - 将 none | system | amd 模块 + 非模块全局内容打包为一个单一文件

:::



## `outFile`

如果定义，所有 `全局（global）` （非模块）文件都被拼接到指定的单一输出文件中。

如果 `module` 是 `system | amd`，所有文件模块文件也会被拼接到该文件全局内容之后。



::: warning 🚨

`outFile` 只有在 `module` 为 `none | system | amd`  的情况下才能使用。这个配置不能用于打包CommonJS或ESM。

:::





## `preserveConstEnums`

在生成的代码中，不要擦除 `const enum` 声明。`const enum`s 提供了一种方式，可以通过生成枚举值而不是引用的方式，在运行时减少整体内存的使用。

比如，🌰 ts:

```typescript
const enum Album {
  JimmyEatWorldFutures = 1;
  TubRingZooHypothesis = 2;
  DogFashionDiscoAdultery = 3;
}

const selectedAlbum = Album.JimmyEatWorldFutures;
if (selectedAlbum === Album.JimmyEatWorldFutures) {
  console.log('That is a great choice.')
}
```

`const enum` 默认行为是将任何 `Album.Something` 转换为相应的数字字面量，并从JS中完全删除对枚举的引用。

```js
"use strict";
const selectedAlbum = 1 /* Album.JimmyEatWorldFutures */;
if (selectedAlbum === 1 /* Album.JimmyEatWorldFutures */) {
    console.log("That is a great choice.");
}
```

通过将 `preserveConstEnums` 设置为 `true`，`enum` 在运行时中存在，数字仍然会被生成：

```js
"use strict";
var Album;
(function (Album) {
    Album[Album["JimmyEatWorldFutures"] = 1] = "JimmyEatWorldFutures";
    Album[Album["TubRingZooHypothesis"] = 2] = "TubRingZooHypothesis";
    Album[Album["DogFashionDiscoAdultery"] = 3] = "DogFashionDiscoAdultery";
})(Album || (Album = {}));
const selectedAlbum = 1 /* Album.JimmyEatWorldFutures */;
if (selectedAlbum === 1 /* Album.JimmyEatWorldFutures */) {
    console.log("That is a great choice.");
}
```

这实际上使类似 `const enum` 仅成为源代码特性，没有运行时跟踪。



::: tip 💡

默认：如果设置了 `isolatedModules` 则为 `true`； 否则为 `false`

:::



## `preserveValueImports`

某些情况，TS不能检测你正在使用import。比如，下面代码：

```typescript {2}
import { Animal } from "./animal.js"
eval("console.log(new Animal().isDangerous())")
```

或使用了 `编译为HTML` 语言的代码，比如Vue, Svelte。

当结合[isolatedModules](https://www.typescriptlang.org/tsconfig#isolatedModules)：引入类型 `必须` 标记为 `type-only`，因为一次处理单个文件的编译器无法知道导入的是未使用的值，还是必须删除以避免运行时崩溃的类型。

例如，下面代码 `TitleComponent` 是一个函数，`TitleComponentProps` 是一个开启了 `isolatedModules` & `preserveValueImports` 的类型：

```typescript
import { TitleComponent, TitleComponentProps } from './TitleComponent.js'
```

我们可以通过在 `TitleComponentProps` 前面添加 `type` 前缀来标记它是 `type-only` 导入来修复这个问题：

```typescript
import { TitleComponent, type TitleComponentProps } from './TitleComponent.js'
```

::: tip 💡

相关配置项：

- [isolatedModules](https://www.typescriptlang.org/tsconfig#isolatedModules)
- [importsNotUsedAsValues](#importsnotusedasvalues)

:::



## `removeComments`

转换为JS文件时，移除所有TS注释。默认为 `false`。

比如，下面TS文件使用了JSDoc注释：

```typescript
/** The translation of 'Hello world' into Portuguese */
export const helloWorldPTBR = "Olá Mundo"
```

但设置 `removeComments: true`：

```js
export const helloWorldPTBR = "Olá Mundo"
```

不设置或设置为 `false`:

```js
/** The translation of 'Hello world' into Portuguese */
export const helloWorldPTBR = "Olá Mundo"
```

即注释会出现在你的JS代码中。



## `sourceMap` 👍

开启 [sourcemap](https://developer.mozilla.org/docs/Tools/Debugger/How_to/Use_a_source_map) 文件的生成。这些文件让调试器和其它工具显示原始TS源代码，当使用生成的JS文件时。Source map文件以 `.js.map`（或 `.jsx.map`） 文件的形式生成。

`.js` 文件反过来包含sourcemap注释，以指示文件到外部工具的位置，比如：

```typescript
// helloWorld.ts
export declare const helloWorld = "hi"
```

设置 `sourceMap: true`，将创建如下js文件：

```js
// helloWorld.js
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = "hi";
//# sourceMappingURL=// helloWorld.js.map
```

也会生成下面JSON map:

```js
// helloWorld.js.map
{
  "version": 3,
  "file": "ex.js",
  "sourceRoot": "",
  "sources": ["../ex.ts"],
  "names": [],
  "mappings": ";;AAAa,QAAA,UAAU,GAAG,IAAI,CAAA"
}
```



## `sourceRoot`

指定调试器应该定位TS文件的位置，而不是相对的源位置。该字符串在source-map中逐字处理，你可以使用路径或URL:

```json {4}
{
  "compilerOptions": {
    "sourceMap": true,
    "sourceRoot": "https://my-website.com/debug/source/"
  }
}
```

这将声明 `index.js` 有一个源文件在 `https://my-website.com/debug/source/index.ts` 位置。



## `stripInternal`

不要对注释了 `@internal` 的JSDoc注释的代码生成声明。这是一个编译器内部配置。自己对使用风险负责，因为编译器不会检测结果是否合法。如果你正在寻找一种工具来处理`d.ts`文件中额外级别的可见性，请查看[api-extractor](https://api-extractor.com/)。

```typescript {3}
/**
 * Days available in a week
 * @internal
 */
export const daysInAWeek = 7;
 
/** Calculate how much someone earns in a week */
export function weeklySalary(dayRate: number) {
  return daysInAWeek * dayRate;
}
```

默认 `false`:

```typescript
/**
 * Days available in a week
 * @internal
 */
export declare const daysInAWeek = 7;
/** Calculate how much someone earns in a week */
export declare function weeklySalary(dayRate: number): number;
```

开启 `stripInternal: true`:

```typescript
/** Calculate how much someone earns in a week */
export declare function weeklySalary(dayRate: number): number;
```

JS输出仍然是相同的。



::: warning 🚨

TS编译器内部使用

:::



原文档：

- [Emit](https://www.typescriptlang.org/tsconfig#Emit_6246)

2022年08月19日17:27:22