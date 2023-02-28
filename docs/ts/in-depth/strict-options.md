---
title: strict options
---
它位于 `tsconfig.json` 的 `compilerOptions`中，功能是 [Type Checking](../tsconfig/compiler/type-checking.html)

```json
{
  "compilerOptions": {
     /* Type Checking */
    "strict": true,                                      /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,                         /* When type checking, take into account 'null' and 'undefined'. */
    // "strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */
    // "strictBindCallApply": true,                      /* Check that the arguments for 'bind', 'call', and 'apply' methods match the original function. */
    // "strictPropertyInitialization": true,             /* Check for class properties that are declared but not set in the constructor. */
    // "noImplicitThis": true,                           /* Enable error reporting when 'this' is given the type 'any'. */
    // "useUnknownInCatchVariables": true,               /* Default catch clause variables as 'unknown' instead of 'any'. */
    // "alwaysStrict": true,                             /* Ensure 'use strict' is always emitted. */
    
    // "noUnusedLocals": true,                           /* Enable error reporting when local variables aren't read. */
    // "noUnusedParameters": true,                       /* Raise an error when a function parameter isn't read. */
    // "exactOptionalPropertyTypes": true,               /* Interpret optional property types as written, rather than adding 'undefined'. */
    // "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */
    // "noFallthroughCasesInSwitch": true,               /* Enable error reporting for fallthrough cases in switch statements. */
    // "noUncheckedIndexedAccess": true,                 /* Add 'undefined' to a type when accessed using an index. */
    // "noImplicitOverride": true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */
    // "noPropertyAccessFromIndexSignature": true,       /* Enforces using indexed accessors for keys declared using an indexed type. */
    // "allowUnusedLabels": true,                        /* Disable error reporting for unused labels. */
    // "allowUnreachableCode": true,                     /* Disable error reporting for unreachable code. */
  }
}
```

[How To Configure tsconfig.json: TypeScript Strict options - @maxoid](https://maxoid.io/how-to-configure-tsconfigjson-typescript-strict-options/) 本文介绍了最常用的一些类型检测项的作用：

- `useUnknownInCatchVariables` 用于对 `try - catch(error)` 中的 `error`，默认类型是 `any`, 开启后，将其变为 `unknown` 类型

  ```js
  try {
    
  } catch(e) { // e 是 `any` 类型
    console.log(e.trim())
  }
  
  // 开启后
  try {
    
  } catch(e) { // e 是 `unknown` 类型
    if (e instanceof Error) {
      console.log(e.message)
    }
  }
  ```

- `noImplicitAny` 禁用隐式any

  ```js
  // 开启后 data隐式any类型将报错
  // error TS7006: Parameter 'data' implicitly has an 'any' type.
  function printData(data) { // ![code error]
    console.log(data);
  }
  ```

- `strictNullChecks` 对 `null | undefined` 值在使用前进行校验

- `strictBindCallApply` 对传入 `bind() | call() | apply()` 方法的context进行校验

- `strictFunctionTypes` 严格函数签名类型

  ```js
  type loggerFn = (id: number | string) => void;
  
  // 开启后报错
  const logTransaction: loggerFn = (id: string) => {
    console.log(`[${new Date().toDateString()}] ${id.trim()}`);
  };
  
  logTransaction(transactionId);
  ```

- `noImplicitThis` 对隐式的 `this` 进行报错

  ```js
  const createCharacter = (name: string, level: number) => {
    return {
      label: `[${level} lvl] ${name}`,
      info(prefix: string) {
        return function () {
          // TypeError: Cannot read property 'label' of undefined
          console.log(`${prefix}: ${this.label}`); // [!code error]
        };
      },
    };
  };
  
  // 修正方法，将其变为arrow function
  const createCharacter = (name: string, level: number) => {
    return {
      label: `[${level} lvl] ${name}`,
      info(prefix: string) {
        return () => {
          // TypeError: Cannot read property 'label' of undefined
          console.log(`${prefix}: ${this.label}`); // [!code error]
        };
      },
    };
  };
  ```

- `strictPropertyInitialization` 针对Class，要求属性必须包含初始值或者用构造函数进行赋值

  ```js
  class Character {
    // error TS2564: Property 'name' has no initializer and is not definitely assigned in the constructor.
    name: string; // [!code error]
    //  error TS2564: Property 'level' has no initializer and is not definitely assigned in the constructor.
    level: string; // [!code error]
  
    constructor() {}
  
    greeting(callerName: string) {
      console.log(`[${this.level}] ${this.name}: Hello, ${callerName}!`);
    }
  }
  ```

- `alwaysStrict` 总是运行在严格模式下，会给源文件的最上面都加上 `"use strict;"`

而使用 `strict: true` 会开启上面所有的配置项，不用一个一个的去设置。



2023年02月28日15:13:16

