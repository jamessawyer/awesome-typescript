---
title: Enums
---

[[toc]]

枚举是少有的只存在于TS，而不是JS类型级别扩展的功能。

枚举允许开发者定义一组有名常量（named constants）。使用枚举可以更容易地记录意图，或创建一组离散的案例。`TS同时提供基于数值类型和基于字符串的枚举。`



## 1️⃣ 数值枚举

我们先从数值枚举开始，如果你从其他语言来的，你可能感到更熟悉。**一个枚举可以使用 `enum` 关键词进行定义**：

```typescript
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
```

上面的数值枚举，以 `Up` 为 `1` 开始。`后面的成员会自动增加`。即，`Direction.Up` 值为 `1`， `Down` 是 `2`, `Left` 是 `3`，`Right` 是 `4`。

当然，你也可以不初始化任何值：

```typescript
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
```

这里，`Up` 值为 `0`，后面值依次 `+1`。`当我们可能不关心成员值本身，但关心每个值与同一枚举中的其他值不同时，这种自动递增行为很有用。`

使用枚举很简单：将枚举成员作为枚举的属性访问即可，并使用枚举名作为类型声明：

```typescript
enum UserResponse {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: UserResponse): void {
  // ...
}

respond('Princess Caroline', UserResponse.Yes)
```

