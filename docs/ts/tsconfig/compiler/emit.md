---
title: Emit
---
[[toc]]



## `declaration` ð

å¯¹ä½ é¡¹ç®ä¸­çæ¯ä¸ªTSæJSæä»¶çæ `.d.ts` æä»¶ãè¿äº `.d.ts` æä»¶æ¯ç±»åå£°ææä»¶ï¼æè¿°æ¨¡åå¤é¨çAPIãéè¿ `.d.ts` æä»¶ï¼åTSè¿æ ·çå·¥å·è½å¯¹æ²¡æç±»åçä»£ç æä¾æºè½è¯å«ååç¡®çç±»åã

å½å¼å¯ `declaration`ï¼å¯¹å¦ä¸TSä»£ç è¿è¡ç¼è¯å¨ï¼

```typescript
export let helloWorld = 'hi'
```

å°çæå¦ä¸ `index.js` æä»¶ï¼

```js
export let helloWorld = 'hi'
```

ä»¥åçæä¸ä¸ªä¸ä¹ç¸å³èç `helloWorld.d.ts` æä»¶ï¼

```typescript
export declare let helloWorld: string;
```

å½å¯¹JSæä»¶ä½¿ç¨ `.d.ts` æä»¶æ¶ï¼ä½ å¯è½æ³è¦ä½¿ç¨ `emitDeclarationOnly` æ ä½¿ç¨ `outDir` ç¡®ä¿JSæä»¶ä¸ä¼è¢«è¦åã



::: tip ð¡

