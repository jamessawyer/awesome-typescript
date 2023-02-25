---
title: 详解tsconfig.json文件
---

原文链接：

- [详解tsconfig.json文件 - @pengfeixc](https://pengfeixc.com/blogs/javascript/tsconfig)

个人很喜欢TypeScirpt，用Ts写代码要比Js舒服太多，可以大大提高写代码的效率，减少代码维护的工作量。因为有C++、C#的基础，我上手Ts的速度也很快。虽然使用起来并没有什么困难，但是很长一段时间，没有去了解typescirpt的编译过程及配置，所以自己也不能算是真正的了解它。

工欲善其事必先利其器，如果你对ts的配置及编译过程不是很了解的话，那么这篇文章应该会对你有所帮助。

接下来的内容需要你的环境安装TypeScript，请确保安装了TypeScript，否则`tsc`命令无法识别。



## 一.tsc

Ts提供了一个命令行功能`tsc`，使用它可以将Ts文件编译成Js文件。

首先创建一个文件夹和`index.ts`文件，进入`learnTsConfig`文件夹。

```bash
mkdir learnTsConfig
mkdir learnTsConfig/src
touch learnTsConfig/src/index.ts

cd learnTsConfig

pnpm init
pnpm i -D typescript @types/node
```

可以在`index.ts`文件中输入一些Ts代码，例如：

::: code-group

``` typescript [src/index.ts]
type FuncType = () => void;

const sayHello: FuncType = () => {
    console.log("Hello Ts");
};

```

:::

然后使用`tsc [ts file]`命令编译文件:

```bash
tsc src/index.ts
```

可以看到，在`src/index.ts`同目录下，有个`index.js`文件生成，该文件就是编译后生成的文件，`src/index.js`文件内容如下：

::: code-group

``` js [src/index.js]
var sayHello = function () {
    console.log("Hello Ts");
};
```

:::

为tsc命令指定ts文件，不适用于项目中，我们不可能将所有要编译的文件路径都添加在tsc命令后面，所以通常用**JSON配置文件（tsconfig.json）**配置tsc编译器。当执行`tsc`命令时，ts编译器会首先在当前目录寻找`tsconfig.json`文件，如果当前目录没有`tsconfig.json`文件，它会一直向上级目录寻找，直到找到一个`tsconfig.json`文件，`tsconfig.json`文件所在的目录为项目的**根目录**。

如果最终没有找到一个`tsconfig.json`文件，执行`tsc`命令将不会编译任何文件，只会输出版本号及help信息。

下面详细介绍**tsconfig.json**文件。



## 二.`tsconfig.json`文件

`tsconfig.json`文件支持[JSON5](https://json5.org/)的内容，所以可以在`tsconfig.json`文件中添加注释，使用单引号代。

`tsconfig.json`文件结构如下：

::: code-group

``` json [tsconfig.json]
{
    "files": [],
    // ...
    "compilerOptions": {
        "target": "ES6",
        "module": "CommonJS",
        "outDir": "./dist/development"
    }
}

```

:::



下面我将配置选项分为编译选项（compilerOptions字段下的配置项）和非编译选项（compilerOptions字段外的根级选项）进行介绍。

首先在`learnTsConfig`目录下，新建`tsconfig.json`文件。

```bash
npx tsc --init
```



## 非编译选项

非编译选项通常控制的是typescript编译器要编译的项目（文件）信息，例如要编译的ts文件。

 

### 1. `files`

[files](../tsconfig/root/files) 选项用于指示哪些文件需要编译，可以添加一组文件路径，支持相对路径和绝对路径，相对路径是相对于项目根目录的，即tsconfig.json文件所在的目录，建议大家使用相对路径，避免使用绝对路径，这样即使项目换了环境也不用更改配置。

在根目录下新建文件`outerIndex.ts`文件，此时目录结构如下

```bash
.
├── package.json
├── pnpm-lock.yaml
├── src
│   └── index.ts
├── outerIndex.ts
└── tsconfig.json
```

在tsconfig.json文件中输入以下内容：



::: code-group

``` json [tsconfig.json] {2}
{
  // files选项用于设置需要编译的文件
  "files": [
    "outerIndex.ts",
    "src/index.ts"
  ]
}
```

:::

执行`npx tsc`命令进行编译，编译后的文件结构如下：

```bash
.
├── src
│   ├── index.js
│   └── index.ts
├── outerIndex.js
├── outerIndex.ts
└── tsconfig.json
```



### 2. `include` & `exclude`

如果项目中文件较少的情况下，使用`files`选项设置要编译的目标文件是一个不错的选择，但是当文件特别多或者项目文件更新频繁的时候，将所有要编译的文件都写在`files`数组中就比较麻烦，每次添加一个ts文件，都要更新`files`选项。

所以ts还提供了[include](../tsconfig/root/include)选项，这个选项与`files`类似，但是你可以使用**模式匹配**，删掉之前编译的js文件，更改`tsconfig.ts`文件内容如下



::: code-group

``` json [tsconfig.json]
{
    "include": [
        "src/*.ts"
    ]
}
```

:::

执行`tsc`编译，文件结构如下，仅`src/`目录下的`index.ts`被编译。

```bash
.
├── src
│   ├── index.js
│   └── index.ts
├── outerIndex.js
└── tsconfig.json
```

[exclude](../tsconfig/root/exclude) 作用于`include`正好相反，用于排除某些文件，也支持**模式匹配**，清理js文件，更新`tsconfig.ts`文件内容如下：

::: code-group

``` json [tsconfig.json]
{
    "include": [
        "*.ts"
    ],
    "exclude": [
        "src/*.ts"
    ]
}
```

:::

`include`选项表示，编译根目录下的所有ts文件，`exclude`表示排除`src/`目录下所有ts文件，所以`tsc`编译后的文件结构如下:

```bash
.
├── src
│   └── index.ts
├── outerIndex.js
├── outerIndex.ts
└── tsconfig.json
```

在用模式匹配时，可以不用显示添加`.ts`后缀，默认情况下typescript会自动寻找`.ts`文件和`.d.ts`文件，如果你设置了`allowJS`编译选项（后面介绍编译选项内容）为true，typescript还会寻找`.js`文件。`src/**/*`等价为`src/**/*.ts`和`src/**/*.d.ts`（如果`allowJs`为true，还包括`src/**/*.js`）。

有些文件夹，typescript会自动排除，例如`node_modules`、`bower_components`、`jspm_packages`和`<outDir>`。如果你要强制ts编译这些文件夹中的ts文件，需要指定`files`文件选项。



## 编译选项

编译选项即 [compilerOptions](../tsconfig/compiler/) 字段下的相关配置。



输出文件

### 1. `outDir`

默认情况下，ts编译后的js文件，与源文件都在同一个目录下。使用 [outDir](../tsconfig/compiler/emit#outdir-👍) 选项可以指定编译后的文件所在的目录。清理之前编译生成的js文件。



更新`tsconfig.json`文件：

::: code-group

``` json [tsconfig.json]
{
    "include": [
        "**/*.ts",
    ],
    "compilerOptions": {
        "outDir": "dist"
    }
}
```

:::

然后执行`tsc`命令进行编译，编译后会生成`dist/`文件夹，`dist/`目录下即编译生成的js文件，目录下的结构与项目目录结构相同。

```bash
.
├── dist
│   ├── outerIndex.js
│   └── src
│       └── index.js
├── src
│   └── index.ts
├── outerIndex.ts
└── tsconfig.json
```



### 2. `rootDir`

typescirpt项目的默认的根目录为`tsconfig.json`文件所在的目录，所有的相对路径都是相对于这个根目录的。我们可以通过 [rootDir](../tsconfig/compiler/modules.html#rootdir-👍) 选项，更改项目的根目录位置。删除dist文件夹，更新`tsconfig.json`文件：

::: code-group

``` json [tsconfig.json]
{
    "include": [
        "**/*.ts",
    ],
    "compilerOptions": {
        "outDir": "dist",
      // 默认是所有源文件的最长公共路径
      // 这里改为 '..'
        "rootDir": ".." // [!code ++]
    }
}
```

:::

执行tsc命令，编译后的目录如下：

```bash
.
├── dist # 输出文件目录
│   └── learnTsConfig
│       ├── outerIndex.js
│       └── src
│           └── index.js
├── src
│   └── index.ts
├── outerIndex.ts
└── tsconfig.json
```

大多数情况下，我们保持TypeScript默认行为即可，使用`tsconfig.json`文件所在位置为项目的根目录。



### 3. `removeComments`

`removeComments`选项用于删除编译后的js文件中的注释代码。

首先清理项目，更新`tsconfig.json`文件如下：

::: code-group

``` json [tsconfig.json]
{
    "include": [
        "**/*.ts",
    ],
    "compilerOptions": {
        "outDir": "dist",
    }
}
```

:::

更新`src/index.ts`文件内容：

::: code-group

``` typescript [src/index.ts]
type FuncType = () => void;

// print info: Hello Ts
const sayHello: FuncType = () => {
    console.log("Hello Ts");
};
```

:::

`tsc`编译，编译后的`dist/src/index.js`文件内容如下：

::: code-group

``` typescript [dist/src/index.js]
// print info: Hello Ts
var sayHello = function () {
    console.log("Hello Ts");
};
```

:::

可以看到注释内容并未去掉。更新`tsconfig.json`文件：

::: code-group

``` json [tsconfig.json]
{
    "include": [
        "**/*.ts",
    ],
    "compilerOptions": {
        "outDir": "dist",
        "removeComments": true // [!code ++]
    }
}
```

:::

再次编译，编译后的`dist/src/index.js`文件如下：

::: code-group

``` typescript [dist/src/index.js]
// print info: Hello Ts // [!code --]
var sayHello = function () {
    console.log("Hello Ts");
};
```

:::

可以看到，注释内容被删掉了。

### 4. `module`



假设你正在开发的项目，需要在nodejs环境中运行，在项目中你使用了`import`引入模块，但是`nodejs`并不支持，nodejs使用的是[CommonJS](http://javascript.ruanyifeng.com/nodejs/module.html)模块系统。为了使编译后的js文件`import`语句转换为`require`语句，你可以配置`"module": "CommonJS"`。

::: tip

[module](../tsconfig/compiler/modules.html#module-👍) 会影响的是编译产物的结果。而[target](../tsconfig/compiler/lang-and-env.html#target-👍🚀🚀) 则影响的是编译产物的语法，是否在编译产物中使用ES5语法，还是更高级的语法

:::

下面，我们手动试一下。更新`tsconfig.js`文件：

::: code-group

``` json [tsconfig.json]
{
    "include": [
        "src/*.ts",
    ],
    "compilerOptions": {
        "outDir": "dist",
        "removeComments": true,
      // 默认就是 CommonJS
        "module": "CommonJS" // [!code ++]
    }
}
```

:::

在src目录下添加add.ts文件，全部内容为：

::: code-group

``` typescript [src/index.ts]
import {add} from "./add"

console.log(add(3, 5));
```

``` typescript [src/add.ts]
/**
 * Add two numbers
 * @param a a number
 * @param b a number
 * @returns {number} sum
 */
export const add = (a: number, b: number):number => {
    return a + b;
};
```

:::

编译文件，查看`dist/index.js`内容如下，可以看到`import`语句已经转换为`require`语句

::: code-group

``` js [dist/index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add_1 = require("./add");
console.log((0, add_1.add)(3, 5));
```

``` js [dist/add.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
/**
 * Add two numbers
 * @param a a number
 * @param b a number
 * @returns {number} sum
 */
const add = (a, b) => {
    return a + b;
};
exports.add = add;

```

:::



### 5. `outFile`

[outFile](../tsconfig/compiler/emit.html#outfile) 可以指定编译后的结果文件被打包成一个**bundle**，即一个js文件，前提是`module`选项被设置成`System`或者`AMD`。如果想要支持其他的module选项，可以借助[webpack](https://www.webpackjs.com/)、[parcel](https://www.parceljs.cn/)等工具。

简单的尝试一下，更新`tsconfig.json`文件如下：

::: code-group

``` json [tsconfig.json]
{
    "include": [
        "**/*.ts",
    ],
    "compilerOptions": {
        "outFile": "dist/bundle.js", // [!code ++]
        "outDir": "dist", // [!code --]
        "removeComments": true,
        "module": "AMD" // [!code ++]
    }
}
```

:::

编译后仅有`dist/bundle.js`文件生成(AMD格式)。

::: code-group

``` js [dist/bundle.js]
define("add", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.add = void 0;
    /**
     * Add two numbers
     * @param a a number
     * @param b a number
     * @returns {number} sum
     */
    const add = (a, b) => {
        return a + b;
    };
    exports.add = add;
});
define("index", ["require", "exports", "add"], function (require, exports, add_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log((0, add_1.add)(3, 5));
});
```

:::



## source map

### 1. `sourceMap`

首先，简单介绍下**source-map**文件。source-map文件表示编译的源文件与输出的结果文件的一种映射关系，在项目调试时起到非常重要的作用，可以让我们在浏览器开发者工具中显示源文件代码进行调试，要知道浏览器运行的是编译后的代码，如果调试看着编译后的代码，那么调试是一件多么痛苦的事啊。

source-map文件由编译工具自动生成，以`.map`后缀结尾，它是一个JSON文件，结构如下。

```json
{
    "version": 3,
    "file": "bundle.js",
    "sourceRoot": "",
    "sources": [
        "../outerIndex.ts",
        "../src/add.ts",
        "../src/index.ts"
    ],
    "names": [],
    "mappings": "AAAA,IAAM,SAAS..."
}
```

`file`字段表示与该source-map文件对应的输出文件名称，`sources`字段表示的是编译源文件。`mapping`属性是**base64编码值**，表示源文件与输出文件之间的关系。

而编译后输出的文件末尾会有`sourceMappingURL`字段的注释，表示map文件位置，这个注释会被浏览器读取，用于定位map文件。

```js
// b.js
var b = 'B';

//# sourceMappingURL=b.js.map 
```

为了生成source-map文件，可以设置 [sourceMap](../tsconfig/compiler/emit#sourcemap-👍) 字段为true。

更新`tsconfig.json`文件：

::: code-group

``` json [tsconfig.json]
{
    "include": [
        "src/*.ts",
    ],
    "compilerOptions": {
        "outFile": "dist/bundle.js",
        "removeComments": true,
        "module": "AMD",
        "sourceMap": true // [!code ++]
    }
}
```

:::

执行`tsc`命令，编译后会生成`dist/bundle.js`和`dist/bundle.js.map`。



### 2. `inlineSourceMap`

`sourceMap`选项，会为编译后的js文件生成一个分离的`.map`文件。设置`inlineSourceMap`为true的话，可以避免生成`.map`文件，将map直接内嵌在编译后的js文件中。

更新`tsconfig.json`文件：

::: code-group

``` json [tsconfig.json]
{
    "include": [
        "src/*.ts",
    ],
    "compilerOptions": {
        "outFile": "dist/bundle.js",
        "removeComments": true,
        "module": "AMD",
        "sourceMap": true // [!code --]
        "inlineSourceMap": true // [!code ++]
    }
}
```

:::



进行编译后，查看编译后的`dist/bundle.js`文件:

```js
...

//# sourceMappingURL=data:application/json;base64,...
```

可以看到`sourceMappingURL`后面直接紧跟着base64数据（map文件内容）。



## 类型声明

typescript最重要的作用是使js支持类型，变成一种强类型语言。



### 1. `declaration`

设置 [declaration](../tsconfig/compiler/emit#declaration-👍) 字段为true，可以自动生成声明文件。

更新`tsconfig.json`文件：

::: code-group

``` json [tsconfig.json]
{
    "include": [
        "src/*.ts", // 只对src目录下的ts文件进行编译
    ],
    "compilerOptions": {
        "outDir": "dist",
        "module": "commonjs",
        "removeComments": true,
        "declaration": true // [!code ++]
    }
}
```

:::

执行tsc命令编译，可以看到`dist/**/*.d.ts`文件生成，该文件是对应的`*.js`文件的的声明文件。通过这些声明文件，ts编译器可以知道package的API结构，即使编译后的JavaScript文件不包含任何类型信息。

生成的dist文件目录如下：

```bash
.
├── dist
│   ├── add.d.ts # .d.ts
│   ├── add.js
│   ├── index.d.ts # .d.ts
│   └── index.js
├── src
│   ├── add.ts
│   └── index.ts
├── outerIndex.ts
└── tsconfig.json
```



### 2. `declarationDir`

当`declaration`设置为`ture`时，ts编译器将对应的.d.ts文件放入到编译后的js文件同级目录下。可以通过设置 [declarationDir](../tsconfig/compiler/emit#declarationdir) 将所有声明文件放到同一个目录下。

::: code-group

``` json [tsconfig.json]
{
    "include": [
        "src/*.ts", // 只对src目录下的ts文件进行编译
    ],
    "compilerOptions": {
        "outDir": "dist",
        "module": "commonjs",
        "removeComments": true,
        "declaration": true,
        "declarationDir": "dist/types" // [!code ++]
    }
}
```

:::

执行tsc命令，可以看到`dist/types/`目录生成，目录下结构与源文件目录相同，只不过都是`.d.ts`声明文件。

``` bash {2,5}
.
├── dist
│   ├── add.js
│   ├── index.js
│   └── types
│       ├── add.d.ts
│       └── index.d.ts
├── src
│   ├── add.ts
│   └── index.ts
├── outerIndex.ts
└── tsconfig.json
```

### 3. `lib`

typescirpt内置了一些TypeScirpt声明文件，例如`Promise`、`Object.freeze`和浏览器的API的声明。这些声明文件可以提供代码提示和警告功能。通常存放在 [lib](../tsconfig/compiler/lang-and-env#lib-👍🚀) 文件夹下，我们称之为标准库。通过设置`lib`字段，手动选择导入哪些库。

::: code-group

``` json [tsconfig.json]
{
    "include": [
        "src/*.ts",
    ],
    "compilerOptions": {
        "outDir": "dist",
        "removeComments": true,
        "declaration": true,
        "declarationDir": "dist/types", 
        "lib": [ "ES5", "ES2015.Promise", "DOM" ] // [!code ++]
    }
}
```

:::



### 4. `typeRoots`

当你将你的typescript程序，发布为npm包时，你可能发布的是编译后的JavaScript包，这样非typescript程序可以引入该npm包，为了提供声明信息，你也可以提供对应的声明文件，这样typescirpt编译器和IDE（例如vscode）可以根据声明文件，提供类型提示、错误提示。为了生成声明文件，你只需要将`declaration`设置为`true`即可。

但是并不是所有的程序都是typescript写的，例如[lodash](https://www.lodashjs.com/)，它本身就是javascript编写的，所以无法使用ts提供的功能，自动生成声明文件。所以需要手动为没有声明文件的npm包提供声明文件。

[DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)社区的工作就是为那些比较流行的没有声明文件的npm包，提供声明文件。你可以通过安装以`@types`开头的声明文件包为某个npm包提供声明文件。

例如`npm install @types/lodash`，`@types/lodash`就是`lodash`包的声明文件。

默认情况下，typescript会从`node_modules/@types`文件夹下导入所有类型声明至全局空间，需要注意只会导入script文件中的声明至全局空间，module文件对全局空间是隐藏的。

**type-root**就是包的声明文件存储的目录，可以通过 [typeRoots](../tsconfig/compiler/modules#typeroots-类型根) 选项设置一系列为文件路径，指示typescript从哪些地方导入类型信息，默认值为`node_modules/@types`。

::: code-group

``` json [tsconfig.json]
{
    "include": [
        "**/*.ts",
    ],
    "compilerOptions": {
        "outDir": "dist",
        "removeComments": true,
        "declaration": true,
        "declarationDir": "dist/types", 
        "typeRoots": ["./my-types"] // [!code ++]
    }
}
```

:::



通过设置`"typeRoots": ["./my-types"]`，typescript将会只从`my-types`文件夹下导入声明信息，而不是从`node_modules/@types/`文件夹下。



### 5. `types`

`typeRoots`用于导入目录下所有的声明至全局空间，但是如果设置了`types`，则只会导入 [types](../tsconfig/compiler/modules#types-👍) 指定的包声明至全局空间。

::: code-group

``` json [tsconfig.json]
{
    "compilerOptions": {
        "outDir": "dist",
        // 导入node_modules文件夹下的@types/node和@types/moment，其他包将会被忽略
        "types": [ "node", "moment" ]
    }
}
```

:::



## JavaScript编译

默认情况下，typescript编译是不包括js文件的。可以通过`allowJS`和`checkJS`更改这一默认行为。



### 1. `allowJS`

当你在typescript文件中使用`import`语句引入模块时，例如`import { add } from "./add`，默认情况下ts编译器会自动寻找`src/add.ts`和`src/add.d.ts`，它不会去考虑`src/add.js`，我们可以通过将 [allowJS](../tsconfig/compiler/js-support#allowjs-👍) 设置为`true`来更改这一默认行为。

首先，更新`tsconfig.json`文件如下：

::: code-group

``` json [tsconfig.json]
{
    "include": [
        "**/*.ts",
    ],
    "compilerOptions": {
        "outDir": "dist",
        "removeComments": true,
        "declaration": true,
    }
}
```

:::

新建 `src/index.js` & `src/add.js`

::: code-group

``` js [src/index.js]
import {add} from "./add"

console.log(add(3, 5));
```

``` js [src/add.js]
export const add = (a, b) => {
    return a + b;
};
```

:::

默认情况下，`allowJS`是`false`，所以此时进行tsc编译后，编译后的`dist/src/`目录下是不会包含`add.js`文件的。

更新`tsconfig.json`文件，将`allowJS`设置为true。



::: code-group

``` json [tsconfig.json]
{
    "include": [
        "**/*.ts",
    ],
    "compilerOptions": {
        "outDir": "dist",
        "removeComments": true,
        "declaration": true,
        "allowJs": true // [!code ++]
    }
}
```

:::

重新编译，编译后`dist/src/`目录下会新增`add.d.ts`文件和`add.js`文件。

所以如果，你想要的你的项目支持js文件，只需要设置`"allowJs": true`即可。

```bash
.
├── dist
│   ├── add.d.ts
│   ├── add.js
│   ├── index.d.ts
│   └── index.js
├── src
│   ├── add.js
│   └── index.js
└── tsconfig.json
```



### 2. `checkJs`

使用`allowJS`可以让编译器在编译阶段包含js文件，但是编译器并不会对js文件进行**类型检查**。类型检查是ts的一个重要的特性，有了类型检查，大大提高了我们的开发效率，所以为了能工让ts编译器对js文件进行类型检查，需要设置 ["checkJS": true](../tsconfig/compiler/js-support#checkjs)。

为了进一步解释，首先在`add.js`的顶部添加`const num = parseInt(1.5);`。

然后使用tsc编译，编译成功。

然后更新`tsconfig.json`文件：

::: code-group

``` json [tsconfig.json]
{
    "include": [
        "**/*.ts",
    ],
    "compilerOptions": {
        "outDir": "dist",
        "removeComments": true,
        "declaration": true,
        "allowJs": true,
        "checkJs": true // [!code ++]
    }
}

```

:::

再使用tsc编译，编译应该会报错。

```bash
src/add.js:1:22 - error TS2345: Argument of type '1.5' is not assignable to parameter of type 'string'.

1 const num = parseInt(1.5);
                       ~~~

Found 1 error.
```

因为此时`checkJS`为true，ts编译器会对js文件进行类型检查，`parseInt`函数接受的参数为字符串，但是`1.5`是`number`类型，类型不兼容，所以编译失败。如果你是用的是vscode编辑器，开启了`checkJS`后，在你敲`const num = parseInt(1.5);`这句代码时，编辑器应该会给出智能错误提示。



## 三.总结

tsconfig的配置字段有很多，本篇内容旨在介绍它的基本用法和基本结构，并不包含所有的内容。希望通过这篇文章，你能了解tsc编译器，知道如何去配置tsc编译器，理解它的原理。

更多的tsconfig配置，请查阅 [tsconfig Reference](../tsconfig/)



2023年02月25日23:20:20



