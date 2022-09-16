---
 title: 声明合并
---
[[toc]]



## 1️⃣ 介绍

TypeScript中一些独特的概念在类型级别描述了JavaScript对象的形状。其中最为特别的一个TS概念是 `声明合并（declaration merging）`。理解这个概念让你对已有JS进行处理时更具优势。同时也打开了更加高级抽象概念的大门😎。

本文的目的，`声明合并` 表示编译器将相同名字的多个声明合并成单一声明。这个合并的定义同时包含原始多个声明的功能。任意数量相同名字的声明都能被合并，不仅限于2个。



## 2️⃣ ⭐ 基本概念

在TypeScript中，声明至少在三个组中创建实体：`namespace`, `type` & `value`:

1. 命名空间创建的声明创建命名空间，包含通过点操作访问的名字
2. 类型创建的声明做的事情是：它们创建的类型与声明的形状是可见的，并绑定到给定的名称
3. 值创建的声明在输出的JS中是可见的

|  声明类型  | Namespace | Type | Value |
| :--------: | :-------: | :--: | :---: |
| Namespace  |     ✅     |      |   ✅   |
|   Class    |           |  ✅   |   ✅   |
|    Enum    |           |  ✅   |   ✅   |
| Interface  |           |  ✅   |       |
| Type Alias |           |  ✅   |       |
|  Function  |           |      |   ✅   |
|  Variable  |           |      |   ✅   |

理解每种声明创建的是什么有助于理解当执行声明合并时会合并什么。🤩



## 3️⃣ 合并Interfaces

最简单也是最常见的声明合并类型就是接口合并。最简单情形，将多个名字相同的Interfaces的成员机械的合并为一个：

```typescript
interface Box {
  height: number;
  width: number;
}

interface Box {
  scale: number;
}

//💡 上面2个名字相同的Interfaces，成员合并在一起
let box: Box = { height: 5, width: 5, scale: 10 }
```

💡即合并后相当于：(译者注)

```typescript
interface Box {
  height: number;
  width: number;
  scale: number;
}
```
::: warning
🚨 要合并的Interfaces中的非函数成员应当是唯一的。如果不唯一，则必须类型是相同的。 如果类型不相同，编译器会提示错误。
:::

对于函数成员，相同名字的函数成员被当做是`重载`。需要注意的是，interface `A` 合并之后的 interface `A`，`第二个interface具有更高优先级`：

```typescript {10}
interface Cloner {
  clone(animal: Animal): Animal;
}

interface Cloner {
  clone(animal: Sheep): Sheep;
}

interface Cloner {
  // 越往后，优先级越高
  clone(animal: Dog): Dog;
  clone(animal: Cat): Cat;
}
```

合并后的声明：

```typescript
interface Cloner {
  clone(animal: Dog): Dog;
  clone(animal: Cat): Cat;
  clone(animal: Sheep): Sheep;
  clone(animal: Animal): Animal;
}
```

注意每组的元素位置不变，但组自身越往后，优先级越高。
::: warning
🚨 `有个例外是，特殊化的签名`。如果一个函数签名是`单一字符串字面量类型`（比如，不是字符串联合类型），则它会冒泡到重载列表的最上层。
:::

🌰 下面interfaces合并：

```typescript
// A
interface Document {
  createElement(el: any): Element;
}

// B
interface Document {
  // 参数是单一字符串字面量
  createElement(tagName: "div"): HTMLDivElement;
  createElement(tagName: "span"): HTMLSpanElement;
}

// C
interface Document {
  createElement(tagName: string): HTMLElement;
  createElement(tagName: "canvas"): HTMLCanvasElement;
}
```

合并之后的 `Document` 如下：

```typescript
interface Document {
  createElement(tagName: "canvas"): HTMLCanvasElement;
  
  createElement(tagName: "div"): HTMLDivElement;
  createElement(tagName: "span"): HTMLSpanElement;
  
  createElement(tagName: string): HTMLElement;
  createElement(tagName: any): Element;
}
```



## 4️⃣ ⭐ 合并 Namespaces

和interfaces类似，同名Namespaces也会合并其成员。`因为Namespaces同时创建namespace 和 value`，我们需要同时理解它们怎么合并。

要合并Namespaces，需要合并在每个Namespace中声明的`导出`接口的类型定义，形成一个包含合并接口定义的单一命名空间。

📚要合并namespace值，在每个声明点，如果一个namespace已存在给定名字，`通过使用现有的命名空间并将第二个命名空间导出的成员添加到第一个命名空间，可以进一步扩展该命名空间`。

🌰  `Animals` 声明合并：

```typescript
namespace Animals {
  export class Zebra {}
}

namespace Animals {
  export interface Legged {
    numberOfLegs: number;
  }
  export class Dog {}
}
```

等价于：

```typescript
namespace Animals {
  export interface Legged {
    numberOfLegs: number;
  }
  
  export class Zebra {}
  export class Dog {}
}
```

🚀这个命名空间合并模型是一个有帮助的起点，但我们还需要了解`非导出成员（Non-exported）`的情况。📚`非导出成员值对原始（为合并）命名空间可见`。这意味着合并之后，来自其它声明的合并成员不能看到非导出成员。

