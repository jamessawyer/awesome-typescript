---
title: Modules class
---
[[toc]]



例如，当你想使用的JavaScript代码如下：

```js
const Greeter = require('super-greeter')

const greeter = new Greeter()
greeter.greet()
```

为了能同时处理通过 `UMD` 和 模块导入：

```typescript {11-13,15-17,47-48}
// 对 [~THE LIBRARY NAME~] [~可选版本号~] 的类型定义
// Project: [~项目名~]
// Definitions by: [~你的名字~] <[~URL FOR YOU~]

/*~ 💡这是一个针对类模块的模板文件. 你应该将它重命名为 index.d.ts
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

/*~ 如果模块是一个暴露了一个全局变量 `myClassLib` 的UMD模块，当
 *~ 在模块加载器环境之外被加载时，在此声明该全局变量
 *~ 否则，删除下面这行声明🚨
 */
export as namespace 'super-greeter';

/*~ 
 *~ 这个声明指定类构造函数是从文件中导出的对象
 */
export = Greeter;

/*~ 在这个类中写你模块的方法和属性 */
declare class Greeter {
  constructor(customGreeting?: string);
  
  greet: void;
  myMethod(opts: MyClass.MyClassMethodOptions): number;
}


/*~ 如果你也想从模块中暴露类型，你可以将其放着这一块中
 *~
 *~ 注意，如果你决定包含这个命名空间，
 *~ 模块可能会被错误地导入为命名空间对象
 *~ 📚 除非开启 --esModuleInterop
 *~   import * as x from '[~THE MODULE~]'; // ❌ 不要这样做
 */
declare namespace MyClass {
  export interface MyClassMethodOptions {
    width?: number;
    height?: number;
  }
}
```



原文档：

- [Module: Class](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-class-d-ts.html)

2022年09月03日12:42:38