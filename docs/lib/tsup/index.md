---
title: tsup tool
---



无配置打包TypeScript Library，[esbuild](https://github.com/evanw/esbuild)加持😎。



## tsup能打包什么？

Node.js原生支持什么，它就支持什么，即 `.js` & `.json` & `.mjs`。以及TypeScript `.ts` & `.tsx`，以及 [CSS实验性的支持](#css支持)。



## 安装

可以局部安装(推荐👍)

```bash
# npm | yarn | pnpm
pnpm i tsup -D
```

或者全局安装也可以，但不推荐





# 使用

## 打包文件

```bash
tsup [...files]
```

文件将写入到 `./dist` 目录下。



也可以一次性打包多个文件：

```bash
tsup src/index.ts src/cli.ts
```

这会输出 `dist/index.js` 和 `dist/cli.js`。



## 排除packages

默认情况下，tsup会将 `package.json` 中 `dependencies` & `peerDependencies` 之外的所有 `import` 模块都进行打包。你也可以使用 `--external <module|pkgJson>` 标志将某个模块或者 `package.json` 中的某个 `dependencies` & `peerDependencies` 标记为 `外部的（external）`。



## 排除所有的packages

如果你使用tsup构建Node.js应用或APIs，这种情形对依赖进行打包通常是不需要的，甚至还可能导致错误，比如，输出为 [ESM](https://nodejs.org/api/esm.html) 时。

tsup会自动排除 `package.json` 中的 `dependencies` & `peerDependencies` packages，但是它不会排除某些packages，tsup这个库还有一个特殊的 `tsup-node` 命令，用于自动跳过对Node.js package的打包。

```bash
tsup-node src/index.ts
```

tsup其它的参数也适用于tsup-node。你仍旧可以使用 `noExternal` 配置项重新包含某个package到bundle中，例如，属于本地monorepo的某些packages。

如果常规的tsup命令还满足不了你，可以给我们提issue。



## 使用自定义配置

你可以使用文件配置形式或者在 `package.json` 中定义 `tsup` 字段的形式，甚至TypeScript的方式使用它。

::: warning

大多数配置都可以被CLI覆写。

:::

你可以使用如下这些文件：

- `tsup.config.ts`
- `tsup.config.js`
- `tsup.config.cjs`
- `tsup.config.json`
- `package.json` 中定义 `tsup` 属性

::: tip

所有这些配置文件中，都可以将配置项作为 `tsup` , `default` 或者 `module.exports = ` 进行导出。

:::

你可以使用 `--config` 指定自定义文件名，或者通过 `--no-config` 禁用配置文件。



- [🚀参看所有配置项](https://paka.dev/npm/tsup@6.6.3/api#module-index-export-Options)



### TypeScript/JavaScript

```typescript
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: true,
  clean: true,
})
```



### 条件配置

如果配置需要基于CLI flags进行条件性的确定，它可以导出一个函数的形式：

``` typescript
import { defineConfig } from 'tsup'

export default defineConfig((options) => {
  return {
    minify: !options.watch,
  }
})
```

这里的 `options` 派生自CLI flags。





### package.json

```json
{
  "tsup": {
    "entry": ["src/index.ts"],
    "splitting": false,
    "sourcemap": true,
    "clean": true
  },
  "scripts": {
    "build": "tsup"
  }
}
```



### JSON Schema Store

略



## 多入口

除了使用 `tsup [...files]` 位置参数指定多入口，你还可以使用CLI标志 `--entry`:

```bash
# 输出为 `dist/a.js` & `dist/b.js`
tsup --entry src/a.ts --entry src/b.ts

# 输出为 `dist/foo.js` & `dist/bar.js` 🎉
tsup --entry.foo src/a.ts --entry.bar src/b.ts
```

这相当于下面配置：

::: code-group

``` typescript [tsup.config.ts]
export default defineConfig({
  // 输出为 `dist/a.js` & `dist/b.js`
  entry: ['src/a.ts', 'src/b.ts'],
  // 输出为 `dist/foo.js` & `dist/bar.js`
  entry: {
    foo: 'src/a.ts',
    bar: 'src/b.ts',
  },
})
```

:::



## 生成声明文件(.d.ts)

``` bash
tsup index.ts --dts
```

这会生成 `./dist/index.js` 和 `./dist/index.d.ts` 文件。

如果你有多个入口，则也会生成相应的 `.d.ts` 文件。因此，如果你只想给某个入口生成声明文件，则可以使用 `--dts <entry>` 的格式，比如 `--dts src/index.ts`。

::: warning

🚨 `--dts` 并不会解析在 `.d.ts`中使用到的外部类型（即node_modules中的types）。如果这是你的一个需求，则可以使用 `--dts-resolve` 这个实验性的flag。

:::



### 只生成声明文件

`--dts-only` 标志相当于 `tsc` 中的 `emitDeclarationOnly`。使用这个标志将只生成声明文件，而不包含js文件。



### 生成ts声明maps(.d.ts.map)

TS声明maps主要用于在monorepo上下文中快速跳转到类型定义。（查看 [source issue](https://github.com/Microsoft/TypeScript/issues/14479) 和 [typescrip#declarationMap官方文档](https://www.typescriptlang.org/tsconfig/#declarationMap)）。

它们不应该被包含在发布的npm包中，也不应该可sourcemaps产生混淆。

[Tsup并没有能力生成这些文件](https://github.com/egoist/tsup/issues/564)。相反，你应该直接使用TypeScript编译器，在构建完成后通过 `tsc --emitDeclarationOnly --declaration` 命令行达到这一目标。



你也可以将这个命令行与Tsup的 [onSuccess](#onsuccess) 回调结合起来使用。





## 生成Sourcemap文件

```bash
tsup index.ts --sourcemap
```

这将会生成 `dist/index.js` & `dist/index.js.map` 文件。

你可以设置多入口，这也将生成对应的 `.map` 文件。

如果你喜欢内联sourcemap，可以使用：

```bash
tsup index.ts --sourcemap inline
```

::: warning

🚨内联sourcemap只能用于开发，比如开发一个浏览器扩展，此时访问 `.map` 文件是不允许的。不推荐在生成中使用内联的方式。



sourcemap在 `--dts` 构建中是不支持的，这一点要注意😅。

:::



## 打包格式

支持格式：

- esm
- cjs (默认)
- iife

你可以一次性打包多种格式：

```bash
tsup src/index.ts --format esm,cjs,iife
```

这对生成如下文件夹结构：

```bash
dist
├── index.mjs         # esm
├── index.global.js   # iife
└── index.js          # cjs
```

如果在 `package.json` 中设置了 `type = "module"` ，则文件名将稍微有所不同：

```bash
dist
├── index.js          # esm
├── index.global.js   # iife
└── index.cjs         # cjs
```

- [了解更多esm在Node.js中的支持](https://nodejs.org/api/esm.html#esm_enabling)

如果你不想要 `.mjs` 或 `.cjs` 扩展。如果你想你的library被用在某个不支持这些扩展的bundler（或环境）中，你可以使用 `--legacy-output` 标志：

```bash
tsup src/index.ts --format esm,cjs,iife --legacy-output
```

输出格式为：

```bash
dist
├── esm
│   └── index.js
├── iife
│   └── index.js
└── index.js
```



## 输出扩展

你还可以通过 `outExtension` 配置改变输出文件的扩展：

```js
export default defineConfig({
  outExtension({ format }) {
    return {
      js: `.${format}.js`
    }
  }
})
```

生成文件格式将变为 `[name].[format].js`。

`outExtension` 函数签名：

```typescript
type OutExtension = (ctx: Context) => Result

type Context = {
  options: NormalizedOptions
  format: Format
  /** "type" field in project's package.json */
  pkgType?: string
}

type Result = { js?: string }
```



## 代码拆分

目前代码拆分只对 `esm` 输出格式有效，并且默认是开启的。如果你想对 `cjs` 输出格式也进行代码拆分，可以使用 `--splitting` 这个实验性功能，以摆脱 [esbuild](https://esbuild.github.io/api/#splitting) 的限制。

如果想禁用代码拆分，可使用 `--no-splitting` 标志。



## 目标环境

你可以在 `tsup.config.ts` 中使用 `target` 配置项或者 `--target` 标志对生成的js或者CSS代码设置目标环境。每个目标环境就是环境名+版本号。下面是目前所支持的目标环境名：

- chrome
- edge
- firfox
- hermes
- ie
- ios
- node
- opera
- rhino
- safari

另外，你还可以设置JS语言版本，比如 `es2020`。

`target`值默认是 `tsconfig.json` 中的 `compilerOptions.target` 值,如果没有在tsconfig.json中指定，则默认是 `node14`。

- [esbuild#target配置项](https://esbuild.github.io/api/#target) 了解更多



### ES5支持

可以使用 `--target es5` 将代码编译为ES5，使用这个目标，代码将先通过esbuild转义为es2020，然后通过 [swc](https://swc.rs/) 转义为es5。



## 编译时环境变量

你可以使用 `--env` 设置编译时环境变量：

```bash
tsup src/index.ts --env.NODE_ENV production
```



## 构建CLI App

当你的入口文件类似包含了hashbang `#!/bin/env node`的`src/cli.ts`时，tsup将自动将输出文件变为可执行文件（executable），因此你无需使用 `chmod +x dist/cli.js` 进行授权。



## 观察模式

```bash
tsup src/index.ts --watch
```

开启观察模式。这意味着，在初次构建之后，tsup将持续观察任何解析文件的变化。

::: tip

默认情况下，总是会忽略对 `node_modules` & `.git` & `dist` 的观察

:::

```bash
tsup src/index.ts --watch --ignore-watch ignore-this-folder-too
```

::: tip

你可以重复 `--ignore-watch` 指定多个文件夹，忽略观察。比如

```bash
tsup src src/index.ts --watch --ignore-watch folder1 --ignore-watch folder2
```

:::



## onSuccess

你可以指定某个命令在成功构建之后执行，这对 [watch](#观察模式) 模式很有用。

```bash
tsup src/index.ts --watch --onSuccess "node dist/index.js"
```

`onSuccess` 也可以是一个返回Promise的函数。要使用函数，则需要使用 `tsup.config.ts` 配置的形式：

```ts
import { defineConfig } from 'tsup'

export default defineConfig({
  async onSuccess() {
    // Start some long running task
    // Like a server
  },
})
```

你也可以在onSuccess中返回一个清理函数：

```typescript
import { defineConfig } from 'tsup'

export default defineConfig({
  async onSuccess() {
    const server = http.createServer((req, res) => {
      res.end('Hello World!')
    })
    server.listen(3000)
    return () => {
      server.close()
    }
  },
})
```



## 压缩输出文件

可以使用 `--minify` 压缩输出文件，减小打包尺寸：

```bash
tsup src/index.ts --minify
```

要使用 [Tserser](https://github.com/terser/terser) 压缩，而不是esbuild，则传递 `terser` 参数：

```bash
tsup src/index.ts --minify terser
```

::: info

你必须先安装 `terser`:

```bash
pnpm i terser -D
```

:::



在 `tsup.config.js` 中，你可以传递 `terserOptions`，它将传递给 `terser.minify`。



## 自定义Loader

Esbuild Loader列表：

```typescript
type Loader =
  | 'js'
  | 'jsx'
  | 'ts'
  | 'tsx'
  | 'css'
  | 'json'
  | 'text'
  | 'base64'
  | 'file'
  | 'dataurl'
  | 'binary'
  | 'copy'
  | 'default'
```

通过CLI使用自定义Loader:

```bash
tsup --loader ".jpe=base64" --loader ".webp=file"
```

或通过 `tsup.config.js` 

```js
import { defineConfig } from 'tsup'

export default defineConfig({
  loader: {
    '.jpg': 'base64',
    '.webp': 'file',
  },
})
```



## Tree Shaking

esbuild默认开启 [Tree shaking](https://esbuild.github.io/api/#tree-shaking)，但是优势效果可能不太理想，查看

- [esbuild issuse#1794](https://github.com/evanw/esbuild/issues/1794)
- [esbuild issuse#1435](https://github.com/evanw/esbuild/issues/1435)

为此，tsup给你提供了另外的配置，允许你使用Rollup进行tree shaking:😎

```bash
tsup src/index.ts --treeshake
```

这个标识将开启Rollup Tree shaking，相当于 `tsup.config.js` ：

```js
import { defineConfig } from 'tsup'

export default defineConfig({
  treeshake: true,
})
```

这个配置项和Rollup中的 `treeshake` 配置项类型一样：

- [Rollup#treeshake](https://rollupjs.org/configuration-options/#treeshake)



## 类型检测呢？

esbuild之所以这么快，是因为它不执行类型检测😅，你已经通过IDE（vscode | webstorm）获取了类型检测。

另外，如果你想在构建时执行类型检测，你可以开启 `--dts`，它将运行真正的TypeScript编译器，用于生成d.ts文件，同时获得类型检测的作用。



## CSS支持

esbuild有 [CSS实验性支持](https://esbuild.github.io/content-types/#css)，并且tsup允许你在原生CSS支持的基础之上使用PostCSS插件。

为了使用PostCSS，需先安装它：

```bash
pnpm i -D postcss
```

然后在项目中添加一个 `postcss.config.js` 文件：

::: code-group

``` js [postcss.config.js]
module.exports = {
  plugins: [
    require('tailwindcss')(),
    require('autoprefixer')()
  ]
}
```

:::



## Metafile

使用 `--matefile` 标志告诉esbuild对构建产物生成一个json格式的元数据文件。你可以将这个文件投喂给 [bundle buddy](https://www.bundle-buddy.com/esbuild) 这样的分析工具，用于可视化bundle中的模块，以及每个模块占据多少空间。

这个文件输出格式为 `metafile-{format}.json` 比如 `tsup --format cjs.esm` 将生成 `metafile-cjs.json` 和 `metafile-esm.json` 文件。





## 自定义esbuild插件和配置项

在tsup.config.ts中使用 `esbuildPlugins` & `esbuildOptions`:

```typescript
import { defineConfig } from 'tsup'

export default defineConfig({
  esbuildPlugins: [YourPlugin],
  esbuildOptions(options, context) {
    options.define.foo = '"bar"'
  },
})
```

`esbuildOptions` 中的 `context` 参数：

- `context.format` : cjs, esm, iife

更多可参考：

- [esbuild#build-api](https://esbuild.github.io/api/#build-api)

- [如何写一个esbuild插件](https://esbuild.github.io/plugins/#using-plugins)

更多细节：

```bash
tsup --help
```





## 注入cjs和esm shims

开启这个配置项，当构建cjs/esm时，为了使产物生效，将填充某些代码，比如 `__dirname` 只存在于cjs中，而 `import.meta.url` 只存在于esm中。

```js
import { defineConfig } from 'tsup'

export default defineConfig({
  shims: true,
})
```

- 当打包`cjs`格式时，会将 `import.meta.url` 编译为：

  ```js
  var getImportMetaUrl = () => 
  	typeof document === "undefined"
  		? new URL("file:" + __filename).href 
  		: document.currentScript && document.currentScript.src || 
      		new URL("main.js", document.baseURI).href;
  var importMetaUrl = /* @__PURE__ */ getImportMetaUrl();
  ```

- 当打包为`esm`格式时，会将 `__dirname` 编译为：

  ```js
   path.dirname(fileURLToPath(import.meta.url))
  ```



## 拷贝文件到输出目录

使用 `--publicDir` 将 `./public` 目录下的文件拷贝到输出目录。

你也可以使用自定义文件目录：

```bash
tsup src/index.ts --publicDir another-directory
```



## 故障排除



### error: No matching export in "xxx.ts" for import "xxx"

出现这个错误，通常是你在 `tsconfig.json` 中开启了 `emitDecoratorMetadata` 配置项，在此模式下，我们使用 [SWC](https://swc.rs/) 将装饰器转义为js，因此导出的类型被消除了，这也是esbuild找不到相应导出的原因。你可以通过改变导入语句的方式修复这个问题。

```typescript
// 出错导入
import { SomeType } from 'xxx'

// 修改为
import { type SomeType } from 'xxx'
// 或者
import type { SomeType } from 'xxx'
```



文档地址：

- [tsup](https://tsup.egoist.dev/)

翻译版本： `tsup@v6.6.3`



2023年02月21日15:46:48

