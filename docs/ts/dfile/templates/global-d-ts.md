---
title: 全局d.ts
---
[[toc]]



## 全局库

`全局库是指在全局作用域能被访问的库`（比如，不使用任何形式的 `import`）。很多库简单的暴露一个或多个全局变量以供使用。比如，如果你用过 [jQuery](https://jquery.com/)，可以通过简单的引用 `$` 来使用jQuery：

```js
$(() => {
  console.log('hello')
})
```

你经常在全局库的文档指南中看到如何通过script标签的方式使用它：

```html
<script src="http://a.great.cdn.for/someLib.js"></script>
```

::: warning

现在，很多流行的全局访问库实际上以UMD库的形式书写。很难将UMD文档和全局库文档进行区分。在书写全局声明文件前，请确认该库不是UMD书写的😅。

:::



## 依据代码识别全局库

全局库代码通常十分简单。全局 `Hello World` 库可能看起来像这样：

```js
function createGreeting(s) {
  return 'Hello, ' + s
}
```

或者这样：

```js
window.createGreeting = function(s) {
  return 'Hello, ' + s
}
```

当查看全局库代码时，你通常可以看到：

- 顶层的 `var` 语句或者 `function` 声明
- 一个或多个 `window.someName` 赋值
- 假设 `document` | `window` 这样的基础DOM的存在

而看不到：

- 检测或者使用 `require` | `define` 这样的模块loaders
- CommonJS/Node.js 风格形式的导入：`var fs = require('fs')`
- 调用 `define(...)`
- 文档中描述如何通过 `require` 或其它形式导入该库



## 全局库示例

因为很容易将一个全局库转变为UMD库，现在已经很少有比较流行的库通过全局的方式进行书写了😅。然而，一些小的库，并且需要DOM（或没依赖）的库，可能仍旧是全局的形式。



## ⭐ 全局库模板

你可以看到DTS示例：

```typescript {5,13,26}
// 对 [~THE LIBRARY NAME~] [~可选版本号~] 的类型定义
// Project: [~项目名~]
// Definitions by: [~你的名字~] <[~URL FOR YOU~]

/*~ 📚 如果这个库是可调用的 (e.g. 通过 myLib(3) 形式调用),
 *~ 在此包含调用签名
 *~ 否则，删除这一块
 */
declare function myLib(a: string): string;
declare function myLib(a: number): number;


/*~ 😎 如果你想这个库的类型是一个有效的类型名
 *~ 你可以在此做
 *~
 *~ 比如，这允许我们这样写 'var x: myLib';
 *~ 请确认这样有意义!
 *~ 如果没有，请删除这个声明，然后在下面的namespace中添加类型
 */
interface myLib {
  name: string;
  length: number;
  extras?: string[];
}

/*~ 如果你的库有暴露在全局上的属性
 *~ 将它们放在这里
 *~ 你也应该将类型（接口 & 类型别名）放在这里
 */
declare namespace myLib {
  //~ 我们可以写 'myLib.timeout = 50'
  let timeout: number;
  
  //~ 我们可以访问 'myLib.version'，但是不能改变它
  const version: string;
  
  //~ 我们可以通过 'let c = new myLib.Cat(42)' 创建类
  //~ 或者引用 e.g. 'function f(c: myLib.Cat) { ... }
  class Cat {
    constructor(n: number);
    
    //~ 我们可以从 `Cat` 实例上读取 `c.age`
    readonly age: number;
    
    //~ 我们可以从 `Cat` 实例上调用 'c.purr()'
    purr(): void;
  }
  
  //~ 我们可以声明一个变量
  //~   'var s: myLib.CatSettings = { weight: 5, name: "Maru" };'
  interface CatSettings {
    weight: number;
    name: string;
    tailLength?: number;
  }
  
  //~ 我们可以写 'const v: myLib.VetID = 42;'
  //~  或者 'const v: myLib.VetID = "bob";'
  type VetID = string | number;
  
  //~ 我们可以调用 'myLib.checkCat(c)' or 'myLib.checkCat(c, v);'
  function checkCat(c: Cat, s?: VetID);
}
```

原文档：

- [Global .d.ts](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-d-ts.html)

2022年09月03日13:28:47
