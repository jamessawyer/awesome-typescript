import{_ as s,c as a,o as l,b as n}from"./app.b22439d9.js";const C=JSON.parse('{"title":"js support","description":"","frontmatter":{"title":"js support"},"headers":[{"level":2,"title":"allowJs \u{1F44D}","slug":"allowjs-\u{1F44D}"},{"level":2,"title":"checkJs","slug":"checkjs"},{"level":2,"title":"maxNodeModuleJsDepth","slug":"maxnodemodulejsdepth"}],"relativePath":"ts/tsconfig/compiler/js-support.md","lastUpdated":1662984879000}'),p={name:"ts/tsconfig/compiler/js-support.md"},o=n(`<nav class="table-of-contents"><ul><li><a href="#allowjs-\u{1F44D}">allowJs \u{1F44D}</a></li><li><a href="#checkjs">checkJs</a></li><li><a href="#maxnodemodulejsdepth">maxNodeModuleJsDepth</a></li></ul></nav><h2 id="allowjs-\u{1F44D}" tabindex="-1"><code>allowJs</code> \u{1F44D} <a class="header-anchor" href="#allowjs-\u{1F44D}" aria-hidden="true">#</a></h2><p>\u5141\u8BB8js\u6587\u4EF6\u5728\u9879\u76EE\u4E2D\u88AB\u5BFC\u5165\uFF0C\u800C\u4E0D\u4EC5\u4EC5\u662F <code>.ts</code> \u548C <code>.tsx</code> \u6587\u4EF6\u3002</p><p>\u6BD4\u5982\uFF0C\u4E0B\u9762JS\u6587\u4EF6\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// @filename: card.js</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> defaultCardDeck </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Heart</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><p>\u5F53\u5BFC\u5165\u5230TS\u6587\u4EF6\u4E2D\u65F6\u4F1A\u5F15\u53D1\u9519\u8BEF\uFF1A</p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// @filename index.ts</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defaultCardDeck</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./card</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(defaultCardDeck)</span></span>
<span class="line"></span></code></pre></div><p>\u5F00\u542F <code>allowJs</code> \u518D\u5F15\u5165\u5C31\u6CA1\u4EC0\u4E48\u95EE\u9898\uFF1A</p><div class="language-json"><span class="copy"></span><div class="highlight-lines"><br><br><div class="highlighted">\xA0</div><br><br><br></div><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">compilerOptions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">allowJs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u4E2A\u914D\u7F6E\u7528\u4E8E\u9010\u6B65\u6DFB\u52A0TS\u6587\u4EF6\u5230JS\u9879\u76EE\u4E2D\uFF0C\u5141\u8BB8 <code>.ts</code> &amp; <code>.tsx</code> \u4E0E js\u6587\u4EF6\u5171\u5B58\u3002</p><div class="tip custom-block"><p class="custom-block-title">\u{1F4A1}</p><p>\u76F8\u5173\u8054\u914D\u7F6E\uFF1A</p><ul><li><a href="#checkjs">checkJs</a></li><li><a href="./emit.html#emitdeclarationonly-\u{1F44D}-\u53EA\u751F\u6210\u58F0\u660E\u6587\u4EF6">emitDeclarationOnly</a></li></ul></div><h2 id="checkjs" tabindex="-1"><code>checkJs</code> <a class="header-anchor" href="#checkjs" aria-hidden="true">#</a></h2><p>\u4E0E <a href="#allowjs-%F0%9F%91%8D">allowJs</a> \u534F\u540C\u5DE5\u4F5C\u3002\u5F53 <code>checkJs</code> \u5F00\u542F\u65F6\uFF0C\u9519\u8BEF\u4F1A\u5728JS\u4E2D\u4E5F\u4F1A\u89E6\u53D1\u3002\u8FD9\u76F8\u5F53\u4E8E\u5728\u9879\u76EE\u4E2D\u6240\u6709JS\u6587\u4EF6\u9876\u90E8\u5305\u542B\u4E86 <code>// @ts-check</code>\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// parseFloat \u503C\u63A5\u6536\u4E00\u4E2A\u5B57\u7B26\u4E32</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports.</span><span style="color:#A6ACCD;">pi </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">parseFloat</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3.124</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>\u5F53\u5BFC\u5165\u5230TS\u6A21\u5757\u4E2D\uFF1A</p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// @filename: constants.js</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports.</span><span style="color:#A6ACCD;">pi </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">parseFloat</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3.124</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// @filename: index.ts</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pi</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./constants</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(pi)</span></span>
<span class="line"></span></code></pre></div><p>\u4F60\u4E0D\u4F1A\u5F97\u5230\u4EFB\u4F55\u9519\u8BEF\u3002\u5982\u679C\u4F60\u5F00\u542F\u4E86 <code>checkJs</code>\uFF0CJS\u6587\u4EF6\u4E2D\u4E5F\u4F1A\u5F97\u5230\u9519\u8BEF\u4FE1\u606F\uFF1A</p><div class="language-json"><span class="copy"></span><div class="highlight-lines"><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br></div><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">compilerOptions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">allowJs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">checkJs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u9519\u8BEF\u4FE1\u606F\u5982\u4E0B\uFF1A</p><div class="language-typescript"><span class="copy"></span><div class="highlight-lines"><br><div class="highlighted">\xA0</div><br><br><br><br><br><br></div><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// @filename: constants.js</span></span>
<span class="line"><span style="color:#A6ACCD;">\u{1F6AB} Argument </span><span style="color:#89DDFF;">of</span><span style="color:#A6ACCD;"> type </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">number</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> is not assignable to parameter </span><span style="color:#89DDFF;">of</span><span style="color:#A6ACCD;"> type </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports.</span><span style="color:#A6ACCD;">pi </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">parseFloat</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3.124</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// @filename: index.ts</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pi</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./constants</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(pi)</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">\u{1F4A1}</p><p>\u76F8\u5173\u8054\u914D\u7F6E\uFF1A</p><ul><li><a href="#allowjs-%F0%9F%91%8D">allowJs</a></li><li><a href="./emit.html#emitdeclarationonly-\u{1F44D}-\u53EA\u751F\u6210\u58F0\u660E\u6587\u4EF6">emitDeclarationOnly</a></li></ul></div><h2 id="maxnodemodulejsdepth" tabindex="-1"><code>maxNodeModuleJsDepth</code> <a class="header-anchor" href="#maxnodemodulejsdepth" aria-hidden="true">#</a></h2><p>\u5728<code>node_modules</code>\u4E0B\u641C\u7D22\u548C\u52A0\u8F7DJavaScript\u6587\u4EF6\u7684\u6700\u5927\u4F9D\u8D56\u6DF1\u5EA6\u3002</p><p>\u8FD9\u4E2A\u914D\u7F6E\u53EA\u80FD\u5728 <a href="#allowjs-%F0%9F%91%8D">allowJs</a> \u5F00\u542F\u7684\u60C5\u51B5\u4E0B\u4F7F\u7528\uFF0C\u5982\u679C\u4F60\u60F3\u8BA9 TS \u4E3A\u4F60\u7684 <code>node_modules</code> \u4E2D\u7684\u6240\u6709JS\u63A8\u65AD\u7C7B\u578B\uFF0C\u5219\u4F7F\u7528\u5B83\u3002</p><p>\u7406\u60F3\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u5E94\u8BE5\u4FDD\u6301\u4E3A <code>0</code>\uFF08\u9ED8\u8BA4\u503C\uFF09\uFF0C\u5E76\u4E14\u5E94\u8BE5\u4F7F\u7528 <code>d.ts</code> \u6587\u4EF6\u6765\u660E\u786E\u5B9A\u4E49\u6A21\u5757\u7684\u5F62\u72B6\u3002\u7136\u800C\uFF0C\u4F60\u53EF\u80FD\u4E3A\u4E86\u901F\u5EA6\u548C\u53EF\u80FD\u7684\u7CBE\u786E\u6027\u5F00\u542F\u8FD9\u4E2A\u914D\u7F6E\u3002</p><p>\u539F\u5730\u5740\uFF1A</p><ul><li><a href="https://www.typescriptlang.org/tsconfig#JavaScript_Support_6247" target="_blank" rel="noopener noreferrer">JavaScript Support</a></li></ul><p>2022\u5E7408\u670819\u65E521:38:43</p>`,28),e=[o];function c(t,r,i,D,y,F){return l(),a("div",null,e)}var A=s(p,[["render",c]]);export{C as __pageData,A as default};