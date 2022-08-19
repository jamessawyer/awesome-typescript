---
title: js support
---

[[toc]]



## `allowJs` 👍

允许js文件在项目中被导入，而不仅仅是 `.ts` 和 `.tsx` 文件。

比如，下面JS文件：

```js
// @filename: card.js
export const defaultCardDeck = 'Heart'
```

当导入到TS文件中时会引发错误：

```typescript
// @filename index.ts
import { defaultCardDeck } from './card'
console.log(defaultCardDeck)
```

开启 `allowJs` 再引入就没什么问题：

```json {3}
{
  "compilerOptions": {
    "allowJs": true
  }
}
```

这个配置用于逐步添加TS文件到JS项目中，允许 `.ts` & `.tsx` 与 js文件共存。



::: tip 💡

相关联配置：

- [checkJs](#checkjs)
- [emitDeclarationOnly](./emit#emitdeclarationonly-👍-只生成声明文件)

:::



## `checkJs`

与 [allowJs](#allowjs-👍) 协同工作。当 `checkJs` 开启时，错误会在JS中也会触发。这相当于在项目中所有JS文件顶部包含了 `// @ts-check`：

```js
// parseFloat 值接收一个字符串
module.exports.pi = parseFloat(3.124)
```

当导入到TS模块中：

```typescript
// @filename: constants.js
module.exports.pi = parseFloat(3.124)

// @filename: index.ts
import { pi } from './constants'
console.log(pi)
```

你不会得到任何错误。如果你开启了 `checkJs`，JS文件中也会得到错误信息：

```json {3-4}
{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true
  }
}
```

错误信息如下：

```typescript {2}
// @filename: constants.js
🚫 Argument of type 'number' is not assignable to parameter of type 'string'
module.exports.pi = parseFloat(3.124)

// @filename: index.ts
import { pi } from './constants'
console.log(pi)
```

::: tip 💡

相关联配置：

- [allowJs](#allowjs-👍)
- [emitDeclarationOnly](./emit#emitdeclarationonly-👍-只生成声明文件)

:::



## `maxNodeModuleJsDepth`

在`node_modules`下搜索和加载JavaScript文件的最大依赖深度。

这个配置只能在 [allowJs](#allowjs-👍) 开启的情况下使用，如果你想让 TS 为你的 `node_modules` 中的所有JS推断类型，则使用它。

理想情况下，这应该保持为 `0`（默认值），并且应该使用 `d.ts` 文件来明确定义模块的形状。然而，你可能为了速度和可能的精确性开启这个配置。



原地址：

- [JavaScript Support](https://www.typescriptlang.org/tsconfig#JavaScript_Support_6247)

2022年08月19日21:38:43





