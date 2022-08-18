---
title: type checking
---
Type Checking 配置项：
[[toc]]

## `allowUnreachableCode` 是否允许不可到达代码

当：
 - `undefined`（默认） 以警告的方式给编辑器提供简易
 - `true` 不可达到代码被忽略
 - `false` 对不可到达的代码引发编译器错误

这些警告只针对那些由于使用JavaScript语法而无法访问的代码，比如：

```typescript
function fn(n: number) {
  if (n > 5) {
    return true
  } else {
    return false
  }
  return true // 这里不可到达
}
```
使用 `"allowUnreachableCode": false`:
```typescript {8}
function fn(n: number) {
  if (n > 5) {
    return true
  } else {
    return false
  }
  return true // 这里不可到达
  🚫 Unreachable code detected
}
```
这不会影响由于类型分析而无法访问的代码的错误。


## `allowUnusedLabels` 允许未使用的标签

当：
- `undefined` （默认） 会给编辑器提供警告建议
- `true` 未使用标签会被忽略
- `false` 对未使用标签引发编译器错误

JS中很少是使用标签（`label`），一般可能是尝试写对象字面量而误写成标签：

🌰：
```typescript {2,5}
function verifyAge(age: number) {
  // 忘记了 `return` 语句
  if (age > 18) {
    verified: true
    🚫 Unused label
  }
}
```

## `alwaysStrict` 总是严格 👍

确保你的文件以ESCAScript严格模式被解析，并对产生的源文件都添加 `"use strict"`

[ECMAScript strict](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Strict_mode) 模式在ES5被引入，对JS引擎的运行时提供行为纠正，以提升性能，并抛出一组错误，而不是默默地忽略它们。

::: tip
👍 推荐开启



