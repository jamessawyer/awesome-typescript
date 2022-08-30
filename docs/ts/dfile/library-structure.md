---
title: 库结构
---

[[toc]]



广义上讲，你组织声明文件的方式取决于库被使用的方式。在JS中，库可以通过多种方式被使用，因此你需要依据你使用的方式来书写声明文件，以便与之匹配。本指南讲解如何识别常见库模式，以及各种模式该如何书写声明文件。



每种主要库结构模式类型在Templates部分中都有一个对应的文件。你可以使用这些模板帮助你快速开始。



## 1️⃣ 识别库的类别（Identifying Kinds of Libraries）



首先，我们将回顾TypeScript声明文件可以表示的库的种类。我们将简要介绍如何`使用`每种类型的库，如何`编写`这些库，并列出一些来自现实世界的示例库。

识别一个库的结构是书写声明文件的第一步。我们将对如何依据库的`使用`和`代码`来识别库的结构给出提示。取决于库的文档和组织，有些文档可能比另一些文档要更简单，我们推荐最适合自己的。



## 2️⃣ 你应该看些什么？（What should you look for?）

当你在试图给一个库添加类型时问自己如下问题：

1. 你是如何获取该库的？
   1. 比如，你是通过npm还是CDN？
2. 你是如何导入该库的？
   1. 它是添加了一个全局对象？
   2. 使用了 `require` 还是 `import/export` 语句？



## 不同类型库的小的样例



## 3️⃣ 模块化库（Modular Libraries）



几乎所有现代Node.js库都归于模块家族。这种类型的库只能通过模块加载器（`module loader`）工作在JS环境。比如，`express` 只能在Node.js中使用，并且必须通过CommonJS `require` 函数加载。

ECMAScript2015（或ES6），CommonJS和RequireJS对 `导入模块（import a module）` 都有相似的概念。🌰例如，在JS CommonJS（Node.js）可通过下面方式导入：

```js
var fs = require('fs')
```

在TypeScript或ES6，`import` 关键词达到相同的目的：

```typescript
import * as fs from 'fs'
```

你通常会看到模块化库在它们的文档中包括这样一行：

```js
var someLib = require(someLib)
```

或者

```js
define(..., ['someLib'], function(someLib) {
  
})
```

