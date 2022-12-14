---
title: Lookup Types
---

ð° æ¯å¦æä»¬ç»å¸¸ä¼ç¢°å°ä¸äºæ¥å£æ°æ®ç±»åå®ä¹ï¼

```typescript
export type SubmitRequest = {
  personal: {
    title: string;
    previousAliases: {
      firstName: string;
      lastName: string;
    }[]
  },
  payment: {
    cardToken: string;
  }
}
```

æä»¬å¨åºç¨ä¸­æä¸ªå°æ¹ï¼éè¦ä½¿ç¨ `é¨å` æ°æ®ç±»åï¼æ¯å¦ï¼

```typescript
export function getPayment() {
  return {
    // è¿éå®éæ³è¦åçæ¯ carToken ä¸å°å¿åéä¸ºäº carTokens
    cardTokens: 'xxxaee' // [!code error]
  }
}
```

è¿éæä»¬æ³è¦çæ¯ `{cardToken: string}` ç±»åï¼å³ `SubmitRequest` ç±»åä¸­ `payment` å¯¹åºçç±»åï¼ä½æ¯å ä¸ºæ²¡æç±»åéªè¯ï¼æä»¬è¿éå¯è½ä¸å°å¿å°å¶åä¸ºäº `cardTokens`ãäºæ¯æä»¬å¯è½å®ä¹ä¸ä¸ª `Payment` ç±»åï¼

```typescript
type Payment = {
  cardToken: string
}

export function getPayment(): Payment {
  return {
    // â ä¸è½å°ç±»å {cardTokens: string} åéç» ç±»å{cardToken: string}
    cardTokens: 'xxxaee' // [!code error]
  }
}
```

éè¿è¿ç§æ¹å¼è½ç¶å¯ä»¥è§£å³è¿ä¸ªé®é¢ï¼ä½æ¯è¿éå­å¨2ä¸ªé®é¢ð¤ï¼

1. æå¯è½æä»¬åªéè¦å¨ `getPayment` è¿ä¸ä¸ªå°æ¹ä½¿ç¨å° `Payment` è¿ä¸ªç±»åï¼åªä¸ºäºè¿ä¸ä¸ªå°æ¹ç¨å°çç±»åï¼èåå»ºä¸ä¸ªæ°çç±»åï¼å¯è½ä¼äº§ç `Type Noises`(ç±»åæé³)
2. è¿éç `Payment` ç±»åå `SubmitRequest` ç¸å³èçï¼å¦æ `SubmitRequest` ä¸­çç±»ååçäºååï¼è¿è¦å° `Payment` ç±»åè¿è¡åæ­¥ä¿®æ¹ï¼è¿ä¼é æéå¤

å¯ä»¥éè¿TypeScript `Lookup Types` åè½ï¼ç´æ¥ä»å¶å®ç±»åæInterfaceä¸­æ´¾çåºæ°çç±»åï¼ð

```typescript
export function getPayment(): SubmitRequest['payment'] { // [!code focus]
  return {
    // â ä¸è½å°ç±»å {cardTokens: string} åéç» ç±»å{cardToken: string}
    cardTokens: 'xxxaee' // [!code error]
  }
}
```

è¿éç´æ¥ä½¿ç¨ `SubmitRequest['payment']` lookup typesæ¹å¼çæä¸ä¸ªæ°çç±»åðã

å¦ææä»¬éè¦å¤ç¨è¿ä¸ªç±»åï¼æä»¬å¯ä»¥å°å¶èµå¼ç»å¦ä¸ä¸ªç±»åï¼

```typescript
type Payment = SubmitRequest['payment']
```

å¦å¤è¿å¯ä»¥å¯¹ä¸é¢ç `previousAliases` æ°ç»ç±»åè¿è¡ç±»åæåï¼

```typescript
// ç­ä»·äº type Alias = {firstName: string; lastName: string;}
type Alias = SubmitRequest['personal']['previousAliases'][number] // better
// æè
type Alias = SubmitRequest['personal']['previousAliases'][0]      // OK
```

::: warning

éå¯¹UPä¸»æåºç `Type Noises`ï¼è¯¥è§é¢è¯è®ºåºæäººè§å¾ï¼ä½¿ç¨å­ç±»åï¼`subtypes`ï¼çæ¹å¼æ´å çåçï¼å³é¢å¤çå®ä¹ `Payment` & `Alias`ï¼

```typescript
// å­ç±»å
type Payment = {
  cardToken: string;
}

// å­ç±»å
type Alias = {
  firstName: string;
  lastName: string;
}

// ç»åæå¤§çç±»å
export type SubmitRequest = {
  personal: {
    title: string;
    previousAliases: Alias[];
  },
  payment: Payment;
}
```

è `Lookup types` åè½ï¼å `åªå¨åºç±»æ¥èªå¤é¨åºçæ¶åä½¿ç¨`ðã

å¯¹äºè¿ç§è§ç¹ï¼UPè¡¨ç¤ºå¾èµæã

æä¸ªäººä¹è§å¾è¿ä¸è§ç¹æ¯è¾æ­£ç¡®ï¼ä½æ¯ç¥éLookup typesè¿ä¸ç¹æ§ä¹å¾éè¦ã

:::



å³äº `Lookup` ç±»åå¯åèï¼

- [keyof & lookup types - ts docs](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#keyof-and-lookup-types)



è§é¢å°åï¼

- [Lookup Types - basarat@youtube](https://www.youtube.com/watch?v=K0zc_fx3vkk&list=PLYvdvJlnTOjF6aJsWWAt7kZRJvzw-en8B)



2022å¹´11æ25æ¥11:56:54
