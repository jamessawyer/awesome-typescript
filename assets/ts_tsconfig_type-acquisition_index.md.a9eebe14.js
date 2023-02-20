import{_ as s,c as a,o as e,d as n}from"./app.a2f7fa70.js";const u=JSON.parse('{"title":"类型识别","description":"","frontmatter":{"title":"类型识别"},"headers":[{"level":2,"title":"enable","slug":"enable","link":"#enable","children":[]},{"level":2,"title":"include","slug":"include","link":"#include","children":[]},{"level":2,"title":"exclude","slug":"exclude","link":"#exclude","children":[]},{"level":2,"title":"disableFilenameBasedTypeAcquisition","slug":"disablefilenamebasedtypeacquisition","link":"#disablefilenamebasedtypeacquisition","children":[]}],"relativePath":"ts/tsconfig/type-acquisition/index.md","lastUpdated":1676788701000}'),l={name:"ts/tsconfig/type-acquisition/index.md"},p=n(`<nav class="table-of-contents"><ul><li><a href="#enable">enable</a></li><li><a href="#include">include</a></li><li><a href="#exclude">exclude</a></li><li><a href="#disablefilenamebasedtypeacquisition">disableFilenameBasedTypeAcquisition</a></li></ul></nav><p>类型识别只对JS项目才重要😁。在TS项目中，你需要在项目中显式的的包含类型。但是，对于JS项目，TS工具会在后台下载你的模块类型，下载到你的node_modules文件夹之外。</p><h2 id="enable" tabindex="-1"><code>enable</code> <a class="header-anchor" href="#enable" aria-hidden="true">#</a></h2><p>给JS项目提供一个配置，用于禁用类型识别。</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight has-highlighted-lines" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">typeAcquisition</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">enable</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>这可能会移除编辑器对项目的自动完成功能，如果想再获得编辑器提示，可以使用 <a href="https://www.typescriptlang.org/dt/search" target="_blank" rel="noreferrer">type search</a> 找到 <code>@types</code> 包或包含types的包。</p><h2 id="include" tabindex="-1"><code>include</code> <a class="header-anchor" href="#include" aria-hidden="true">#</a></h2><p>如果你有一个JavaScript项目，TypeScript需要额外的指导来理解全局依赖，或通过 <a href="#disablefilenamebasedtypeacquisition">disableFilenameBasedTypeAcquisition</a> 禁用内置推断。</p><p>你可以使用 <code>include</code> 指定应该从<code>DefinitelyTyped</code>中使用哪些类型:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight has-highlighted-lines" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">typeAcquisition</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">include</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">jquery</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="exclude" tabindex="-1"><code>exclude</code> <a class="header-anchor" href="#exclude" aria-hidden="true">#</a></h2><p>提供配置禁用JS项目中的特定模块的类型识别。比如在主应用中不需要包含测试的一些库类型。</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight has-highlighted-lines" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">typeAcquisition</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">exclude</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">jest</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mocha</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="disablefilenamebasedtypeacquisition" tabindex="-1"><code>disableFilenameBasedTypeAcquisition</code> <a class="header-anchor" href="#disablefilenamebasedtypeacquisition" aria-hidden="true">#</a></h2><p>TS类型识别能基于文件名推断哪些类型应该被添加。这意味着如果项目中有一个 <code>jquery.js</code> 文件，会自动从 <code>DefinitelyTyped</code> 下载 <code>JQuery</code> 的类型。</p><p>你可以通过这个配置禁用这个功能：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">typeAcquisition</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">disableFilenameBasedTypeAcquisition</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>原文档：</p><ul><li><a href="https://www.typescriptlang.org/tsconfig#type-acquisition" target="_blank" rel="noreferrer">Type Acquisition</a></li></ul><p>2022年08月23日00:04:53</p>`,20),o=[p];function t(c,i,r,d,D,y){return e(),a("div",null,o)}const h=s(l,[["render",t]]);export{u as __pageData,h as default};
