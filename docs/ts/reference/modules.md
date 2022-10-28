---
title: modules
---

[[toc]]



从ES2015开始，JS有了模块（`modules`）的概念，TypeScript共享了这一概念。

- 模块在自己的作用域被执行，而不是全局作用域
- 这意味着，在模块中声明的变量，函数，类等，如果没有使用某种导出方式显式的导出的话，它们对外部是不可见的
- 从不同模块导出的，必须使用某种导入方式才能使用其它模块中的变量，函数，类等
- 模块是声明式的，模块之间的关系是根据文件级别的导入和导出来指定的。
- 模块使用模块加载器导入其它模块。`在运行时，模块加载器在模块被执行前负责定位和执行模块依赖`
  - JS和Node.js中有名的模块加载器有：Node.js中对 [Common.js](https://wikipedia.org/wiki/CommonJS) 的加载器; Web中的 [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md) 的 [RequireJS 加载器](http://requirejs.org/)
- 📚在TypeScript中，和ES2015一样，任何包含了顶层 `import` 或 `export` 的文件都可被认为是一个模块；相反的，不包含顶层 `import` 或 `export` 声明的文件，被当做是脚本（script），它们的内容是全局作用域可访问的（当然，模块也能访问这些全局脚本）。



# ⚡ 导出（Export）

## 导出一个声明

任何声明（比如变量，函数，类，类型别名，接口）都可以通过添加 `export` 关键词的方式被导出。

`StringValidator.ts`:

```typescript
export interface StringValidator {
  isAcceptable(s: string): boolean;
}
```

`ZipCodeValidator.ts`:

```typescript
import { StringValidator } from './StringValidator'

export const numberRegexp = /^[0-9]+$/
export class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s)
  }
}
```

## 导出语句

当导出需要为消费者重命名时，导出语句很便利😎，因此上面的例子也可被写为：

```typescript {7-8}
class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s)
  }
}

export { ZipCodeValidator }
export { ZipCodeValidator as mainValidator } // 重命名导出
```

## ⭐ 重新导出

一个模块经常会扩展其它模块，并且部分暴露它们的某些功能。一个重导出（`re-export`）不会在本地导入或者引入一个局部变量。

`ParseIntBasedZipCodeValidator.ts`:

```typescript {7=8}
export class ParseIntBasedZipCodeValidator {
  isAcceptable(s: string) {
    return s.length === 5 && parseInt(s).toString() === s
  }
}

// 💡 导出原有的validator，但是对它进行重命名
export { ZipCodeValidator as RegExpBasedZipCodeValidator } from './ZipCode'
```

::: tip

一个模块能(可选的)包裹一个或多个模块，然后使用 `export * from 'module'` 的语法合并所有的导出🤩。

:::

`AllValidators.ts`: 一次性导出多个模块

```typescript {3,6-8}
export * from './StringValidator' // 导出 'StringValidator' 接口

// 导出 ZipCodeValidator 类 和 ‘numberRegexp’ 常量
export * from './ZipCodeValidator'

// 导出 'ParseIntBasedZipCodeValidator' 类
// 并重导出 'RegExpBasedZipCodeValidator' 作为 
//    ‘ZipCodeValidator.ts’ 模块中 'ZipCodeValidator' 类的别名
export * from './ParseIntBasedZipCodeValidator'
```

# ⚡ 导入（Import）

导入和从模块中导出一样的简单。通过下面某种 `import` 形式可导入一个导出的声明。



## 从一个模块中导入单一导出

```typescript {1}
import { ZipCodeValidator } from './ZipCodeValidator'

let myValidator = new ZipCodeValidator()
```

导入也可以重命名😎：

```typescript {1}
import { ZipCodeValidator as ZCV } from './ZipCodeValidator'

let myValidator = new ZCV() // 使用重命名的导入
```

## 将整个模块导入到一个变量上

然后使用该变量访问模块上的导出：`import * as xxx from mmmm` 语法

```typescript {1}
import * as validator from './ZipCodeValidator'

let myValidator = new validator.ZipCodeValidator()
```



## ⭐ 导入模块只为模块副作用

尽管不推荐这种做法😅，某些模块可设置一些能被其它模块使用的全局状态。这些模块可能没有任何导出或者消费者对其导出不感兴趣。为了导入这些模块，可以使用：

```typescript
import './my-module.js'
```



## ⭐ 导入类型

在TS3.8之前，你可以使用 `import` 导入类型，`TS3.8+` 后，既可以使用 `import` 导入类型，也可以使用 `import type` 方式导入：

```typescript {4-5}
// 复用相同的导入
import { APIResponseType } from './api'

// 🤩 显式的使用 import type
import type { APIResponseType } from './api'
```

`import type` 总是确保类型从JS中被移除，像 `Babel` 这样的工具可通过 [isolatedModules](../tsconfig/compiler/interop-constraints.html#isolatedmodules-👍🚀) 编译选项更好的分析你的代码😎。可阅读 [TS3.8 release notes](https://devblogs.microsoft.com/typescript/announcing-typescript-3-8-beta/#type-only-imports-exports)



## 默认导出

每个模块可以可选的导出 `一个` `default` 导出。默认导出通过关键词 `default` 标记📌：

- 每个模块只能存在一个默认导出
- 默认导出的导入方式也不同

默认导出很便利。比如，像 `jQuery` 可能存在一个 `jQuery` 或 `$` 的默认导出，然后我们将其导入到 `jQuery` 或 `$` 下。

[jQuery.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/jquery/JQuery.d.ts):

```typescript {2}
declare let $: JQuery
export default $
```

`App.ts`:

```typescript {1}
import $ from 'jquery'

$("button.continue").html("Next Step...")
```

类和函数声明可以直接编写为默认导出。

::: tip

默认导出的函数和类的名字是可选的，可写可不写

:::

`ZipCodeValidator.ts`: 默认导出一个类

```typescript {1}
// export default xxx 的方式默认导出类
export default class ZipCodeValidator {
  static numberRegexp = /^[0-9]+$/
  isAcceptable(s: string) {
    return s.length === 5 && ZipCodeValidator.numberRegexp.test(s)
  }
}
```

`Test.ts`:

```typescript
import validator from ' ./ZipCodeValidator'

let myValidator = new validator()
```

或者

🌰 `StaticZipCodeValidator.ts`: 默认导出一个函数

```typescript {2}
const numberRegexp = /^[0-9]+$/
// 💡 默认导出 可以省略函数名或类名
export default functiion (s: string) {
  return s.length === 5 && numberRegexp.test(s)
}
```

`Test.ts`:

```typescript
import validate from './StaticZipCodeValidator' 

let strings = ['a', 'b', 'c']

// 使用函数验证
strings.forEach(s => {
  console.log(`"${s}" ${validate(s) ? 'matches' : 'does not match'}`)
})
```

默认导出也可以用于值：

🌰  `OneTwoThree.ts`:

```typescript
export default '123'
```

`Log.ts`

```typescript
import num from './OneTwoThree'

console.log(num)
```



## ⭐ Export all as x

`TS3.8+` 可以使用 `export * as ns` 作为重新导出另一个模块的简写方式：

```typescript
export * as utilities from './utilities'
```

💡 这将从一个模块中获取所有依赖项，并使其成为一个导出字段，可以通过下面方式导入：

```typescript
import { utilities } from './index'
```



## ⭐  `export =` 和 `import = require()`

📚CommonJS和AMD都有 `exports` 对象包含模块所有导出的概念。

它们也支持使用自定义单一对象 替换 `exports` 的做法。`默认导出是用来替代这种行为的`。但是，这2者是不兼容的😅。TypeScript 支持 `export =` 来建模传统的CommonJS和AMD工作流程。

📚 `export =` 语法指定一个从模块中导出的单一对象。可以是一个类，接口，namespace，函数或枚举。

::: tip

当使用 `export = ` 导出一个模块时，必须要使用TS独有的 `import module = require('module')` 方式导入该模块。

:::

🌰 `ZipCodeValidator.ts`:

```typescript {8}
let numberRegexp = /^[0-9]+$/
class ZipCodeValidator {
  isAccetable(s: string) {
    return s.length === 5 && numberRegexp.test(s)
  }
}

// 这种方式现在其实已经不常见了
export = ZipCodeValidator
```

`Test.ts`:

```typescript
// 💡 TS特有的导入方式
import zip = require('./ZipCodeValidator')

let strings = ['a', 'b', 'c']

let validator = new zip()

// 使用函数验证
strings.forEach(s => {
  console.log(`"${s}" ${validate.isAcceptable(s) ? 'matches' : 'does not match'}`)
})
```

# 模块代码生成

取决于模块编译时指定的目标，编译器将生成合适的模块加载系统的代码： Node.js的CommonJS，UMD，SystemJS，或ESM。要了解生成代码中 `define`, `require`, `register`调用都做了写什么，可以参考每种模块加载器的文档。

下面简单的例子展示了，如何将导入和导出期间使用的名称转换为模块加载代码。

🌰

`SimpleModule.ts`:

```typescript
import m = require('mod')
export let t = m.something + 1
```

1️⃣ `AMD/RequireJS` SimpleModule.js:

```js
define(['require', 'exports', './mod'], function(require, exports, mod_1) {
  exports.t = mod_1.something + 1
})
```

2️⃣ `CommonJS/Node` SImpleModule.js

```js
var mod_1 = require('./mod')
exports.t = mod_1.something + 1
```

3️⃣ `UMD` SimpleModule.js

```js
(function (factory) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    // CommonJS
    var v = factory(require, exports)
    if (v !== undefined) module.exports = v
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['require', 'exports', './mod'], factory)
  }
})(function (require, exports) {
  var mod_1 = require('./mod')
  exports.t = mod_1.something + 1
})
```

4️⃣ `SystemJS` SimpleModule.js

```js
System.register(['./mode', function(exports_1) {
  var mod_1
  var t
  return {
    setters: [
      function (mod_1_1) {
        mod_1 = mod_1_1
      },
    ],
    execute: function() {
      exports_1('t', (t = mod_1.something + 1))
    }
  }
}])
```

5️⃣ `ESM` SimpleModule.js

```js
import { something } from './mod'
export var t = something + 1
```

> 简单示例

下面，我们对前面示例中使用的Validator实现进行了整合，以便只从每个模块导出一个命名导出。

为了能编译，我们必须在命令行中指定模块目标。对Node.js，使用 `--module commonjs`；对于 require.js，使用 `--module amd`。比如：

```bash
tsc --module commonjs Test.ts
```

当编译完成，每个模块将变为一个单独的 `.js` 文件。与引用标记一样，编译器将根据import语句编译相关文件。

Validation.ts

```typescript
export interface StringValidator {
  isAcceptable(s: string): boolean
}
```

LettersOnlyValidator.ts

```typescript
import { StringValidator } from './Validation'

const lettersRegexp = /^[A-Za-z]+$/

export class LettersOnlyValidator implements StringValidator {
  isAcceptable(s: string) {
    return lettersRegexp.test(s);
  }
}
```

ZipCodeValidator.ts

```typescript
import { StringValidator } from "./Validation";
const numberRegexp = /^[0-9]+$/;
export class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s);
  }
}
```

Test.ts

```typescript
import { StringValidator } from './Validation'
import { ZipCodeValidator } from "./ZipCodeValidator";
import { LettersOnlyValidator } from "./LettersOnlyValidator";

// Some samples to try
let strings = ["Hello", "98052", "101"];
// Validators to use
let validators: { [s: string]: StringValidator } = {};
validators["ZIP code"] = new ZipCodeValidator();
validators["Letters only"] = new LettersOnlyValidator();
// Show whether each string passed each validator
strings.forEach((s) => {
  for (let name in validators) {
    console.log(
      `"${s}" - ${
        validators[name].isAcceptable(s) ? "matches" : "does not match"
      } ${name}`
    );
  }
});
```



## 🚀 可选模块加载和其它高级加载场景

某些情况下，你可能只想在某个条件下才加载模块。在TypeScript中，我们可以下面的模式实现这一功能，和其他高级加载场景，以直接调用模块加载器而不丢失类型安全。

编译器会检测是否每个模块在生产的JS中被使用。如果模块标识符只被用作是注解的一部分，而不是作为表达式使用 ，则生产的JS代码不会对该模块调用 `require`。这种消除未使用引用有助于提升性能，并允许对这些模块进行可选性加载。

这种模式的核心思想是：`import id = require('...')` 语句允许我们访问模块暴露的类型。

模块加载器被动态调用（通过 `require`），正如下面的 `if` 语句。`这利用引用消除优化，因此模块只有需要时才会被加载。` 要想这种模式能运作，重要的是，通过导入定义的符号只用于类型位置(即永远不要放在最终生成JS的地方)。

为了维持类型安全，我们可以使用 `keyof` 关键词。`keyof` 关键词，当用在类型位置时，会产生该值的类型，在这里是该模块的类型。



> Node.js 动态模块加载

```typescript {1,6-7}
declare function require(moduleName: string): any;

import { ZipCodeValidator as Zip } from './ZipCodeValidator'

if (needZipValidation) { // 条件加载
  // typeof 用于类型位置
  let ZipCodeValidator: typeof Zip = require('./ZipCodeValidator')
  let validator = new ZipCodeValidator()
  if (validator.isAcceptable('...')) {
    // ...
  }
}
```

> Sample: require.js中的动态模块加载

```typescript
declare function require(
  moduleNames: string[],
  onLoad: (...args: any[]) => void
): void;

import * as Zip from './ZipCodeValidator'

if (needZipValidation) {
  require(['./ZipCodeValidator'], (ZipCodeValidator: typeof Zip) => {
    let validator = new ZipCodeValidator.ZipCodeValidator()
    if (validator.isAcceptable('...')) {
      // ...
    }
  })
}
```

> Sample: system.js中的动态模块加载

```typescript {6-7}
declare const System: any

import { ZipCodeValidator as Zip } from './ZipCodeValidator'

if (needZipValidation) {
  // 注意System这个语法
  System.import('./ZipCodeValidator').then((ZipCodeValidator: keyof Zip) => {
    var x = new ZipCodeValidator()
    if (validator.isAcceptable('...')) {
      // ...
    }
  })
}
```

::: tip

译者注：ESM因为是静态导入，对于动态的导入需要特殊的处理才行。

:::



## 📚 和其它JS库一起工作

为了描述非TypeScript库的形状，我们需要声明该库暴露的API。

::: tip 📚

我们将那些只定义没有实现的声明为 **环境（`ambient`）**。eg:

```typescript
declare function add(a: number, b: number);
```

一般情况下，它们都定义在声明文件中（即 `.d.ts` 文件）。如果你熟悉 C/C++，你可以把它们理解为 `.h` 文件。

:::

## 📚 环境模块（`Ambient Modules`）

在Node.js中，大多数任务都是通过加载一个或多个模块完成的。

::: tip 💡

我们可以将每个模块都通过顶层的导出声明，将模块定义在自己的 `.d.ts` 文件中，但是将它们都写入到一个大的 `.d.ts` 声明文件中会更加的方便🚀。

为了这样做，我们使用一个类似环境命名空间的构造，到我们使用的是 `module` 关键词，并将模块名用引号包裹起来，这样之后我们便可以导入它了。

:::

🌰 `node.d.ts` （简化版本节选）

```typescript
// 用引号将 模块名 包裹起来
declare module "url" {
  export interface Url {
    protocol?: string;
    hostname?: string;
    pathname?: string;
  }
  
  export function parse(
  	urlStr: string,
    parseQueryString?: boolean,
    slashedDenoteHost?: boolean
  ): Url
}
  
declare module "path" {
  export function normalize(p: string): string;
  export function join(...paths: any[]): string;
  export var sep: string;
}
```

💡现在我们可以使用 `/// <reference> node.d.ts` ，然后使用 `import url = require('url')` 或 `import * as URL from 'url'`的方式加载该模块：

```typescript {1,3}
/// <reference path="node.d.ts" />

import * as URL from 'url'

let myUrl = URL.parse('https://www.typescript.com')
```

### ⭐ 速写环境模块

在使用一个新的模块前，如果你不想花费时间编写声明，可以使用简写声明的方式快速开始：

`declarations.d.ts`

```typescript
declare module 'hot-new-module';
```

来自简写模块的所有导入都是 `any` 类型：

```typescript
import x, { y } from 'hot-new-module';
```



### 🤔 通配模块声明

像 [SystemJS](https://github.com/systemjs/systemjs/blob/master/docs/module-types.md) 和  [AMD](https://github.com/amdjs/amdjs-api/blob/master/LoaderPlugins.md) 这样的模块加载器，允许非JS内容被导入😎。`它们通常会使用前缀或后缀特殊加载语法`。通配模块声明可用于覆盖下面这些场景：

```typescript
// 后缀方式
declare module "*!text" {
  const content: string;
  export default content;
}

// 前缀方式
declare module "json!*" {
  const value: any;
  export default value;
}
```

现在你便可以导入匹配了 `"*!text"` 或 `"json!*"` 的东西了：

```typescript
import fileContent from './xyz.txt!text'
import data from 'json!http://example.com/data.json'
console.log(data, fileContent)
```



### UMD模块

有些库被设计为被多种模块加载器加载或者不被模块加载器加载（全局变量的方式）。它们就是著名的 [UMD](https://github.com/umdjs/umd) 模块。`这些库要么通过导入当方式，要么通过全局变量的方式被访问使用。`

🌰

`math-lib.d.ts`

```typescript {2}
export function isPrime(x: number): boolean;
export as namespace mathLib; // 注意这个语法 它用于全局方式
```

这个库可以通过import方式被使用：

```typescript
import { isPrime } from 'math-lib'

isPrime(2)
mathLib.isPrime(2) // ❌ 不能使用全局定义
```

它可用以一个全局变量方式被使用，但只能在脚本中（脚本表示文件中不存在imports 或exports）:

```js
mathLib.isPrime(2)
```

# 结构化模块指南

## 尽可能在最顶层导出

使用你模块中导出内容的消费者应该尽可能的减少障碍。添加太多层级会导致臃肿，因此在规划结构时要当心。

从你模块中当初命名空间就是增加过多层级的例子😅。尽管命名空间有其使用场景，它会给你模块的使用添加一层额外的层级。这对用户来说可能会很痛苦，增加了不必要性。

导出的类的静态方法也有同样的问题 - 类本身就添加一层。除非增加表达性或很清晰的使用意图，尽可能简单化。

> 如果你只导出单一 `class` 或 `function`， 使用 `export default`

和 `尽可能在顶层导出` 一样，使用默认导出，这样可以减轻模块消费者的阻力。如果一个模块的主要目的就是维持一个特定的导出，则可以考虑以默认导出的形式导出。这使导入更加的简单。

🌰

`MyClass.ts`

```typescript
export default class SomeType {
  constructor() {}
}
```

`MyFunc.ts`

```typescript
export default function getThing() {
  return 'Thing'
}
```

消费者 `Consumer.ts`

```typescript
// 💡导入默认导出更加的方便
import t from './MyClass'
import f from './MyFunc'

let x = new t()
console.log(f())
```

::: tip

消费者可以对默认导出进行任意命名。

:::



> 如果你多出多个对象，将它们都放在最顶层

`MyThings.ts`

```typescript
export class SomeType {
  // ...
}

export function someFunc() {
  // ...
}
```



> 显式列举导入名

`Consumer.ts`

```typescript
import { SomeType, someFunc } from './MyThings'

let x = new SomeType()
let y = someFunc()
```



> 如果很多东西，可采用命名空间导入模式

`MyLargeModule.ts`

```typescript
export class Dog {}
export class Cat {}
export class Tree {}
export class  Flower {}
```

`Consumer.ts`

```typescript
import * as myLargeModule from './MyLargeModule.ts'

let x = myLargeModule.Dog()
```

## ⭐ 重新导出进行扩展

你可能经常需要对模块功能进行扩展。一个常见的JS模式是通过 `extensions` 的方式增强 原来对象，类似于JQuery扩展一样。

::: tip

`正如我们之前提到的，模块不会像全局命名空间对象一样进行合并`。

👍 推荐的方式是，不改变原始对象，而是导出一个包含了新功能的新实体。

:::

假设一个定义在模块 `Calculator.ts`中的简单的计算器实现。该模块同时也导出了一个辅助函数，通过输入字符串的方式测试计算器的功能。

`Calculator.ts`

```typescript
export class Calculator {
  private current = 0;
  private memory = 0;
  private operator: string;
  
  protected processDigit(digit: string, currentValue: number) {
    if (digit >= '0' && digit <= '9') {
      return currentValue * 10 + (digit.charCodeAt(0) - '0'.charCodeAt(0))
    }
  }
  
  protected processOperator(operator: string) {
    if (['+', '-', '*', '/'].indexOf(operator) >= 0) {
      return operator
    }
  }
  
  protected evaluateOperator(
    operator: string,
    left: number,
    right: number
  ): number {
    switch (this.operator) {
      case '+':
        return left + right
      case '-':
        return left - right
      case '*':
        return left * right
      case '/':
        return left / right
    }
  }
  
  private evaluate() {
    if (this.operator) {
      this.memory = this.evaluateOperator(
        this.operator,
        this.memory,
        this.current
      )
    } else {
     this.memory = this.current
    }
    this.current = 0
  }
  
  public handleChar(char: string) {
    if (char === '=') {
      this.evaluate()
      return
    } else {
      let value = this.processDigit(char, this.current)
      if (value !== undefined) {
        this.current = value
        return
      } else {
        let value = this.processOperator(char)
        if (value !== undefined) {
          this.evaluate()
          this.operator = value
          return
        }
      }
    }
    throw new Error(`Unsupported input: '${char}'`)
  }
  
  public getResult() {
    return this.memory
  }
}

export function test(c: Calculator, input: string) {
  for (let i = 0; i < input.length; i++) {
    c.handleChar(input[i])
  }
  console.log(`result of '${input}' is '${c.getResult()}'`)
}
```

下面使用导出的 `test` 进行测试：

TestCalculator.ts

```typescript
import { Calculator, test } from './Calculator'

let c = new Calculator()
test(c, '1+3*33/11=') // 9
```

下面对这个进行扩展，支持输入不是基于10进制的数字。创建一个 `ProgrammerCalculator.ts`

```typescript {36,38}
import { Calculator } from "./Calculator";
class ProgrammerCalculator extends Calculator {
  static digits = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  constructor(public base: number) {
    super();
    const maxBase = ProgrammerCalculator.digits.length;
    if (base <= 0 || base > maxBase) {
      throw new Error(`base has to be within 0 to ${maxBase} inclusive.`);
    }
  }
  protected processDigit(digit: string, currentValue: number) {
    if (ProgrammerCalculator.digits.indexOf(digit) >= 0) {
      return (
        currentValue * this.base + ProgrammerCalculator.digits.indexOf(digit)
      );
    }
  }
}
// 💡 导出扩展后的计算器，名字还是命名为 Calculator
export { ProgrammerCalculator as Calculator };
// 同样，重导出 test 函数
export { test } from "./Calculator";
```

新的模块 `ProgrammerCalculator` 导出一个类似原始 `Calculator` 模块的API，但并没有增强任何原始模块中的任何对象。测试：

TestProgrammerCalculator.ts

```typescript
import { Calculator, test } from './ProgrammerCalculator'

let c = new Calculator(2)
test(c, '001+010=') // 3
```



## 不要在模块中使用命名空间

当第一次使用基于模块的组织时，很有可能将导出内容额外用namespace包裹一层。模块拥有自己的作用域，只有导出的声明对外界可见。因此，在模块中使用namespace的价值不大😅。

在组织面前，namespaces对逻辑上将相关对象和类型组合在一起很便利。而模块已经通过文件系统的方式呈现。我们必须通过路径和文件名进行组织。

Namespaces对`全局作用域`避免命名冲突很重要。但这在模块中根本不是问题，因为同一个模块中，没有理由使用名称相同的对象。



## 危险信号

下面所有的都是模块结构的危险信号。如果你的模块满足以下条件，请确保不要使用namespace你的外部模块：

- 一个只有 `export namespace Foo {...}` 这样顶级声明的文件（移除 `Foo` 并将其内容都移到外层）
- 多个文件，它们顶层都有相同的 `export namespace Foo {}`（不要认为它们将合并成一个 `Foo`😅）



原文档：

- [Modules](https://www.typescriptlang.org/docs/handbook/modules.html)

2022年09月25日09:45:01