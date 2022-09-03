---
title: Module Function
---

[[toc]]



例如，当你想使用的JavaScript代码如下：

```js
import greeter from 'super-greeter'

greeter(2)
greeter('Hello world')
```

为了能同时处理通过 `UMD` 和 模块导入：



```typescript {11-13,15-17,23-24,34,39,43,58}
// 对 [~THE LIBRARY NAME~] [~可选版本号~] 的类型定义
// Project: [~项目名~]
// Definitions by: [~你的名字~] <[~URL FOR YOU~]

/*~ 💡这是一个针对『函数』模块的模板文件. 你应该将它重命名为 index.d.ts
 *~ 并将它放在和模块同名的文件夹中
 *~ 例如, 如果你正在给 "super-greeter" 文件写类型声明
 *~ 则该文件应该是 'super-greeter/index.d.ts'
 */

// 🚨 注意 ES6 Modules 不能直接导出类对象
// 文件应当使用CommonJS风格被导入
// import x = require('[~模块名~]')

// 🚀🚀 或者， 如果 --allowSyntheticDefaultImports 或
// --esModuleInterop 开启了，文件也可以当做是默认导入被导入
// import x from 'import x = require('[~模块名~]')'

// 参考TS文档
// https://www.typescriptlang.org/docs/handbook/modules.html#export--and-import--require
// 了解ES6模块这种限制的常见解决方法😎

/*~ 如果模块是一个暴露了一个全局变量 `myFuncLib` 的UMD模块，当
 *~ 在模块加载器环境之外被加载时，在此声明该全局变量
 *~ 否则，删除下面这行声明🚨
 */
export as namespace myFuncLib;

/*~ 
 *~ 这个声明指定函数是从文件中导出的对象
 */
export = Greeter;

/*~ 📚方法重载声明的方式 */
declare function Greeter(name: string): Greeter.NamedReturnType;
declare function Greeter(length: number): Greeter.LengthReturnType;


/*~ 📚如果你也想将类型也从模块中暴露出去，你可以将其放着这一块中
 *~ 通常你将描述函数的返回类型的形状；
 *~ 该类型应当声明在此，如示例所示
 *~ 
 *~ 注意，如果你决定包含这个命名空间，
 *~ 模块可能会被错误地导入为命名空间对象
 *~ 📚 除非开启 --esModuleInterop
 *~   import * as x from '[~THE MODULE~]'; // ❌ 不要这样做
 */
declare namespace Greeter {
  export interface LengthReturnType {
    width: number;
    height: number;
  }
  export interface NamedReturnType {
    firstName: string;
    lastName: string;
  }
  
  /*~ 如果这个模块还有属性，在此声明
   *~ 比如，这个声明会说，下面代码是合法的
   *~   import f = require('super-greeter');
   *~   console.log(f.defaultName);
   */
  export const defaultName: string;
  export let defaultLength: number;
}
```

原文档：

- [Module: Function](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-function-d-ts.html)


2022年09月03日12:59:20
