---
title: Global Modify Module
---

[[toc]]



## 全局修改模块



`全局修改模块（global-modifying modules）在导入时修改全局作用域中的现有值。` 比如，可能存在一个模块在导入时给 `String.prototype` 添加新的成员。这种模式可能很危险，可能导致运行时冲突😅，但是我们仍可给它写一个声明文件。



## 识别全局修改模块

全局修改模块一般很容易从它的文档中进行识别。通常，它们类似于全局插件，但是需要 `require` 调用激活它们的副作用。

你可能看到它们的文档是这样的：

```js {1,7,11}
// 'require' 调用，但不使用其返回值😅
var unused = require('magic-string-time')
// 或者
require('magic-string-time')

var x = 'hello, world'
// 对内置类型创建一个新的方法
console.log(x.startsWithHello())

var y = [1, 2, 3]
// 对内置类型创建一个新的方法
console.log(y.reverseAndSort())
```

下面是一个例子：

```typescript {5,11,15,22,27,31}
// 对 [~THE LIBRARY NAME~] [~可选版本号~] 的类型定义
// Project: [~项目名~]
// Definitions by: [~你的名字~] <[~URL FOR YOU~]

/*~ 💡这是一个针对『全局修改』模块的模板文件. 你应该将它重命名为 index.d.ts
 *~ 并将它放在和模块同名的文件夹中
 *~ 例如, 如果你正在给 "super-greeter" 文件写类型声明
 *~ 则该文件应该是 'super-greeter/index.d.ts'
 */

/*~ 🚨：如果你的全局修改模块时可调用或可构造的,
 *~ 你将需要结合 类模块或函数模块模板 中的模式😎
 */
declare global {
  /*~ 这里，声明在全局命名空间中的类型或存在于已有声明中的参数
   */
  interface String {
    fancyFormat(opts: StringFormatOptions): string;
  }
}

/*~ 如果你的模块导出类型或值，就正常在此书写即可 */
export interface StringFormatOptions {
  fancinessLevel: number;
}

/*~ 例如，在模块上声明一个方法(以及它的全局副作用) */
export function doSomething(): void;


/*~ 🚨🚨如果你的模块没有导出任何内容，你将需要这一行。否则,删除它 */
export {};
```

原文档：

- [Global: Modifying Module](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-modifying-module-d-ts.html)


2022年09月03日13:45:27
