---
title: 工具类型
---
[[toc]]

TS提供了一些工具类型，便于通用类型转换。这些类型都是全局的。



## 0️⃣ ⭐ `Awaited<Type>`

这种类型用于对 `async` 函数中的`await`，或 `Promise`s 中的 `then()` 方法等操作进行建模 - 具体讲，`它们会递归解包Promises`。

🌰

```typescript {1,4-5,8}
// type A = string
type A = Awaited<Promise<string>>

// 递归解包Promise 😎
// type B = number
type B = Awaited<Promise<Promise<number>>>

// type C = boolean | number
type C = Awaited<boolean | Promise<number>>
```

::: tip

```typescript
// 如果 T 是 null | undefined, 
//   直接返回 null | undefined
//   否则，判断 T是否是一个对象，并且是一个 Thenable对象（即满足Promise协议）
//     如果满足，则判断 F 是否是一个函数
//       如果是一个函数，则进行递归解包
//       否则啥也不做
//     如果不是一个函数，则直接返回 T类型（即只有一层Promise包裹）
type Awaited<T> = 
	T extends null | undefined
		? T 
		: T extends object & { then(onfulfilled: infer F): any }
			? F extends (value: V, ...args: any) => any
				? Awaited<V>
				: never
			: T
```

:::

## 1️⃣ `Partial<Type>`

将所有的 `Type` 都设置为可选。这个工具类将返回一个类型，表示给定类型的所有子集。

🌰

```typescript {6}
interface Todo {
  title: string;
  description: string;
}

// fieldsToUpdate 为 Todo 的任意子集
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate }
}

const todo1 = {
  title: 'AA',
  description: 'BB'
}

const todo2 = updateTodo(todo1, {
  description: 'CC'
})
```

::: tip

```typescript
// 🤩 这里的 `?` 表示让每个属性都变为可选类型
type Partial<T> = {
  [P in keyof T]?: T[P] | undefined;
}
```

:::

## 2️⃣ `Required<Type>`

将 `Type` 的所有属性都设置为必须的。它是上面 `Partial` 的反操作

🌰

```typescript {8}
interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 }
const obj2: Require<Props> = {a: 5}
// ❌  '{a: numbner;}' 类型中缺少属性 'b'，它在类型 'Required<Props>' 中是必需的
```

::: tip

```typescript
// 🤩 这里的 `-?` 表示去掉可选类型
type Require<T> = {
  [P in keyof T]-?: T[P];
}
```

:::

## 3️⃣ `Readonly<Type>`

将 `Type` 所有属性设置为只读，这意味着属性不能重新赋值。

🌰

```typescript {10}
interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: '我是只读属性'
}

todo.title = '再赋值就报错'
// ❌ 不能给 `title` 赋值，因为它是一个只读属性
```

这个工具对运行时赋值会失败很有用（比如：当尝试对一个 [冻结对象](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) 进行重赋值）。

`Object.freeze`:

```typescript
function freeze<Type>(obj: Type): Readonly<Type>
```

::: tip

```typescript
// 即遍历T中的所有属性，然后添加 readonly 修饰
type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
}
```

:::

## 4️⃣ ⭐ `Record<Keys, Type>`

构造一个属性键为 `Keys`，属性值为 `Type`的 `对象类型`。这个工具用于将一个类型的属性映射为另一个类型。

🌰

```typescript {8,15}
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = 'miffy' | 'boris' | 'mordred'

// 进行映射
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Maine Coon' },
  mordred: { age: 4, breed: 'British Shorthair' },
}
cats.boris
//💡 const cats: Record<CatName, CatInfo>
```

::: tip

```typescript
// string | number | symbol 是对象允许的合法键类型
type Record<K extends string | number | symbol, T> = {
  [P in K]: T;
}
```

:::

## 5️⃣ ⭐ `Pick<Type, Keys>`

通过从 `Type` 中`挑选`一组属性 `Keys`(字符串字面量或字面量联合) 构成新的类型。

🌰

```typescript {7,14}
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// 从Todo中挑选 'title' | 'completed'
type TodoPreview = Pick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false
}
// 💡 type TodoPreview = { title: string; completed: boolean; }
```

