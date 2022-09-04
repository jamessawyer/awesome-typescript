---
title: Consumption
---

[[toc]]



## 1️⃣ 下载

获取类型声明只需要npm即可。

作为示例，获取像 `lodash` 这样库的声明文件，只需使用下面命令即可：

```bash
npm install -D @types/lodash
```

值得注意的是，如果npm包已经像[Publishing](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html)中描述的那样包含了它的声明文件，那么就不需要下载相应的`@types`包。





## 2️⃣ 使用

从此，你就可以在TypeScript代码中毫不费力地使用lodash了。这在模块和全局代码中都可用。

比如，一旦你 `npm install` 安装了你的类型声明，你就可以使用导入，然后写：

```typescript
import * as _ from 'lodash'

_.padStart('Hello TypeScript!', 20, ' ')
```

或者如果你没有使用模块，你可以直接使用全局变量 `_`:

```typescript
_.padStart('Hello TypeScript!', 20, ' ')
```



## 3️⃣ 搜索

在大多数情况下，类型声明包应该与`npm`上的包名相同，但前缀是`@types/`，但如果需要，你可以查看 [Types Search](https://aka.ms/types) 找到你想要的包。



::: tip

注意:如果你正在搜索的声明文件不存在，你总是可以贡献一个，并帮助下一个开发人员寻找它。

:::



原文档：

- [Consumption](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html)



2022年09月04日22:49:16
