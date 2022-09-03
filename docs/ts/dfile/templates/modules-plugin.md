---
title: 模块：插件
---

[[toc]]



比如，当你想使用JS代码扩展另一个库时：

```js
import { greeter } from 'super-greeter'

// 普通Greeter API
greeter(2)
greeter('Hello world')

// 现在我们使用一个运行时新函数扩展对象
import 'hyper-super-greeter'
greeter.hyperGreet()
```

`super-greeter` 定义：

```typescript
/*~ 这个示例展示了如何给你的函数添加多个重载 */
export interface GreeterFunction {
  (name: string): void
  (time: number): void
}

/*~ 本示例展示如何导出接口指定的函数 */
export const greeter: GreeterFunction
```

我们可以像下面一样扩展已有模块：

```typescript {14-16}
// 对 [~THE LIBRARY NAME~] [~可选版本号~] 的类型定义
// Project: [~项目名~]
// Definitions by: [~你的名字~] <[~URL FOR YOU~]

/*~ 💡这是一个模块插件模板文件. 你应该将它重命名为 index.d.ts
 *~ 并将它放在和模块同名的文件夹中
 *~ 例如, 如果你正在给 "super-greeter" 文件写类型声明
 *~ 则该文件应该是 'super-greeter/index.d.ts'
 */

/*~ 在这一行，导入此模块添加到的模块 */
import { greeter } from 'super-greeter'

/*~ 这里声明上面你导入的相同模块
 *~ 然后对已有 greeter 函数声明进行扩展
 */
export module 'super-greeter' {
  export interface GreeterFunction {
    hyperGreet(): void;
  }
}
```

这使用到了 [声明合并](https://www.typescriptlang.org/docs/handbook/declaration-merging.html) 😎。



## ES6对模块插件的影响

有些插件会在已有模块基础上，添加顶层导出或者修改顶层导出。这在CommonJS和其它loaders中是合法的，`ES6 模块被认为是不可变的，因此这种模式是不可能的`。

::: warning

因为TypeScript是加载器无关的，所以没有在编译时强制执行该策略，但是打算转换到ES6模块加载器的开发人员应该意识到这一点。

:::



原文档：

- [Module: Plugin](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-plugin-d-ts.html)


2022年09月03日12:15:16