::: tip

```typescript
// 从 T中挑选想要的属性
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
}
```

:::

## 6️⃣ `Omit<Type, Keys>`

从 `Type` 中挑选要`被移除`的属性 `Keys`(字符串字面量或字面量联合)构成新的类型。

🌰

```typescript {8-10,18-20}
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

// 忽略 'description'
type TodoPreview = Omit<Todo, 'description'>
// {title: string; completed: boolean; createdAt: number;}

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
}

// 忽略 'completed' 和 'createdAt'
type TodoInfo = Omit<Todo, 'completed' | 'createdAt'>
// {title: string; description: string;}

const todoInfo: TodoInfo = {
  title: 'Pick up kids',
  description: 'Kindergarten closes at 5pm'
}
```

::: tip

基本上可以看出 `Omit` 是 `Pick` 的反操作，一个忽略不想要的，一个挑选想要的😎

```typescript
// 利用了 keyof T 操作符
// [P in xx] 语法
// T[P] 索引类型
type Omit<T, K extends string | number | symbol> = {
  [P in Exclude<keyof T, K>]: T[P]
}
```

:::



## 7️⃣ ⭐ `Exclude<UnionType, ExcludedMembers>`

通过从`联合`类型 `UnionType` 中排除 `ExcludedMembers` 部分构建新的类型。

🌰

```typescript {1-2,9-10}
// 从联合类型 'a' | 'b' | 'c' 排除成员 'a'
// 因此 type T0 = 'b' | 'c'
type T0 = Exclude<'a' | 'b' | 'c', 'a'>

// 从联合类型 'a' | 'b' | 'c' 排除成员 'a' 和 'b'
// 因此 type T1 = 'c'
type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>

// 从联合类型中 排除 函数类型成员🤩
// 因此 type T2 = string | number 
type T2 = Exclude<string | number | (() => void), Function>
```

::: tip

```typescript
type Exclude<T, U> = T extends U ? never : T;
```

:::

## 8️⃣ ⭐ `Extract<Type, Union>`

通过从 `Type` 中提取可分配给`Union`的所有联合成员来构造类型。

🌰

```typescript {1-3,6-7}
// 从类型 'a' | 'b' | 'c' 中提取可分配给联合类型 'a' | 'f' 中的成员
// 这里只有 `a` 满足类型类型😎
// 因此 type T0 = 'a'
type T0 = Extract<'a' | 'b' | 'c', 'a' | 'f'>

// 只有 () => void 满足，因此被提取出来
// type T1 = () => void
type T1 = Extract<string | number | (() => void), Function>
```

::: tip

```typescript
// 即只将T继承了U的部分提取出来
type Extract<T, U> = T extends U ? T : never;
```

:::

## 9️⃣ `NonNullable<Type>`

从 `Type` 中排除 `null` & `undefined` 这些空类型来构造新的类型。

🌰

```typescript {1-2,5}
// 排除 undefined 类型
// 因此 type T0 = string | number
type T0 = NonNullable<string | number | undefined>

// type T1 = string[]
type T1 = NonNullable<string[] | null | undefined>
```

::: tip

```typescript
type NonNullable<T> = T extends null | undefined ? never : T
```

:::

## 🔟 🤩 `Parameters<Type>`

从用作是函数的参数类型 `Type` 中构造一个`元组（tuple）类型`。

🌰

```typescript {3,13,20,26-28,31}
declare function f1(arg: {a: number, b: string}): void;

// 参数为空 因此 type T0 = []
type T0 = Parameters<() => string>;

// type T1 = [s: string] 元组类型
type T1 = Parameters<(s: string) => void>;

// 泛型🤩
// type T2 = [arg: unknown]
type T2 = Parameters<<T>(arg: T) => T>;

// typeof 操作符
// type T3 = [arg: {
//   a: number;
//   b: string;
// }]
type T3 = Parameters<typeof f1>;

// type T4 = unknown[] 🤩
type T4 = Parameters<any>;
                     
// type T5 = never 🤩
type T5 = Parameters<never>;
                     
// ❌ 类型 'string' 不能满足 '(...args: any) => any' 的约束
// 即这里的 string 类型不是一个函数
// type T6 = never
type T6 = Parameters<string>;

// ❌ 类型 'Function' 不能满足 '(...args: any) => any' 的约束
//  类型 'Function' 没有提供对 '(...args: any) => any' 签名的匹配
// type T7 = never
type T7 = Parameters<Function>
```

