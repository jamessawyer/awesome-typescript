import{_ as s,c as a,o as n,b as o}from"./app.660e8875.js";const u=JSON.parse('{"title":"Publishing","description":"","frontmatter":{"title":"Publishing"},"headers":[{"level":2,"title":"1\uFE0F\u20E3 \u5728\u4F60\u7684npm\u5305\u4E2D\u5305\u542B\u58F0\u660E","slug":"_1\uFE0F\u20E3-\u5728\u4F60\u7684npm\u5305\u4E2D\u5305\u542B\u58F0\u660E"},{"level":2,"title":"2\uFE0F\u20E3 \u4F9D\u8D56","slug":"_2\uFE0F\u20E3-\u4F9D\u8D56"},{"level":2,"title":"3\uFE0F\u20E3 Red flags","slug":"_3\uFE0F\u20E3-red-flags"},{"level":3,"title":"\u5305\u4F9D\u8D56\u58F0\u660E","slug":"\u5305\u4F9D\u8D56\u58F0\u660E"},{"level":2,"title":"4\uFE0F\u20E3 \u4F7F\u7528 typesVersion \u8FDB\u884C\u7248\u672C\u9009\u62E9","slug":"_4\uFE0F\u20E3-\u4F7F\u7528-typesversion-\u8FDB\u884C\u7248\u672C\u9009\u62E9"},{"level":3,"title":"4.1 \u6587\u4EF6\u4EF6\u91CD\u5B9A\u5411\uFF08\u4F7F\u7528 *\uFF09","slug":"_4-1-\u6587\u4EF6\u4EF6\u91CD\u5B9A\u5411\uFF08\u4F7F\u7528-\uFF09"},{"level":3,"title":"4.2 \u6587\u4EF6\u91CD\u5B9A\u5411","slug":"_4-2-\u6587\u4EF6\u91CD\u5B9A\u5411"},{"level":2,"title":"5\uFE0F\u20E3 \u5339\u914D\u884C\u4E3A","slug":"_5\uFE0F\u20E3-\u5339\u914D\u884C\u4E3A"},{"level":2,"title":"6\uFE0F\u20E3 \u591A\u4E2A\u5B57\u6BB5","slug":"_6\uFE0F\u20E3-\u591A\u4E2A\u5B57\u6BB5"},{"level":2,"title":"7\uFE0F\u20E3 \u53D1\u5E03\u5230 @types","slug":"_7\uFE0F\u20E3-\u53D1\u5E03\u5230-types"}],"relativePath":"ts/dfile/publishing.md","lastUpdated":1662303402000}'),l={name:"ts/dfile/publishing.md"},p=o(`<nav class="table-of-contents"><ul><li><a href="#_1\uFE0F\u20E3-\u5728\u4F60\u7684npm\u5305\u4E2D\u5305\u542B\u58F0\u660E">1\uFE0F\u20E3 \u5728\u4F60\u7684npm\u5305\u4E2D\u5305\u542B\u58F0\u660E</a></li><li><a href="#_2\uFE0F\u20E3-\u4F9D\u8D56">2\uFE0F\u20E3 \u4F9D\u8D56</a></li><li><a href="#_3\uFE0F\u20E3-red-flags">3\uFE0F\u20E3 Red flags</a><ul><li><a href="#\u5305\u4F9D\u8D56\u58F0\u660E">\u5305\u4F9D\u8D56\u58F0\u660E</a></li></ul></li><li><a href="#_4\uFE0F\u20E3-\u4F7F\u7528-typesversion-\u8FDB\u884C\u7248\u672C\u9009\u62E9">4\uFE0F\u20E3 \u4F7F\u7528 typesVersion \u8FDB\u884C\u7248\u672C\u9009\u62E9</a><ul><li><a href="#_4-1-\u6587\u4EF6\u4EF6\u91CD\u5B9A\u5411\uFF08\u4F7F\u7528-\uFF09">4.1 \u6587\u4EF6\u4EF6\u91CD\u5B9A\u5411\uFF08\u4F7F\u7528 *\uFF09</a></li><li><a href="#_4-2-\u6587\u4EF6\u91CD\u5B9A\u5411">4.2 \u6587\u4EF6\u91CD\u5B9A\u5411</a></li></ul></li><li><a href="#_5\uFE0F\u20E3-\u5339\u914D\u884C\u4E3A">5\uFE0F\u20E3 \u5339\u914D\u884C\u4E3A</a></li><li><a href="#_6\uFE0F\u20E3-\u591A\u4E2A\u5B57\u6BB5">6\uFE0F\u20E3 \u591A\u4E2A\u5B57\u6BB5</a></li><li><a href="#_7\uFE0F\u20E3-\u53D1\u5E03\u5230-types">7\uFE0F\u20E3 \u53D1\u5E03\u5230 @types</a></li></ul></nav><p>\u5047\u8BBE\u4F60\u6309\u7167\u6307\u5357\u5DF2\u7ECF\u5199\u4E86\u4E00\u4E2A\u58F0\u660E\u6587\u4EF6\uFF0C\u73B0\u5728\u8BE5\u5C06\u5B83\u53D1\u5E03\u5230npm\u4E0A\u4E86\u3002\u4E3B\u8981\u67092\u79CD\u5C06\u58F0\u660E\u6587\u4EF6\u53D1\u5E03\u5230npm\u7684\u65B9\u5F0F\uFF1A</p><ol><li>\u6253\u5305\u4F60\u7684npm\u5305</li><li>\u53D1\u5E03\u5230npm\u4E0A\u7684 <a href="https://www.npmjs.com/~types" target="_blank" rel="noopener noreferrer">@types \u7EC4\u7EC7</a></li></ol><p>\u5982\u679C\u4F60\u7684\u7C7B\u578B\u662F\u901A\u8FC7\u4F60\u7684\u6E90\u4EE3\u7801\u751F\u6210\u7684\uFF0C\u53D1\u5E03\u6E90\u4EE3\u7801+\u7C7B\u578B\u3002TypeScript\u548CJavaScript\u9879\u76EE\u90FD\u80FD\u901A\u8FC7 <a href="./../tsconfig/compiler/emit.html#declaration-\u{1F44D}">declaration</a> \u7F16\u8BD1\u9009\u9879\u751F\u6210\u7C7B\u578B\u{1F60E}\u3002</p><p>\u5426\u5219\uFF0C\u6211\u4EEC\u63A8\u8350\u5C06\u7C7B\u578B\u63D0\u4EA4\u5230 <code>DefinitelyTyped</code>\uFF0C\u5B83\u4F1A\u5C06\u7C7B\u578B\u53D1\u5E03\u5230npm\u4E0A\u7684 <code>@types</code> \u7EC4\u7EC7\u3002</p><h2 id="_1\uFE0F\u20E3-\u5728\u4F60\u7684npm\u5305\u4E2D\u5305\u542B\u58F0\u660E" tabindex="-1">1\uFE0F\u20E3 \u5728\u4F60\u7684npm\u5305\u4E2D\u5305\u542B\u58F0\u660E <a class="header-anchor" href="#_1\uFE0F\u20E3-\u5728\u4F60\u7684npm\u5305\u4E2D\u5305\u542B\u58F0\u660E" aria-hidden="true">#</a></h2><p>\u5982\u679C\u4F60\u7684\u5305\u90AE\u4E00\u4E2A\u4E3B\u5165\u53E3 <code>.js</code> \u6587\u4EF6\uFF0C\u5219\u4F60\u9700\u8981\u518D <code>package.json</code> \u4E2D\u4E5F\u77E5\u540D\u4E3B\u8981\u7684\u58F0\u660E\u6587\u4EF6\u3002\u{1F4DA} \u8BBE\u7F6E <code>types</code> \u5C5E\u6027\u6307\u5411\u6253\u5305\u597D\u7684\u58F0\u660E\u6587\u4EF6\u3002\u6BD4\u5982\uFF1A</p><div class="language-json"><span class="copy"></span><div class="highlight-lines"><br><br><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br></div><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">awesome</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">author</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Vandelay Industries</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.0.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">main</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./lib/main.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u5305\u7684\u4E3B\u5165\u53E3\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">types</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./lib/main.d.ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u58F0\u660E\u6587\u4EF6\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u6CE8\u610F <code>typings</code> \u5B57\u6BB5\u548C <code>types</code> \u540C\u4E49\uFF0C\u56E0\u6B64\u4E5F\u53EF\u4EE5\u4F7F\u7528 <code>typings</code>\u3002</p><p>\u53E6\u5916\uFF0C\u5982\u679C\u4F60\u7684\u4E3B\u8981\u58F0\u660E\u6587\u4EF6\u53EB <code>index.d.ts</code>\uFF0C\u5E76\u5B58\u653E\u5728\u5305\u7684\u6839\u76EE\u5F55\uFF08\u7D27\u9760\u7740 <code>index.js</code>\uFF09\u5219\u4F60\u4E0D\u9700\u8981\u6807\u8BB0 <code>types</code> \u5C5E\u6027\uFF0C\u4F46\u8FD8\u662F\u5EFA\u8BAE\u663E\u5F0F\u7684\u6807\u51FA\u58F0\u660E\u6587\u4EF6\u8DEF\u5F84\u3002</p></div><h2 id="_2\uFE0F\u20E3-\u4F9D\u8D56" tabindex="-1">2\uFE0F\u20E3 \u4F9D\u8D56 <a class="header-anchor" href="#_2\uFE0F\u20E3-\u4F9D\u8D56" aria-hidden="true">#</a></h2><p>\u{1F4DA}\u6240\u6709\u7684\u4F9D\u8D56\u90FD\u901A\u8FC7npm\u7BA1\u7406\u3002\u786E\u4FDD\u4F60\u6240\u4F9D\u8D56\u7684\u6240\u6709 <code>\u58F0\u660E\u5305</code> \u90FD\u5728 <code>package.json</code> \u7684 <code>dependencies</code> \u4E2D\u5408\u9002\u7684\u6807\u8BB0\u51FA\u6765\u3002</p><p>\u{1F330}\uFF0C\u5047\u8BBE\u4F60\u5199\u4E86\u4E00\u4E2A\u5305\uFF0C\u4F9D\u8D56<code>Browserify</code> \u548C <code>TypeScript</code>:</p><div class="language-json"><span class="copy"></span><div class="highlight-lines"><br><br><br><br><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br></div><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">browserify-typescript-extension</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">author</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Vandelay Industries</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.0.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">main</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./lib/main.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">types</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./lib/main.d.ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">dependencies</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">browserify</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">latest</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">@types/browserify</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">latest</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">typescript</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">next</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u{1F929} \u8FD9\u91CC\u6211\u4EEC\u7684\u5305\u4F9D\u8D56 <code>browserify</code> &amp; <code>typescript</code>\u5305\u3002<code>browserify</code> \u672C\u8EAB\u6CA1\u6709\u5C06\u5B83\u7684\u58F0\u660E\u6587\u4EF6\u548C\u5305\u6253\u5305\u5728\u4E00\u8D77\uFF0C\u56E0\u6B64\u6211\u4EEC\u9700\u8981\u4F9D\u8D56 <code>@types/browserify</code> \u4F5C\u4E3A\u5B83\u7684\u58F0\u660E\u3002<code>typescript</code> \u5305\u5219\u672C\u8EAB\u5C31\u5305\u542B\u4E86\u58F0\u660E\u6587\u4EF6\uFF0C\u56E0\u6B64\u4E0D\u9700\u8981\u989D\u5916\u7684\u4F9D\u8D56\u4E86\u3002</p><p>\u6211\u4EEC\u7684\u5305\u516C\u5F00\u4E86\u5176\u4E2D\u6BCF\u4E00\u4E2A\u7684\u58F0\u660E\uFF0C\u56E0\u6B64\u4EFB\u4F55\u4F7F\u7528<code>browserify-typescript-extension</code>\u5305\u7684\u7528\u6237\u4E5F\u9700\u8981\u6709\u8FD9\u4E9B\u4F9D\u8D56\u9879\u{1F605}\u3002\u57FA\u4E8E\u8FD9\u4E2A\u539F\u56E0\uFF0C\u6211\u4EEC\u4F7F\u7528 <code>&quot;dependencies&quot;</code> \u800C\u4E0D\u662F <code>&quot;devDependencies&quot;</code>\uFF0C \u5426\u5219\u6211\u4EEC\u7684\u7528\u6237\u9700\u8981\u624B\u52A8\u7684\u4E0B\u8F7D\u5B89\u88C5\u8FD9\u4E9B\u5305\u3002\u5982\u679C\u6211\u4EEC\u4EC5\u4EC5\u662F\u5199\u4E00\u4E2ACLI\u5E94\u7528\uFF0C\u800C\u4E0D\u671F\u671B\u6211\u4EEC\u7684\u5305\u7528\u4F5C\u4E3A\u4E00\u4E2A\u5E93\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F7F\u7528 <code>devDependencies</code>\u3002</p><h2 id="_3\uFE0F\u20E3-red-flags" tabindex="-1">3\uFE0F\u20E3 Red flags <a class="header-anchor" href="#_3\uFE0F\u20E3-red-flags" aria-hidden="true">#</a></h2><p>\u274C <code>\u4E0D\u8981</code> \u5728\u4F60\u7684\u58F0\u660E\u6587\u4EF6\u4E2D\u4F7F\u7528 <code>/// &lt;reference path=&quot;...&quot; /&gt;</code></p><div class="language-typescript"><span class="copy"></span><div class="highlight-lines"><div class="highlighted">\xA0</div><br><br></div><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">/// </span><span style="color:#89DDFF;font-style:italic;">&lt;</span><span style="color:#F07178;font-style:italic;">reference</span><span style="color:#89DDFF;font-style:italic;"> </span><span style="color:#C792EA;font-style:italic;">path</span><span style="color:#89DDFF;font-style:italic;">=</span><span style="color:#89DDFF;font-style:italic;">&quot;</span><span style="color:#C3E88D;font-style:italic;">../typescript/lib/typescriptServices.d.ts</span><span style="color:#89DDFF;font-style:italic;">&quot;</span><span style="color:#89DDFF;font-style:italic;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">....</span></span>
<span class="line"></span></code></pre></div><p>\u2705 <code>\u8981</code> \u4F7F\u7528 <code>/// &lt;reference types=&quot;...&quot; /&gt;</code>:</p><div class="language-typescript"><span class="copy"></span><div class="highlight-lines"><div class="highlighted">\xA0</div><br><br></div><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">/// </span><span style="color:#89DDFF;font-style:italic;">&lt;</span><span style="color:#F07178;font-style:italic;">reference</span><span style="color:#89DDFF;font-style:italic;"> </span><span style="color:#C792EA;font-style:italic;">types</span><span style="color:#89DDFF;font-style:italic;">=</span><span style="color:#89DDFF;font-style:italic;">&quot;</span><span style="color:#C3E88D;font-style:italic;">typescript</span><span style="color:#89DDFF;font-style:italic;">&quot;</span><span style="color:#89DDFF;font-style:italic;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">....</span></span>
<span class="line"></span></code></pre></div><p>\u786E\u4FDD\u5728\u56DE\u987E\u4E00\u4E0B <a href="./library-structure.html#_6\uFE0F\u20E3-\u6D88\u8D39\u4F9D\u8D56">Cousuming dependencies</a> \u4E86\u89E3\u66F4\u591A\u3002</p><h3 id="\u5305\u4F9D\u8D56\u58F0\u660E" tabindex="-1">\u5305\u4F9D\u8D56\u58F0\u660E <a class="header-anchor" href="#\u5305\u4F9D\u8D56\u58F0\u660E" aria-hidden="true">#</a></h3><p>\u5982\u679C\u4F60\u7684\u7C7B\u578B\u5B9A\u4E49\u4F9D\u8D56\u53E6\u4E00\u4E2A\u5305\uFF1A</p><ul><li>\u274C <code>\u4E0D\u8981</code> \u5C06\u5B83\u548C\u4F60\u7684\u7C7B\u578B\u5B9A\u4E49\u5408\u5E76\uFF0C\u4FDD\u6301\u5B83\u4EEC\u5728\u5404\u81EA\u6587\u4EF6\u4E2D</li><li>\u274C <code>\u4E0D\u8981</code> \u5C06\u58F0\u660E\u62F7\u8D1D\u5230\u4F60\u7684\u7684\u5305\u4E2D</li><li>\u2705 \u5982\u679Cnpm\u7C7B\u578B\u58F0\u660E\u5305\u6CA1\u6709\u6253\u5305\u5B83\u7684\u58F0\u660E\u6587\u4EF6\uFF0C\u5219\u5FC5\u987B\u4F9D\u8D56npm\u7C7B\u578B\u58F0\u660E\u5305</li></ul><h2 id="_4\uFE0F\u20E3-\u4F7F\u7528-typesversion-\u8FDB\u884C\u7248\u672C\u9009\u62E9" tabindex="-1">4\uFE0F\u20E3 \u4F7F\u7528 <code>typesVersion</code> \u8FDB\u884C\u7248\u672C\u9009\u62E9 <a class="header-anchor" href="#_4\uFE0F\u20E3-\u4F7F\u7528-typesversion-\u8FDB\u884C\u7248\u672C\u9009\u62E9" aria-hidden="true">#</a></h2><p>\u5F53TypeScript\u6253\u5F00 <code>package.json</code> \u6587\u4EF6\u7406\u6E05\u5B83\u9700\u8981\u8BFB\u53D6\u90A3\u4E2A\u6587\u4EF6\u65F6\uFF0C\u5B83\u9996\u5148\u67E5\u770B <code>typesVersions</code> \u5B57\u6BB5\u3002</p><h3 id="_4-1-\u6587\u4EF6\u4EF6\u91CD\u5B9A\u5411\uFF08\u4F7F\u7528-\uFF09" tabindex="-1">4.1 \u6587\u4EF6\u4EF6\u91CD\u5B9A\u5411\uFF08\u4F7F\u7528 <code>*</code>\uFF09 <a class="header-anchor" href="#_4-1-\u6587\u4EF6\u4EF6\u91CD\u5B9A\u5411\uFF08\u4F7F\u7528-\uFF09" aria-hidden="true">#</a></h3><p>\u5305\u542B <code>typesVersions</code> \u7684 <code>package.json</code> \u6587\u4EF6\u53EF\u80FD\u770B\u8D77\u6765\u5982\u4E0B\uFF1A</p><div class="language-json"><span class="copy"></span><div class="highlight-lines"><br><br><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br></div><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">package-name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.0.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">types</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./index.d.ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">typesVersions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">&gt;=3.1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts3.1/*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u{1F4DA}\u8FD9\u4E2A <code>package.json</code> \u544A\u8BC9TypeScript\u9996\u5148\u68C0\u6D4B\u5F53\u524DTypeScript\u7248\u672C\u3002\u5982\u679C\u5B83\u662F <code>3.1+</code>\uFF0CTypeScript\u4F1A\u627E\u51FA\u76F8\u5BF9\u4F60\u5305\u7684\u5BFC\u5165\u8DEF\u5F84\uFF0C\u7136\u540E\u4ECE\u5305\u7684 <code>ts3.1</code> \u6587\u4EF6\u5939\u4E2D\u8BFB\u53D6\u3002</p><p>\u8FD9\u6B63\u662F <code>{&quot;*&quot;: [&quot;ts3.1/*&quot;]}</code> \u7684\u542B\u4E49 - \u5982\u679C\u4F60\u719F\u6089 <a href="./../tsconfig/compiler/modules.html#paths-\u{1F44D}">path\u6620\u5C04</a>\uFF0C\u5B83\u5DE5\u4F5C\u539F\u7406\u7C7B\u4F3C\u3002</p><p>\u4E0A\u9762\u4F8B\u5B50\uFF0C\u5982\u679C\u4F60\u4ECE <code>&quot;package-name&quot;</code> \u5BFC\u5165\uFF0C\u5F53\u8FD0\u884CTS3.1\u65F6\uFF0CTypeScript\u5C06\u4ECE <code>[...]/node_modules/package-name/ts3.1/index.d.ts</code> \uFF08\u548C\u5176\u5B83\u76F8\u5BF9\u8DEF\u5F84\uFF09\u89E3\u6790\u3002\u5982\u679C\u4ECE <code>package-name/foo</code> \u5BFC\u5165\uFF0C\u6211\u4EEC\u5C06\u67E5\u627E <code>[...]/node_modules/package-name/ts3.1/foo.d.ts</code> \u548C <code>[...]/node_modules/package-name/ts3.1/foo/index.d.ts</code> \u6587\u4EF6\u3002</p><p>\u52A0\u5165\u4F60\u6CA1\u6709\u8FD0\u884CTS3.1\u5462\uFF1F\u5982\u679C\u6CA1\u6709\u5339\u914D\u4E0A <code>typesVersions</code>\uFF0CTypeScript\u5C06\u518D\u56DE\u9000\u5230 <code>types</code> \u5B57\u6BB5\uFF0C\u56E0\u6B64<code>TS3.0</code>\u53CA\u4EE5\u4E0B\u7248\u672C\u5C06\u91CD\u5B9A\u5411\u5230 <code>[...]/node_modules/package-name/index.d.ts</code> \u6587\u4EF6\u3002</p><h3 id="_4-2-\u6587\u4EF6\u91CD\u5B9A\u5411" tabindex="-1">4.2 \u6587\u4EF6\u91CD\u5B9A\u5411 <a class="header-anchor" href="#_4-2-\u6587\u4EF6\u91CD\u5B9A\u5411" aria-hidden="true">#</a></h3><p>\u5F53\u4F60\u53EA\u60F3\u5BF9\u6539\u53D8\u67D0\u4E2A\u6587\u4EF6\u65F6\uFF0C\u4F60\u53EF\u4EE5\u544A\u8BC9TypeScript\u8981\u89E3\u6790\u7684\u6587\u4EF6\u4E0D\u540C\u4E8E\u4F20\u5165\u7684\u786E\u5207\u6587\u4EF6\u540D\uFF1A</p><div class="language-typescript"><span class="copy"></span><div class="highlight-lines"><br><br><br><br><br><div class="highlighted">\xA0</div><br><br><br></div><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">package-name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.0.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">types</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./index.d.ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">typesVersions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">&lt;4.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">index.d.ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">index.v3.d.ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u5BF9<code>TS4.0+</code>\uFF0C\u5BFC\u5165 <code>&quot;package-name&quot;</code> \u5C06\u89E3\u6790\u4E3A <code>./index.d.ts</code>\uFF0C\u5BF9 <code>TS3.9-</code> \u5C06\u89E3\u6790\u4E3A <code>&quot;./index.v3.d.ts&quot;</code>\u3002</p><h2 id="_5\uFE0F\u20E3-\u5339\u914D\u884C\u4E3A" tabindex="-1">5\uFE0F\u20E3 \u5339\u914D\u884C\u4E3A <a class="header-anchor" href="#_5\uFE0F\u20E3-\u5339\u914D\u884C\u4E3A" aria-hidden="true">#</a></h2><p>TypeScript\u51B3\u5B9A\u7F16\u8BD1\u5668\u548C\u8BED\u8A00\u7248\u672C\u662F\u5426\u5339\u914D\u7684\u65B9\u6CD5\u662F\u4F7F\u7528Node\u7684<a href="https://github.com/npm/node-semver#ranges" target="_blank" rel="noopener noreferrer">semver ranges</a>\u3002</p><h2 id="_6\uFE0F\u20E3-\u591A\u4E2A\u5B57\u6BB5" tabindex="-1">6\uFE0F\u20E3 \u591A\u4E2A\u5B57\u6BB5 <a class="header-anchor" href="#_6\uFE0F\u20E3-\u591A\u4E2A\u5B57\u6BB5" aria-hidden="true">#</a></h2><p>\u{1F4DA} <code>typesVersions</code> \u652F\u6301\u591A\u4E2A\u5B57\u6BB5\uFF0C\u6BCF\u4E2A\u5B57\u6BB5\u540D\u6307\u5B9A\u4E00\u4E2A\u5339\u914D\u533A\u95F4\uFF1A</p><div class="language-typescript"><span class="copy"></span><div class="highlight-lines"><br><br><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br></div><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">package-name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.0.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">types</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./index.d.ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">typesVersion</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">&gt;=3.2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts3.2/*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">&gt;=3.1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts3.1/*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u56E0\u4E3A\u8303\u56F4\u53EF\u80FD\u91CD\u53E0\uFF0C\u51B3\u5B9A\u5BFC\u5165\u90A3\u4E2A\u6587\u4EF6<code>\u548C\u6307\u5B9A\u7684\u987A\u5E8F\u6709\u5173</code>\u3002\u8FD9\u610F\u5473\u7740\uFF0C\u4E0A\u9762\u7684\u4F8B\u5B50\uFF0C\u5373\u4F7F <code>&gt;=3.2</code> \u548C <code>&gt;=3.1</code> \u540C\u65F6\u5339\u914D\u652F\u6301TS3.2\u548C\u4EE5\u4E0A\uFF0C<code>\u53CD\u8F6C\u987A\u5E8F\u4F1A\u5BFC\u81F4\u4E0D\u540C\u7684\u884C\u4E3A</code>\u{1F605}\u3002\u56E0\u6B64\u4E0A\u9762\u7684\u4F8B\u5B50\u4E0D\u7B49\u4EF7\u4E8E\uFF1A</p><div class="language-json"><span class="copy"></span><div class="highlight-lines"><br><br><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br></div><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">package-name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.0.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">types</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./index.d.ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">typesVersion</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// \u{1F6A8} \u8FD9\u4E0D\u80FD\u6B63\u5E38\u5DE5\u4F5C\uFF01\u987A\u5E8F\u5F88\u91CD\u8981\uFF01\uFF01\uFF01</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">&gt;=3.1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts3.1/*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">&gt;=3.2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts3.2/*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="_7\uFE0F\u20E3-\u53D1\u5E03\u5230-types" tabindex="-1">7\uFE0F\u20E3 \u53D1\u5E03\u5230 @types <a class="header-anchor" href="#_7\uFE0F\u20E3-\u53D1\u5E03\u5230-types" aria-hidden="true">#</a></h2><p>\u5728 <a href="https://www.npmjs.com/~types" target="_blank" rel="noopener noreferrer">@types</a>\u7EC4\u7EC7\u4E0B\u7684\u5305\u4F1A\u901A\u8FC7 <a href="https://github.com/microsoft/DefinitelyTyped-tools/tree/master/packages/publisher" target="_blank" rel="noopener noreferrer">types-publisher\u5DE5\u5177</a> \u81EA\u52A8\u4ECE <a href="https://github.com/DefinitelyTyped/DefinitelyTyped" target="_blank" rel="noopener noreferrer">DefinitelyTyped</a> \u53D1\u5E03\u3002\u4E3A\u4E86\u8BA9\u4F60\u7684\u58F0\u660E\u4F5C\u4E3A @types\u5305\u88AB\u53D1\u5E03\uFF0C\u8BF7\u5411 <a href="https://github.com/DefinitelyTyped/DefinitelyTyped" target="_blank" rel="noopener noreferrer">DefinitelyTyped</a> \u63D0\u4F9B\u4E00\u4E2APR.</p><p>\u539F\u6587\u6863\uFF1A</p><ul><li><a href="https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html" target="_blank" rel="noopener noreferrer">Publishing</a></li></ul><p>2022\u5E7409\u670804\u65E517:35:57</p>`,49),e=[p];function t(c,r,D,F,y,i){return n(),a("div",null,e)}var h=s(l,[["render",t]]);export{u as __pageData,h as default};