数值枚举可在 [计算和常量成员](#_4%EF%B8%8F⃣-计算和常量成员) 中混合。简单来说，没有初始化器的枚举必须放在第一位，或者必须放在用数值常量或其他常量枚举成员初始化的数值枚举之后。换句话将，下面的用法是不允许的🙅🏻‍♀️：

```typescript
enum E {
  A = getSomeValue(),
  B,
  // ❌ 枚举成员必须由初始化器
}
```



## 2️⃣ 字符串枚举

字符串枚举是一个类似的概念，但正如下面文档所示，存在一些微妙的 [运行时差异](https://www.typescriptlang.org/docs/handbook/enums.html#enums-at-runtime)。

📚`在一个字符串枚举中，每个成员必须使用字符串字面量进行常量初始化，或者使用其它字符串枚举成员。`

```typescript
enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}
```

虽然字符串枚举没有自动递增的行为，但字符串枚举的好处是它们可以很好地`“序列化”`。换而言之，当你调试，并必须读取一个数值枚举的运行时值，它们的值通常是不透明的 - 它们不会传递任何有用的含义（尽管可以通过 [reverse mapping](#_7%EF%B8%8F⃣-⭐-编译时的枚举) 来解决这个问题） 。字符串枚举允许你在代码运行时提供一个有意义和可读性好的值，独立于枚举成员名😎。

## 3️⃣ 混杂枚举

技术上讲，枚举可混合字符串和数值成员，但是这样做通常没有什么意义😅：

```typescript
enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = 'YES',
}
```

`除非你真的想以某种巧妙的方式利用JS运行时的行为，一般不建议你混用枚举类型。`



## 4️⃣ ⭐ 计算和常量成员

📚每个枚举成员都有一个与之关联的值，要么是 `constant`（常量），要么是 `computed`（计算值）。

一个枚举成员以下情形会被认为是 `constant`：

- 它是枚举中的第一个成员，并且没有初始化器，即默认赋值为 `0`

  ```typescript
  // E.X 是一个常量
  enum E {
    X, // 第一个成员，没有初始化器，默认为 0
  }
  ```

- 成员不存在初始化器，并且之前枚举成员是一个 `数值常量`。这种情况，当前枚举成员的值将在前一个成员值的基础上 `+1`:

  ```typescript
  // 在 ’E1‘ 和 `E2` 中的所有成员都是常量
  enum E1 {
    X,
    Y,
    Z,
  }
  
  enum E2 {
    A = 1,
    B,
    C,
  }
  ```

- 枚举成员通过常量枚举表达式被初始化。常量枚举表达式是TS表达式的子集，它能在编译时被计算。下面是常量枚举表达式的情况：

  - 一个字面量枚举表达式（一般是字符串字面量或数字字面量）
  - 对先前定义的常量枚举成员的引用（它可以来自不同的enum）
  - 带括号的常量枚举表达式
  - 应用在常量枚举表达式的 `+` | `-` | `~` 中的某个一元操作符
  - 将常量枚举表达式作为操作数的二元操作符 `+ ， -， *，/，%，<<，>>，>>>， &， |， ^`

  如果常量枚举表达式计算结果为 `NaN | Infinity`，将抛出编译时错误。

在所有其他情况下，枚举成员被认为是计算的：

```typescript
enum FileAccess {
  // 常量成员
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  // 计算成员
  G = '123'.length,
}
```



## 5️⃣ 联合枚举和枚举成员类型

常量枚举成员中有一个特殊的子集是不会计算的:字面枚举成员。`字面枚举成员是一个没有初始化值或初始化值为以下几种的常量枚举成员`：

- 任意字符串字面量（eg: `"foo"`, `"bar"`）
- 任意数值字面量（eg：`1`, `200`）
- 应用于任何数值字面量的一个一元 `-`（eg：`-1`，`-100`）

当一个枚举中的所有成员都是字面量枚举值时，一些特殊的语义开始发挥作用。

1. 枚举成员同时变为类型，比如，我们可以说某些成员只能具有枚举成员的值:

   ```typescript
   enum ShapeKind {
     Circle,
     Square,
   }
   
   interface Circle {
     kind: ShapeKind.Circle;
     radius: number;
   }
   
   interface Square {
     kind: ShapeKine.Square;
     sideLength: number;
   }
   
   let c: Circle = {
     kind: ShapeKind.Square,
     // ❌ 类型 `ShapeKind.Square` 不能赋值给 ’ShapeKind.Circle‘
     radius: 100,
   }
   ```

2. 另一个改变是，枚举类型本身实际上变为 `每个枚举成员的联合类型`。通过联合枚举，类型系统能够利用这样一个事实，即它知道枚举本身中存在的确切的值集。正因为如此，TypeScript可以通过对比值来捕捉那些可能值不正确的bug。例如:

   ```typescript
   enum E {
     Foo,
     Bar
   }
   
   function f(x: E) {
     if (x !== E.Foo || x !== E.Bar) {
       // ❌ 这个条件永远为true，因为类型 `E.Foo` 和 `E.Bar` 不存在重叠
     }
   }
   ```

   上面例子中，我们先检查了 `x` 不是 `E.Foo` 。如果检测成功，则我们的 `||` 将短路，`if` 语句的body将运行。然而，如果检测不成功，则 `x` 只能是 `E.Foo` 类型了，因此再去检测是否等于 `E.Bar` 就不合理了。

   

   ## 6️⃣ 运行时的枚举

   `枚举是运行时中真实存在的对象`。比如，下面枚举：

   ```typescript
   enum E {
     X,
     Y,
     Z,
   }
   ```

   能传递给函数：

   ```typescript
   enum E {
     X,
     Y,
     Z,
   }
   
   function f(obj: { X: number }) {
     return obj.X
   }
   
   // 运行正常，因为 'E' 有一个名为 'X' 的属性，它是一个数值
   f(E)
   ```

   ## 7️⃣ ⭐ 编译时的枚举

   即使枚举是运行时中真实存在的对象，`keyof` 关键词可能和你期望的一般对象的工作效果有所不同。**📚🚀相反，要使用 `keyof typeof` 获取以字符串形式表示的所有枚举keys的类型**。

   

   ```typescript {12}
   enum LogLevel {
     ERROR,
     WARN,
     INFO,
     DEBUG,
   }
   
   /**
    * 🤩这相当于：
    * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
   */
   typeof LogLevelStrings = keyof typeof LogLevel;
   
   function printImportant(key: LogLevelStrings, message: string) {
     const num = LogLevel[key]
     if (num <= LogLevel.WARN) {
       console.log('Log level key is: ', key)
       console.log('Log level value is: ', num)
       console.log('Log level message is: ', message)
     }
   }
   
   printImportant('ERROR', 'This is a message')
   ```

   ### 7.1  🚀反向映射（Reverse Mapping）

   除了为成员创建具有属性名的对象外，数值枚举成员还获得从枚举值到枚举名称的`反向映射`。

   🌰:

   ```typescript {6}
   enum Enum {
     A,
   }
   
   let a = Enum.A
   let nameOfA = Enum[a] // 'A'
   ```

   TypeScript会将这编译为如下JS代码：

   ```js
   'use strict';
   var Enum;
   (function (Enum) {
     Enum[Enum['A'] = 0] = 'A';
   })(Enum || (Enum = {}));
   let a = Enum.A;
   let nameOfA = Enum[a]; // 'A'
   ```

   上面生成的代码中，一个枚举被编译为一个对象，同时存储12个方向的映射： `name => value` & 反向的 `value => name`。对其他枚举成员的引用总是作为属性访问生成，并且从不内联。

   ::: warning

   记住，字符串枚举成员 `完全不会` 生成反向映射。

   :::

   

   ### 7.2 🚀 `const` 枚举

   在大多数情况下，枚举是完美有效解决方案。但有时需求会更加严格，为了避免在访问枚举值时额外生成代码和额外间接的开销，可以使用`const`枚举。`常量枚举使用 const 修饰符 修饰枚举`：

   ```typescript {1,3}
   const enum Enum {
     A = 1,
     B = A * 2,
   }
   ```

   常量枚举只能使用常量枚举表达式，并且不同于普通枚举（它们在编译时完全被移除）。`常量枚举成员在使用点（use site）被内联`。这是可能的，因为常量枚举没有计算成员。

   ```typescript
   const enum Direction {
     Up,
     Down,
     Left,
     Right,
   }
   
   let directions = [
     Direction.Up,
     Direction.Down,
     Direction.Left,
     Direction.Right,
   ]
   ```

   生成的JS代码为：

   ```js
   'use strict';
   
   let directions = [
     0 /* Direction.Up */,
     1 /* Direction.Down */,
     2 /* Direction.Left */,
     3 /* Direction.Right */,
   ]
   ```

   ::: tip

   译者注：常量枚举多用于性能要求比较严格的场景，它可以将枚举值进行内联

   :::



> 常量枚举的缺陷😅

首先内联枚举值是直白的，但是会引发微妙的含义。这些缺陷只和`环境（ambient）`常量枚举有关（基本上是 `.d.ts` 文件中的常量枚举），并在项目间共享，如果你发布或使用 `.d.ts` 文件，这些缺陷可能会对你产生影响，因为 `tsc --declaration` 将 `.ts` 文件转换为 `.d.ts` 文件。

1. 原因已在 [isolatedModules](../tsconfig/compiler/interop-constraints.html#isolatedmodules-👍🚀) 编译选项文档中说明，该模式不兼容环境常量枚举。这意味着，如果你发布环境常量枚举，下游的消费者将同时不能使用 [isolatedModules](../tsconfig/compiler/interop-constraints.html#isolatedmodules-👍🚀) 和 这些枚举值。
2. 你能轻松的在编译时将版本A依赖中的值内联，而在运行时导入版本B。版本A和B的枚举可能存在不同值，如果你不注意，会引发 [奇怪的bugs](https://github.com/microsoft/TypeScript/issues/5219#issue-110947903)，比如使用错误的 `if` 分支语句。这些bugs非常的致命，因为在项目构建的同时，自动运行自动测试很常见，此时使用的是相同的版本，这也导致了bugs完全会被忽略。
3. [importsNotUsedAsValues: "preserve"](../tsconfig/compiler/emit.html#importsnotusedasvalues) 不会忽略对用作是值的常量枚举的导入，但是环境常量枚举不能确保运行时 `.js` 文件的存在。没有被解析的导入会引发运行时错误。明确忽略导入的通常方式是 [type-only imports](https://www.typescriptlang.org/docs/handbook/modules.html#importing-types),[暂时不允许const enum值](https://github.com/microsoft/TypeScript/issues/40344)。

这里有2种避免这种缺陷的方式：

1. `完全不使用常量枚举`。你可以利用linter很轻松的 [禁用const enums](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#how-can-i-ban-specific-language-feature)。很明显，这可以避免任何常量枚举引发的问题，但这会阻止你的项目内联它自己的枚举。不同于其它项目的内联枚举，内联项目自己的枚举没有问题，而且会影响性能。
2. `不要发布环境枚举常量`，使用 [preventConstEums](../tsconfig/compiler/emit.html#preserveconstenums) 编译选项的帮助。这种方式被 [TypeScript项目本身](https://github.com/microsoft/TypeScript/pull/5422) 所采用。`preventConstEnums` 以纯枚举的形式对常量枚举生成相同的JS代码。然后你就可以在 [构建步骤中](https://github.com/microsoft/TypeScript/blob/1a981d1df1810c868a66b3828497f049a944951c/Gulpfile.js#L144) 安全的从 `.d.ts` 文件中剥离 `const` 修饰符。

这样，下游的消费者将不会从你的项目中内联枚举，避免以上缺陷，`但是项目仍然可以内联自己的枚举，而不是完全禁用掉常量枚举`。



## 8️⃣ 环境枚举（`Ambient enums`）

环境枚举用于描述已经存在的枚举类型形状。

```typescript
declare enum Enum {
  A = 1,
  B,
  C = 2,
}
```

环境枚举和非环境枚举的一个重要区别是，在普通枚举中，没有初始化器的成员如果上一个枚举成员被认为是常量时，它也将被认为是常量。相比之下，一个没有初始化器的环境（并且非常量）枚举成员 `总是` 认为是计算的。



## 9️⃣ ⭐ 对象 vs 枚举

在现代TypeScript中，当一个对象使用 `as const` 声明已经足够时:

```typescript {23-24}
const enum EDirection {
  Up,
  Down,
  Left,
  Right,
}

const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const

EDirection.Up // (enum member) EDirection.Up = 0

ODirection.Up // (property) Up: 0

// 使用枚举作为参数
function walk(dir: EDirection) {}

// 🚀它需要一个额外的内联来获取它的值
// type Direction = 0 | 1 | 2 | 3
type Direction = typeof ODirection[keyof typeof ODirection]
function run(dir: Direction) {}

walk(EDirection.Left)
run(ODirection.Right)
```

偏好对象方式优于TypeScript的最大依据是，这种方式使你的代码更向JavaScript的状态看齐，[当或如果](https://github.com/rbuckton/proposal-enum) 枚举被添加到JS规范中是，你可以再转向枚举的写法🤣。



原文档：

- [Enums](https://www.typescriptlang.org/docs/handbook/enums.html)

2022年09月12日12:32:24