::: tip

```typescript
type Parameters<T extends (...args: any) => any> =
  T extends (...args: infer P) => any
    ? P
    : never
```

:::



## 1️⃣1️⃣ `ConstructorParameters<Type>`

从构造器函数的参数中构建一个元组或数组类型。它生成所有参数类型的元组类型（或当 `Type` 不是一个函数时，返回的类型为 `never`）。

🌰

```typescript {1-2,5-6,9-10,16}
// 元组
// type T0 = [message?: string]
type T0 = ConstructorParameters<ErrorConstructor>;

// 数组
// type T1 = string[]
type T1 = ConstructorParameters<FunctonConstructor>;

// 元组
// type T2 = [pattern: string | RegExp, flags?: string]
type T2 = ConstructorParameters<RegExpConstructor>;

// type T3 = unknown[]
type T3 = ConstructorParameter<any>;

// ❌ 类型 'Functon' 不能满足 'abstract new (...args: any) => any' 约束
//  类型 'Functon' 不能匹配 `new (...args: any): any`
// type T4 = never
type T4 = ConstructorParameters<Function>
```

::: tip 定义

```typescript
type ConstructorParameters<T extends abstract new (...args: any) => any> =
  T extends abstract new (args: infer P) => any 
		? P 
		: never
```

:::



## 1️⃣2️⃣ ⭐ `ReturnType<Type>`

将函数的返回类型 `Type` 构造一个类型。

🌰

```typescript {3-4,7,10,13-14,17-20,22-23,26-27,30,33-34}
declare function f1(): {a: number, b: string}

// 函数的返回类型是 string
// 因此 type T0 = string
type T0 = ReturnType<() => string>

// type T1 = void
type T1 = ReturnType<(s: string) => void>

// type T2 = unknown
type T2 = ReturnType<<T>() => T>;

// T 继承 U， U又继承number[]
// type T3 = number[]
type T3 = ReturnTYpe<<T extends U, U extends number[]>() => T>;

// 🤩 很常见的一种获取函数返回类型的方式
// typeof f1 获取函数的签名为 () => {a: number, b: string}
// type T4 = {a: number, b: string}
type T4 = ReturnType<typeof f1>;
    
// 🤔
// type T5 = any
type T5 = ReturnType<any>;

// 🤔
// type T6 = never
type T6 = ReturnType<never>;

// ❌ 类型 'string' 不能满足 '(...args: any) => any' 约束
type T7 = ReturnType<string>;

// ❌ 类型 'Function' 不能满足 '(...args: any) => any' 约束
// ❌ 类型 'Function' 不能匹配 '(...args: any): any' 签名
type T8 = ReturnType<Function>;
```

::: tip 定义

```typescript
// 💡 使用 'infer' 进行类型推断
type ReturnType<T extends (...args: any) => any> =
  T extends (...args: any) => infer R ? R : any
```

:::



## 1️⃣3️⃣ `InstanceType<Type>`

构造一个由传入的 `Type` 构造函数的实例类型组成的类型。

🌰

```typescript {6-7,10,13,16-18,21-22}
class C {
  x = 0;
  y = 0;
}

// 💡类既可以作为值也可以作为类型使用 let c: C = new C()
// type T0 = C;
type T0 = InstanceType(typeof C);

// type T1 = any;
type T1 = InstanceType(any);

// type T2 = never;
type T2 = InstanceType<never>;

//  ❌ 类型 'string' 不能满足 'abstract new (...args: any) => any' 约束
// 翻译一下，string不是一个类
// type T3 = any;
type T3 = InstanceType<string>;

// ❌ 类型 'Function' 不能满足 'abstract (...args: any) => any' 约束
// ❌ 类型 'Function' 不能匹配 'new (...args: any): any' 签名
// type T4 = any;
type T4 = InstanceType<Function>;
```

