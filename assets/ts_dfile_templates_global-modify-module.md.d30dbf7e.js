import{_ as s,c as n,o as a,N as l}from"./chunks/framework.90b54eba.js";const A=JSON.parse('{"title":"Global Modify Module","description":"","frontmatter":{"title":"Global Modify Module"},"headers":[],"relativePath":"ts/dfile/templates/global-modify-module.md","lastUpdated":1678937517000}'),p={name:"ts/dfile/templates/global-modify-module.md"},o=l(`<nav class="table-of-contents"><ul><li><a href="#全局修改模块">全局修改模块</a></li><li><a href="#识别全局修改模块">识别全局修改模块</a></li></ul></nav><h2 id="全局修改模块" tabindex="-1">全局修改模块 <a class="header-anchor" href="#全局修改模块" aria-label="Permalink to &quot;全局修改模块&quot;">​</a></h2><p><code>全局修改模块（global-modifying modules）在导入时修改全局作用域中的现有值。</code> 比如，可能存在一个模块在导入时给 <code>String.prototype</code> 添加新的成员。这种模式可能很危险，可能导致运行时冲突😅，但是我们仍可给它写一个声明文件。</p><h2 id="识别全局修改模块" tabindex="-1">识别全局修改模块 <a class="header-anchor" href="#识别全局修改模块" aria-label="Permalink to &quot;识别全局修改模块&quot;">​</a></h2><p>全局修改模块一般很容易从它的文档中进行识别。通常，它们类似于全局插件，但是需要 <code>require</code> 调用激活它们的效果。</p><p>你可能看到它们的文档是这样的：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line highlighted"><span style="color:#676E95;font-style:italic;">// &#39;require&#39; 调用，但不使用其返回值😅</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> unused </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">magic-string-time</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 或者</span></span>
<span class="line"><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">magic-string-time</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello, world</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line highlighted"><span style="color:#676E95;font-style:italic;">// 对内置类型创建一个新的方法</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(x</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">startsWithHello</span><span style="color:#A6ACCD;">())</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> y </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">]</span></span>
<span class="line highlighted"><span style="color:#676E95;font-style:italic;">// 对内置类型创建一个新的方法</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(y</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reverseAndSort</span><span style="color:#A6ACCD;">())</span></span>
<span class="line"></span></code></pre></div><p>下面是一个例子：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 对 [~THE LIBRARY NAME~] [~可选版本号~] 的类型定义</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Project: [~项目名~]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Definitions by: [~你的名字~] &lt;[~URL FOR YOU~]</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#676E95;font-style:italic;">/*~ 💡这是一个针对『全局修改』模块的模板文件. 你应该将它重命名为 index.d.ts</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *~ 并将它放在和模块同名的文件夹中</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *~ 例如, 如果你正在给 &quot;super-greeter&quot; 文件写类型声明</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *~ 则该文件应该是 &#39;super-greeter/index.d.ts&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#676E95;font-style:italic;">/*~ 🚨：如果你的全局修改模块时可调用或可构造的,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *~ 你将需要结合 类模块或函数模块模板 中的模式😎</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> global </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/*~ 这里，声明在全局命名空间中的类型或存在于已有声明中的参数</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">String</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    fancyFormat</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">opts</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">StringFormatOptions</span><span style="color:#89DDFF;">):</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#676E95;font-style:italic;">/*~ 如果你的模块导出类型或值，就正常在此书写即可 */</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">StringFormatOptions</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">fancinessLevel</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#676E95;font-style:italic;">/*~ 例如，在模块上声明一个方法(以及它的全局副作用) */</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">doSomething</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#676E95;font-style:italic;">/*~ 🚨🚨如果你的模块没有导出任何内容，你将需要这一行。否则,删除它 */</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{};</span></span>
<span class="line"></span></code></pre></div><p>原文档：</p><ul><li><a href="https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-modifying-module-d-ts.html" target="_blank" rel="noreferrer">Global: Modifying Module</a></li></ul><p>2022年09月03日13:45:27</p>`,12),e=[o];function t(c,r,i,y,F,D){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};
