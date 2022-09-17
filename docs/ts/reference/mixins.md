---
title: Mixins
---

[[toc]]

除了传统的面向对象层次结构，从可重用组件构建类的另一种流行方法是通过`组合`更简单的部分类来构建类。你可能熟悉Scale类似语言的mixins或traits特性，这种模式在JavaScript中也很流行。

## 1️⃣ Mixin是如何工作的？

该模式依赖于使用泛型和类继承来扩展基类。TypeScript通过类表达式模式对mixin提供最佳支持。你可以阅读 [这里](https://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/) 了解该模式如何在JavaScript中运作。

首先，我们需要一个将mixins应用到该类上：

```typescript
class Sprite {
  name = '';
  x = 0;
  y = 0;

  constructor(name: string) {
    this.name = name;
  }
}
```

然后你需要一个类型，和一个继承基类的类表达式（即 `返回另一个类的高阶函数`）：

```typescript {2,7-8}
// 首先，我们需要一个类型，用于被其它类扩展
// 🤩这里的 Constructor 最要用于约束传入的参数是一个类
type Constructor = new (...args: any[]) => {};

// 这个 mixin 添加一个 scale 属性
// 使用getters & setters 改变封装的私有属性
function Scale<TBase extends Constructor>(Base: TBase) {
  return class Scaling extends Base {
    // Mixins 可能不会声明 private|protected 属性
    // 但是你可以使用ES2020私有字段 即  #scale 的形式
    _scale = 1;

    _setScale(scale: number) {
      this._scale = scale;
    }

    get scale() {
      return this._scale;
    }
  }
}
```

设置好这一切之后，你就可以创建一个应用了基类的Mixin的类：

```typescript {1-2}
// 通过Mixin Scale 从Sprite类构成一个新的类
const EightBitSprite = Scale(Sprite)

const flappySprite = new EightBitSprite('Bird')
flappySprite.setScale(0.8)
console.log(flappySprite.scale)
```



## 2️⃣ 约束Mixins

上面的形式，mixin对类的底层一无所知，这对创建你想要设计的类不太友好。

为了添加模型，我们修改原来的构造器，现在它接收一个泛型的参数：

```typescript {6}
// 先前的构造器
type Constructor = new (...args: any[]) => {};

// 现在需要一个泛型版本
// 对需要mixin的类进行约束
type GConstructor<T> = new (...args: any[]) => T;
```

这使我们创建的类必须满足某种特殊约束的基类才行😎：

```typescript {1,4}
// Mixin的基类必须包含 setPos 函数，且函数签名也要满足
type Positionable = GConstructor<{ setPos: (x: number, y: number) => void}>;

// Mixin的基类必须是Sprite类型
type Spritable = GConstructor<Sprite>;

type Loggable = GConstructor<{ print: () => void}>;
```

然后，你可以在特定的基类智商创建Mixins：

```typescript {1,5}
// 💡基类必须满足 Positionable 的约束
function Jumpable<TBase extends Positionable>(Base: TBase) {
  return class Jumpable extends Base {
    jump() {
      // 基类上的 setPos方法🤩
      this.setPos(0, 20)
    }
  }
}
```



## 3️⃣ 🚀 另一种替换的模式

本文档之前的版本推荐了一种编写mixin的方法，你可以分别创建运行时和类型层次结构，然后在最后合并它们：

```typescript {15,18-19,22,25}
// 每种Mixin都是传统的ES class
class Jumpable {
  jump() {}
}

class Duckable {
  duck() {}
}

class Sprite {
  x = 0;
  y = 0;
}

// 💡然后创建一个接口，将预期的mixins与基类名称相同的mixins合并在一起
interface Sprite extends Duckable, Jumpable {}

// 🤩通过JS运行时将Mixins应用到base上
applyMixins(Sprite, [Jumpable, Duckable])

let player = new Sprite()
player.jump() // 通过mixin，player拥有了 Jumpable的功能
console.log(player.x, player.y)

// 这个工具函数可以放到代码的任何地方
function applyMixins(derivedCtor, constructors: any[]) {
  constructors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name)
        	|| Object.create(null)
      )
    })
  })
}
```

::: tip

关于 `applyMixins` 中知识点：

1. [Object.getOwnPropertyNames()](https://jamessawyer.github.io/deep-javascript-cn/4/Enumerability-of-Properties.html#_1%EF%B8%8F%E2%83%A3-%E5%8F%AF%E6%9E%9A%E4%B8%BE%E6%80%A7%E6%98%AF%E5%A6%82%E4%BD%95%E5%BD%B1%E5%93%8D%E5%B1%9E%E6%80%A7%E8%BF%AD%E4%BB%A3%E6%9E%84%E9%80%A0%E7%9A%84) 列举出自身字符串属性keys，这里主要是 `constructor` & `name` 2个keys
2. [Object.defineProperty()](https://jamessawyer.github.io/deep-javascript-cn/4/Property-attributes-an-Introduction.html#_4%EF%B8%8F%E2%83%A3-%E9%80%9A%E8%BF%87%E6%8F%8F%E8%BF%B0%E5%99%A8%E5%AE%9A%E4%B9%89%E5%B1%9E%E6%80%A7) 给对象添加属性值，这里主要是将基类的constructor赋值到派生类上，进行浅拷贝
3. [Object.getOwnPropertyDescriptor()](https://jamessawyer.github.io/deep-javascript-cn/4/Property-attributes-an-Introduction.html#_3%EF%B8%8F%E2%83%A3-%E5%8F%96%E5%9B%9E%E5%B1%9E%E6%80%A7%E7%9A%84%E7%89%B9%E6%80%A7) 获取属性描述符，这里主要将基类上属性添加到派生类上
4. [Object.create()](https://jamessawyer.github.io/deep-javascript-cn/4/Property-attributes-an-Introduction.html#_5%EF%B8%8F%E2%83%A3-object-create-%EF%BC%9A%E9%80%9A%E8%BF%87%E6%8F%8F%E8%BF%B0%E5%99%A8%E5%88%9B%E5%BB%BA%E5%AF%B9%E8%B1%A1) 创建一个新的对象，这里创建一个空的对象

:::

这个模式对编译器依赖更少，更多依赖你的代码，确保运行时和类型系统保持同步。



## 4️⃣ 限制

Mixin模式被TypeScript编译器通过代码流原生支持。有些场景可能会触碰到原生支持的边界😅。



### 4.1 装饰器和Mixins

可查看 [issuses@4881](https://github.com/microsoft/TypeScript/issues/4881)

你不能使用装饰器通过代码流分析来提供mixin：

```typescript {8,14,19,22}
// 一个复制Mixin模式的装饰器函数
const Pausable = (target: typeof Player) => {
  return class Pausable extends target {
    shouldFreeze = false
  }
}

@Pausable
class Player {
  x = 0;
  y = 0;
}

// 🚨Player类不会将装饰器类型进行合并
const player = new Player()
player.shouldFreeze;
// ❌ 属性 'shouldFreeze' 不存在于类型 'Player' 上

// 💡 运行时可以通过类型组合或接口合并可以手动复制
type FreezablePlayer = Player & { shouldFreeze: boolean }

const player2 = (new Player() as unknown) as FreezablePlayer;
playe2.shouldFreeze; // 👌
```

::: tip

使用装饰器，需要在 `tsconfig.json` 中开启下面编译选项：

```json
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
```

:::



### 4.2 静态属性Mixins

可查看 [issues@17829](https://github.com/microsoft/TypeScript/issues/17829)

这个更像一个缺陷，而不是限制。类表达式模式创建单例，因此它们不能在类型系统中被映射以支持不同的变量类型。

你可通过使用函数返回基于泛型不同的类来解决这个问题：

```typescript
function base<T>() {
  class Base {
    static prop: T
  }
  return Base
}

function derived<T>() {
  class Derived extends base<T>() {
    static anotherProp: T
  }
  return Derived
}

class Spec extends derived<string>() {}

Spec.prop; // string
Spec.anotherProp; // string
```

原文档：

- [Mixins](https://www.typescriptlang.org/docs/handbook/mixins.html)

::: tip

译者注：

Mixins模式在之前的JS库中很常见，比如老版本的React和老版本的Vue中，都能看到。它本质上就是对已有的功能进行扩展，但现在一般通过`组合`的模式进行功能扩展，更加的灵活。

:::

2022年09月17日17:46:38

