import{_ as s,c as n,o as a,b as l}from"./app.660e8875.js";const d=JSON.parse('{"title":"Modules class","description":"","frontmatter":{"title":"Modules class"},"headers":[],"relativePath":"ts/dfile/templates/modules-class.md","lastUpdated":1662303402000}'),p={name:"ts/dfile/templates/modules-class.md"},e=l(`<nav class="table-of-contents"></nav><p>\u4F8B\u5982\uFF0C\u5F53\u4F60\u60F3\u4F7F\u7528\u7684JavaScript\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> Greeter </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">super-greeter</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> greeter </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Greeter</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">greeter</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">greet</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div><p>\u4E3A\u4E86\u80FD\u540C\u65F6\u5904\u7406\u901A\u8FC7 <code>UMD</code> \u548C \u6A21\u5757\u5BFC\u5165\uFF1A</p><div class="language-typescript"><span class="copy"></span><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br><br><br><br><br><br></div><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u5BF9 [~THE LIBRARY NAME~] [~\u53EF\u9009\u7248\u672C\u53F7~] \u7684\u7C7B\u578B\u5B9A\u4E49</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Project: [~\u9879\u76EE\u540D~]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Definitions by: [~\u4F60\u7684\u540D\u5B57~] &lt;[~URL FOR YOU~]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*~ \u{1F4A1}\u8FD9\u662F\u4E00\u4E2A\u9488\u5BF9\u7C7B\u6A21\u5757\u7684\u6A21\u677F\u6587\u4EF6. \u4F60\u5E94\u8BE5\u5C06\u5B83\u91CD\u547D\u540D\u4E3A index.d.ts</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *~ \u5E76\u5C06\u5B83\u653E\u5728\u548C\u6A21\u5757\u540C\u540D\u7684\u6587\u4EF6\u5939\u4E2D</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *~ \u4F8B\u5982, \u5982\u679C\u4F60\u6B63\u5728\u7ED9 &quot;super-greeter&quot; \u6587\u4EF6\u5199\u7C7B\u578B\u58F0\u660E</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *~ \u5219\u8BE5\u6587\u4EF6\u5E94\u8BE5\u662F &#39;super-greeter/index.d.ts&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u{1F6A8} \u6CE8\u610F ES6 Modules \u4E0D\u80FD\u76F4\u63A5\u5BFC\u51FA\u7C7B\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u6587\u4EF6\u5E94\u5F53\u4F7F\u7528CommonJS\u98CE\u683C\u88AB\u5BFC\u5165</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// import x = require(&#39;[~\u6A21\u5757\u540D~]&#39;)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u{1F680}\u{1F680} \u6216\u8005\uFF0C \u5982\u679C --allowSyntheticDefaultImports \u6216</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// --esModuleInterop \u5F00\u542F\u4E86\uFF0C\u6587\u4EF6\u4E5F\u53EF\u4EE5\u5F53\u505A\u662F\u9ED8\u8BA4\u5BFC\u5165\u88AB\u5BFC\u5165</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// import x from &#39;import x = require(&#39;[~\u6A21\u5757\u540D~]&#39;)&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u53C2\u8003TS\u6587\u6863</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// https://www.typescriptlang.org/docs/handbook/modules.html#export--and-import--require</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u4E86\u89E3ES6\u6A21\u5757\u8FD9\u79CD\u9650\u5236\u7684\u5E38\u89C1\u89E3\u51B3\u65B9\u6CD5\u{1F60E}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*~ \u5982\u679C\u6A21\u5757\u662F\u4E00\u4E2A\u66B4\u9732\u4E86\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF \`myClassLib\` \u7684UMD\u6A21\u5757\uFF0C\u5F53</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *~ \u5728\u6A21\u5757\u52A0\u8F7D\u5668\u73AF\u5883\u4E4B\u5916\u88AB\u52A0\u8F7D\u65F6\uFF0C\u5728\u6B64\u58F0\u660E\u8BE5\u5168\u5C40\u53D8\u91CF</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *~ \u5426\u5219\uFF0C\u5220\u9664\u4E0B\u9762\u8FD9\u884C\u58F0\u660E\u{1F6A8}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> as namespace </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">super-greeter</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*~ </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *~ \u8FD9\u4E2A\u58F0\u660E\u6307\u5B9A\u7C7B\u6784\u9020\u51FD\u6570\u662F\u4ECE\u6587\u4EF6\u4E2D\u5BFC\u51FA\u7684\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Greeter</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*~ \u5728\u8FD9\u4E2A\u7C7B\u4E2D\u5199\u4F60\u6A21\u5757\u7684\u65B9\u6CD5\u548C\u5C5E\u6027 */</span></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Greeter</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">customGreeting</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">greet</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">myMethod</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">opts</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyClass</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">MyClassMethodOptions</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*~ \u5982\u679C\u4F60\u4E5F\u60F3\u4ECE\u6A21\u5757\u4E2D\u66B4\u9732\u7C7B\u578B\uFF0C\u4F60\u53EF\u4EE5\u5C06\u5176\u653E\u7740\u8FD9\u4E00\u5757\u4E2D</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *~</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *~ \u6CE8\u610F\uFF0C\u5982\u679C\u4F60\u51B3\u5B9A\u5305\u542B\u8FD9\u4E2A\u547D\u540D\u7A7A\u95F4\uFF0C</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *~ \u6A21\u5757\u53EF\u80FD\u4F1A\u88AB\u9519\u8BEF\u5730\u5BFC\u5165\u4E3A\u547D\u540D\u7A7A\u95F4\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *~ \u{1F4DA} \u9664\u975E\u5F00\u542F --esModuleInterop</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *~   import * as x from &#39;[~THE MODULE~]&#39;; // \u274C \u4E0D\u8981\u8FD9\u6837\u505A</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyClass</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">MyClassMethodOptions</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    width</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    height</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u539F\u6587\u6863\uFF1A</p><ul><li><a href="https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-class-d-ts.html" target="_blank" rel="noopener noreferrer">Module: Class</a></li></ul><p>2022\u5E7409\u670803\u65E512:42:38</p>`,8),o=[e];function t(c,r,i,y,D,F){return a(),n("div",null,o)}var A=s(p,[["render",t]]);export{d as __pageData,A as default};
