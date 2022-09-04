title: Deep Dive

[[toc]]



## 1️⃣ 声明文件理论：深入

构造模块以提供你想要的确切API形状可能很棘手。比如，我们可能希望一个模块能够使用 `new` 或者不使用 `new` 产生不同类型，在层次结构中暴露了各种命名类型，并在模块对象上存在一些属性。
通过阅读这个指南，你将使用工具写出更为复杂的声明文件，友好的暴露API表面。本指南关注模块（或UMD），因为它们的配置变化更加丰富。



## 2️⃣ 关键概念

只有理解了TypeScript是如何运作的核心概念后，你才能完全理解如何制作任意想要的声明。



### 2.1 类型（`Types`）

如果你正在阅读本指南，你可能大概已经知道TS类型是什么了。但是，更明确地说，下面方式会产生`类型`:

- 一个类型别名声明（`type sn = number | string`）
- 一个接口声明（`interface I { x: number[] }`）
- ✨ 一个类声明（`class C {}`）
- 一个枚举声明（`enum E {A, B, C}`）
- 一个 `import` 声明，用于引用某个类型

上面的每一种声明形式都会创建一个新的类型名😎。



### 2.2 值（`Values`）

通过类型，你可能已经理解了什么是值。值是我们可以再表达式中引用的运行时名。比如 `let x = 5;` 创建一个称之为 `x` 的值。

同样，为了更加明显，下面的东西会创建值：

- `let, const & var` 声明
- `namespace | module` 声明会包含值
- `enum` 声明
- ✨ `class` 声明
- `import` 声明会引用一个值
- `function` 声明



### 2.3 命名空间（`Namespaces`）

类型可存在于 `命名空间` 中。比如，如果我们有 `let x: A.B.C` 这样的声明，表示类型 `C` 来自于 `A.B` 命名空间。

这个区别是微妙但重要的 - 这里， `A.B` 不必是一个类型或者值。



## 3️⃣ 简单组合：一个名字，多重意思

给定一个名字 `A`，我们可能找到 `A` 的3个不同含义：

1. 一种类型
2. 一个值
3. 一个命名空间

`该名字如何被理解，完全取决于它被使用的上下文环境。` 比如，在 `let m: A.A = A;` 声明中，`A` 首先被用作命名空间，然后被当做一种类型名，最后当做是一个值。这些含义最终会指向完全不同的声明。

这看起来可能很困惑，但实际上它非常方便，只要我们不过度使用这些东西。**让我们看看这种结合行为的有用之处。**



### 3.1 内置组合

😎机敏的读者会注意到这一点，比如，`class` 同时出现在 `type` 和 `value` 列表中。`class C {}` 声明创建了2个东西：

- 一个 `类型C`，它指向该类的实例，
- 以及一个 `值C`，它指向该类的构造函数。

::: tip

枚举声明表现类似。

:::

### 3.2 ⭐ 用户组合

假设写一个模块文件 `foo.d.ts`:

```typescript
export var SomeVar: { a: SomeType };
export interface SomeType {
  count: number;
}
```

然后使用它：

```typescript
import * as foo from './foo'
let x: foo.SomeType = foo.SomeVar.a
console.log(x.count)
```

这很好用，但我们可能会想象 `SomeType` 和 `SomeVar` 非常密切相关，因此你希望它们具有相同的名称。`我们可以使用组合表示这2个不同对象（值和类型）在相同的名字 Bar 中`：

```typescript
export var Bar: { a: Bar }
export interface Bar {
  count: number;
}
```

这为在消费代码中解构提供了一个非常好的机会:

```typescript
import { Bar } from './foo'
let x: Bar = Bar.a
console.log(x.count)
```

再一次，这里我们使用 `Bar` 同时作为类型和值在使用😎。注意，我们不需要声明 `Bar` 值作为 `Bar` 类型 - 它们是独立的。



## 4️⃣ 高级组合

📚某些声明可以跨多个声明进行组合。比如，`class C {}` 和 `interface C {}` 能共存，并且同时给 `C` 类型贡献属性。

这是合法的，只要它们不产生冲突。一般的经验法则是，值总是与同名的其他值冲突，除非它们被声明为 `namespace s`，类型会冲突，如果它们被声明为类型别名（`type s = string`）, 命名空间永远不会冲突。



我们看看如何使用它们。



### 4.1 🚀 使用 `interface` 添加

我们可以使用 `interface` 给另一个 `interface` 声明添加额外的成员：

```typescript {1-3,6-8}
interface Foo {
  x: number;
}

// 别的地方
interface Foo {
  y: number;
}

let a: Foo = ...;
console.log(a.x + a.y) // OK
```

这同样适用于类🤩：

```typescript {1-3,6-8}
class Foo {
  x: number;
}

// 别的地方
interface Foo {
  y: number
}

let a: Foo = ...;
console.log(a.x + a.y) // OK
```

::: warning

我们不能使用interface添加类型别名（`type s = string`）

:::



### 4.2 使用 `namespace` 添加

命名空间（`namespace`）声明可用于添加新的类型、值和命名空间，但不会产生冲突。

例如，我们可以给一个类添加静态成员：

```typescript
class C {}

// 某个地方
namespace C {
  export let x: number;
}
let y = C.x; // OK
```

注意这个例子，我们向`C`的静态端(其构造函数)添加了一个值。这是因为我们添加了一个 `value`，所有值的容器是另一个值(类型由命名空间包含，命名空间由其他命名空间包含)。

我们也可以给类添加一个命名空间类型：

```typescript
class C {}

// 某个地方
namespace C {
  export interface D {}
}
let y: C.D // OK
```

在本例中，直到我们为命名空间`C`编写了命名空间声明，才有命名空间`C`。`C` 作为命名空间的含义不会和 `class C`  作为值或类型的含义相冲突。

最后，我们可以使用 `namespace` 声明执行很多不同的合并。这不是一个特别现实的例子，但显示了各种有趣的行为:

```typescript
namespace X {  // X 作为命名空间
  export interface Y {} // Y作为类型
  export class Z {} // Z既是值也是类型
}

// 别处某个地方
namespace X { // X 作为命名空间
  export var Y: number; // Y作为值
  export namespace Z { // Z 作为命名空间
    export class C {}
  }
}

type X = string; // X作为类型
```

上面例子中，第一块创建了下面name含义：

- 一个值 `X` （因为 `namespace` 声明包含一个值 `Z`）
- 一个命名空间 `X` （因为 `namespace` 声明包含一个类型 `Y`）
- 一个在 `X` 命名空间中的一个类型 `Y`
- 一个在 `X` 命名空间中的一个类型 `Z`（类的实例）
- 一个值 `Z`，它是 `X` 值的一个属性（该类的构造函数）

第2块创建下面name含义：

- 一个 `Y` 值（类型 `number`），它是 `X` 值得一个属性
- 一个命名空间 `Z`
- 一个值 `Z`，它是 `X` 值得一个属性
- 一个在 `X.Z` 命名空间中类型 `C`
- 一个值 `C` 它是 `X.Z` 值的属性
- 一个类型 `X`



原文档:

- [Deep Dive](https://www.typescriptlang.org/docs/handbook/declaration-files/deep-dive.html)

2022年09月04日13:05:13