默认： 如果 [strict](https://www.typescriptlang.org/tsconfig#strict) 开启，则 `true`；否则为 `false`

相关：

 - [strict](##strict-严格模式-🚀🚀-👍) 

:::



## `exactOptionalPropertyTypes` 👍
当开启exactOptionalPropertyTypes，TS对如何处理 `type | interface` 中有 `?` 前缀的属性开启更严格的规则。

比如，下面接口声明中，有个属性可能是 `'dark' | 'light'` 中的一种，或者不应该在对象中：
```typescript
interface UserDefaults {
  // 确实值表示 'system'
  colorThemeOverride?: 'dark' | 'light';
}
```
如果不开启这个选项，则 `colorThemeOverride` 存在3个值：`'dark' | 'light' | undefined`。

如果设置为 `undefined`，将允许大多数JS运行时检测存在性失败，这实际上是错误的😅。然而，这不是很精确，`colorThemeOverride: undefined` 和 `colorThemeOverride` 没有被定义是不一样 的。比如 `"colorThemeOverride"` 在设置中将有不同的行为，未定义为键与未定义。

`exactOptionalPropertyTypes` 使TS真正强制作为可选属性提供的定义:

```typescript {8-10}
const settings = getUserSettings()
settings.colorThemeOverride = 'dark'
settings.colorThemeOverride = 'light'

// 但是不是：
settings.colorThemeOverride = undefined

🚫 Type 'undefined' is not assignable to type `'dark' | 'light'`
with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined'
to the type of the target.
```

::: tip
👍 推荐开启
:::

## `noFallthroughCasesInSwitch` - 不允许switch中Fallthrough Cases

对swtich语句中的fallrough cases上报错误。确保任何非空case至少包含 `break` 或者 `return`。这也意味着你不会不小心导致一个case fallrough（贯穿）的bug:

```typescript {5}
const a: number = 0

switch (a) {
  case 0:
    🚫 Fallthrough case in Switch
    console.log('even')
  case 1:
    console.log('odd')
    break
}
```

## `noImplicityAny` - 没有隐式Any 👍

有时可能没有类型注解出现，TS将对不能推断的变量使用 `any` 作为其类型。

类型的缺失这可能导致一些错误，比如：
```typescript
function fn(s) {
  // 没有错误？
  console.log(s.subtr(3))
}

fn(42)
```
开启 `noImplicityAny`，TS会在推断为 `any` 时上报错误：
```typescript {2}
function fn(s) {
  🚫 Parameter 's' implicitly has an 'any' type
  console.log(s.subtr(3))
}
```
::: tip
👍 推荐开启

默认： 如果 [strict](https://www.typescriptlang.org/tsconfig#strict) 开启，则 `true`；否则为 `false`

相关：

 - [strict](https://www.typescriptlang.org/tsconfig#strict) 

:::



## `noImplicitOverride` - 没有隐式重载

当使用类继承时，子类中重写的方法可能因为父类重命名导致 `失去同步`。

比如，假设你正在构造一个音乐专辑同步系统：

```typescript
class Album {
  download() {
    // 默认行为
  }
}

class SharedAlbum extends Album {
  download() {
    // 重载，从多个源获取信息
  }
}
```

然后当你添加都机器学习生成的播放列表功能，你重构了 `Album` 类，用一个 `setup` 方法替换了原来的 `download` 方法：

```typescript {2-4}
class Album {
  setup() {
    // 默认行为
  }
}

class MLAlbum extends Album {
  setup() {
    // 重载，从某个算法获取信息
  }
}

class SharedAlbum extends Album {
  download() {
    // 重载，从多个源获取信息
  }
}
```

这种情况，TS对 `SharedAlbum` 中希望重载基类中的 `download` 方法并没有提供任何警告😅。

使用 `noImplicitOverride` 你可确保子类永远不会失去同步，到需要重载方法时，在方法前添加 `override` 关键词😎。

下面例子开启 `noImplicitOverride`，当缺少 `override` 关键词时，会收到一个错误：

```typescript {11-12}
class Album {
  setup() {}
}

class MLAlbum extends Album {
  override setup() {}
}

class SharedAlbum extends Album {
  setup() {}
  🚫 This member must have an 'override' modifier because it
  overrides a member in the base class 'Album'
}
```



## `noImplicitReturens` - 没有隐式返回

当开启后，TS会检查函数中所有代码路径，确保函数存在返回值。

```typescript {2-3}
function lookupHeadphonesManufacturer(color: 'blue' | 'black'): string {
  🚫 Functions lacks ending return statement and return type
  does not include 'undefined'
  if (color === 'blue') {
    return 'beats'
  } else {
    'bose'
  }
}
```



## `noImplicitThis` - 没有隐式this

当 `this` 表达式为隐式的 `any` 类型，引发错误。

比如，下面类中，函数 `getAreaFunction` 函数另一个函数，它访问了 `this.width` & `this.height`，但是该上下文的 `this` 并不是一个 `Rectangle` 实例：

```typescript {13-14}
class Rectangle {
  width: number
  height: number
  
  constructor(width: number, height: number) {
    this.width = width
    this.height = height
  }
  
  getAreaFunction() {
    return function() {
      return this.width * this.height // 这里的 this 隐式类型为 any
      🚫 'this' implicitly has type 'any' because it does not 
      have a type annotation
    }
  }
}
```





## `noPropertyAccessFromIndexSIgnature`

这个设置确保访问属性的一致性，通过 `点（obj.key）` 和 `索引（obj['key']）` 和属性声明方式。

不开启这个flag，TS允许你使用点访问没有声明的属性：

```typescript
interface GameSettings {
  // 预先已知的属性
  speed: 'fast' | 'medium' | 'slow';
  quality: 'hight' | 'low';
  
  // 未知属性，key为字符串
  [key: string]: string;
}

const settings = getSettings()
settings.speed // 提示 (property) GameSettings.speed: 'fast' | 'medium' | 'slow'
settings.quality // 提示 (property) GameSettings.quality:  'hight' | 'low'

settings.username // 提示 string
```

开启这个flag，使用点语法访问而不是索引语法会抛出错误：

```typescript {7-8}
const settings = getSettings()
settings.speed
settings.quality

// 💡 这里应该写为 settings['username']
settings.username
🚫 Property 'username' comes from an index signature,
  so it must be accessed with ['username']
```

🌰：开启该选项（译者添加）

```typescript {16-17}
interface GameSettings {
  // 预先已知的属性
  speed: 'fast' | 'medium' | 'slow';
  quality: 'hight' | 'low';
  
  // 未知属性，key为字符串 index signature
  [key: string]: string;
}

const settings: GameSettings = {
  speed: 'fast',
  quality: 'low',
  username: 'james'
}

settings.username // ❌
settings['username'] // ✅
```



## `noUncheckedIndexedAccess`

TS有一种方法来描述那些键未知但值已知的对象——通过索引签名。

```typescript {5-6,13,15-16}
interface EnvironmentVars {
  NAME: string;
  OS: string;
  
  // 使用index sigature表示未知属性
  [propName: string]: string;
}

declare const env: EnvironmentVars

// 声明已经存在的
const sysName = env.NAME
const os = env.OS // 💡 const os: string

// 没有声明，但是因为index signature，它被认为是一个字符串
const nodeEnv = env.NODE_ENV // 💡  const nodeEnv: string
```

开启 `noUncheckedIndexedAccess`，将给任何未定义的字段额外添加一个 `undefined` 类型：

```typescript {3}
declare const env: EnvironmentVars;
 
const nodeEnv = env.NODE_ENV // 💡 const nodeEnv: string | undefined
```



## `noUnusedLocals` - 不允许未使用的本地变量

存在未使用的本地变量时报错。

```typescript {3}
const createKeyboard = (modelID: number) => {
  const defaultModelID = 23
  🚫 'defaultModelID' is declared but its value is never read
  return { type: 'keyboard', modelID }
}
```





## `noUnusedParameters` - 不允许未使用的参数

存在未使用的参数时报错。

```typescript {2}
const createKeyboard = (modelID: number) => {
  🚫 'modelID' is declared but its value is never read
  const defaultModelID = 23
  return { type: 'keyboard', modelID: defaultModelID }
}
```





## `strict` - 严格模式 🚀🚀 👍

`strict` 标志启用了一些列广泛的类型检查行为，从而更有效地保证了程序的正确性😎。

开启这个，相当于开启了 `严格模式全家桶`，你可以对其中某些选项进行关闭。



::: warning

TS的未来版本可能会在此标志下引入额外更严格的检查，因此TS的升级可能会导致程序中出现新的类型错误。在适当和可能的情况下，将添加相应的标志来禁用该行为。

:::



相关：

- [alwaysStrict](#alwaysStrict)
- [strictNullChecks](#strictNullChecks)
- [strictBindCallApply](#strictBindCallApply)
- [strictFunctionTypes](#strictFunctionTypes)
- [strictPropertyInitialization](#strictPropertyInitialization)
- [noImplicitAny](#noImplicitAny)
- [noImplicitThis](#noImplicitThis)
- [useUnknownInCatchVariables](#useUnknownInCatchVariables)



## `strictBindCallApply` 👍

设置后，TS将检查函数 `call`、`bind` 和 `apply` 的内置方法是否使用底层函数的正确参数调用：

```typescript {8-9}
// 开启 strictBindCallApply
function fn(x: string) {
  return parseInt(x)
}

const n1 = fn.call(undefined, '10')
const n2 = fn.call(undefined, false) // `false` 类型不对
🚫 Argument of type 'boolean' is not assignable to parameter 
of type 'string'
```



如果不开启，这些函数可以接收任意参数，并返回 `any`:

```typescript {6}
// 关闭 strictBindCallApply
function fn(x: string) {
  return parseInt(x)
}

// OK，没有错误，并且返回类型为 `any`
const n = fn.call(undefined, false)
```



::: tip

👍 推荐开启

如果 `strict` 为 `true`，则这个选项也为 `true`；否则为 `false`

:::

## `strictFunctionTypes `👍

当开启这个，会使函数参数检测更正确。

下面是 `strictFunctionTypes` 关闭的情况：

```typescript {7,9}
function fn(x: string) {
  console.log('Hello, ' + x.toLowerCase())
}

type StringOrNumber = (ns: string | number) => voied

// 🚨 不安全赋值
let func: StringOrNumber = fn
// 不安全调用
func(10)
```



`开启这个选项，则错误会被正确的检测出来`😎

```typescript {9-12}
function fn(x: string) {
  console.log('Hello, ' + x.toLowerCase())
}

type StringOrNumber = (ns: string | number) => voied

// 不安全赋值被阻止😎
let func: StringOrNumber = fn
🚫Type '(x: string) => void' is not assignable to type 'StringOrNumberFunc'.
  Type of parameters 'x' and 'ns' are incompatible.
    Type 'string | number' is not assignable to type 'string'.
      Type 'number' is not assignable to type 'string'.
```

在开发此功能的过程中，我们发现了大量天生的不安全类层次结构，包括 DOM 中的一些。因此，该设置仅适用于以`函数语法`编写的函数，不适用于以`方法语法`编写的函数：

```typescript {9,11}
type Methodish = {
  func(x: string | number): void;
}

function fn(x: string) {
  console.log('Hello, ' + x.toLowerCase())
}

// 最终还是一个不安全赋值，但是没有被检测出来😅
const m: Methodish = {
  func: fn,
}
m.func(10)
```



::: tip

👍 推荐开启。

默认： 如果开启 `strict`，则为 `true`；否则为 `false`



相关：

- `strict` 选项

:::



## `strictNullCheck` 👍

当 `strictNullCheck` 为 `false` 时，`null` & `undefined` 将被语言直接忽略。这将可能导致意想不到的运行时错误。

当开启这个选项，`null` & `undefined` 将被当做单独的类型。如果某个地方期望一个正确值，而你却使用了 `null | undefined`，将抛出错误。

例如，下面的 `users.find` 不能确保能找到一个user，但是你的代码却认为一定能找到：

```typescript {9}
delcare const loggedInUsername: string;

const users = [
  {name: 'Oby', age: 12},
  {name: 'Heera', age: 32}
]

const loggedInUser = users.find(u => u.name === loggedInUsername)
console.log(loggedInUser.user)
```

当开启这个选项，TS会抛出错误，因为在没有确认 `loggedInUser` 存在之前就使用了它：

```typescript {10}
delcare const loggedInUsername: string;

const users = [
  {name: 'Oby', age: 12},
  {name: 'Heera', age: 32}
]

const loggedInUser = users.find(u => u.name === loggedInUsername)
console.log(loggedInUser.user)
🚫 Object is possibly 'undefined'
```

示例2失败是因为数组的 `find` 函数看起来有点像这样的简化：

```typescript {9}
// 当开启 strictNullCheck
type Array = {
  find(predicate: (value: any, index: number) => boolean): S | undefined;
}

// 当 strictNullCheck 关闭，`undefined` 会从类型系统中被移除
// 允许你假设永远都有一个结果返回
type Array = {
  find(predicate: (value: any, index: number) => boolean): S;
}
```

::: tip

👍 推荐开启

默认： 如果开启 `strict`，则为 `true`；否则为 `false`



相关：

- `strict` 选项

:::





## `strictPropertyInitialization ` 👍



当开启时，如果`类属性`声明了，但是没有在构造器中设置值，TS会抛出错误。

```typescript {6-7}
class UserAccount {
  name: string
  accountType = 'user'
  
  email: string
  🚫 Property 'email' has no initialier and is not definitely
  assigned in the constructor.
  
  address: string | undefined;
  
  constructor(name: string) {
    this.name = name
    // 🚨 this.email 没有设置任何值
  }
}
```

上面例子中：

- `this.name` 在构造器中被设置
- `this.accountType` 默认被设置
- `this.email` 没有被设置，抛出错误
- `this.address` 被声明了可能为 `undefined`，这意味着它不需要强制设置😎



::: tip

👍 推荐开启

默认： 如果开启 `strict`，则为 `true`；否则为 `false`



相关：

- `strict` 选项

:::



## `useUnknownInCatchVariables`

在TS4.0中，支持在 `catch` 语句中，将变量类型从`any` 更改为 `unknown`。允许如下代码：

```typescript
try {
  // ...
} catch (err) {
  // 在使用err前，我们必须先验证 err 是一个 Error实例
  if (err instanceof Error) {
    console.log(err.message)
  }
}
```

这种模式确保错误处理代码变得更加全面，因为你无法提前保证抛出的对象是 Error 子类。开启 `useUnknownInCatchVariables` 选项，你不再需要额外的语法 `(: unknown)`,也不需要 linter 规则来尝试强制执行此行为。



::: tip

默认： 如果开启 `strict`，则为 `true`；否则为 `false`



相关：

- `strict` 选项

:::



2022年08月18日10:20:14

