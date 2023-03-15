import{_ as s,c as a,o as l,N as n}from"./chunks/framework.4bc264fe.js";const C=JSON.parse('{"title":"库结构","description":"","frontmatter":{"title":"库结构"},"headers":[],"relativePath":"ts/dfile/library-structure.md","lastUpdated":1678861490000}'),o={name:"ts/dfile/library-structure.md"},e=n(`<nav class="table-of-contents"><ul><li><a href="#_1️⃣-识别库的类别-identifying-kinds-of-libraries">1️⃣ 识别库的类别（Identifying Kinds of Libraries）</a></li><li><a href="#_2️⃣-你应该看些什么-what-should-you-look-for">2️⃣ 你应该看些什么？（What should you look for?）</a></li><li><a href="#不同类型库的小的样例">不同类型库的小的样例</a></li><li><a href="#_3️⃣-模块化库-modular-libraries">3️⃣ 模块化库（Modular Libraries）</a><ul><li><a href="#🚀-从代码识别模块库">🚀 从代码识别模块库</a></li><li><a href="#🚀-模块模板">🚀 模块模板</a></li></ul></li><li><a href="#_4️⃣-全局库-global-libraries">4️⃣ 全局库（Global Libraries）</a><ul><li><a href="#从代码识别全局库">从代码识别全局库</a></li><li><a href="#全局库示例">全局库示例</a></li><li><a href="#全局库模板">全局库模板</a></li></ul></li><li><a href="#_5️⃣-umd">5️⃣ UMD</a><ul><li><a href="#识别umd库">识别UMD库</a></li><li><a href="#umd库例子">UMD库例子</a></li><li><a href="#模板">模板</a></li></ul></li><li><a href="#_6️⃣-消费依赖">6️⃣ 消费依赖</a><ul><li><a href="#🚀-依赖全局库">🚀 依赖全局库</a></li><li><a href="#依赖模块">依赖模块</a></li><li><a href="#依赖umd库">依赖UMD库</a></li></ul></li><li><a href="#_7️⃣-阻止名字冲突">7️⃣ 阻止名字冲突</a></li><li><a href="#_8️⃣-es6对模块调用签名的影响">8️⃣ ES6对模块调用签名的影响</a></li></ul></nav><p>广义上讲，你组织声明文件的方式取决于库被使用的方式。在JS中，库可以通过多种方式被使用，因此你需要依据你使用的方式来书写声明文件，以便与之匹配。本指南讲解如何识别常见库模式，以及各种模式该如何书写声明文件。</p><p>每种主要库结构模式类型在Templates部分中都有一个对应的文件。你可以使用这些模板帮助你快速开始。</p><h2 id="_1️⃣-识别库的类别-identifying-kinds-of-libraries" tabindex="-1">1️⃣ 识别库的类别（Identifying Kinds of Libraries） <a class="header-anchor" href="#_1️⃣-识别库的类别-identifying-kinds-of-libraries" aria-label="Permalink to &quot;1️⃣ 识别库的类别（Identifying Kinds of Libraries）&quot;">​</a></h2><p>首先，我们将回顾TypeScript声明文件可以表示的库的种类。我们将简要介绍如何<code>使用</code>每种类型的库，如何<code>编写</code>这些库，并列出一些来自现实世界的示例库。</p><p>识别一个库的结构是书写声明文件的第一步。我们将对如何依据库的<code>使用</code>和<code>代码</code>来识别库的结构给出提示。取决于库的文档和组织，有些文档可能比另一些文档要更简单，我们推荐最适合自己的。</p><h2 id="_2️⃣-你应该看些什么-what-should-you-look-for" tabindex="-1">2️⃣ 你应该看些什么？（What should you look for?） <a class="header-anchor" href="#_2️⃣-你应该看些什么-what-should-you-look-for" aria-label="Permalink to &quot;2️⃣ 你应该看些什么？（What should you look for?）&quot;">​</a></h2><p>当你在试图给一个库添加类型时问自己如下问题：</p><ol><li>你是如何获取该库的？ <ol><li>比如，你是通过npm还是CDN？</li></ol></li><li>你是如何导入该库的？ <ol><li>它是添加了一个全局对象？</li><li>使用了 <code>require</code> 还是 <code>import/export</code> 语句？</li></ol></li></ol><h2 id="不同类型库的小的样例" tabindex="-1">不同类型库的小的样例 <a class="header-anchor" href="#不同类型库的小的样例" aria-label="Permalink to &quot;不同类型库的小的样例&quot;">​</a></h2><h2 id="_3️⃣-模块化库-modular-libraries" tabindex="-1">3️⃣ 模块化库（Modular Libraries） <a class="header-anchor" href="#_3️⃣-模块化库-modular-libraries" aria-label="Permalink to &quot;3️⃣ 模块化库（Modular Libraries）&quot;">​</a></h2><p>几乎所有现代Node.js库都归于模块家族。这种类型的库只能通过模块加载器（<code>module loader</code>）工作在JS环境。比如，<code>express</code> 只能在Node.js中使用，并且必须通过CommonJS <code>require</code> 函数加载。</p><p>ECMAScript2015（或ES6），CommonJS和RequireJS对 <code>导入模块（import a module）</code> 都有相似的概念。🌰例如，在JS CommonJS（Node.js）可通过下面方式导入：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> fs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>在TypeScript或ES6，<code>import</code> 关键词达到相同的目的：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> fs </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fs</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><p>你通常会看到模块化库在它们的文档中包括这样一行：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> someLib </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(someLib)</span></span>
<span class="line"></span></code></pre></div><p>或者</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">define</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">...,</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">someLib</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">someLib</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>至于全局模块，你可以通过某个 <a href="https://www.typescriptlang.org/docs/handbook/declaration-files/library-structures.html#umd" target="_blank" rel="noreferrer">UMD模块</a> 文档看看它们的示例，请确认你看过这种模块的代码或文档。</p><h3 id="🚀-从代码识别模块库" tabindex="-1">🚀 从代码识别模块库 <a class="header-anchor" href="#🚀-从代码识别模块库" aria-label="Permalink to &quot;🚀 从代码识别模块库&quot;">​</a></h3><p>模块化库至少包含下面一些代码：</p><ul><li>无条件的调用 <code>require</code> 或 <code>define</code></li><li>存在 <code>import * as a from &#39;b&#39;</code> 或者 <code>export c</code> 这种声明</li><li>赋值给 <code>exports</code> 或 <code>module.exports</code></li></ul><p>有些比较少见的：</p><ul><li>赋值给 <code>window</code> 或 <code>global</code> 属性</li></ul><h3 id="🚀-模块模板" tabindex="-1">🚀 模块模板 <a class="header-anchor" href="#🚀-模块模板" aria-label="Permalink to &quot;🚀 模块模板&quot;">​</a></h3><p>模块存在4种模板：</p><ul><li><a href="./templates/modules-d-ts.html">module.d.ts</a></li><li><a href="./templates/modules-class.html">module-class.d.ts</a></li><li><a href="./templates/modules-function.html">module-function.d.ts</a></li><li><a href="./templates/modules-plugin.html">module-plugin.d.ts</a></li></ul><p>你将首先阅读 <a href="./templates/modules-d-ts.html">module.d.ts</a> 来了解它们的工作方式。</p><p>1️⃣ 如果你的模块可以像函数一样调用，则使用 <a href="./templates/modules-function.html">module-function.d.ts</a> 模块：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line highlighted"><span style="color:#676E95;font-style:italic;">// 🚨：作为函数调用 \`x\`</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> y </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">x</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">42</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>2️⃣ 如果你的模块可以通过 <code>new</code> 关键词进行构造，则使用 <a href="./templates/modules-class.html">module-class.d.ts</a>：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line highlighted"><span style="color:#676E95;font-style:italic;">// 🚨：使用 \`new\` 操作符调用导入的变量</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> y </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">x</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>3️⃣ 如果你有个模块，当它被导入时，对其它模块做出改变，则使用 <a href="./templates/modules-plugin.html">module-plugin.d.ts</a>：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> jest </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">jest</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line highlighted"><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">jest-matchers-files</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="_4️⃣-全局库-global-libraries" tabindex="-1">4️⃣ 全局库（Global Libraries） <a class="header-anchor" href="#_4️⃣-全局库-global-libraries" aria-label="Permalink to &quot;4️⃣ 全局库（Global Libraries）&quot;">​</a></h2><p>全局库是指可以在全局作用域被访问的库（<code>比如，不使用任何形式的 import</code>）。很多库简单的暴露一个或多个全局变量以供使用。比如，如果你使用jQuery，<code>$</code> 变量可以通过简单的引用它来使用：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">$</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>你通常会在一个全局库的文档中看到如何在HTML script标签中使用该库:</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://a.great.cdn.for/someLib.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>👩‍🏫 现在，很多流行的全局可访问库实际上通过UMD库的方式编写的。UMD库文档很难和全局库文档进行区分，在写全局库声明文件前，请确认该库不是UMD形式的😅。</p><h3 id="从代码识别全局库" tabindex="-1">从代码识别全局库 <a class="header-anchor" href="#从代码识别全局库" aria-label="Permalink to &quot;从代码识别全局库&quot;">​</a></h3><p>全局库代码通常非常的简单，一个全局的 <code>&quot;Hello, world&quot;</code> 库可能看起来像这样：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createGreeting</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">s</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">s</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>或者像这样：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line highlighted"><span style="color:#676E95;font-style:italic;">// Web</span></span>
<span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createGreeting</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">s</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">s</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#676E95;font-style:italic;">// Node</span></span>
<span class="line"><span style="color:#A6ACCD;">global</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createGreeting</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">s</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">s</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#676E95;font-style:italic;">// 可能任何runtime</span></span>
<span class="line"><span style="color:#A6ACCD;">globalThis</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createGreeting</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">s</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">s</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>当查看全局库代码时，你同时可以看到：</p><ul><li>最顶层的 <code>var</code> 语句，或者 <code>function</code> 声明</li><li>一个或者多个 <code>window.someName</code> 赋值</li><li>假定DOM基础类型的存在，比如 <code>document</code> 或 <code>window</code> 的存在</li></ul><p>你不可能看到：</p><ul><li>检查或使用 <code>require</code> 或 <code>define</code> 等模块加载器</li><li>CommonJS/Node.js 风格的导入形式，<code>var fs = require(&#39;fs&#39;)</code></li><li>调用 <code>define(...)</code></li><li>文档描述如何使用 <code>require</code> 或 <code>import</code> 导入该库</li></ul><h3 id="全局库示例" tabindex="-1">全局库示例 <a class="header-anchor" href="#全局库示例" aria-label="Permalink to &quot;全局库示例&quot;">​</a></h3><p>因为很容易将全局库转变为UMD库，很少还有比较流行的库使用全局风格。但是，一些比较小的和需要DOM(或没有依赖的)库仍然使用全局的方式。</p><h3 id="全局库模板" tabindex="-1">全局库模板 <a class="header-anchor" href="#全局库模板" aria-label="Permalink to &quot;全局库模板&quot;">​</a></h3><p><a href="./templates/global-d-ts.html">global.d.ts</a> 模板定义了一个示例库 <code>myLib</code>。确保阅读 <a href="https://www.typescriptlang.org/docs/handbook/declaration-files/library-structures.html#preventing-name-conflicts" target="_blank" rel="noreferrer">Preventing Name Conflicts部分</a></p><h2 id="_5️⃣-umd" tabindex="-1">5️⃣ UMD <a class="header-anchor" href="#_5️⃣-umd" aria-label="Permalink to &quot;5️⃣ UMD&quot;">​</a></h2><p>UMD模块既能被当做模块（通过导入）使用，也可以当做全局使用（运行在没有module loader的环境）。很多流行库，比如 <a href="https://momentjs.com/" target="_blank" rel="noreferrer">moment.js</a>，通过这种方式属性。比如，在Node.js或者使用RequireJS，你可以这样写：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> moment </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">moment</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(moment</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">format</span><span style="color:#A6ACCD;">())</span></span>
<span class="line"></span></code></pre></div><p>而在普通浏览器环境，则写法如下：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(moment</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">format</span><span style="color:#A6ACCD;">())</span></span>
<span class="line"></span></code></pre></div><h3 id="识别umd库" tabindex="-1">识别UMD库 <a class="header-anchor" href="#识别umd库" aria-label="Permalink to &quot;识别UMD库&quot;">​</a></h3><p><a href="https://github.com/umdjs/umd" target="_blank" rel="noreferrer">UMD模块</a> 会检查模块加载器环境的存在。这是一个很容易识别的模式，看起来如下：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">root</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">factory</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">define</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">function</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">define</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">amd</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">define</span><span style="color:#F07178;">([</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">libName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">factory</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">module</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">object</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">module.exports</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">module.exports</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">factory</span><span style="color:#F07178;">(</span><span style="color:#82AAFF;">require</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">libName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">returnExports</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">factory</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">libName</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">this,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">b</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span></code></pre></div><p>👩‍🏫 如果你在库的代码中看到 <code>typeof define</code>, <code>typeof window</code> 或者 <code>typeof module</code>，特别是在文件的最上面，它基本上就是UMD库了。</p><p>UMD库文档也经常使用 <code>require</code> 展示 <code>Using in Node.js</code> 示例，以及使用 <code>&lt;script&gt;</code> 标签展示 <code>Using in Browser</code> 示例加载脚本。</p><h3 id="umd库例子" tabindex="-1">UMD库例子 <a class="header-anchor" href="#umd库例子" aria-label="Permalink to &quot;UMD库例子&quot;">​</a></h3><p>很多流行的库都提供UMD版本，比如，<a href="https://jquery.com/" target="_blank" rel="noreferrer">jQuery</a>，<a href="https://momentjs.com/" target="_blank" rel="noreferrer">Moment.js</a>，<a href="https://lodash.com/" target="_blank" rel="noreferrer">lodash</a> 等等</p><h3 id="模板" tabindex="-1">模板 <a class="header-anchor" href="#模板" aria-label="Permalink to &quot;模板&quot;">​</a></h3><p>使用 <a href="./templates/modules-plugin.html">module-plugin.d.ts</a> 模板。</p><h2 id="_6️⃣-消费依赖" tabindex="-1">6️⃣ 消费依赖 <a class="header-anchor" href="#_6️⃣-消费依赖" aria-label="Permalink to &quot;6️⃣ 消费依赖&quot;">​</a></h2><p>你的库可能存在几种类型的依赖。本节展示如何将它们导入到声明文件中。</p><h3 id="🚀-依赖全局库" tabindex="-1">🚀 依赖全局库 <a class="header-anchor" href="#🚀-依赖全局库" aria-label="Permalink to &quot;🚀 依赖全局库&quot;">​</a></h3><p>如果你的库依赖一个全局库，使用 <code>/// &lt;reference types=&quot;...&quot; /&gt;</code> 指令：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/// </span><span style="color:#89DDFF;font-style:italic;">&lt;</span><span style="color:#F07178;font-style:italic;">reference</span><span style="color:#89DDFF;font-style:italic;"> </span><span style="color:#C792EA;font-style:italic;">types</span><span style="color:#89DDFF;font-style:italic;">=</span><span style="color:#89DDFF;font-style:italic;">&quot;</span><span style="color:#C3E88D;font-style:italic;">someLib</span><span style="color:#89DDFF;font-style:italic;">&quot;</span><span style="color:#89DDFF;font-style:italic;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getThing</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">someLib</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">thing</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>译者注：</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>vite</code> 就是通过这种方式导入的, <code>env.d.ts</code> 声明文件</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/// </span><span style="color:#89DDFF;font-style:italic;">&lt;</span><span style="color:#F07178;font-style:italic;">reference</span><span style="color:#89DDFF;font-style:italic;"> </span><span style="color:#C792EA;font-style:italic;">types</span><span style="color:#89DDFF;font-style:italic;">=</span><span style="color:#89DDFF;font-style:italic;">&quot;</span><span style="color:#C3E88D;font-style:italic;">vite/client</span><span style="color:#89DDFF;font-style:italic;">&quot;</span><span style="color:#89DDFF;font-style:italic;"> /&gt;</span></span>
<span class="line"></span></code></pre></div></div><h3 id="依赖模块" tabindex="-1">依赖模块 <a class="header-anchor" href="#依赖模块" aria-label="Permalink to &quot;依赖模块&quot;">​</a></h3><p>如果你的库依赖一个模块，使用 <code>import</code> 语句：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> moment </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">moment</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getThing</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">moment</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="依赖umd库" tabindex="-1">依赖UMD库 <a class="header-anchor" href="#依赖umd库" aria-label="Permalink to &quot;依赖UMD库&quot;">​</a></h3><blockquote><p>全局库依赖UMD库</p></blockquote><p>如果你的全局库依赖一个UMD模块，使用 <code>/// &lt;reference types</code> 指令：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/// </span><span style="color:#89DDFF;font-style:italic;">&lt;</span><span style="color:#F07178;font-style:italic;">reference</span><span style="color:#89DDFF;font-style:italic;"> </span><span style="color:#C792EA;font-style:italic;">types</span><span style="color:#89DDFF;font-style:italic;">=</span><span style="color:#89DDFF;font-style:italic;">&quot;</span><span style="color:#C3E88D;font-style:italic;">moment</span><span style="color:#89DDFF;font-style:italic;">&quot;</span><span style="color:#89DDFF;font-style:italic;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getThing</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">moment</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><blockquote><p>模块或者UMD库依赖UMD库</p></blockquote><p>如果模块或者UMD库依赖另一个UMD库，使用 <code>import</code> 语句：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> someLib </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">someLib</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><p>🚨不用使用 <code>/// &lt;reference</code> 指令声明对另一个UMD库的依赖。</p><h2 id="_7️⃣-阻止名字冲突" tabindex="-1">7️⃣ 阻止名字冲突 <a class="header-anchor" href="#_7️⃣-阻止名字冲突" aria-label="Permalink to &quot;7️⃣ 阻止名字冲突&quot;">​</a></h2><p>可以注意到，当书写全局声明文件时，可以在全局作用域中定义很多类型。我们强烈建议不要这样做，因为当很多声明文件在同一个项目中时，这可能导致一些不可解决的命名冲突。</p><p>💡一个要遵循的简单规则是，对库中定义全局变量，只在命名空间（<code>namespaces</code>）下定义其类型。比如，如果库定义了全局值 <code>cats</code>，你应该像下面这样写✅</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">cats</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">KittySettings</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>而不是 ❌：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 在最顶层</span></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CatKittySettings</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span></code></pre></div><p>这个指南也确保了库在被转义为UMD格式时，不会破坏用户的声明文件。</p><h2 id="_8️⃣-es6对模块调用签名的影响" tabindex="-1">8️⃣ ES6对模块调用签名的影响 <a class="header-anchor" href="#_8️⃣-es6对模块调用签名的影响" aria-label="Permalink to &quot;8️⃣ ES6对模块调用签名的影响&quot;">​</a></h2><p>很多流行的库，比如 <code>Express</code>，当导入时，它们暴露为一个<code>可调用的函数</code>。比如，Express最典型的用法如下：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// UMD的导入方式（译者注）</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> exp </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">express</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">exp</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div><p>在兼容ES6的模块加载器中，最顶层的对象（这里是导入的 <code>exp</code>）只能拥有属性；最顶层的模块对象总是 <code>不能</code> 被调用。</p><p>最常见的解决方法是，对可调用或可构造对象定义一个 <code>default</code> 导出；模块加载器通常自动检测这种情形，并使用 <code>default</code> 导出替换最顶层的对象。</p><p>如果你在tsconfig.json中设置了 <a href="./../tsconfig/compiler/interop-constraints.html#esmoduleinterop-👍🚀🚀">&quot;esModuleInterop&quot;: true</a>， TypeScript能自动帮你处理这个问题😎。</p><p>原文档：</p><ul><li><a href="https://www.typescriptlang.org/docs/handbook/declaration-files/library-structures.html" target="_blank" rel="noreferrer">Library Structure</a></li></ul><p>2022年08月29日00:23:46</p>`,103),p=[e];function t(c,r,i,y,D,F){return l(),a("div",null,p)}const A=s(o,[["render",t]]);export{C as __pageData,A as default};
