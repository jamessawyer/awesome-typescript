---
title: do and not do
---

## 1️⃣ 通用类型



## Number，String, Boolean, Symbol, Object

❌ `不要` 使用 `Number`, `String`, `Boolean`, `Symbol` 或 `Object` 这些类型。这些类型是指非原始包装对象，在JS代码中几乎不会使用到。

```typescript
// ❌ 
function reverse(s: String): String;
```

✅ `要` 使用 `number`, `string`, `boolean`, `symbol` 这些类型

```typescript
// ✅
function reverse(s: string): string;
```

不要使用 `Object` 类型，使用非基本（`non-primitive`） `object` 类型 （[TS2.2 添加](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#object-type)）。



## 泛型

## 

❌ 在没有使用到其类型参数的情况下，`不要` 添加泛型类型。可查看 [TS FAQ页面](https://github.com/Microsoft/TypeScript/wiki/FAQ#why-doesnt-type-inference-work-on-this-interface-interface-foot--)。



## any

❌ `不要` 使用 `any` 作为类型，除非正从JS项目迁移到TS项目。编译器`实际上` 将 `any` 当做 `请对这个东西关闭类型检测`。类似于在变量使用前放置 `@ts-ignore` 注释。这在从JS项目迁移到TS项目很有用，因为你可以对还没有迁移的部分设置为 `any`，但在一个完整的TypeScript项目中，你会禁用任何使用类型检查的程序部分。

在你不知道该使用什么类型的地方，或者当你想要接收任何类型时，你可以使用 [unknown](https://www.typescriptlang.org/play/#example/unknown-and-never) 类型。



## 2️⃣ 回调类型



## 回调的返回类型

❌ `不要` 使用 `any` 作为忽略返回值的回调函数的返回类型

```typescript
// ❌ 
function fn(x: () => any) {
  x()
}
```

✅ `要` 使用 `void` 作为返回值被忽略的函数的返回类型：

```typescript
// ✅
function fn(x: () => void) {
  x()
}
```

::: tip

🤔为什么：使用 `void` 更安全，因为它防止你不小心以未检查的方式使用 `x` 函数的返回值:

```typescript
function fn(x: () => void) {
  var k = x() // oops! 表示要干点啥
  // ❌ 如果返回的是 `any`，这里并不会报错 😅
  k.doSomething()
}
```

:::





## 回调中的可选参数

❌ `不要` 在回调中使用可选参数，除非你真的需要它：

```typescript
// ❌ 
interface Fetcher {
  getObject(done: (data: unknown, elapsedTime?: number) => void): void;
}
```

这表示特殊的含义：`done` 回调可能使用一个参数，也可能使用2个参数。作者本意可能是，回调不关心 `elapsedTime` 这个参数，但是不需要将其标记为可选来达到这一目标 - 提供接受更少参数的回调总是合法的。



✅ `要` 将回调参数当做不可选的：

```typescript
// ✅
interface Fetcher {
  getObject(done: (data: unknown, elapsedTime: number) => void): void;
}
```



## 重载和回调

❌ `不要` 单独编写只在回调属性上不同的重载:

```typescript
// ❌ 
declare function beforeAll(action: () => void, timeout?: number): void;
declare function beforeAll(
  action: (done: DoneFn) => void,
  timeout?: number
): void;
```

✅ `要` 使用最多参数数量写一个单一重载：

```typescript
// ✅
declare function beforeAll(
  action: (done: DoneFn) => void,
  timeout?: number
): void;
```

::: tip
🤔为什么：回调忽略参数总是合法的，因此不需要更短的重载。首先提供一个更短的回调函数会导致传入类型不正确的函数被允许，因为它们会匹配第一个重载。
:::



## 3️⃣ 函数重载



## ⭐ 顺序

❌ `不要` 将更通用的重载放在更精准重载之前：

```typescript
// ❌ 
declare function fn(x: unknown): unknown
declare function fn(x: HTMLElement): number
declare function fn(x: HTMLDivElement): string

var myElem: HTMLDivElement
var x = fn(myElem) // x: unknown 什么😅?
```

✅ `要` 将更通用的签名放在更具体签名之后：

```typescript
// ✅
declare function fn(x: HTMLDivElement): string
declare function fn(x: HTMLElement): number
declare function fn(x: unknown): unknown

var myElem: HTMLDivElement
var x = fn(myElem) // x: string 😎
```

::: tip

🤔为什么：TypeScript在解析函数调用时选择第一个匹配的重载。当较早的重载比较晚的重载“更通用”时，较晚的重载将被有效地隐藏，并且不能被调用。

:::



## 使用可选参数

❌ `不要` 写仅尾部参数不同的重载：

```typescript
// ❌
interface Example {
  diff(one: string): number;
  diff(one: string, two: string): number;
  diff(one: string, two: string, three: boolean): number
}
```

✅ `要` 尽可能使用可选参数：

```typescript
// ✅
interface Example {
  diff(one: string, two?: string, three?: boolean): number;
}
```

注意这种合并`只适用`于当所有重载返回类型相同时🚨。

::: tip

🤔为什么：有2个重要的原因。

1.TypeScript通过查看目标的任何签名是否可以用源的参数调用来解决签名兼容性问题，并且允许额外的参数。例如，这段代码只有在正确使用可选参数编写签名时才会暴露错误:

```typescript
function fn(x: (a: string, b: number, c: number) => void) {}
var x: Example

// 当使用重载书写，OK - 使用第一个重载
// 当使用可选书写，正确地会出现错误
fn(x.diff)
```

2.第二个原因是，当消费者使用TS的 `严格空检测`（strict null checking） 功能。因为未指定的参数，在JS中默认为 `undefined`，因此给可选参数显式的传入一个 `undefined` 也是没有问题的。这个代码在严格空下也是OK的：

```typescript
var x: Example

// 😎当使用重载编写时，由于将'undefined'传递给'string'而错误地产生错误
// 当使用可选书写，正确地会出现错误
x.diff('something', true ? undefined : 'hour')
```

:::





## 使用联合类型（Use Union Types）

❌ `不要` 只在一个参数位置写不同类型的重载:



```typescript
// ❌ 
interface Moment {
  utcOffset(): number;
  utcOffset(b: number): Moment;
  utcOffset(b: string): Moment;
}
```

✅ `要` 尽可能使用联合类型：

```typescript
// ✅ 
interface Moment {
  utcOffset(): number;
  utcOffset(b: number | string): Moment
}
```

注意，我们这里并没有将 `b` 设置为可选，因为函数的返回类型不同。



::: tip

🤔为什么：这对于那些“传递”一个值到你的函数的人来说很重要:

```typescript
function fn(x: string): void;
function fn(x: number): void;
function fn(x: number | string) {
  // 用单独的重载编写时，错误地出错
  // 当使用联合类型时，正确
  return moment().utcOffset(x)
}
```

:::



原文档：

- [Do's and Don'ts](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)

2022年09月04日00:27:58
