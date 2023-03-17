import{_ as s,c as n,o as a,N as l}from"./chunks/framework.90b54eba.js";const A=JSON.parse('{"title":"全局d.ts","description":"","frontmatter":{"title":"全局d.ts"},"headers":[],"relativePath":"ts/dfile/templates/global-d-ts.md","lastUpdated":1679023713000}'),p={name:"ts/dfile/templates/global-d-ts.md"},o=l(`<nav class="table-of-contents"><ul><li><a href="#全局库">全局库</a></li><li><a href="#依据代码识别全局库">依据代码识别全局库</a></li><li><a href="#全局库示例">全局库示例</a></li><li><a href="#⭐-全局库模板">⭐ 全局库模板</a></li></ul></nav><h2 id="全局库" tabindex="-1">全局库 <a class="header-anchor" href="#全局库" aria-label="Permalink to &quot;全局库&quot;">​</a></h2><p><code>全局库是指在全局作用域能被访问的库</code>（比如，不使用任何形式的 <code>import</code>）。很多库简单的暴露一个或多个全局变量以供使用。比如，如果你用过 <a href="https://jquery.com/" target="_blank" rel="noreferrer">jQuery</a>，可以通过简单的引用 <code>$</code> 来使用jQuery：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">$</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>你经常在全局库的文档指南中看到如何通过script标签的方式使用它：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://a.great.cdn.for/someLib.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>现在，很多流行的全局访问库实际上以UMD库的形式书写。很难将UMD文档和全局库文档进行区分。在书写全局声明文件前，请确认该库不是UMD书写的😅。</p></div><h2 id="依据代码识别全局库" tabindex="-1">依据代码识别全局库 <a class="header-anchor" href="#依据代码识别全局库" aria-label="Permalink to &quot;依据代码识别全局库&quot;">​</a></h2><p>全局库代码通常十分简单。全局 <code>Hello World</code> 库可能看起来像这样：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createGreeting</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">s</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">s</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>或者这样：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createGreeting</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">s</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">s</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>当查看全局库代码时，你通常可以看到：</p><ul><li>顶层的 <code>var</code> 语句或者 <code>function</code> 声明</li><li>一个或多个 <code>window.someName</code> 赋值</li><li>假设 <code>document</code> | <code>window</code> 这样的基础DOM的存在</li></ul><p>而看不到：</p><ul><li>检测或者使用 <code>require</code> | <code>define</code> 这样的模块loaders</li><li>CommonJS/Node.js 风格形式的导入：<code>var fs = require(&#39;fs&#39;)</code></li><li>调用 <code>define(...)</code></li><li>文档中描述如何通过 <code>require</code> 或其它形式导入该库</li></ul><h2 id="全局库示例" tabindex="-1">全局库示例 <a class="header-anchor" href="#全局库示例" aria-label="Permalink to &quot;全局库示例&quot;">​</a></h2><p>因为很容易将一个全局库转变为UMD库，现在已经很少有比较流行的库通过全局的方式进行书写了😅。然而，一些小的库，并且需要DOM（或没依赖）的库，可能仍旧是全局的形式。</p><h2 id="⭐-全局库模板" tabindex="-1">⭐ 全局库模板 <a class="header-anchor" href="#⭐-全局库模板" aria-label="Permalink to &quot;⭐ 全局库模板&quot;">​</a></h2><p>你可以看到DTS示例：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 对 [~THE LIBRARY NAME~] [~可选版本号~] 的类型定义</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Project: [~项目名~]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Definitions by: [~你的名字~] &lt;[~URL FOR YOU~]</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#676E95;font-style:italic;">/*~ 📚 如果这个库时可调用的 (e.g. 通过 myLib(3) 形式调用),</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *~ 在此包含调用签名</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *~ 否则，删除这一块</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">myLib</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">myLib</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#676E95;font-style:italic;">/*~ 😎 如果你想这个库的类型是一个有效的类型名</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *~ 你可以在此做</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *~</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *~ 比如，这允许我们这样写 &#39;var x: myLib&#39;;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *~ 请确认这样有意义!</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *~ 如果没有，请删除这个声明，然后再下面的namespace中添加类型</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">myLib</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">extras</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#676E95;font-style:italic;">/*~ 如果你的库有暴露在全局上的属性</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *~ 将它们放在这里</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *~ 你也应该将类型（接口 &amp; 类型别名）放在这里</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">myLib</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//~ 我们可以写 &#39;myLib.timeout = 50&#39;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">timeout</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//~ 我们可以访问 &#39;myLib.version&#39;，但是不能改变它</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">version</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//~ 我们可以通过 &#39;let c = new myLib.Cat(42)&#39; 创建类</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//~ 或者引用 e.g. &#39;function f(c: myLib.Cat) { ... }</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">class</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Cat</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">n</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//~ 我们可以从 \`Cat\` 实例上读取 \`c.age\`</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">readonly</span><span style="color:#F07178;"> age</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//~ 我们可以从 \`Cat\` 实例上调用 &#39;c.purr()&#39;</span></span>
<span class="line"><span style="color:#F07178;">    purr</span><span style="color:#89DDFF;">():</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//~ 我们可以声明一个变量</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//~   &#39;var s: myLib.CatSettings = { weight: 5, name: &quot;Maru&quot; };&#39;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">CatSettings</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    weight</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    tailLength</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//~ 我们可以写 &#39;const v: myLib.VetID = 42;&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//~  或者 &#39;const v: myLib.VetID = &quot;bob&quot;;&#39;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">type</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">VetID</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//~ 我们可以调用 &#39;myLib.checkCat(c)&#39; or &#39;myLib.checkCat(c, v);&#39;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">checkCat</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">c</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Cat</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">s</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">VetID</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>原文档：</p><ul><li><a href="https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-d-ts.html" target="_blank" rel="noreferrer">Global .d.ts</a></li></ul><p>2022年09月03日13:28:47</p>`,24),e=[o];function t(c,r,y,i,F,D){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};