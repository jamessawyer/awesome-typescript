import{_ as s,c as a,o as p,O as n}from"./chunks/framework.5e952531.js";const l="/awesome-typescript/assets/23-1.9e1591fd.webp",e="/awesome-typescript/assets/23-2.f758a983.webp",o="/awesome-typescript/assets/23-3.173b6b5e.webp",t="/awesome-typescript/assets/23-4.34ef4b1e.webp",c="/awesome-typescript/assets/23-5.978cf8c1.webp",r="/awesome-typescript/assets/23-6.dc88b6a6.webp",y="/awesome-typescript/assets/23-7.a70b7723.webp",i="/awesome-typescript/assets/23-8.de3bf128.webp",F="/awesome-typescript/assets/23-9.1844216c.webp",D="/awesome-typescript/assets/23-10.ab349f5a.webp",d="/awesome-typescript/assets/23-11.a96a63dc.webp",C="/awesome-typescript/assets/23-12.8a57945f.webp",A="/awesome-typescript/assets/23-13.88d6fd3f.webp",m="/awesome-typescript/assets/23-14.17da7738.webp",b="/awesome-typescript/assets/23-15.069e4a9e.webp",u="/awesome-typescript/assets/23-16.5f799dfe.webp",f="/awesome-typescript/assets/23-17.afc558fc.webp",g="/awesome-typescript/assets/23-18.4d6e8b41.webp",h="/awesome-typescript/assets/23-19.d2b07a95.webp",v="/awesome-typescript/assets/23-20.cd654ad9.webp",N=JSON.parse('{"title":"3种类型来源和3种模板语法","description":"","frontmatter":{"title":"3种类型来源和3种模板语法"},"headers":[],"relativePath":"book/master-ts/23.md","lastUpdated":1682407907000}'),B={name:"book/master-ts/23.md"},_=n(`<p>TypeScript 给 JavaScript 添加了一套类型语法，我们声明变量的时候可以给变量加上类型信息，这样编译阶段就可以检查出变量使用的对不对，也就是类型检查。</p><p>给变量添加类型，很自然可以想到时在声明的时候指定：</p><p>比如对象</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> guang</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">guang</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>比如函数：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">num1</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">num2</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">num1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">num2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>这样当使用它们的时候，比如变量赋值、函数调用，就可以通过类型信息检查出使用的对不对：</p><p><img src="`+l+`" alt="TS类型检测"></p><p>TypeScript 这样设计类型语法没啥问题，但是只是这样还不够。</p><p>我们自己写的代码可以这样声明类型，但不是我们写的呢？</p><p>比如 JS 引擎提供的 Number、String、Date、RegExp，浏览器环境的 HTMLElement、Event 等 api。</p><p>这些 api 是执行引擎内置的实现，但我们代码里会用到它们，也同样需要检查使用的对不对，也就是类型检查。怎么给这些 api 加上类型呢？</p><h2 id="typescript-类型声明的三种来源" tabindex="-1">TypeScript 类型声明的三种来源 <a class="header-anchor" href="#typescript-类型声明的三种来源" aria-label="Permalink to &quot;TypeScript 类型声明的三种来源&quot;">​</a></h2><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h2><p>TypeScript 设计了 <code>declare</code> 的语法，可以单独声明变量的类型：</p><p>比如对象:</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> guang</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>比如函数：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">b</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>这样单独声明了类型，使用这些 api 的时候也就能做类型检查。</p><p>像 JS 引擎那些 api，还有浏览器提供的 api，这些基本是必用的，而且都有标准的。所以 TypeScript 给内置了它们的类型声明。</p><h3 id="typescript内置类型" tabindex="-1">TypeScript内置类型 <a class="header-anchor" href="#typescript内置类型" aria-label="Permalink to &quot;TypeScript内置类型&quot;">​</a></h3><p>TypeScript 包下有个 <code>lib</code> 目录，里面有一堆 <code>lib.xx.d.ts</code> 的类型声明文件，这就是 <strong>TS内置的</strong> 一些类型声明。</p><p><img src="`+e+'" alt="TypeScript内置类型声明"></p><p>因为这些只是声明类型，而没有具体的 JS 实现，TS 就给单独设计了一种文件类型，也就是 <code>d.ts</code>， <code>d</code> 是 <code>declare</code> 的意思。</p><p>比如 lib.dom.d.ts 里的类型声明：</p><p><img src="'+o+'" alt="lib.dom.d.ts"></p><p>因为是 ts 内置的，所以配置一下就可以用了：</p><p><img src="'+t+'" alt="配置lib"></p><p>tsconfig.json 里配置下 <code>compilerOptions.lib</code>，就可以引入对应的 <code>d.ts</code> 的类型声明文件。</p><p>有的同学可能会说，可是内置的类型声明也不多呀，只有 dom 和 es 的。</p><p>确实，因为 JS 的 api 还有浏览器的 api 都是有标准的，那自然可以按照标准来定义类型。其余的环境的 api 可能没有标准，经常变，那自然就没法内置了，比如 node。所以 lib 里只有 dom 和 es 的类型声明。</p><p>那 node 环境，还有其他环境里的内置 api 怎么配置类型声明呢？</p><h3 id="types-xxx-definitelytype" tabindex="-1">@types/xxx DefinitelyType <a class="header-anchor" href="#types-xxx-definitelytype" aria-label="Permalink to &quot;@types/xxx DefinitelyType&quot;">​</a></h3><p>node 等环境的 api 因为没有标准而没有被 TS 内置，但 TS 同样也支持了这些环境的类型声明的配置。</p><p>方式是通过 <code>@types/xxx</code> 的包：</p><img src="'+c+'" alt="@types/xxx第3方类型定义" style="zoom:50%;"><p>📚<strong>TS 会先加载内置的 lib 的类型声明，然后再去查找 @types 包下的类型声明。</strong></p><p>这样，其他环境的类型声明就可以通过这种方式来扩展。</p><img src="'+r+'" alt="@types/xxx第3方类型定义" style="zoom:50%;"><p>@types 包是在 <a href="https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.zh-Hans.md" target="_blank" rel="noreferrer">DefinitelyTyped</a> 这个项目下统一管理的，想创建一个 @types 包的话要去看一下他们的文档。</p><p><img src="'+y+'" alt="DefinitelyTyped"></p><p>我们知道，TS 内置的那些 lib 是可以配置的，扩展的这些 <code>@types/xx</code> 的包自然也可以配置：</p><p><img src="'+i+'" alt="types &amp; typeRoots"></p><p>可以指定加载 @types 目录下的哪些包，还可以修改查找 <code>@types</code> 包的目录（默认是 <code>node_modules/@types</code>)：</p><p><img src="'+F+'" alt="lib定义types"></p><p>除了给 node 等环境的 api 加上类型声明外，@types 包还有一种用途，就是给一些 JS 的包加上类型声明：</p><p>如果代码本身是用 ts 写的，那编译的时候就可以开启 <code>compilerOptions.declaration</code>，来生成 <code>d.ts</code> 文件：</p><p><img src="'+D+'" alt="tsconfig生成.d.ts文件"></p><p>然后在 <code>package.json</code> 里配置 <code>types</code> 来指定 <code>dts</code> 的位置：</p><p><img src="'+d+'" alt="lib向外暴露types"></p><p>这样就不需要单独的 @types 包了。</p><p>但如果代码不是用 ts 写的，那可能就需要单独写一个 @types/xxx 的包来声明 ts 类型，然后在 tsconfig.json 里配置下，加载进来。</p><p>比如常用的 vue3 就不需要 @types/vue 包，因为本身是用 ts 写的，npm 包里也包含了 dts 文件。</p><p>但是 react 不是 ts 写的，是用的 facebook 自己的 flow，自然就需要 @types/react 的包来加上 ts 类型声明。</p><p>至此，ts 内置的 dom 和 es 的类型声明，其他环境还有一些包的类型声明我们都知道怎么加载了。</p><p>那自己写的 ts 代码呢？</p><h3 id="引入自定义类型" tabindex="-1">引入自定义类型 <a class="header-anchor" href="#引入自定义类型" aria-label="Permalink to &quot;引入自定义类型&quot;">​</a></h3><p>这些其实我们经常配置，就是配置下编译的入口文件，通过 include 指定一堆，然后通过 exclude 去掉一部分。还可以通过 files 再单独包含一些：</p><img src="'+C+`" alt="引入自定义types" style="zoom:50%;"><p>📚<strong>tsc 在编译的时候，会分别加载 lib 的，@types 下的，还有 include 和 files 的文件，进行类型检查。</strong></p><p>这就是 ts 类型声明的三种来源。</p><p>现在还有一个问题，有的 api 是全局的，有的 api 是某个模块的，ts 是怎么声明全局 api 的类型，怎么声明模块内的 api 的类型呢？</p><h2 id="全局类型声明-vs-模块类型声明" tabindex="-1">全局类型声明 vs 模块类型声明 <a class="header-anchor" href="#全局类型声明-vs-模块类型声明" aria-label="Permalink to &quot;全局类型声明 vs 模块类型声明&quot;">​</a></h2><p>我们写的 JS 代码就是有的 api 是全局的，有的 api 是模块内的，所以 TS 需要支持这个也很正常。</p><p>但 JS 的模块规范不是一开始就有的，最开始是通过在全局挂一个对象，然后这个对象上再挂一些 api 的方式，也就是命名空间 namespace。</p><p>所以 TS 最早支持的模块化方案自然也就是 <code>namespace</code>：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Guang</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    age</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">guang</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">age</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">guang</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">age</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">b</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>理解 namespace 的话可以看一下编译后的代码：</p><p><img src="`+A+'" alt="namespace编译后产物"></p><p>就是全局上放一个对象，然后对象上再挂几个暴露出去的属性。</p><p>看了编译后的代码，是不是 namespace 瞬间就学会了～</p><p><strong>后来，出现了 CommonJS 的规范，那种不能叫 namespace 了，所以 TS 支持了 <code>module</code></strong>，</p><p>很容易想到，<code>@types/node</code> 的 api 定义就是一堆的 module：</p><p><img src="'+m+'" alt="TS module定义"></p><p>这个 module 和 namespace 有什么区别呢？</p><p>其实真没什么区别，只不过 module 后一般接一个路径，而 namespace 后一般是一个命名空间名字。其他的语法都一样的。</p><p>而且这个结论是有依据的：</p><img src="'+b+'" alt="module vs namespace" style="zoom:50%;"><p>用 <a href="https://astexplorer.net" target="_blank" rel="noreferrer">astexplorer.net</a> 看一下 parse 后的 AST，两者的 AST类型都是一样的。也就是说编译器后续的处理都一样，那不是一种东西是什么。</p><p>再后来的故事大家都知道了，JS 有了 es module 规范，所以现在推荐直接用 import export 的方式来声明模块和导入导出了。</p><p>额外多了的，只不过有一个 import type 的语法，可以单独引入类型：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">xxx</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">yyy</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>所以现在声明模块不咋推荐用 namespace 和 module，还是尽量用 es module 吧。</p><p>那全局的类型声明呢？</p><p>有了 <code>es module</code> 之后，TS 有了一个单独的设计：</p><p><strong>dts 中，如果没有 import、export 语法，那所有的类型声明都是全局的，否则是模块内的。</strong></p><p>我们试验一下：</p><p>include 配置 src 下的 ts 文件，然后再用 files 引入 <code>global.d.ts</code> 文件：</p><p><img src="'+u+'" alt="global.d.ts"></p><p>在 <code>global.d.ts</code> 里声明一个 func 函数：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-GANfa" id="tab-SXnYn7h" checked="checked"><label for="tab-SXnYn7h">global.d.ts</label></div><div class="blocks"><div class="language-typescript active"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">decalare </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> func</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">b</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span></code></pre></div></div></div><p>在 <code>src/index.ts</code> 里是有提示的：</p><p><img src="'+f+`" alt="ts提示"></p><p>使用 <code>npx tsc</code> 编译也不报错。</p><p>加上一个 import 语句：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-aD9M9" id="tab-iE49FJ1" checked="checked"><label for="tab-iE49FJ1">global.d.ts</label></div><div class="blocks"><div class="language-typescript active"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line diff add"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> fs </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">decalare </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> func</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">b</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span></code></pre></div></div></div><p>编译就报错了，说是找不到 func：</p><p><img src="`+g+`" alt="模块文件需要特殊声明全局"></p><p>这说明 func 就不再是全局的类型了。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>📚使用 <code>import</code> | <code>export</code> 使得 <code>global.d.ts</code> 文件编程esm模块类型，模块类型声明全局类型需要使用 <code>declare global {}</code> 进行包裹。</p></div><p>这时候可以手动 <code>declare global</code>：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-OqlhC" id="tab-fN9ldol" checked="checked"><label for="tab-fN9ldol">global.d.ts</label></div><div class="blocks"><div class="language-typescript active"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> fs </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line diff remove"><span style="color:#A6ACCD;">decalare </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> func</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">b</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line diff add"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> global </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span></span>
<span class="line diff add"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">func</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">b</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span></span>
<span class="line diff add"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span></span></code></pre></div></div></div><p><code>npx tsc</code> 再试一下，编译就通过了。</p><p>而且不止是 <code>es module</code> 的模块里可以用 global 声明全局类型，module 的方式声明的 CommonJS 模块也是可以的：</p><p>比如 <code>@types/node</code> 里就有不少这种全局类型声明：</p><p><img src="`+h+`" alt="global"></p><p>这就是 3 种 typescript 声明模块的语法，以及声明全局类型的方式。</p><p>那么如果就是需要引入模块，但是也需要全局声明类型，有什么更好的方式呢？</p><p>有，通过<code>编译器指令 reference</code>。这样既可以引入类型声明，又不会导致所有类型声明都变为模块内的：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-BJYls" id="tab-lOSbNeB" checked="checked"><label for="tab-lOSbNeB">global.d.ts</label></div><div class="blocks"><div class="language-typescript active"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/// </span><span style="color:#89DDFF;font-style:italic;">&lt;</span><span style="color:#F07178;font-style:italic;">reference</span><span style="color:#89DDFF;font-style:italic;"> </span><span style="color:#C792EA;font-style:italic;">types</span><span style="color:#89DDFF;font-style:italic;">=</span><span style="color:#89DDFF;font-style:italic;">&quot;</span><span style="color:#C3E88D;font-style:italic;">node</span><span style="color:#89DDFF;font-style:italic;">&quot;</span><span style="color:#89DDFF;font-style:italic;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">decalare </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> func</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">b</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span></code></pre></div></div></div><p>可以看到很多 dts 都这样引入别的 dts 的，就是为了保证引入的类型声明依然是全局的：</p><p><img src="`+v+'" alt="reference引入"></p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>TypeScript 给 JavaScript 添加了类型信息，在编译时做类型检查。</p><p>除了在变量声明时定义类型外，TS 也支持通过 declare 单独声明类型。只存放类型声明的文件后缀是 d.ts。</p><p>TypeScript有三种存放类型声明的地方：</p><ul><li><code>lib</code>： 内置的类型声明，包含 dom 和 es 的，因为这俩都是有标准的。</li><li><code>@types/xx</code>： 其他环境的 api 类型声明，比如 node，还有 npm 包的类型声明</li><li><code>开发者写的代码</code>：通过 <code>include + exclude</code> 还有 <code>files</code> 指定</li></ul><p>其中，npm 包也可以同时存放 ts 类型，通过 packages.json 的 <code>types</code> 字段指定路径即可。</p><p>常见的是 vue 的类型是存放在 npm 包下的，而 react 的类型是在 @types/react 里的。因为源码一个是 ts 写的，一个不是。</p><p>TS声明模块的方式也是三种：</p><ul><li><code>namespace</code>：最早的实现模块的方式，编译为声明对象和设置对象的属性的 JS 代码，很容易理解</li><li><code>module</code>：和 namespace 的 AST 没有任何区别，只不过一般用来声明 CommonJS 的模块，在 @types/node 下有很多</li><li><code>es module</code>：es 标准的模块语法，ts 额外扩展了 import type</li></ul><p><strong>dts 的类型声明默认是全局的，除非有 es module 的 import、export 的声明，这时候就要手动 <code>declare global</code> 了</strong>。为了避免这种情况，可以用 <code>reference</code> 的编译器指令。</p><p>深入掌握 TypeScript 的话，除了学习类型定义以及类型编程，这三种类型声明的来源（lib、@types、用户目录），以及三种模块声明的方式（namespace、module、es module），还有全局类型的声明（global、reference），也都是要掌握的。</p><h2 id="相关知识点参考" tabindex="-1">相关知识点参考 <a class="header-anchor" href="#相关知识点参考" aria-label="Permalink to &quot;相关知识点参考&quot;">​</a></h2><ol><li><a href="./../../ts/in-depth/target-vs-lib.html">lib 配置项的含义</a></li><li><a href="./../../ts/in-depth/tsconfig-overview.html#_1-files">files 配置项</a></li><li><a href="./../../ts/in-depth/tsconfig-overview.html#_2-include-exclude">include vs exclude</a></li><li><a href="./../../ts/in-depth/tsconfig-overview.html#_1-declaration">declaration 生成d.ts文件</a></li><li><a href="./../../ts/in-depth/tsconfig-overview.html#_4-typeroots">typeRoots &amp; types</a></li><li><a href="./../../ts/reference/triple-slashes-directives.html">三斜线指令reference</a></li><li><a href="./../../ts/reference/declaration-merging.html#_8️⃣-⭐-全局扩充">全局声明</a></li><li><a href="./../../ts/reference/esm-in-nodejs.html">package.json 中的types</a></li></ol><p>原文链接：</p><ul><li><a href="https://juejin.cn/post/7111112135903543332" target="_blank" rel="noreferrer">TypeScript 深水区：3 种类型来源和 3 种模块语法 - 神光@掘金</a></li></ul><p>2023年03月22日18:18:58</p>',129),x=[_];function S(w,T,k,E,q,J){return p(),a("div",null,x)}const j=s(B,[["render",S]]);export{N as __pageData,j as default};
