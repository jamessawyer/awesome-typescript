---
title: TS相关的资源
---

## 🔧 工具

1. [TS config helper](https://tsconfiger.netlify.app/) TS所有配置项在线工具，每个字段都有解释，并包含很多预设

## 🧃基础

1. [🔥🔥Types are just data - type-level-typescript ](https://type-level-typescript.com/types-are-just-data)  必读！！
   - 如何利用`集合`的概念去理解类型
   - 通过集合，可以对 `string` | `number` 等基础类型与 `any` & `unknown` & `never` 这些类型的关系有很直观的理解
   - 通过集合的概念 `子类型` & `父类型` 的理解就是小菜一碟



## 🚀 高级概念

1. [如何进阶TypeScript功底？一文带你理解TS中各种高级语法 - 19组清风@掘金](https://juejin.cn/post/7089809919251054628#heading-10)
   - `is` 关键词，函数返回类型守护
   - `TS分发类型` 讲解的不错
   - 逆变协变示例还不错

## 💡 Tips

TS编写的一些Tips:

1. [让你更好使用 Typescript 的11个技巧 - 王大冶@掘金](https://juejin.cn/post/7184956275157893176) 提供了11个技巧，列举2个印象比较深刻的

   - 理解类型声明和类型收窄：需要知道 `赋值是尊重声明类型，而不是收窄类型`

     ```typescript {6}
     function foo(x: string | number) {
       if (typeof x === 'string') { // 类型收窄
         // x 的类型被缩小为字符串，所以.length是有效的
         console.log(x.length);
     
         // assignment respects declaration type, not narrowed type
         x = 1;
         console.log(x.length); // disallowed because x is now number
         } else {
             ...
         }
     }
     ```

   - 使用类型为此来避免类型断言

     ```typescript
     type Circle = { kind: 'circle'; radius: number };
     type Rect = { kind: 'rect'; width: number; height: number };
     type Shape = Circle | Rect;
     
     function isCircle(shape: Shape) {
       return shape.kind === 'circle';
     }
     
     function isRect(shape: Shape) {
       return shape.kind === 'rect';
     }
     
     const myShapes: Shape[] = getShapes();
     // 错误，因为typescript不知道过滤的方式
     const circles: Circle[] = myShapes.filter(isCircle); // [!code error]
     ```

     修改方法：

     ```typescript
     // ...
     function isCircle(shape: Shape) { // [!code --]
     function isCircle(shape: Shape): shape is Circle { // [!code ++]
       return shape.kind === 'circle';
     }
     
     function isRect(shape: Shape) { // [!code --]
     function isRect(shape: Shape): shape is Rect { // [!code ++]
       return shape.kind === 'rect';
     }
     ```
     
     







createdAt: 2023年03月09日09:44:05

updatedAt: 2023年04月25日15:31:00

