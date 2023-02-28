---
title: tsx
---

https://github.com/esbuild-kit/tsx

TSX的优点：

1. 超快的按需 TypeScript 和 ESM 编译

2. 支持 `watch mode` 🎉；而 `ts-node` 是不支持的，只能借助 `nodemon`

3. 适用于 CommonJS 和 ESM 包

4. 支持下一代 TypeScript 扩展 （ `.cts` & `.mts` ）

5. 支持 `node:` 前缀的导入当时（`import fs from 'node:fs'`）

6. TypeScript REPL😎（直接在terminal中输入 `tsx`，然后并可以进入REPL界面了）

7. 能够解析tsconfig.json中配置的 `paths`，即路径映射，比如

   ```json
   // tsconfig.json
   {
     "compilerOptions": {
       "baseUrl": "./",
       "paths": {
         "@utils/*": ["src/utils/*"]
       }
     }
   }
   ```

   然后在模块中使用：

   ```tsx
   import { add } from '@utils/math'
   ```

   `tsx` 能对其进行解析，而 `ts-node` 是不支持的。

8. tsx还支持对 `import.meta.url `(ES2020特性) 进行shim（注释：ESM -> CJS时进行shim）；而 `ts-node` 直接报错







关于它和 `ts-node` 的运行时对比：

- [TS runtime comparison](https://github.com/privatenumber/ts-runtime-comparison)
- 个人感觉全面碾压ts-node



## Tricks

使用 `tsx` 监听文件的更改：

```bash
tsx watch ./src/index.ts
```

等价于使用 `nodemon`:

```bash
# -x == --exec 表示执行某个命令
nodemon -x tsx ./src/index.ts

# 如果使用 ts-node
nodemon -x ts-node ./src/index.ts
```