::: tip

```typescript
// 这个和 ConstructorParameters 有点像
// ConstructorParameters 是推断构造函数参数
// InstanceType 推断的是构造函数的返回类型 即实例类型
type InstanceType<T extends abstract new (...args: any) => any> =
  T extends abstract new (...args: any) => infer R
    ? R
    : any
```

:::



## 1️⃣4️⃣ `ThisParameterType<Type>`

提取函数类型的 [this](https://www.typescriptlang.org/docs/handbook/functions.html#this-parameters) 参数的类型，如果函数类型不存在 `this` 参数，则返回 `unknown`。

🌰

```typescript
function toHex(this: Number) {
  return this.toString(16);
}

function numberToString(n: ThisParamterType<typeof toHex>) {
  return toHex.apply(n);
}
```

::: tip

```typescript
// 先判断 this 参数存不存在
type ThisParameterType<T> =
  T extends (this: infer U, ...args: any) => any 
    ? U 
    : unknown;
```

:::



## 1️⃣5️⃣ `OmitThisParameterType<Type>`

从 `Type` 中移除 `this` 参数。如果 `Type` 没有显式声明 `this` 参数，结果直接返回 `Type`。否则，一个从 `Type` 类型中排除了 `this` 参数的新类型会被创建。泛型会被擦除，只有最后一个重载签名会传播为新的函数类型。

🌰

```typescript
function toHex(this: Number) {
  return this.toString(16);
}

// type fiveToHex = () => string;
// this 参数被移除
const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);

console.log(fiveToHex());
```

::: tip

```typescript
// 先判断 this 参数存不存在 unknown extends ThisParameterType<T>
//   不存在直接返回 类型T
//   如果存在，然后判断是不是一个函数，并对函数参数和返回值进行推断
//     T extends (...args: infer A) => infer R
//       如果是函数返回函数签名 (...arg: A) => R
//       如果不是，则直接返回类型T
type OmitThisParameterType<T> =
  unknown extends ThisParameterType<T>
    ? T
    : T extends (...args: infer A) => infer R
      ? (...arg: A) => R
      : T;
```

:::



## 1️⃣6️⃣ `ThisType<Type>`

这个工具不会返回转换后的类型，而是充当 [this](https://www.typescriptlang.org/docs/handbook/functions.html#this) 类型的标记。🚨要使用这个工具，[noImplictThis](../tsconfig/compiler/type-checking.html#noimplicitthis-没有隐式this) 编译选项必须开启。

🌰

```typescript
type ObjectDescriptor<D, M> = {
  data?: D;
  // methods中的 'this' 类型是 D & M
  methods?: M & ThisType<D & M>;
}

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  let data: object = desc.data || {}
  let methods: object = desc.methods || {}
  return { ...data, ...methods } as D & M
}

let obj = makeObject({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx // Strongly typed this
      this.y += dy // Strongly typed this
    }
  }
})

obj.x = 10
obj.y = 20
obj.moveBy(5, 5)
```

在上面的例子中，`makeObject`的参数中的 `methods` 对象有一个上下文类型，包括`ThisType<D & M>`，因此方法对象中的 `this` 的类型是`{x: number, y: number}&{moveBy(dx: number, dy: number): number}`。注意`methods`属性的类型是如何同时作为方法中 `this` 类型的推断目标和源的。

`ThisType<T>` 标记类型是在  `lib.d.ts` 中的一个简单空接口（`interface`）声明。除了在对象字面量上下文类型中被识别外，该接口表现的就像一个空的接口。



## 1️⃣7️⃣ 内置字符串类型操作

- `Uppercase<StringType>`
- `Lowercase<StringType>`
- `Capitalize<StringType>`
- `Uncapitalize<StringType>`



为了帮助对模板字符串字面量的操作，TypeScript包含了一组类型，可以在类型系统中用于进行字符串操作。可以在 [Template Literal Types](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#uppercasestringtype) 文档找到更多。



原文档：

- [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html?)

2022年09月11日00:24:30

