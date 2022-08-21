---
title: 语言和环境
---
[[toc]]



## `emitDecoratorMetadata` - 👍 生成装饰器元数据

启用对使用[reflect-metadata](https://www.npmjs.com/package/reflect-metadata)模块的装饰器生成类型元数据的实验性支持。

比如，🌰 ts：

```typescript {12}
function LogMethod(
  target: any,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) {
  console.log(target)
  console.log(propertyKey)
  console.log(descriptor)
}

class Demo {
  @LogMethod
  public foo(bar: number) {
    // do nothing
  }
}

const demo = new Demo()
```

不开启 `emitDecoratorMetadata`（默认值），生成的JS如下：

```js
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function LogMethod(target, propertyKey, descriptor) {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
}
class Demo {
    foo(bar) {
        // do nothing
    }
}
__decorate([
    LogMethod
], Demo.prototype, "foo", null);
const demo = new Demo();
```

开启 `emitDecoratorMetadata`，生成的JS如下：

```js {8-10}
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function LogMethod(target, propertyKey, descriptor) {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
}
class Demo {
    foo(bar) {
        // do nothing
    }
}
__decorate([
    LogMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Demo.prototype, "foo", null);
const demo = new Demo();
```

::: tip 💡

相关联配置：

- [experimentalDecorators](#experimentaldecorators)

:::



## `experimentalDecorators`

开启 [对装饰器实验性的支持](https://github.com/tc39/proposal-decorators)，它处于TC39标准化过程中的第2阶段。

装饰器是一种尚未被JavaScript规范完全认可的语言特性。这意味着TypeScript中的实现版本可能与TC39决定的JavaScript中的实现版本不同。

在 [decorators - handbook](https://www.typescriptlang.org/docs/handbook/decorators.html) 中可以找到更多TS对装饰器支持的内容。



::: tip 💡

相关联配置：

- [emitDecoratorMetadata](#emitdecoratormetadata-👍-生成装饰器元数据)

:::





## `JSX` 👍🚀

控制JSX构造在JS文件中如何生成。这只会对 `.tsx` 文件输出生成的JS文件有影响。

- `react`：生成 `.js` 文件，`JSX` 转换为等价的 `React.createElement` 方法调用
- `react-jsx`：生成 `.js` 文件，`JSX` 转换为 `_jsx` 调用 😎
- `react-jsxdev`：生成 `.js` 文件，`JSX` 转换为 `_jsx` 调用
- `preserve`： 生成 `.jsx` 文件，`JSX` 语法保持不变
- `react-native`：生成 `.js` 文件，`JSX` 语法不变

例子：

```jsx
const export HelloWorld = () => <h1>Hello world</h1>
```

1️⃣ 默认是 `"react"`

```js
import React from 'react';
export const HelloWorld = () => React.createElement("h1", null, "Hello world");
```

2️⃣ `"preserve"`

```jsx
import React from 'react';
export const HelloWorld = () => <h1>Hello world</h1>;
```

3️⃣ RN中 `react-native`

```js
import React from 'react';
export const HelloWorld = () => <h1>Hello world</h1>;
```

4️⃣ React 17 转换：`react-jsx`

```js
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
export const HelloWorld = () => _jsx("h1", { children: "Hello world" });
```

5️⃣ React 17 开发转换：`react-jsxdev`：

```js
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
const _jsxFileName = "/home/runner/work/TypeScript-Website/TypeScript-Website/index.tsx";
import React from 'react';
export const HelloWorld = () => _jsxDEV("h1", { children: "Hello world" }, void 0, false, { fileName: _jsxFileName, lineNumber: 9, columnNumber: 32 }, this);
```

::: tip 💡

可能值：

- `preserve`
- `react`
- `react-native`
- `react-jsx`
- `react-jsxdev`

相关联配置：

- [jsx](#jsx-👍🚀)
- [jsxFragmentFactory](#jsxfragmentfactory)
- [jsxImportSource](#jsximportsource)

:::



## `jsxFactory` - preact

在使用经典 JSX 运行时编译 JSX Elements 时更改在 `.js` 文件中调用的函数。最常见的改变是，如果你使用 `preact`， 会使用 `"h"` 或 `"preact.h"` 替代默认的 `"React.createElement"`。



例子，`tsx`:

```tsx
import { h } from 'preact'
const HelloWorld = () => <div>Hello</div>
```

开启 `jsxFactory: "h"` 看起来如下：

```js
const preact_1 = require("preact");
const HelloWorld = () => (0, preact_1.h)("div", null, "Hello");
```

这个选项可以在每个文件的基础上使用，类似于 [Babel的 /** @jsx h */ 指令](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx#custom)

```jsx
/** @jsx h */
import { h } from "preact";
 
const HelloWorld = () => <div>Hello</div>;
```

所选择的工厂还将影响在返回到全局名称空间之前查找 `JSX` 名称空间的位置(用于类型检查信息)。

👩‍🏫 如果功能被定义为 `React.createElement` (默认)，编译器将在检查全局 `JSX` 之前检查 `React.JSX`。如果工厂被定义为 `h`，它将检查全局 `JSX` 之前检查 `h.JSX`。



::: tip 💡

默认：`React.createElement`

可能值： 任意标识符或点标识符

相关联配置：

- [jsx](#jsx-👍🚀)
- [jsxFragmentFactory](#jsxfragmentfactory)
- [jsxImportSource](#jsximportsource)

:::



## `jsxFragmentFactory`

当目标是React JSX，并使用 `jsxFactory` 编译器选项时，指定 JSX Fragment 工厂函数，比如 `Fragment`。

比如下面 `tsconfig.json`：

```json {5-7}
{
  "compilerOptions": {
    "target": "esnext",
    "module": "commonjs",
    "jsx": "react",
    "jsxFactory": "h",
    "jsxFragmentFactory": "Fragment"
  }
}
```

下面 `tsx` 文件：

```tsx
import { h, Fragment } from 'preact'

const HelloWorld = () => (
  <>
    <div>Hello</div>
  </>
)
```

编译产物：

```js
const preact_1 = require("preact");
const HelloWorld = () => ((0, preact_1.h)(preact_1.Fragment, null,
    (0, preact_1.h)("div", null, "Hello")));
```

这个配置项可以用作每个文件的基础，类似于 [Babel的 /* @jsxFrag h */ 指令](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx#fragments)。

比如：

```jsx
/** @jsx h */
/** @jsxFrag Fragment */
 
import { h, Fragment } from "preact";
 
const HelloWorld = () => (
  <>
    <div>Hello</div>
  </>
)
```

::: tip 💡



默认值：`React.Fragment`

相关联配置：

- [jsx](#jsx-👍🚀)
- [jsxFactory](#jsxfactory)
- [jsxImportSource](#jsximportsource)

:::





## `jsxImportSource`

当使用jsx作为`"react-jsx"`或`"react-jsxdev"`时，声明用于导入`jsx`和`jsxs`工厂函数的模块说明符，这些在TypeScript 4.1中引入。

使用 [React 17](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html) 库通过单独的导入支持一种新的JSX转换形式。

1️⃣ 比如：

```tsx
import React from 'react'

function App() {
  return <h1>Hello World</h1>
}
```

使用下面 `tsconfig.json`：

```json {5}
{
  "compilerOptions": {
    "target": "esnext",
    "module": "commonjs",
    "jsx": "react-jsx"
  }
}
```

生成的js文件：

```js
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
function App() {
    return (0, jsx_runtime_1.jsx)("h1", { children: "Hello World" });
}
```

2️⃣ 比如，你想使用 `"jsxImportSource": "preact"`，则需要使用下面 `tsconfig.json`：

```json {6-7}
{
  "compilerOptions": {
    "target": "esnext",
    "module": "commonjs",
    "jsx": "react-jsx",
    "jsxImportSource": "preact",
    "types": ["preact"]
  }
}
```

生成代码如下：

```js
function App() {
    return (0, jsx_runtime_1.jsx)("h1", { children: "Hello World" });
}
exports.App = App;
```

另外，你可以使用每个文件的pragma来设置此选项，比如：

```tsx {1}
/** @jsxImportSource preact */
export function App() {
  return <h1>Hello World</h1>;
}
```

该pragma将添加 `preact/jsx-runtime` 作为对 `_jsx` 工厂的导入。

🚨: 为了如你预期的那样工作，你的 `tsx` 文件必须包含一个 `export` 或 `import`，这样它才会被当做为一个模块。



::: tip

默认值：`react`

相关联配置：

- [jsx](#jsx-👍🚀)
- [jsxFactory](#jsxfactory)

:::



## `lib` 👍🚀

TS对内置的JS APIs（比如 `Math`）包含一组默认的类型定义，也提供了对浏览器环境（比如 `document`） 的类型定义😎。TS也包含新的JS APIs功能，以匹配你指定的 [target](https://www.typescriptlang.org/tsconfig#target)；比如，对 `Map` 的定义只在 `target` 是 `ES6` 以上才能访问。

🤔 你可能基于以下几个原因去改变这个配置：

- 你的程序不是运行在浏览器中，因此你不想要 `dom` 类型定义
- 你的运行时平台提供了特定的JS API对象（可能通过 polyfills），但是没有对给定ECMAScript版本提供完整的语法支持
- 存在对高阶的ECMAScript版本提供了一些但是不全的polyfills或原生实现。

在TS4.5中，lib文件可以被npm modules覆写，[supporting lib from node_modules](https://devblogs.microsoft.com/typescript/announcing-typescript-4-5-beta/#supporting-lib-from-node_modules)

🚀 高阶库：



| 名称       | 内容                                                         |
| ---------- | ------------------------------------------------------------ |
| ES5        | 所有ES3 & ES5功能核心定义                                    |
| ES2015     | ES6中额外的APIs - `array.find`, `Promise`, `Proxy`, `Symbol`, `Map`, `Set`, `Reflect`等 |
| ES6        | `ES2015` 的别名                                              |
| ES2016     | `arry.include` 等                                            |
| ES7        | `ES2016` 的别名                                              |
| ES2017     | `Object.entries`, `Object.values`, `Atomics`, `SharedArrayBuffer`, `date.formatToParts`, `TypeArray` 等 |
| ES2018     | `async iterables`, `promise.finally`, `Intl.PluralRules`, `regexp.groups` 等 |
| ES2019     | `array.flat`, `array.flatMap`, `Object.fromEntries`, `string.trimStart`, `string.trimEnd` 等 |
| ES2020     | `string.matchAll` 等                                         |
| ES2021     | `promise.any`, `string.replaceAll` 等                        |
| ESNext     | 跟着最新JS规范变化                                           |
| DOM        | [DOM](https://developer.mozilla.org/docs/Glossary/DOM) 定义 - `window`, `document` 等 |
| WebWorker  | [WebWorker](https://developer.mozilla.org/docs/Web/API/Web_Workers_API/Using_web_workers) 上下文APIs |
| ScriptHost | [Windows Script Hosting System](https://wikipedia.org/wiki/Windows_Script_Host) APIs |

🚀 单独的库组件：

- `DOM.Iterable`
- `ES2015.Core`, `ES2015.Collection`, `ES2015.Generator`, `ES2015.Iterable`, `ES2015.Promise`, `ES2015.Porxy`, `ES2015.Reflect`, `ES2015.Symbol`, `ES2015.Symbol.WellKnown`
- `ES2016.Array.Include`
- `ES2017.object`, `ES2017.Intl`, `ES2017.Intl`, `ES2017.SharedMemory`, `ES2017.String`, `ES2017.TypedArrays`
- `ES2018.Intl`, `ES2018.Promise`, `ES2018.RegExp`
- `ES2019.Array`, `ES2019.Object`, `ES2019.String`, `ES2019.Symbol`
- `ES2020.String`, `ES2020.Symbol.wellknow`
- `ES2021.Promise`, `ES2021.String`, `ES2021.Weakref`
- `ESNext.AsyncIterable`, `ESNext.Array`, `ESNext.Intl`, `ESNext.Symbol`

这个列表可能会过期，可通过 [TS源码](https://github.com/microsoft/TypeScript/tree/main/lib) 查看完整列表。



::: tip 💡

相关联配置：

- 

:::





## `moduleDetection`

有3个选项：

- `"auto"`: TS不仅查看导入和导出语句，当运行 [module](./modules#module-👍) 为 `nodenext | node16`时， 同时也会查看 `package.josn` 中的 `"type"` 属性是否设置为了 `"module"`，并且在 `jsx: "react-jsx"` 时检查当前文件是否是一个 JSX 文件。
- `"legacy"`: 这个行为通TS4.6和之前版本，使用导入和导出语句决定文件是否是一个模块
- `"force"`: 确保每个非声明文件都被当做为一个模块



::: tip 💡

默认值：`"auto"` - 把含有 `imports` | `exports` | `import.meta` | `jsx`（使用 `react-jsx` 的 `jsx`） | `ems`（使用 `module: node16+`） 格式的文件当做是模块

可能值：

- `allow`
- `auto`
- `force`

:::



## `noLib` 👍

禁用自动包含任何库文件。

::: warning

如果设置了这个值， `lib` 配置将被忽略。

:::



如果没有一组关键原始类型的接口，TypeScript无法编译任何东西，比如:Array、Boolean、Function、IArguments、Number、Object、RegExp和String。如果你使用`noLib`，你应该包含你自己的类型定义。



::: tip 💡

相关联配置：

- [lib](#lib-👍🚀)

:::





## `reactNamspace`



请改用[jsxFactory](#jsxfactory)。当目标为TSX文件react时指定`createElement`调用的对象。



::: tip 💡

默认值： `React`

:::



## `target` 👍🚀🚀

现代浏览器支持所有ES6功能，因此 `ES6` 是一个好的选择😎。如果你的代码部署在较老的环境，则可以使用更低版本目标；如果在更新的环境，则可以使用更高版本的目标。

`target` 设置改变了哪些JS特性被降级，哪些保持原样。比如，如果 `target` 是 `ES6` 或更低版本，箭头函数 `() => this` 将会转换为等价的 `function` 表达式。

改变 `target` 也会改变 [lib](#lib-👍🚀) 的默认值。如果你愿意，你也可以混合和匹配 `target` & `lib`，但是为了方便，你可以只设置 `target`😎。

🚀🚀 对于Node这种开发者平台，取决于平台和其版本，`target` 存在底线。你可以在 [tsconfig/bases](https://github.com/tsconfig/bases#centralized-recommendations-for-tsconfig-bases) 找到一些社区组织的TSConfigs，上面存在一些通用平台及其版本的通用配置。



特别的 `ESNext` 值指TS所支持的最高版本。应当谨慎使用这个值，因为它意味着，不同版本的TS支持的东西可能是不一样的，这使得升级变得不可预测。



::: tip 💡

默认值： `ES3`

可能值：

- `es3`
- `es6/es2015`
- `es2016`
- `es2017`
- `es2018`
- `es2019`
- `es2020`
- `es2021`
- `es2022`
- `esnext`

:::





## `useDefineForClassFields`

该标志用于迁移到即将到来的类字段标准版本。

TypeScript在TC39认可类字段之前很多年就引入了类字段。即将发布的最新版本的规范与TypeScript的实现有不同的运行时行为，但语法相同。

这个标志会切换到即将到来的ECMA运行时行为。

你可以阅读 [TS3.7 发布注意事项](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#the-usedefineforclassfields-flag-and-the-declare-property-modifier) 了解更多。



::: tip 💡

默认值：

- 如果 [target](#target-👍🚀🚀) 是 `ES2022` 或 更高版本，包括 `ESNext`，则默认是 `true`；否则为 `false`

:::



2022年08月21日21:06:53