é»è®¤ï¼å¦æ [composite](https://www.typescriptlang.org/tsconfig#composite)ï¼é»è®¤ä¸º `true`ï¼å¦åä¸º `false`

ç¸å³èéç½®ï¼

- [declarationDir](#declarationdir) - çæ `.d.ts` æä»¶å­æ¾ç®å½
- [emitDeclarationOnly](#emitdeclarationonly-ð-åªçæå£°ææä»¶) - åªçæ `.d.ts` æä»¶

:::



## `declarationDir`

éç½®å£°ææä»¶çææ ¹ç®å½ã

```bash
example
âââ index.ts
âââ package.json
âââ tsconfig.json
```

ä½¿ç¨å¦ä¸ `tsconfig.json` ï¼

```json
{
  "compilerOptions": {
    "declaration": true,
    "declarationDir": "./types"
  }
}
```

å `index.ts` çæç `.d.ts` æä»¶å°å­æ¾å° `types` æä»¶å¤¹ä¸­ï¼

```bash {6-7}
example
âââ index.js
âââ index.ts
âââ package.json
âââ tsconfig.json
âââ types
    âââ index.d.ts
```



::: tip ð¡

ç¸å³èéç½®ï¼

- [declaration](#declaration-ð) - æ¯å¦çæ `.d.ts` æä»¶

:::





## `declarationMap`

ä¸º `.d.ts` æä»¶çæsource mapï¼ç¨äºååå§ `.ts` æºæä»¶è¿è¡æ å°ãè¿ä½¿å¾åVSCodeè¿ç§ç¼è¾å¨è½å¤ä½¿ç¨ `Go to Definition` åè½è·³è½¬å°æº `.ts` æä»¶ã



::: tip ð¡

å¦æä½ ä½¿ç¨é¡¹ç®å¼ç¨ï¼`project references`ï¼ï¼åå¼ºçå»ºè®®ä½ å¼å¯è¿ä¸ªéé¡¹ã

:::



## `downlevelIteration` - éçº§è¿­ä»£

éçº§ï¼`Downlevel`ï¼æ¯ä¸ä¸ªTSåè¯ï¼è¡¨ç¤ºè½¬ç§»ä¸ºèçæ¬çJSãè¿ä¸ªæ å¿æ¯ææ´ç²¾ç¡®å°å®ç°ç°ä»£JSå¦ä½å¨æ§JSè¿è¡æ¶ä¸­è¿­ä»£æ°æ¦å¿µã

ES6 æ·»å äºå ä¸ªæ°è¿­ä»£åå§æé ï¼`for-of` å¾ªç¯ï¼æ°ç»å±å¼ç¬¦ (`[a, ...b]`)ï¼åæ°å±å¼(`fn(...args)`)ï¼å `Symbol.iterator`ã`downlevelIteration` åè®¸è¿äºåºç¡è¿­ä»£æé å¨ `Symbol.iterator`åºç°çæåµä¸ï¼å¨ES5ç¯å¢ä¸­æ´ç²¾ç¡®çè¢«ä½¿ç¨ã





> for-of ä¾å­ææ

TS:

```typescript
const str = 'Hello'
for (const s of str) {
  console.log(s)
}
```

ä¸å¼å¯ `downlevelIteration`ï¼å¯¹ä»»ä½å¯¹è±¡ç `for-of` å¾ªç¯é½è¢«éçº§ä¸ºä¼ ç»ç `for` å¾ªç¯ï¼

```js
"use strict";
var str = "Hello!";
for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
    var s = str_1[_i];
    console.log(s);
}
```

è¿æ­£æ¯äººä»¬ç»å¸¸æææçï¼ä½æ¯è¿ä¸æ¯100%å¼å®¹ECMAScriptè¿­ä»£åè®®ãç¹å«çå­ç¬¦ä¸²ï¼æ¯å¦emojiï¼ðï¼ ï¼é¿åº¦ä¸º `2`ï¼ææ´é¿ï¼ï¼ä½ç±äº `for-of` æ¯æ¬¡è¿­ä»£ä¸ä¸ªååã[å¯çè¿ç¯åæ - Jonathan New](https://blog.jonnew.com/posts/poo-dot-length-equals-two)

å½å¼å¯ `downlevelIteration`ï¼TSä¼å©ç¨ä¸ä¸ªè¾å©å½æ°æ¥æ£æµ `Symbol.iterator` å®ç°ï¼è¦ä¹åçå®ç°ï¼è¦ä¹polyfillï¼ãå¦æå®ç°ç¼ºå¤±ï¼ä½ å°åéå°åºäºç´¢å¼çå®ç°ï¼

```js
"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var e_1, _a;
var str = "Hello!";
try {
    for (var str_1 = __values(str), str_1_1 = str_1.next(); !str_1_1.done; str_1_1 = str_1.next()) {
        var s = str_1_1.value;
        console.log(s);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (str_1_1 && !str_1_1.done && (_a = str_1.return)) _a.call(str_1);
    }
    finally { if (e_1) throw e_1.error; }
}
```

ð ä½ ä¹å¯ä»¥ä½¿ç¨ [tslib](https://www.npmjs.com/package/tslib) ï¼éè¿ [importHelpers](https://www.typescriptlang.org/tsconfig#importHelpers) éé¡¹æ¥åå°åèJSçä»£ç éï¼

```js
"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var e_1, _a;
var str = "Hello!";
try {
    for (var str_1 = __values(str), str_1_1 = str_1.next(); !str_1_1.done; str_1_1 = str_1.next()) {
        var s = str_1_1.value;
        console.log(s);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (str_1_1 && !str_1_1.done && (_a = str_1.return)) _a.call(str_1);
    }
    finally { if (e_1) throw e_1.error; }
}
```

::: warning ð¨

å¼å¯ `downlevelIteration` ï¼å¨ `Symbol.iterator` å¨è¿è¡æ¶ä¸­ä¸å­å¨æ¶ï¼å¹¶ä¸ä¼æåå¼å®¹æ§ã

:::



> Array Spreads ææç¤ºä¾

ä¸é¢æ¯æ°ç»å±å¼ï¼

```typescript
const arr = [1, ...arr2]
```

è¿çèµ·æ¥å¾å®¹æéçº§ä¸ºES5:

```js
// è¿ä¸æ ·ï¼æ¯åï¼ð¤
const arr = [1].concat(arr2)
```

ä½è¿å¨æäºç½è§çæåµä¸ï¼å¾ææ¾ä¸ä¸æ ·ãæ¯å¦ï¼å¦ææ°ç»æä¸ªç©ºæ´ï¼`hole`ï¼ï¼éè¿å±å¼ï¼ç¼ºå¤±çç´¢å¼ä¼åå»ºä¸ä¸ªèªå·±çå±æ§ï¼èä½¿ç¨ `concat` åä¸ä¼ï¼

```js {1}
// æä¸ªç¼ºå¤±çåç´ ï¼è¡¨ç¤ºç©ºæ´
let missing = [0, , 1]
let spreaded = [...missing] //Â [0, undefined, 1]
let concated = [].concat(missing) // Â [0, empty, 1]
// true
"1" in spreaded
// false
"1" in concated
```

å `for-of` ç±»ä¼¼ï¼`downlevelIteration` å°ä½¿ç¨ `Symbol.iterator` (å¦æåºç°) æ´ç²¾ç¡®çæ¨¡æES6è¡ä¸ºã



::: tip ð¡

ç¸å³èéç½®ï¼

- [importHelpers](#importhelpers-ð-ä½çæ¬jsè¾å©å½æ°)

:::



## `emitBOM` - çæBOM

æ§å¶TSå¨åè¾åºæä»¶æ¶ï¼æ¯å¦çæ [BOM](https://wikipedia.org/wiki/Byte_order_mark)ãæäºè¿è¡æ¶ç¯å¢éè¦BOMæ­£ç¡®ç¿»è¯JSæä»¶ï¼èæäºåéè¦å»é¤BOMãé»è®¤å¼æ¯ `false`ï¼é¤éæç¹æ®ççç±æä¼æ´æ¹è¿ä¸ªå¼ã



## `emitDeclarationOnly` ð - åªçæå£°ææä»¶

åªå£°æ `.d.ts` æä»¶ï¼ä¸çæ `.js` æä»¶ã

è¿ä¸ªè®¾ç½®å¨å¦ä¸2ç§æå½¢æç¨ï¼

1. ä½ ä½¿ç¨éTSè½¬è¯å¨ï¼`transpiler`ï¼ çæä½ çJS
2. ä½ ä½¿ç¨TSåªçæ `.d.ts` æä»¶ç»ä½ çæ¶è´¹è



::: tip ð¡

ç¸å³èéç½®ï¼

- [declaration](#declaration-ð)

:::





## `importHelpers` ð - ä½çæ¬JSè¾å©å½æ°

å¯¹ç¹å«éçº§æä½ï¼TSå¯¹æäºæä½ä½¿ç¨è¾å©ä»£ç ï¼æ¯å¦æ©å±ç£¨å·ä¸ªç±»ï¼å±å¼æ°ç»æå¯¹è±¡ï¼ä»¥åå¼æ­¥æä½ãé»è®¤æåµä¸ï¼è¿äºè¾å©å½æ°ä¼æå¥å°ä½¿ç¨å°å®ä»¬çæä»¶ä¸­ãå¦æç¸åçè¾å©å½æ°ç¨äºä¸åæ¨¡åä¸­ï¼è¿å¯è½å¯¼è´ä»£ç éå¤ãð

å¦æå¼å§ `importHelpers`ï¼è¿äºè¾å©å½æ°ä¼ä» [tslib](https://www.npmjs.com/package/tslib) å¯¼å¥ãä½ å°éè¦ç¡®ä¿ `tslib` æ¨¡åè½å¨è¿è¡æ¶è¢«å¯¼å¥ãè¿åªå½±åæ¨¡åï¼èå¨å±èæ¬æä»¶ä¸ä¼å°è¯å¯¼å¥è¿äºæ¨¡åã



æ¯å¦ï¼ð°

```typescript
export function fn(arr: number[]) {
  const arr2 = [1, ...arr]
}
```

æå¼ `downlevelIteration` éç½®ï¼ä½ `importHelpers` ä¸å¼å¯çæåµï¼

```js
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
export function fn(arr) {
    var arr2 = __spreadArray([1], __read(arr), false);
}
```

åæ¶å¼å¯ `downlevelIteration` & `importHelper` ï¼

```js
import { __read, __spreadArray } from "tslib";
export function fn(arr) {
    var arr2 = __spreadArray([1], __read(arr), false);
}
```

å½ä½ æ³èªå·±æä¾è¿äºè¾å©å½æ°ï¼ä½ å¯ä»¥ä½¿ç¨ `noEmitHelpers`ã



::: tip ð¡

ç¸å³èéç½®ï¼

- [noEmitHelpers](#noemithelpers) - ä¸çæè¾å©å½æ°
- [downlevelIteration](#downleveliteration-éçº§è¿­ä»£) - éçº§ä¸ºèçæ¬JS

:::





## `importsNotUsedAsValues`



è¿ä¸ªéç½®æ§å¶ `import` å¦ä½å·¥ä½ï¼æ3ç§éé¡¹ï¼

- `remove`ï¼é»è®¤è¡ä¸ºï¼ç§»é¤åªæå¼ç¨ç±»åç `import` è¯­å¥
- `preserve`ï¼ä¿å­å¼æç±»åæ²¡æè¢«ä½¿ç¨çææ `import` è¯­å¥ãè¿è½å¯¼è´ `imports/side-effects` å¾ä»¥ä¿å­
- `error`: è¿ä¼ä¿å­ææ `import`(è¿ä¸ç¹å `preserve` éé¡¹)ï¼ä½å½ä¸ä¸ªå¼å¯¼å¥åªè¢«å½åç±»åä½¿ç¨æ¶ä¼æåºéè¯¯ãå¦æä½ å¸æç¡®ä¿æ²¡ææå¤å¯¼å¥å¼ï¼ä½ä»ç¶æ¾å¼å°æ¾ç¤ºå¯ä½ç¨å¯¼å¥ï¼é£ä¹è¿å¯è½å¾æç¨ã

è¿ä¸ªéç½®è½è¿ä½ï¼æ¯å ä¸ºä½ å¯ä»¥ä½¿ç¨ `import type` æ¾å¼çåå»º `import` è¯­å¥ï¼å®åºå½æ°¸è¿ä¸çæå°JSä¸­ã





::: tip ð¡

é»è®¤ï¼`remove`

å¯è½å¼ï¼

- `remove`
- `preserve`
- `error`

:::





## `inlineSourceMap` ð

å½è®¾ç½®äºè¿ä¸ªéé¡¹ï¼å°ä¸ä¼åç¬çæ `.js.map` æä»¶æ¥æä¾source mapsï¼TSå°ä¼å°source map åå®¹åµå¥å° `.js` æä»¶ä¸­ãå°½ç®¡è¿ä¼å¯¼è´æ´å¤§çJSæä»¶ï¼ä½å®å´éç¨äºæäºåºæ¯ãæ¯å¦ï¼ä½ å¯è½æ³å¨æä¸ªä¸åè®¸ `.map` æä»¶å­å¨çwebserverä¸è°è¯JSæä»¶ãð

è¿å [sourceMap](https://www.typescriptlang.org/tsconfig#sourceMap) äºæ¥ã

æ¯å¦ð° ts:

```typescript
const helloWorld = "hi"
console.log(helloWorld)
```

è½¬æ¢ä¸ºJS:

```js
"use strict"
const helloWorld = "hi"
console.log(helloWorld)
```

å¼å¯ `inlineSourceMap`ï¼ä¼å¨jsæä»¶æåºä¸åå«source-mapçæ³¨éï¼

```js {4}
"use strict";
const helloWorld = "hi";
console.log(helloWorld);
//# sourceMappingURL=data:application/json;base64,e....
```



## `inlineSources`

å½å¼å¯è¿ä¸ªéç½®ï¼TSä¼ä»¥åµå¥å­ç¬¦ä¸²å½¢å¼å°åå§ç `.ts` æä»¶åå®¹åå«å°source mapä¸­ï¼ä½¿ç¨source mapç `sourcesContent` å±æ§ï¼ãè¿å¨æäºæåµä¸å¾æç¨ï¼ç±»ä¼¼ `inlineSourceMap` çåºæ¯ã

::: warning ð¨

ä½¿ç¨è¿ä¸ªéç½®ï¼éè¦è®¾ç½® `sourceMap` æè `inlineSourceMap`

:::

æ¯å¦ð° ts:

```typescript
const helloWorld = "hi"
console.log(helloWorld)
```

è½¬æ¢ä¸ºJS:

```js
"use strict"
const helloWorld = "hi"
console.log(helloWorld)
```

åè®¾å¼å¯ `inlineSources` + `inlineSourceMap`ï¼ä¼å¨jsæä»¶æåºä¸åå«source-mapçæ³¨éï¼æ³¨æåå®¹ä¸åäº `inlineSourceMap`ï¼å ä¸ºå®è¿åå«äºæºä»£ç åå®¹ï¼

```js {4}
"use strict";
const helloWorld = "hi";
console.log(helloWorld);
//# sourceMappingURL=data:application/json;base....
```



## `mapRoot` - ä¸sourceMapåè°è¯ç¸å³

æå®è°è¯å¨ï¼`debugger`ï¼ åºå½å®ä½mapæä»¶çä½ç½®ï¼èä¸æ¯çæçä½ç½®ãæ­¤å­ç¬¦ä¸²å¨æºæ å°ä¸­éå­å¤çï¼ä¾å¦ï¼

```json
{
  "compilerOptions": {
    "sourceMap": true,
    "mapRoot": "https://my-website.com/debug/sourcemaps/"
  }
}
```

å°å£°æ `index.js` æä»¶çsourceMapså¨ `https://my-website.com/debug/sourcemaps/index.js.map` ä½ç½®ã





## `newLine`



æå®å¨çææä»¶æ¶ä½¿ç¨çè¡ç»æåºåï¼`CRLF` (windows) | `LF` (unix)



::: tip ð¡

é»è®¤ï¼ä¸å¹³å°ç¸å³

å¯è½å¼ï¼

- `crlf`
- `lf`

:::





## `noEmit` ð

ä¸çæç¼è¯å¨è¾åºæä»¶ï¼æ¯å¦JSæºä»£ç ï¼source-mapsæå£°ææä»¶ï¼`.d.ts` æä»¶ï¼ã

è¿ç»å¶å®å·¥å·ï¼æ¯å¦ [babel](https://babeljs.io/) æ [swc](https://github.com/swc-project/swc) ï¼æ¥å¤çTSæä»¶è½¬æ¢ä¸ºè½è¿è¡å¨JSç¯å¢æä¾äºæä½ç©ºé´ãð

ç¶åå°TSåªä½ä¸ºå¯¹ç¼è¾å¨éæçå·¥å·ï¼åæºä»£ç ç±»åçæ£æµå¨ã



## `noEmitHelpers`

ä¸ä½¿ç¨ `importHelpers` æä¾çè¾å©å½æ°ï¼ä½ å¯ä»¥ä¸ºä½ ä½¿ç¨çè¾å©å½æ°æä¾å¨å±èå´åçå®ç°ï¼å¹¶å®å¨å³é­è¾å©å½æ°ççæã

æ¯å¦ï¼å¨ES5ä¸­ä½¿ç¨ `async` å½æ°ï¼éè¦è¿è¡ç±»ä¼¼ `await` & `generator` å½æ°ï¼

```typescript
const getAPI = async (url: string) => {
  // Get API
  return {};
}
```

è¿ä¼çæå¤§éJSä»£ç ï¼

```js
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var getAPI = function (url) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        // Get API
        return [2 /*return*/, {}];
    });
}); };
```

å¯ä»¥éè¿è¿ä¸ªéç½®ç¨ä½ èªå·±çå¨å±åéæ¥æ¿æ¢ï¼

```js
"use strict";
var getAPI = function (url) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        // Get API
        return [2 /*return*/, {}];
    });
}); };
```

::: tip ð¡

ç¸å³èéç½®ï¼

- [importHelpers](#importhelpers-ð-ä½çæ¬jsè¾å©å½æ°)

:::



## `noEmitOnError` ð

å¦æä¸æ¥ä»»ä½éè¯¯ï¼é½ä¸è¦çæç¼è¯å¨è¾åºæä»¶ - JSæºä»£ç ï¼source maps & å£°ææä»¶ã

è¿ä¸ªéç½®é»è®¤æ¯ `false`ï¼ä¾¿äºTSå¨ `watch` ç¯å¢å·¥ä½ï¼ä½ å¯è½å¸æå¨ç¡®ä¿è§£å³ææéè¯¯ä¹åå¨å¦ä¸ä¸ªç¯å¢ä¸­æ¥çä»£ç æ´æ¹çç»æã



## `outDir` ð

å¦æéç½®äºï¼`.js` (å `.d.ts` & `.js.map` ç­) æä»¶å°çæå°è¯¥ç®å½ãåå§æºæä»¶ç®å½ç»æä¼å¾å°ä¿å­ãå¦æè®¡ç®çæ ¹ç®å½ä¸æ¯ä½ æ³è¦çï¼å¯æ¥ç [rootdir](./modules#rootdir-ð)ã

å¦ææ²¡æéç½®ï¼`.js` æä»¶å°çæå° `.ts` æå¨çç¸åç®å½ä¸ï¼

```bash {3}
$ tsc
example
âââ index.js
âââ index.ts
```

`tsconfig.json` éç½®ï¼

```json {3}
{
  "compilerOptions": {
    "outDir": "dist"
  }
}
```

åè¿è¡ `tsc` å½ä»¤ï¼åçæçæä»¶ä¼å¨ `dist` ç®å½ï¼

```bash {3-4}
$ tsc
example
âââ dist
â   âââ index.js
âââ index.ts
âââ tsconfig.json
```

::: tip ð¡

ç¸å³èéç½®ï¼

- `out`
- [outFile](#outfile) - å° none | system | amd æ¨¡å + éæ¨¡åå¨å±åå®¹æåä¸ºä¸ä¸ªåä¸æä»¶

:::



## `outFile`

å¦æå®ä¹ï¼ææ `å¨å±ï¼globalï¼` ï¼éæ¨¡åï¼æä»¶é½è¢«æ¼æ¥å°æå®çåä¸è¾åºæä»¶ä¸­ã

å¦æ `module` æ¯ `system | amd`ï¼æææä»¶æ¨¡åæä»¶ä¹ä¼è¢«æ¼æ¥å°è¯¥æä»¶å¨å±åå®¹ä¹åã



::: warning ð¨

`outFile` åªæå¨ `module` ä¸º `none | system | amd`  çæåµä¸æè½ä½¿ç¨ãè¿ä¸ªéç½®ä¸è½ç¨äºæåCommonJSæESMã

:::





## `preserveConstEnums`

å¨çæçä»£ç ä¸­ï¼ä¸è¦æ¦é¤ `const enum` å£°æã`const enum`s æä¾äºä¸ç§æ¹å¼ï¼å¯ä»¥éè¿çææä¸¾å¼èä¸æ¯å¼ç¨çæ¹å¼ï¼å¨è¿è¡æ¶åå°æ´ä½åå­çä½¿ç¨ã

æ¯å¦ï¼ð° ts:

```typescript
const enum Album {
  JimmyEatWorldFutures = 1;
  TubRingZooHypothesis = 2;
  DogFashionDiscoAdultery = 3;
}

const selectedAlbum = Album.JimmyEatWorldFutures;
if (selectedAlbum === Album.JimmyEatWorldFutures) {
  console.log('That is a great choice.')
}
```

`const enum` é»è®¤è¡ä¸ºæ¯å°ä»»ä½ `Album.Something` è½¬æ¢ä¸ºç¸åºçæ°å­å­é¢éï¼å¹¶ä»JSä¸­å®å¨å é¤å¯¹æä¸¾çå¼ç¨ã

```js
"use strict";
const selectedAlbum = 1 /* Album.JimmyEatWorldFutures */;
if (selectedAlbum === 1 /* Album.JimmyEatWorldFutures */) {
    console.log("That is a great choice.");
}
```

éè¿å° `preserveConstEnums` è®¾ç½®ä¸º `true`ï¼`enum` å¨è¿è¡æ¶ä¸­å­å¨ï¼æ°å­ä»ç¶ä¼è¢«çæï¼

```js
"use strict";
var Album;
(function (Album) {
    Album[Album["JimmyEatWorldFutures"] = 1] = "JimmyEatWorldFutures";
    Album[Album["TubRingZooHypothesis"] = 2] = "TubRingZooHypothesis";
    Album[Album["DogFashionDiscoAdultery"] = 3] = "DogFashionDiscoAdultery";
})(Album || (Album = {}));
const selectedAlbum = 1 /* Album.JimmyEatWorldFutures */;
if (selectedAlbum === 1 /* Album.JimmyEatWorldFutures */) {
    console.log("That is a great choice.");
}
```

è¿å®éä¸ä½¿ç±»ä¼¼ `const enum` ä»æä¸ºæºä»£ç ç¹æ§ï¼æ²¡æè¿è¡æ¶è·è¸ªã



::: tip ð¡

é»è®¤ï¼å¦æè®¾ç½®äº `isolatedModules` åä¸º `true`ï¼ å¦åä¸º `false`

:::



## `preserveValueImports`

æäºæåµï¼TSä¸è½æ£æµä½ æ­£å¨ä½¿ç¨importãæ¯å¦ï¼ä¸é¢ä»£ç ï¼

```typescript {2}
import { Animal } from "./animal.js"
eval("console.log(new Animal().isDangerous())")
```

æä½¿ç¨äº `ç¼è¯ä¸ºHTML` è¯­è¨çä»£ç ï¼æ¯å¦Vue, Svelteã

å½ç»å[isolatedModules](https://www.typescriptlang.org/tsconfig#isolatedModules)ï¼å¼å¥ç±»å `å¿é¡»` æ è®°ä¸º `type-only`ï¼å ä¸ºä¸æ¬¡å¤çåä¸ªæä»¶çç¼è¯å¨æ æ³ç¥éå¯¼å¥çæ¯æªä½¿ç¨çå¼ï¼è¿æ¯å¿é¡»å é¤ä»¥é¿åè¿è¡æ¶å´©æºçç±»åã

ä¾å¦ï¼ä¸é¢ä»£ç  `TitleComponent` æ¯ä¸ä¸ªå½æ°ï¼`TitleComponentProps` æ¯ä¸ä¸ªå¼å¯äº `isolatedModules` & `preserveValueImports` çç±»åï¼

```typescript
import { TitleComponent, TitleComponentProps } from './TitleComponent.js'
```

æä»¬å¯ä»¥éè¿å¨ `TitleComponentProps` åé¢æ·»å  `type` åç¼æ¥æ è®°å®æ¯ `type-only` å¯¼å¥æ¥ä¿®å¤è¿ä¸ªé®é¢ï¼

```typescript
import { TitleComponent, type TitleComponentProps } from './TitleComponent.js'
```

::: tip ð¡

ç¸å³éç½®é¡¹ï¼

- [isolatedModules](https://www.typescriptlang.org/tsconfig#isolatedModules)
- [importsNotUsedAsValues](#importsnotusedasvalues)

:::



## `removeComments`

è½¬æ¢ä¸ºJSæä»¶æ¶ï¼ç§»é¤ææTSæ³¨éãé»è®¤ä¸º `false`ã

æ¯å¦ï¼ä¸é¢TSæä»¶ä½¿ç¨äºJSDocæ³¨éï¼

```typescript
/** The translation of 'Hello world' into Portuguese */
export const helloWorldPTBR = "OlÃ¡ Mundo"
```

ä½è®¾ç½® `removeComments: true`ï¼

```js
export const helloWorldPTBR = "OlÃ¡ Mundo"
```

ä¸è®¾ç½®æè®¾ç½®ä¸º `false`:

```js
/** The translation of 'Hello world' into Portuguese */
export const helloWorldPTBR = "OlÃ¡ Mundo"
```

å³æ³¨éä¼åºç°å¨ä½ çJSä»£ç ä¸­ã



## `sourceMap` ð

å¼å¯ [sourcemap](https://developer.mozilla.org/docs/Tools/Debugger/How_to/Use_a_source_map) æä»¶ççæãè¿äºæä»¶è®©è°è¯å¨åå¶å®å·¥å·æ¾ç¤ºåå§TSæºä»£ç ï¼å½ä½¿ç¨çæçJSæä»¶æ¶ãSource mapæä»¶ä»¥ `.js.map`ï¼æ `.jsx.map`ï¼ æä»¶çå½¢å¼çæã

`.js` æä»¶åè¿æ¥åå«sourcemapæ³¨éï¼ä»¥æç¤ºæä»¶å°å¤é¨å·¥å·çä½ç½®ï¼æ¯å¦ï¼

```typescript
// helloWorld.ts
export declare const helloWorld = "hi"
```

è®¾ç½® `sourceMap: true`ï¼å°åå»ºå¦ä¸jsæä»¶ï¼

```js
// helloWorld.js
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = "hi";
//# sourceMappingURL=// helloWorld.js.map
```

ä¹ä¼çæä¸é¢JSON map:

```js
// helloWorld.js.map
{
  "version": 3,
  "file": "ex.js",
  "sourceRoot": "",
  "sources": ["../ex.ts"],
  "names": [],
  "mappings": ";;AAAa,QAAA,UAAU,GAAG,IAAI,CAAA"
}
```



## `sourceRoot`

æå®è°è¯å¨åºè¯¥å®ä½TSæä»¶çä½ç½®ï¼èä¸æ¯ç¸å¯¹çæºä½ç½®ãè¯¥å­ç¬¦ä¸²å¨source-mapä¸­éå­å¤çï¼ä½ å¯ä»¥ä½¿ç¨è·¯å¾æURL:

```json {4}
{
  "compilerOptions": {
    "sourceMap": true,
    "sourceRoot": "https://my-website.com/debug/source/"
  }
}
```

è¿å°å£°æ `index.js` æä¸ä¸ªæºæä»¶å¨ `https://my-website.com/debug/source/index.ts` ä½ç½®ã



## `stripInternal`

ä¸è¦å¯¹æ³¨éäº `@internal` çJSDocæ³¨éçä»£ç çæå£°æãè¿æ¯ä¸ä¸ªç¼è¯å¨åé¨éç½®ãèªå·±å¯¹ä½¿ç¨é£é©è´è´£ï¼å ä¸ºç¼è¯å¨ä¸ä¼æ£æµç»ææ¯å¦åæ³ãå¦æä½ æ­£å¨å¯»æ¾ä¸ç§å·¥å·æ¥å¤ç`d.ts`æä»¶ä¸­é¢å¤çº§å«çå¯è§æ§ï¼è¯·æ¥ç[api-extractor](https://api-extractor.com/)ã

```typescript {3}
/**
 * Days available in a week
 * @internal
 */
export const daysInAWeek = 7;
 
/** Calculate how much someone earns in a week */
export function weeklySalary(dayRate: number) {
  return daysInAWeek * dayRate;
}
```

é»è®¤ `false`:

```typescript
/**
 * Days available in a week
 * @internal
 */
export declare const daysInAWeek = 7;
/** Calculate how much someone earns in a week */
export declare function weeklySalary(dayRate: number): number;
```

å¼å¯ `stripInternal: true`:

```typescript
/** Calculate how much someone earns in a week */
export declare function weeklySalary(dayRate: number): number;
```

JSè¾åºä»ç¶æ¯ç¸åçã



::: warning ð¨

TSç¼è¯å¨åé¨ä½¿ç¨

:::



åææ¡£ï¼

- [Emit](https://www.typescriptlang.org/tsconfig#Emit_6246)

2022å¹´08æ19æ¥17:27:22