🌰可以通过下面例子看的更清楚：

```typescript {2,6,13}
namespace Animal {
  // 没使用export，非导出成员
  let haveMuscles = true;
  
  export function animalsHaveMuscles() {
    // 非导出成员，对本命名空间可见
    return haveMuscles;
  }
}

namespace Animal {
  export function doAnimalsHaveMuscles() {
    // ❌ haveMuscles没有导出，此处不可见
    return haveMuscles;
  }
}
```

因为 `haveMuscles` 没有被导出，只有 `animalsHaveMuscles` 函数在同一空间下才能看见该符号。而 `doAnimalsHaveMuscles` 是看不到未导出成员的。



## 5️⃣ Namespaces和Classes, Functions, Enums进行合并

Namespaces很灵活，能和其它类型的声明进行合并。📚`要做到这一点，namespacce声明必须跟在它要合并的声明后面`。生成的声明同时拥有声明类型的属性。TypeScript使用这个功能来建模JavaScript和其他编程语言中的一些模式😎。



### 5.1 Namespaes和Classes合并

这为用户提供了一种描述`内部类`的方法。

```typescript {4,6}
class Album {
  label: Album.AlbumLabel;
}
// 💡 在上面声明之后
namespace Album {
  // 描述Album内部类
  export class AlbumLabel {};
}
```

合并成员的可见性规则和上面的 [合并Namespaces](#_4%EF%B8%8F⃣-⭐-合并-namespaces) 一样，为了让合并的类看到`AlbumLabel` 类型， 我们必须导出它📚。最后的结果是，一个类在其内部管理着另一个类。`你可以使用命名空间给已有的类添加更多的静态成员`。



### 5.2 Namespaces 和 Functions合并

除了内部类模式外，你可能还熟悉JS中一个使用场景，创建一个函数，然后通过给函数添加属性的方式对函数进行扩展的模式。TypeScript使用声明合并以类型安全的方式构建这样的定义🤩：

```typescript {4-5}
function buildLabel(name: string): string {
  return buildLabel.prefix + name + buildLabel.suffix;
}
// 💡 在上面声明之后
// 这种方式给函数添加属性，更加的类型安全😎
namespcae buildLabel {
  export let prefix = '';
  export let suffix = 'Hello, ';
}
```

### 5.3 Namespaces 和 Enums合并

类似的，命名空间可以使用静态成员扩展枚举：

```typescript
enum Color {
  red = 1,
  green = 2,
  blue = 4,
}


namespace Color {
  export function mixColor(colorName: string) {
    if (colorName == "yellow") {
      return Color.red + Color.green;
    } else if (colorName == "white") {
      return Color.red + Color.green + Color.blue;
    } else if (colorName == "magenta") {
      return Color.red + Color.blue;
    } else if (colorName == "cyan") {
      return Color.green + Color.blue;
    }
  }
}
```



## 6️⃣ 不允许的合并

在TS中不是所有类型都可以合并。目前，`classes不能同其它classes或变量进行合并`。为了模仿classes合并，可以参考 [Mixins in TypeScript](https://www.typescriptlang.org/docs/handbook/mixins.html)。



## 7️⃣ ⭐ 模块扩充（Module augmentation）

尽管JS模块不支持合并，你可以通过导入，然后打补丁（`patch`）的方式更新它们的。

以下面 `Observable` 为例：

```typescript
// observable.ts
export class Observable<T> {
  // ...
}

// map.ts
import { Observable } from './observable';
Observable.prototype.map = function (f) {
  // ...
}
```

这在TypeScript中没事，但是编译器不知道 `Observable.prototype.map`。你可以使用 `模块扩充（Module augmentation）` 告诉编译器：

```typescript {8-12,19}
// observable.ts
export class Observable<T> {
  // ...
}

// map.ts
import { Observable } from './observable';
declare module './observable' {
  interface Observable<T> {
    map<U>(f: (x: T) => U): Observable<U>;
  }
}
Observable.prototype.map = function (f) {
  // ...
}

// consumer.ts
import { Observable } from './observable';
import './map';
let o: Observable<number>;
o.map((x) => x.toFixed());
```

模块名的解析方式与 `import/export` 中的模块说明符相同。查看 [Modules](https://www.typescriptlang.org/docs/handbook/modules.html) 了解更多。`然后合并扩展中的声明，就像它们在与原始文件相同的文件中声明一样。`

然而，这存在2个限制：

1. 不能在合并中声明新的最上层声明 - 只能对已有声明进行打补丁
2. 默认导出同样也不能合并，只有有名导出才能（因为你需要通过其导出名进行合并，并且 `default` 是一个保留关键词 - [issue#14080](https://github.com/Microsoft/TypeScript/issues/14080)）



## 8️⃣ ⭐ 全局扩充

你也可以从模块内部向全局作用域添加声明：

```typescript {6-11}
// observable.ts
export class Observable<T> {
  // ... still no implementation ...
}

declare global {
  interface Array<T> {
    toObservable(): Observable<T>;
  }
}

Array.prototype.toObservable = function () {
  // ...
};
```

全局扩充存在同模块扩充一样的行为和限制😅。

原文档：

- [Declaration Merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html)

2022年09月16日01:00:05
