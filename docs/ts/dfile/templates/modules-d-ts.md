---
title: Modules .d.ts
---
[[toc]]



## 1️⃣ 常见CommonJS模式

使用CommonJS模块的模式是使用 `module.exports` 描述导出的内容。比如，下面模块导出一个函数和一个数字常量：

```javascript {7-11}
const maxInterval = 12

function getArrayLength(arr) {
  return arr.length
}

module.exports = {
  getArrayLength,
  maxInterval
}
```

可以使用下面 `.d.ts` 描述上面模块：

```typescript
export function getArrayLength(arr: any[]): number;
export const maxInterval: 12;
```

TypeScript Playground可以展示JS代码对应的 `.d.ts` 文件，你可以[试一试](https://www.typescriptlang.org/play?useJavaScript=true#code/GYVwdgxgLglg9mABAcwKZQIICcsEMCeAMqmMlABYAUuOAlIgN6IBQiiW6IWSNWAdABsSZcswC+zCAgDOURAFtcADwAq5GKUQBeRAEYATM2by4AExBC+qJQAc4WKNO2NWKdNjxFhFADSvFquqk4sxAA)。

`.d.ts` 文件特意看起来像 [ES Module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) 语法。ESM 2019被通过，但是它很早就可以被转译器转译，如果你使用ESM模块的JS代码库：

```js
export function getArrayLength(arr) {
  return arr.length
}
```

则会有如下 `.d.ts` 文件：

```typescript
export function getArrayLength(arr: any[]): number;
```



### 1.1 默认导出（Default Exports）

1.在CommonJS中，你可以将任何值作为默认导出，比如，下面正则表达式模块：

```js
module.exports = /hello( world)?/
```

可以描述为如下 `.d.ts`：

```typescript
declare const helloWorld: RegExp;
export default helloWorld;
```

2.或者默认导出一个数字：

```js
module.exports = 3.142
```

`.d.ts`:

```typescript
declare const pi: number;
export default pi;
```

3.CommonJS导出的风格包含导出一个函数。因为函数同样也是对象，因此也可以在函数上添加其它的属性，然后包含在导出中：

```js {5, 8}
function getArrayLength(arr) {
  return arr.length
}

// 💡 函数也是对象，因此也可以在上面添加属性
getArrayLength.maxInterval = 12

// 然后导出该函数
module.exports = getArrayLength
```

`.d.ts`:

```typescript
export default function getArrayLength(arr: any[]): number;
export const maxInterval: 12;
```

::: warning

注意，在 `.d.ts` 文件中使用 `export default` 需要开启 *[*"esModuleInterop": true*](../../tsconfig/compiler/interop-constraints.html#esmoduleinterop-👍🚀🚀)*。

:::

如果你项目没有开启 `esModuleInterop: true`, 比如当你给Definitely Typed提交一个PR时，你必须使用 `export=` 语法代替。老的语法虽然很难使用，但是却兼容性很好。上面语法换成 `export=` 写法如下：

```typescript
declare function getArrayLength(arr: any[]): number;
declare namespace getArrayLength {
  declare const maxInterval: 12;
}
export = getArrayLength;
```

查看 [Module: Functions](./modules-function) 查看工作细节，以及 [Module reference](../../reference/modules) 页面。



## 2️⃣ ⭐ 处理多种使用导入

📚 有很多种导入模块的方式：

```js
const fastify = require('fastify')
const { fastify } = require('fastify')
import fastify = require('fastify')
import * as Fastify from 'fastify'
import { fastify, FastifyInstance } from 'fastify'
import fastify from 'fastify'
import fastify, { FastifyInstance } from 'fastify'
```

😅 要涵盖所有这些导入方式，需要JS代码实际支持所有这些模式。为了支持很多模式，CommonJS模块可能需要看起来如下：

```js {9,11,13}
class FastifyInstance {}

function fastify() {
  return new FastifyInstance()
}

fastify.FastifyInstance = FastifyInstance

// 允许 { fastify }
fastify.fastify = fastify
// 允许严格ESM支持
fastify.default = fastify
// 设置默认导出
module.exports = fastify
```



## 3️⃣ Modules中的类型

你可能想给你的JS代码提供还不存在的类型：

```js
function getArrayMetadata(arr) {
  return {
    length: getArrayLength(arr),
    firstObject: arr[0],
  }
}
module.exports = {
  getArrayMetadata,
}
```

可以描述为：

```typescript
export type ArrayMetadata = {
  length: number;
  firstObject: any | undefined;
};

export function getArrayMetadata(arr: any[]): ArrayMetadata;
```

这个例子是一个 [使用泛型](https://www.typescriptlang.org/docs/handbook/generics.html#generic-types) 场景的很好例子，泛型可提供更丰富的类型信息：

```typescript
export type ArrayMetadata<ArrType> = {
  length: number;
  firstObject: ArrType | undefined;
};

export function getArrayMetadata<ArrType>(arr: ArrType[]): ArrayMetadata<ArrType>;
```

现在数组的类型传播到`ArrayMetadata`类型。

导出的类型可以被模块的使用者在TypeScript代码或[JSDoc imports](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html#import-types)中使用`import`或`import type`来复用。



### 3.1 模块代码中的Namespaces

试图描述JavaScript代码的运行时关系可能很棘手。当类似ES module的语法没有提供足够的工具来描述导出（`exports`）时，你可以使用命名空间（`namespaces`）。

例如，你要描述一个很复杂的类型，你选择在你的 `.d.ts` 文件中对该类型使用命名空间：

```typescript
// 这表示运行时可访问的JS类
export class API {
  constructor(baseURL: string);
  getInfo(opts: API.InfoRequest): API.InfoResponse;
}

// 这个命名空间与API类合并，并允许使用者和这个文件具有嵌套在它们自己的部分中的类型
declare namespace API {
  export interface InfoRequest {
    id: string;
  }
  
  export interfeace InfoResponse {
    width: number;
    height: number;
  }
}
```

想理解namespaces在 `.d.ts` 文件中的工作原理，可阅读 [.d.ts deep dive](../deep-dive)。



### 3.2 可选的全局使用（Optional Global Usage）

你可以使用 `export as namespace` 来声明你的模块在`UMD`上下文中的全局作用域是可用的😎：

```typescript
export as namespace moduleName;
```



## 4️⃣ ⭐ 参考示例（Reference Example）

为了演示将上面碎片化的部分如何一起运作的，下面是制作一个新模块时可作为参考的 `.d.ts` 样板：

```typescript
// 对 [~THE LIBRARY NAME~] [~可选版本号~] 的类型定义
// Project: [~项目名~]
// Definitions by: [~你的名字~] <[~URL FOR YOU~]

/*~ 💡这是一个模块模板文件. 你应该将它重命名为 index.d.ts
 *~ 并将它放在和模块同名的文件夹中
 *~ 例如, 如果你正在给 "super-greeter" 文件写类型声明
 *~ 则该文件应该是 'super-greeter/index.d.ts'
 */

/*~ 如果这个模块是一个暴露了全局变量为 `myLib` 的UMD模块
 *~ 它在没有module loader的环境下被加载， 在这里将其声明为全局.
 *~ 否则的话，删除这个声明
 */
export as namespace myLib; // UMD 没有module loader的环境，将其声明为全局

/*~ 如果这个模块导出函数，则像下面那样声明
 */
export function myFunction(a: string): string;
export function myOtherFunction(a: number): number;

/*~ 你可以声明通过导入本模块可用的类型 */
export interface SomeType {
  name: string;
  length: number;
  extras?: string[];
}

/*~ 你可以使用 const, let, 或 var 声明模块属性 */
export const myField: number;
```



### 4.1 🚀库文件结构（Library file layout）

📚 声明文件的结构应该映射你库的结构。

一个库可由多个模块组成，比如：

```bash
myLib
  +---- index.js
  +---- foo.js
  +---- bar
         +---- index.js
         +---- baz.js
```

这些可以通过下面方式导入：

```js
var a = require("myLib");
var b = require("myLib/foo");
var c = require("myLib/bar");
var d = require("myLib/bar/baz");
```

🚀 则你的声明文件应当是：

```bash
@types/myLib
  +---- index.d.ts
  +---- foo.d.ts
  +---- bar
         +---- index.d.ts
         +---- baz.d.ts
```



### 4.2 测试你的类型

如果你计划将这些更改提交到 DefinitelyTyped上供其他人使用，我们推荐你：

::: tip

1. 在 `node_modules/@types/[libnmae]` 创建一个新的文件夹
2. 在该文件夹下创建一个 `index.d.ts` 文件，然后将示例拷贝进去
3. 看看模块哪些地方是不能用的，然后开始补充 index.d.ts 文件
4. 当一切OK后，克隆 [DefinitelyTyped/DefinitelyTyped](https://github.com/DefinitelyTyped)，然后按照README指示

:::

或者：

::: tip

1. 在你的项目根创建一个新文件：`[libname].d.ts`
2. 添加 `declare module "[libname]" {}`
3. 在声明模块的括号内添加上面模板，看看哪些地方不能用

:::



原文档：

- [Module .d.ts](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html)

2022年09月03日09:44:54
