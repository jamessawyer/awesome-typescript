---
title: 在TypeScript中使用namespace封装数据
---

原文链接：

- [在TypeScript中使用namespace封装数据 - @pengfeixc](https://www.pengfeixc.com/blogs/javascript/typescript-namespace)

在之前的[typescript module](http://pengfeixc.com/blogs/javascript/typescript-module-system)文章中，我讲解了如何通过typescript的模块系统，将程序的代码逻辑分割成不同的模块放在不同的文件中。但是模块系统有一个前提是，代码运行的环境必须支持模块系统，比如浏览器支持**ES Modules**，所以我们可以使用模块，通过`import`和`export`导入模块。假设我们的代码要在一个不支持任何模块系统的环境中运行，那么我们就无法使用模块系统了，此时我们应该怎么将代码分离呢？

恰好，typescript支持`namespace`，它可以帮助我们将代码逻辑分离，解决问题。



## 一.namespace——命名空间

如果你熟悉C++、Java、C#等语言，namespace对你来说应该并不陌生。namepsace可以用来封装一段代码，在namespace外面的代码，无法直接访问namespace内部的代码。

命名空间通过`namespace`关键字定义。格式如下：

``` typescript
namespace namespace_name {
  // 命名空间内部代码
}
```

以下面的例子为例，在`Lib`命名空间外，无法访问`Lib`内部的`_name`和`getName`。

::: code-group

``` typescript [index.ts]
namespace Lib {
    const _name = '小明';

    function getName() {
        return _name;
    }
}

console.log(_name); // Error: Cannot find name '_name' // [!code error]
console.log(getName()); // Error: Cannot find name 'getName' // [!code error]
```

:::

如果使用`tsc`编译上面的代码，编译器会直接报错。

因为JavaScript是不支持命名空间语法的，所以typescript是如何实现命名空间的呢？为了了解它的原理，首先注释掉最后两行代码。

::: code-group

``` typescript [index.ts]
namespace Lib {
    const _name = '小明';

    function getName() {
        return _name;
    }
}

console.log(_name); // [!code --]
console.log(getName()); // [!code --]
```

:::

使用`tsc`编译文件

```bash
tsc index.ts
```

编译后的js文件内容如下：

```javascript
var Lib;
(function (Lib) {
    var _name = '小明';
    function getName() {
        return _name;
    }
})(Lib || (Lib = {}));
```

🚀可以看到，namespace原理是通过[立即执行函数（IIFE）](https://developer.mozilla.org/zh-CN/docs/Glossary/IIFE)实现，函数执行完毕，函数内部的变量无法从外界（global scope）获得。

为了获得namespace内部的变量或者函数，**可以通过`export`关键字将namespace中的变量暴露出来，然后通过命名空间名称访问暴露的变量**。

```typescript {4}
namespace Lib {
    const _name = '小明';

    // 💡使用export关键字导出getName
    export function getName() {
        return _name;
    }
}

// 通过命名空间名称访问内部的变量（函数）
console.log(Lib.getName());
```

使用`tsc`编译，编译通过，编译后的js文件内容如下：

```javascript {4,8}
var Lib;
(function (Lib) {
    var _name = '小明';
    // 使用export关键字导出getName
    function getName() {
        return _name;
    }
    Lib.getName = getName;
})(Lib || (Lib = {}));
// 通过命名空间名称访问内部的变量（函数）
console.log(Lib.getName());
```

可以看到编译后的代码，通过将`getName`函数赋值给`Lib.getName`实现`export`的功能，所以在命名空间外部可以访问命名空间内部的变量。

通过编译后的js代码可以看到，**namespace本质上是一个object，我们通过object的属性访问命名空间内部的变量**。



## 二.导出类型和命名空间

和module一样，你可以从命名空间导出类型信息，并通过namespace的名称访问导出的类型。

``` typescript
namespace Home {
    export interface Person {
        name: string;
        age: number;
    }

    export const child: Person = {
        name: "小明",
        age: 6
    };
}

const man: Home.Person = {
    name: "xx",
    age: 20
};
```

编译后的js代码如下，编译后的js文件**不包含**任何类型信息。

```javascript
var Home;
(function (Home) {
    Home.child = {
        name: "小明",
        age: 6
    };
})(Home || (Home = {}));
var man = {
    name: "xx",
    age: 20
};
```

😎**命名空间可以嵌套**，并且子命名空间可以被父命名空间导出，然后通过**命名空间名称链**访问内部命名空间的变量。

```typescript
namespace Outer {
    export namespace Inner {
        export const a = 3;
    }
}

console.log(Outer.Inner.a);
```

编译后的js文件如下:

```javascript
var Outer;
(function (Outer) {
    var Inner;
    (function (Inner) {
        Inner.a = 3;
    })(Inner = Outer.Inner || (Outer.Inner = {}));
})(Outer || (Outer = {}));

console.log(Outer.Inner.a);
```



## 三.别名

因为命名空间可以嵌套，当嵌入层级很深的时候，通过**命名空间名称链**访问比较麻烦，例如`Space1.Space2.Space3.Space4.xxx`，可以通过**别名（aliasing）**简化命名空间名称链。

```typescript
namespace MyLibA {
    export namespace Types {
        export interface Person {
            name: string;
            age: number;
        }
    }
    export namespace Functions {
        export function getPerson(name: string, age: number):
            Types.Person {
            return {name, age};
        }
    }
}

// 通过别名简化命名空间名称链
var API_FUNCTIONS = MyLibA.Functions;
const ross = API_FUNCTIONS.getPerson('Ross Geller', 30);

// Error: Property 'Types' does not exist on type 'typeof MyLibA' // [!code error]
// 因为Types命名空间仅包含类型信息，编译后的js代码，类型信息会被移除
// var API_TYPES = MyLibA.Types;
```

上面的代码，通过`var API_FUNCTIONS = MyLibA.Functions;`添加别名的方式，简化了`MyLibA.Functions`的访问。

📚但是使用同样的方式，给`MyLibA.Types`添加别名会报错，因为`MyLibA.Types`命名空间内部仅包含类型信息，不存在其他字段，所以本质上是不存在的（编译后的JS代码会移除类型信息）。你可以使用`type Person = MyLibA.Types.Person`，简化访问。

TypeScirpt还支持使用`import <alias> =`语句简化内部命名空间的访问，并且给`MyLib.Types`添加别名不会报错，这是typescript给我们提供的一个语法糖，用来为命名空间创建别名。

```typescript
namespace MyLibA {
    export namespace Types {
        export interface Person {
            name: string;
            age: number;
        }
    }
    export namespace Functions {
        export function getPerson(name: string, age: number):
            Types.Person {
            return {name, age};
        }
    }
}

// 通过别名简化命名空间名称链
import API_FUNCTIONS = MyLibA.Functions;
var API_Types = MyLibA.Types; // 报错 纯类型编译时会被移除 // [!code --]
import API_Types = MyLibA.Types; // 使用'import <alias> ='语句，不会报错  // [!code ++]

const ross: API_Types.Person = API_FUNCTIONS.getPerson('Ross Geller', 30);
```



## 四.导入命名空间

🚀因为命名空间本质上就是一个Object，所以可以通过import语句导入命名空间。

::: code-group

``` typescript [b.ts]
// 导入命名空间Home
import {Home} from "./a";

console.log(Home.child.name);
```



``` typescript [a.ts]
export namespace Home {
    export interface Person {
        name: string;
        age: number;
    }

    export const child: Person = {
        name: "小明",
        age: 6
    };
}
```

:::

导入命名空间，需要代码的执行环境支持命名空间，上例是ES Modules，如果是NodeJS环境，它支持CommonJS模块系统，那么需要使用`require`、`exports`语句导入导出。



## 五.模块化

Typescript提供了[`///`](../reference/triple-slashes-directives)，它仅在ts编译阶段起作用，用于指示ts编译器定位ts文件。

```typescript
/// <reference path="./b.ts" />
```

`/// <reference path="" />`与c语言中的`#include`类似。它必须出现在文件的最上面，本质上就是一段注释，所以它的作用也仅体现在编译阶段。

`reference`指定的`path`属性的值是另一个ts文件的路径，用来告诉编译器当前文件编译的依赖文件，有点类似`import`语句，但是不需要导入指定的变量。

当`reference`指定了一个文件，typescript在编译时，会自动将这个文件包含在编译过程，这个文件内所有的全局变量都会在当前文件（`reference`指定存在的文件）被获得。

以下面例子为例，在`index.ts`中，通过`/// <reference path="./math.ts" />`引入`math.ts`文件。

::: code-group

``` typescript [index.ts]
/// <reference path="./math.ts" />

MyMath.add(3, 4);
```

``` typescript [math.ts]
namespace MyMath {
    export const add = (a: number, b: number) => {
        return a + b;
    }
}
```

:::

通过`tsc index.ts`编译，编译后有`index.js`和`math.js`两个文件，内容如下。

::: code-group

``` typescript [index.js]
/// <reference path="./math.ts" />

MyMath.add(3, 4);
```

``` typescript [math.js]
var MyMath;
(function (MyMath) {
    MyMath.add = function (a, b) {
        return a + b;
    };
})(MyMath || (MyMath = {}));

```

:::

当然我们无法在Node环境中执行这些代码，因为这是两个分离的文件，并且没有require语句。我们需要首先将它们打包成一个文件`bundle.js`，然后使用命令`node boundle.js`执行。

在浏览器环境中，我们需要使用`<script>`语句依次加载`math.js`和`index.js`文件。

```html
<script src="./math.js"></script>
<script src="./index.js"></script>
```

更好的做法，是使用`tsc`的`--outFile`配置选项，将输出文件打包成一个bundle，ts会自动根据`reference`指令，编译文件。

::: info

[outFile](./tsconfig-overview.html#_5-outfile) 用法可以参考这个链接。

:::

使用`tsc --outFile bundle.js index.ts`命令编译文件，编译后的bundle.js文件内容如下：

```javascript
var MyMath;
(function (MyMath) {
    MyMath.add = function (a, b) {
        return a + b;
    };
})(MyMath || (MyMath = {}));
/// <reference path="./math.ts" />
MyMath.add(3, 4);
```



## 六.扩展命名空间

使用`reference`指令可以扩展一个早已经定义的命名空间。直接看下面的例子。



::: code-group

``` typescript [a.ts]
/// <reference path="./b.ts"/>
const john: MyLibA.Person = MyLibA.defaultPerson;
const ross: MyLibA.Person = MyLibA.getPerson( 'Ross Geller', 30 );
console.log( john ); // {name: 'John Doe', age: 21}
console.log( ross ); // {name: 'Ross Geller', age: 30}
```

``` typescript [b.ts]
/// <reference path="./c.ts" />
namespace MyLibA {
    export const defaultPerson: Person = getPerson( 'John Doe', 21 );
}
```

``` typescript [c.ts]
namespace MyLibA {
    export interface Person {
        name: string;
        age: number;
    }
    export function getPerson( name: string, age: number ): Person {
        return { name, age };
    }
}
```

:::

在`b.ts`文件中，通过`reference`指令，引入了`c.ts`，扩展了`MyLibA`，添加`defaultPerson`变量，而且在`b.ts`文件中可以访问`MyLibA`中的所有变量🚀，例如`getPerson( 'John Doe', 21 );`

在`a.ts`文件中，通过`reference`指令，引入了`b.ts`，此时在`a.ts`文件中可以访问命名空间`MyLibA`内部的`Person`、`getPerson`和`defaultPerson`成员。



## 七.建议

到这里，本章内容已经说完了。namespace虽然强大，但是如果你问我，什么时候该用命名空间？我会说，**尽量避免使用命名空间吧**，用Modules系统代替，现在Es Module很方便，在node环境中，也可以使用CommonJS代替命名空间。

namespace出现是早于ES Module的，所以说不定哪一天，namespace就被废弃了呢。

## 附：参考资料

- [Employing “Namespaces” in TypeScript to encapsulate your data](https://medium.com/jspoint/typescript-namespaces-f43cd002c08c)
- [Namespace - typescript docs](https://cloud.tencent.com/developer/section/1476132)

2023年02月26日09:12:56