至于全局模块，你可以通过某个 [UMD模块](https://www.typescriptlang.org/docs/handbook/declaration-files/library-structures.html#umd) 文档看看它们的示例，请确认你看过这种模块的代码或文档。



### 🚀 从代码识别模块库

模块化库至少包含下面一些代码：

- 无条件的调用 `require` 或 `define`
- 存在 `import * as a from 'b'` 或者 `export c` 这种声明
- 赋值给 `exports` 或 `module.exports`

有些比较少见的：

- 赋值给 `window` 或 `global` 属性



### 🚀 模块模板

模块存在4种模板：

- [module.d.ts](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html)
- [module-class.d.ts](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-class-d-ts.html)
- [module-function.d.ts](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-function-d-ts.html)
- [module-plugin.d.ts](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-plugin-d-ts.html)

你将首先阅读 [module.d.ts](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html) 来了解它们的工作方式。

1️⃣ 如果你的模块可以像函数一样调用，则使用 [module-function.d.ts](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-function-d-ts.html) 模块：

```js {2}
const x = require('foo')
// 🚨：作为函数调用 `x`
const y = x(42)
```

2️⃣ 如果你的模块可以通过 `new` 关键词进行构造，则使用 [module-class.d.ts](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-class-d-ts.html)：

```js {2}
const x = require('foo')
// 🚨：使用 `new` 操作符调用导入的变量
const y = new x('hello')
```

3️⃣ 如果你有个模块，当它被导入时，对其它模块做出改变，则使用 [module-plugin.d.ts](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-plugin-d-ts.html)：

```js {2}
const jest = require('jest')
require('jest-matchers-files')
```





## 4️⃣ 全局库（Global Libraries）

全局库是指可以在全局作用域被访问的库（`比如，不使用任何形式的 import`）。很多库简单的暴露一个或多个全局变量以供使用。比如，如果你使用jQuery，`$` 变量可以通过简单的引用它来使用：

```js
$(() => {
  console.log('Hello')
})
```

你通常会在一个全局库的文档中看到如何在HTML script标签中使用该库:

```html
<script src="http://a.great.cdn.for/someLib.js"></script>
```

👩‍🏫 现在，很多流行的全局可访问库实际上通过UMD库的方式编写的。UMD库文档很难和全局库文档进行区分，在写全局库声明文件前，请确认该库不是UMD形式的😅。



### 从代码识别全局库

全局库代码通常非常的简单，一个全局的 `"Hello, world"` 库可能看起来像这样：

```js
function createGreeting(s) {
  return 'Hello, ' + s
}
```

或者像这样：

```js {1,6,11}
// Web
window.createGreeting = function(s) {
  return 'Hello, ' + s
}

// Node
global.createGreeting = function(s) {
  return 'Hello, ' + s
}

// 可能任何runtime
globalThis.createGreeting = function(s) {
  return 'Hello, ' + s
}
```

当查看全局库代码是，你同时可以看到：

- 最上层的 `var` 语句，或者 `function` 声明
- 一个或者多个 `window.someName` 赋值
- 假设DOM基础类型的存在，比如 `document` 或 `window` 的存在

你不可能看到：

- 检查或使用 `require` 或 `define` 等模块加载器
- CommonJS/Node.js 风格的导入形式，`var fs = require('fs')`
- 调用 `define(...)`
- 文档描述如何使用 `require` 或 `import` 导入该库



### 全局库示例

因为很容易将全局库转变为UMD库，很少还有比较流行的库使用全局风格。但是，一些比较小的和需要DOM(或没有依赖的)库仍然使用全局的方式。



### 全局库模板

[global.d.ts](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-plugin-d-ts.html) 模板定义了一个示例库 `myLib`。确保阅读 [Preventing Name Conflicts部分](https://www.typescriptlang.org/docs/handbook/declaration-files/library-structures.html#preventing-name-conflicts)





## 5️⃣ UMD

UMD模块既能被当做模块（通过导入）使用，也可以当做全局使用（运行在没有module loader的环境）。很多流行库，比如 [moment.js](https://momentjs.com/)，通过这种方式属性。比如，在Node.js或者使用RequireJS，你可以这样写：

```typescript
import moment = require('moment')
console.log(moment.format())
```

而在普通浏览器环境，则写法如下：

```typescript
console.log(moment.format())
```



### 识别UMD库

[UMD模块](https://github.com/umdjs/umd) 会检查模块加载器环境的存在。这是一个很容易识别的模式，看起来如下：

```js
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["libName"], factory);
    } else if (typeof module === "object" && module.exports) {
        module.exports = factory(require("libName"));
    } else {
        root.returnExports = factory(root.libName);
    }
}(this, function (b) {
```

👩‍🏫 如果你在库的代码中看到 `typeof define`, `typeof window` 或者 `typeof module`，特别是在文件的最上面，它基本上就是UMD库了。

UMD库文档也经常使用 `require` 展示 `Using in Node.js` 示例，以及使用 `<script>` 标签展示 `Using in Browser` 示例加载脚本。



### UMD库例子

很多流行的库都提供UMD版本，比如，[jQuery](https://jquery.com/)，[Moment.js](https://momentjs.com/)，[lodash](https://lodash.com/) 等等



### 模板

使用 [module-plugin.d.ts](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-plugin-d-ts.html) 模板。



## 6️⃣ 消费依赖

你的库可能存在几种类型的依赖。本节展示如何将它们导入到声明文件中。



### 🚀 依赖全局库

如果你的库依赖一个全局库，使用 `/// <reference types="..." />` 指令：

```typescript
/// <reference types="someLib" />

function getThing(): someLib.thing;
```

译者注：

::: tip

`vite` 就是通过这种方式导入的, `env.d.ts` 声明文件

```typescript
/// <reference types="vite/client" />
```

:::



### 依赖模块

如果你的库依赖一个模块，使用 `import` 语句：

```typescript
import * as moment from 'moment'

function getThing(): moment;
```



### 依赖UMD库



> 全局库依赖UMD库

如果你的全局库依赖一个UMD模块，使用 `/// <reference types` 指令：

```typescript
/// <reference types="moment" />

function getThing(): moment;
```



> 模块或者UMD库依赖UMD库

如果模块或者UMD库依赖另一个UMD库，使用 `import` 语句：

```typescript
import * as someLib from 'someLib'
```

🚨不用使用 `/// <reference` 指令声明对另一个UMD库的依赖。





## 7️⃣ 阻止名字冲突

可以注意到，当书写全局声明文件时，可以在全局作用域中定义很多类型。我们强烈建议不要这样做，因为当很多声明文件在同一个项目中时，这可能导致一些不可解决的命名冲突。



💡一个要遵循的简单规则是，对库中定义全局变量，只在命名空间（`namespaces`）下定义其类型。比如，如果库定义了全局值 `cats`，你应该像下面这样写✅

```typescript
declare namespace cats {
  interface KittySettings {}
}
```

而不是 ❌：

```typescript
// 在最顶层
interface CatKittySettings {}
```

这个指南也确保了，库在被转义为UMD格式时，不会破坏用户的声明文件。



## 8️⃣ ES6对模块调用签名的影响

很多流行的库，比如 `Express`，当导入时，它们暴露为一个`可调用的函数`。比如，Express最典型的用法如下：

```typescript
// UMD的导入方式（译者注）
import exp = require('exporess')
var app = exp()
```

在兼容ES6的模块加载器中，最顶层的对象（这是是导入的 `exp`）只能拥有属性；最顶层的模块对象总是 `不能` 被调用。

最常见的解决方法时，对可调用或可构造对象定义一个 `default` 导出；模块加载器通常自动检测这种情形，并使用 `default` 导出替换最顶层的对象。

如果你在tsconfig.json中设置了 ["esModuleInterop": true](../tsconfig/compiler/interop-constraints.html#esmoduleinterop-👍🚀🚀)， TypeScript能自动帮你处理这个问题😎。



原文档：

- [Library Structure](https://www.typescriptlang.org/docs/handbook/declaration-files/library-structures.html)



2022年08月29日00:23:46

