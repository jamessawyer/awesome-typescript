---
title: include root
---

指定要包含在程序中的文件名或模式数组。这些文件名会相对于包含 `tsconfig.json` 文件所在文件夹的进行解析的。

```json
{
  "include": ["src/**/*", "tests/**/*"]
}
```
包含文件如下：
```bash
.
├── scripts                ⨯
│   ├── lint.ts            ⨯
│   ├── update_deps.ts     ⨯
│   └── utils.ts           ⨯
├── src                    ✓
│   ├── client             ✓
│   │    ├── index.ts      ✓
│   │    └── utils.ts      ✓
│   ├── server             ✓
│   │    └── index.ts      ✓
├── tests                  ✓
│   ├── app.test.ts        ✓
│   ├── utils.ts           ✓
│   └── tests.d.ts         ✓
├── package.json
├── tsconfig.json   // 💡相对 tsconfi.json 所在的路径
└── yarn.lock
```
`include` 和 `exclude` 支持通配字符，支持glob模式：
- `*` 匹配0个或多个字符（不包括路径分隔符 比如 `/`）
- `?` 匹配任意一个字符（不包括路径分隔符 比如 `/`）
- `**/` 匹配任意嵌套层级目录

👩‍🏫 如果glob模式不包含文件扩展，则只有支持的扩展会被包括（比如：默认包括 `.ts`, `.tsx` 和 `.d.ts`，如果开启了 `allowJs: true`， 则 `.js` & `.jsx` 也会被包括进去）。

默认：如果指定了 [files](./files) 则默认为 `[]`；否则默认为 `**`

相关：
 - [files](./files)
 - [exclude](./exclude)
