import{_ as s,c as n,o as a,b as l}from"./app.7e0800ba.js";const f=JSON.parse('{"title":"Module Function","description":"","frontmatter":{"title":"Module Function"},"headers":[],"relativePath":"ts/dfile/templates/modules-function.md","lastUpdated":1677202559000}'),p={name:"ts/dfile/templates/modules-function.md"},e=l(`<nav class="table-of-contents"><ul></ul></nav><p>例如，当你想使用的JavaScript代码如下：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> greeter </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">super-greeter</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">greeter</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">greeter</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello world</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>为了能同时处理通过 <code>UMD</code> 和 模块导入：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight has-highlighted-lines" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 对 [~THE LIBRARY NAME~] [~可选版本号~] 的类型定义</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Project: [~项目名~]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Definitions by: [~你的名字~] &lt;[~URL FOR YOU~]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*~ 💡这是一个针对『函数』模块的模板文件. 你应该将它重命名为 index.d.ts</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *~ 并将它放在和模块同名的文件夹中</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *~ 例如, 如果你正在给 &quot;super-greeter&quot; 文件写类型声明</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *~ 则该文件应该是 &#39;super-greeter/index.d.ts&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#676E95;font-style:italic;">// 🚨 注意 ES6 Modules 不能直接导出类对象</span></span>
<span class="line highlighted"><span style="color:#676E95;font-style:italic;">// 文件应当使用CommonJS风格被导入</span></span>
<span class="line highlighted"><span style="color:#676E95;font-style:italic;">// import x = require(&#39;[~模块名~]&#39;)</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#676E95;font-style:italic;">// 🚀🚀 或者， 如果 --allowSyntheticDefaultImports 或</span></span>
<span class="line highlighted"><span style="color:#676E95;font-style:italic;">// --esModuleInterop 开启了，文件也可以当做是默认导入被导入</span></span>
<span class="line highlighted"><span style="color:#676E95;font-style:italic;">// import x from &#39;[~模块名~]&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 参考TS文档</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// https://www.typescriptlang.org/docs/handbook/modules.html#export--and-import--require</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 了解ES6模块这种限制的常见解决方法😎</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#676E95;font-style:italic;">/*~ 如果模块是一个暴露了一个全局变量 \`myFuncLib\` 的UMD模块，当</span></span>
<span class="line highlighted"><span style="color:#676E95;font-style:italic;"> *~ 在模块加载器环境之外被加载时，在此声明该全局变量</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *~ 否则，删除下面这行声明🚨</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">myFuncLib</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*~ </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *~ 这个声明指定函数是从文件中导出的对象</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Greeter</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#676E95;font-style:italic;">/*~ 📚方法重载声明的方式 */</span></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Greeter</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Greeter</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">NamedReturnType</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Greeter</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Greeter</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">LengthReturnType</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#676E95;font-style:italic;">/*~ 📚如果你也想将类型也从模块中暴露出去，你可以将其放着这一块中</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *~ 通常你将描述函数的返回类型的形状；</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *~ 该类型应当声明在此，如示例所示</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *~ </span></span>
<span class="line highlighted"><span style="color:#676E95;font-style:italic;"> *~ 注意，如果你决定包含这个命名空间，</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *~ 模块可能会被错误地导入为命名空间对象</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *~ 📚 除非开启 --esModuleInterop</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *~   import * as x from &#39;[~THE MODULE~]&#39;; // ❌ 不要这样做</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Greeter</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">LengthReturnType</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    width</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    height</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">NamedReturnType</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    firstName</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    lastName</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span></span>
<span class="line highlighted"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/*~ 如果这个模块还有属性，在此声明</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   *~ 比如，这个声明会说，下面代码是合法的</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   *~   import f = require(&#39;super-greeter&#39;);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   *~   console.log(f.defaultName);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defaultName</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defaultLength</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>原文档：</p><ul><li><a href="https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-function-d-ts.html" target="_blank" rel="noreferrer">Module: Function</a></li></ul><p>2022年09月03日12:59:20</p>`,8),o=[e];function t(c,r,i,y,F,D){return a(),n("div",null,o)}const A=s(p,[["render",t]]);export{f as __pageData,A as default};
