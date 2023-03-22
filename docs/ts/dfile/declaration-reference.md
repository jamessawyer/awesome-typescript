---
title: 声明参考手册
---

[[toc]]



本指南的目的是教你如何编写高质量的定义文件。本指南的结构是展示一些API的文档，以及该API的示例用法，并解释如何编写相应的声明。
这些例子是按照复杂度近似递增的顺序排列的。





## 包含属性的对象

`文档`：

::: tip

全局变量 `myLib` 有一个 `makeGreeting` 函数创建greetings，并有一个 `numberOfGreetings` 属性，表示已创建greetings的数量。

:::

`代码`：

```js
let result = myLib.makeGreeting('Hello, world')
console.log('The computed greeting is:' + result)
let count = myLib.numberOfGreetings
```

`声明`：

使用 `declare namespace` 声明通过点主机的类型或值。

```typescript
declare namespace myLib {
  function makeGreeting(s: string): string;
  let numberOfGreetings: number;
}
```



## 重载函数



`文档`：

::: tip

`getWidget` 函数接收一个number，并返回一个Widget，或者接收一个string，返回一个Widget数组。

:::



`代码`：

```typescript
let x: Widget = getWidget(43)
let arr: Widget[] = getWidget('all of them')
```

`声明`：

```typescript
declare function getWidget(n: number): Widget;
declare function getWidget(s: string): Widget[];
```



## 可复用类型（Interfaces）

`文档`：

::: tip

当指定一个greeting时，你必须传入一个 `GreetingSettings` 对象，该对象有下面属性：

- `greeting`: 强制必须，字符串
- `duration`: 可选，时间长度（单位ms）
- `color`: 可选，字符串，比如 `'#ff00ff'`

:::



`代码`：

```typescript
greet({
  greeting: 'hello world',
  duration: 4000
})
```

`声明`：使用 `interface` 定义包含属性的类型

```typescript
interface GreetingSettings {
  greeting: string;
  duration?: number;
  color?: string;
}
declare function greet(setting: GreetingSettings): void
```



## 可复用类型（Type Aliases）

`文档`：

::: tip

在任何需要`greeting`的地方，都可以提供一个字符串、或者一个返回字符串的函数或一个Greeter实例。

:::



`代码`：

```typescript
function getGreeting() {
  return 'howdy'
}
class MyGreeter extends Greeter {}

greet('hello')
greet(getGreeting)
greet(new MyGreeter())
```



`声明`：你可以使用类型别名对类型进行简写💡

```typescript
type GreetingLike = string | (() => string) | MyGreeter
delcare function greet(g: GreetingLike): void
```



## 组织类型

`文档`：

::: tip

`greeter` 对象可以记录到文件或者显示alert。你可以给 `.log(...)` 提供   `LogOptions` ，给 `.alert(...)` 提供 alert `options`。

:::



`代码`：

```typescript
const g = new Greeter('Hello')
g.log({ verbose: true })
g.alert({ modal: false, title: 'Current Greeting' })
```



`声明`： 使用namespaces组织类型

```typescript
declare namespcae GreetingLib {
  interface LogOptions {
    verbose?: boolean;
  }
  interface AlertOptions {
    modal: boolean;
    title?: string;
    color?: string;
  }
}
```

🚀 你也可以在一个声明中创建嵌套的namespaces：

```typescript {2}
declare namespcae GreetingLib.Options {
  // 通过 GreetingLib.Options.Log 引用
  interface Log {
    verbose?: boolean;
  }
  interface Alert {
    modal: boolean;
    title?: string;
    color?: string;
  }
}
```



## 类

`文档`：

::: tip

你可以通过实例化 `Greeter` 对象创建一个greeter，或者通过继承它创建一个自定义的greeter。

:::



`代码`：

```typescript
const myGreeter = new Greeter('hello world')
myGreeter.greeting = 'howdy'
myGreeter.showGreeting()

class SpecialGreeater extends Greeter {
  constructor() {
    super('spicial greeter')
  }
}
```



`声明`： 使用 `declare class` 来描述一个类，或者像类的对象。类可以有属性和方法，以及一个构造器

```typescript
delcare class Greeter {
  constructor(greeting: string);

  greeting: string;
  showGreeting(): void;
}
```



## 全局变量

`文档`：

::: tip

全局变量 `foo` 包含widgets数量

:::



`代码`：

```typescript
console.log("Half the number of widgets is " + foo / 2);
```



`声明`：

可以使用 `declare var` 声明变量。如果变量是只读的，你可以使用 `declare const` 。如果变量使用块状作用域（`block-scoped`），你也可以使用 `declare let`。

```typescript
// widgets数量
declare var foo: number;
```





## 全局函数

`文档`：

::: tip

你可以调用函数 `greet`，它参数为字符串

:::



`代码`：

```typescript
greet('Hi')
```



`声明`：

使用 `declare function` 声明函数：

```typescript
declare function greet(greeting: string): void;
```



原文档：

- [Declaration Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html)

2022年08月27日23:57:49