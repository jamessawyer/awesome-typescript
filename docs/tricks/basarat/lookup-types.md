---
title: Lookup Types
---

🌰 比如我们经常会碰到一些接口数据类型定义：

```typescript
export type SubmitRequest = {
  personal: {
    title: string;
    previousAliases: {
      firstName: string;
      lastName: string;
    }[]
  },
  payment: {
    cardToken: string;
  }
}
```

我们在应用中某个地方，需要使用 `部分` 数据类型，比如：

```typescript
export function getPayment() {
  return {
    // 这里实际想要写的是 carToken 不小心写错为了 carTokens
    cardTokens: 'xxxaee' // [!code error]
  }
}
```

这里我们想要的是 `{cardToken: string}` 类型，即 `SubmitRequest` 类型中 `payment` 对应的类型，但是因为没有类型验证，我们这里可能不小心将其写为了 `cardTokens`。于是我们可能定义一个 `Payment` 类型：

```typescript
type Payment = {
  cardToken: string
}

export function getPayment(): Payment {
  return {
    // ❌ 不能将类型 {cardTokens: string} 分配给 类型{cardToken: string}
    cardTokens: 'xxxaee' // [!code error]
  }
}
```

通过这种方式虽然可以解决这个问题，但是这里存在2个问题🤔：

1. 有可能我们只需要在 `getPayment` 这一个地方使用到 `Payment` 这个类型，只为了这一个地方用到的类型，而创建一个新的类型，可能会产生 `Type Noises`(类型杂音)
2. 这里的 `Payment` 类型和 `SubmitRequest` 相关联的，如果 `SubmitRequest` 中的类型发生了变化，还要将 `Payment` 类型进行同步修改，这会造成重复

可以通过TypeScript `Lookup Types` 功能，直接从其它类型或Interface中派生出新的类型：😎

```typescript
export function getPayment(): SubmitRequest['payment'] { // [!code focus]
  return {
    // ❌ 不能将类型 {cardTokens: string} 分配给 类型{cardToken: string}
    cardTokens: 'xxxaee' // [!code error]
  }
}
```

这里直接使用 `SubmitRequest['payment']` lookup types方式生成一个新的类型🎉。

如果我们需要复用这个类型，我们可以将其赋值给另一个类型：

```typescript
type Payment = SubmitRequest['payment']
```

另外还可以对上面的 `previousAliases` 数组类型进行类型提取：

```typescript
// 等价于 type Alias = {firstName: string; lastName: string;}
type Alias = SubmitRequest['personal']['previousAliases'][number] // better
// 或者
type Alias = SubmitRequest['personal']['previousAliases'][0]      // OK
```

::: warning

针对UP主提出的 `Type Noises`，该视频评论区有人觉得，使用子类型（`subtypes`）的方式更加的合理，即额外的定义 `Payment` & `Alias`：

```typescript
// 子类型
type Payment = {
  cardToken: string;
}

// 子类型
type Alias = {
  firstName: string;
  lastName: string;
}

// 组合成大的类型
export type SubmitRequest = {
  personal: {
    title: string;
    previousAliases: Alias[];
  },
  payment: Payment;
}
```

而 `Lookup types` 功能，则 `只在基类来自外部库的时候使用`😎。

对于这种观点，UP表示很赞成。

我个人也觉得这一观点比较正确，但是知道Lookup types这一特性也很重要。

:::



关于 `Lookup` 类型可参考：

- [keyof & lookup types - ts docs](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#keyof-and-lookup-types)



视频地址：

- [Lookup Types - basarat@youtube](https://www.youtube.com/watch?v=K0zc_fx3vkk&list=PLYvdvJlnTOjF6aJsWWAt7kZRJvzw-en8B)



2022年11月25日11:56:54
