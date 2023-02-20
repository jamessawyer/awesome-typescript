import{_ as s,c as e,o as l,d as a}from"./app.a2f7fa70.js";const o="/awesome-typescript/assets/triple-slashes-1.9be5444f.webp",t="/awesome-typescript/assets/triple-slashes-2.89695d9d.webp",n="/awesome-typescript/assets/triple-slashes-3.1d945f43.webp",p="/awesome-typescript/assets/triple-slashes.81713850.webp",A=JSON.parse('{"title":"三斜线指令","description":"","frontmatter":{"title":"三斜线指令"},"headers":[{"level":2,"title":"/// <reference path=\\"...\\" />","slug":"reference-path","link":"#reference-path","children":[]},{"level":2,"title":"预处理输入文件","slug":"预处理输入文件","link":"#预处理输入文件","children":[]},{"level":2,"title":"错误","slug":"错误","link":"#错误","children":[]},{"level":2,"title":"使用 --noResolve","slug":"使用-noresolve","link":"#使用-noresolve","children":[]},{"level":2,"title":"/// <reference types=\\"...\\" />","slug":"reference-types","link":"#reference-types","children":[]},{"level":2,"title":"/// <reference lib=\\"...\\" />","slug":"reference-lib","link":"#reference-lib","children":[]},{"level":2,"title":"/// <referecne no-default-lib=\\"true\\" />","slug":"referecne-no-default-lib-true","link":"#referecne-no-default-lib-true","children":[]},{"level":2,"title":"/// <amd-module />","slug":"amd-module","link":"#amd-module","children":[]},{"level":2,"title":"/// <amd-dependency />","slug":"amd-dependency","link":"#amd-dependency","children":[]},{"level":2,"title":"小结（个人补充）","slug":"小结-个人补充","link":"#小结-个人补充","children":[]}],"relativePath":"ts/reference/triple-slashes-directives.md","lastUpdated":1676788701000}'),c={name:"ts/reference/triple-slashes-directives.md"},r=a(`<p>三斜线指令是一个包含单一XML标签的单行注释。注释的内容用作编译指令。</p><p>三斜线指令 <code>只有在</code> 文件的顶部位置才有效🚨。三斜线指令只有在单行或多行注释之前，包括其它三斜线指令。如果它放在语句或声明之后，则不会被当做是指令，而只是普通的注释。</p><h2 id="reference-path" tabindex="-1"><code>/// &lt;reference path=&quot;...&quot; /&gt;</code> <a class="header-anchor" href="#reference-path" aria-hidden="true">#</a></h2><p><code>/// &lt;reference path=&quot;...&quot; /&gt;</code> 指令是三斜线指令中最常见的一种指令了。它充当文件之间 <code>依赖</code> 的一种声明。</p><p>三斜线引用指示编译器在编译的过程中包含其它的文件。</p><p>同时，当使用 <a href="./../tsconfig/compiler/emit.html#outfile">outFile</a> 编译选项时，它也作为方法对输出进行排序。在预处理之后，文件以与输入文件相同的顺序被生成到输出文件位置。</p><div class="tip custom-block"><p class="custom-block-title">🚀</p><p>一般表示对自己写的模块的引用，而 <code>/// &lt;reference types=&quot;&quot; /&gt;</code> 一般是外部声明文件模块的依赖。 它和 <code>/// &lt;reference types=&quot;&quot; /&gt;</code> 区别也在于此</p></div><h2 id="预处理输入文件" tabindex="-1">预处理输入文件 <a class="header-anchor" href="#预处理输入文件" aria-hidden="true">#</a></h2><p>编译器会对输入文件执行一遍预处理，用于解析所有三斜线引用指令。在这个过程中，额外的文件会被加入到编译中。</p><p>这个处理会从一组 <code>root files</code>(根文件) 开始，根文件是指CLI后面跟着的文件或者 <code>tsconfig.json</code> 中 <code>files</code> 字段定义的文件，根文件会按照它们定义的顺序被处理。在文件添加到根文件列表之前，文件中所有的三斜线引用都会被处理，并且包含它们的目标文件。三斜线引用以深度优先的方式，以它们在文件中被看见的位置被解析。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果使用的是相对路径，三斜线引用路径按照包含它的文件的相对位置被解析</p></div><h2 id="错误" tabindex="-1">错误 <a class="header-anchor" href="#错误" aria-hidden="true">#</a></h2><p>引用不存在的文件会报错。三斜线引用自身也会报错😅。</p><h2 id="使用-noresolve" tabindex="-1">使用 <code>--noResolve</code> <a class="header-anchor" href="#使用-noresolve" aria-hidden="true">#</a></h2><p>如果编译器使用了 <a href="./../tsconfig/compiler/modules.html#noresolve-不解析">noResolve</a> 标志，三斜线引用则会被忽略📚；它们既不会导致添加新文件，也不会改变文件提供的顺序。</p><h2 id="reference-types" tabindex="-1"><code>/// &lt;reference types=&quot;...&quot; /&gt;</code> <a class="header-anchor" href="#reference-types" aria-hidden="true">#</a></h2><p>和 <code>/// &lt;reference path=&quot;...&quot; /&gt;</code> 指令相似，它也充当依赖的一种声明，<code>/// &lt;reference path=&quot;...&quot; /&gt;</code> 指令是申明对某个包（<code>package</code>）的一种依赖。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>解析这些包名的过程和解析 <code>import</code> 语句模块名的过程类似。可以把 <code>triple-slash-reference-types</code> 指令当做是声明包的 <code>import</code> 语句💡。</p></div><p>🌰在声明文件中包含 <code>/// &lt;reference type=&quot;node&quot; /&gt;</code> ，表明该文件使用 <code>@types/node/index.d.ts</code> 中声明的定义；因此，这个包需要与声明文件一起包含在编译中。</p><p>只有在你手动创建一个 <code>.d.ts</code> 文件时才会使用这些指令😎。</p><p>对于编译中生成的编译文件，编译器将自动给你添加 <code>/// &lt;reference type=&quot;...&quot; /&gt;</code>。只有在结果文件中使用到了任何引用包中的类型时，才会将 <code>/// &lt;reference type=&quot;...&quot; /&gt;</code> 包含到生成的声明文件中。</p><p>要在<code>.ts</code>文件中声明对<code>@types</code>包的依赖项，请在命令行或者tsconfig.json中使用 <a href="./../tsconfig/compiler/modules.html#types-👍">types</a> 选项。</p><ul><li><a href="https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types" target="_blank" rel="noreferrer">using @types, typeRoots and types in tsconfig.json files</a> 了解更多</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>一般表示对外部模块的引用</p></div><h2 id="reference-lib" tabindex="-1"><code>/// &lt;reference lib=&quot;...&quot; /&gt;</code> <a class="header-anchor" href="#reference-lib" aria-hidden="true">#</a></h2><p>这个指令允许文件显式的包含已经存在的 <code>内置lib</code> 文件。</p><p>内置<code>lib</code>文件以tsconfig.json中 <a href="./../tsconfig/compiler/lang-and-env.html#lib-👍🚀">libs</a> 编译选项相同的方式被引入（比如，使用 <code>lib=&quot;es2015&quot;</code> 而不是 <code>lib=&quot;lib.es2015.d.ts&quot;</code> 等等）。</p><p>对于依赖内置类型的声明文件作者，比如DOM APIs，内置JS运行时构造器（比如 <code>Symbol | Iterator</code>）,三斜线引用lib指令被推荐使用。再此之前，我们必须将这些 <code>.d.ts</code> 文件拷贝一份到项目中。</p><p>🌰添加 <code>/// &lt;reference lib=&quot;es2017.string&quot; /&gt;</code> 到编译中的某个文件中，相当于使用 <code>--lib es2017.string</code> 进行编译。</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/// </span><span style="color:#89DDFF;font-style:italic;">&lt;</span><span style="color:#F07178;font-style:italic;">reference</span><span style="color:#89DDFF;font-style:italic;"> </span><span style="color:#C792EA;font-style:italic;">lib</span><span style="color:#89DDFF;font-style:italic;">=</span><span style="color:#89DDFF;font-style:italic;">&quot;</span><span style="color:#C3E88D;font-style:italic;">es2017.string</span><span style="color:#89DDFF;font-style:italic;">&quot;</span><span style="color:#89DDFF;font-style:italic;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">padStart</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="referecne-no-default-lib-true" tabindex="-1"><code>/// &lt;referecne no-default-lib=&quot;true&quot; /&gt;</code> <a class="header-anchor" href="#referecne-no-default-lib-true" aria-hidden="true">#</a></h2><p>这个指令标记文件为 <code>默认library</code>。你可以在 <code>lib.d.ts</code> 顶部看到这个注解和其不同的变种。</p><p>这个指令告诉编译器不要将默认库（比如 <code>lib.d.ts</code>）包含到编译中。它的影响类似于给命令行传递 <a href="./../tsconfig/compiler/lang-and-env.html#nolib-👍">noLib</a> 参数。</p><p>同样需要注意的是，当使用了 <a href="./../tsconfig/compiler/completeness.html#skipdefaultlibcheck">skipDefaultLibCheck</a> 选项，编译器只会跳过对包含了 <code>/// &lt;reference no-default-lib=&quot;true&quot; /&gt;</code> 指令的文件的检测。</p><h2 id="amd-module" tabindex="-1"><code>/// &lt;amd-module /&gt;</code> <a class="header-anchor" href="#amd-module" aria-hidden="true">#</a></h2><p>默认情况下，AMD模块生成都是匿名的。但这会对一些工具处理结果模块时造成一些麻烦，比如bundlers(比如 <code>r.js</code>)</p><p><code>amd-module</code>指令允许将可选模块名传递给编译器:</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-wRT_m" id="tab-ASoyIph" checked="checked"><label for="tab-ASoyIph">amdModule.ts</label></div><div class="blocks"><div class="language-typescript active"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/// </span><span style="color:#89DDFF;font-style:italic;">&lt;</span><span style="color:#F07178;font-style:italic;">amd-module</span><span style="color:#89DDFF;font-style:italic;"> </span><span style="color:#C792EA;font-style:italic;">name</span><span style="color:#89DDFF;font-style:italic;">=</span><span style="color:#89DDFF;font-style:italic;">&quot;</span><span style="color:#C3E88D;font-style:italic;">NamedModule</span><span style="color:#89DDFF;font-style:italic;">&quot;</span><span style="color:#89DDFF;font-style:italic;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">C</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span></code></pre></div></div></div><p>这将导致将名字 <code>NamedModule</code> 作为调用AMD <code>define</code> 的一部分赋值给模块：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-XZ9mB" id="tab-_U0cBdc" checked="checked"><label for="tab-_U0cBdc">amdModule.js</label></div><div class="blocks"><div class="language-js active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">define</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">NamedModule</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">require</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">exports</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">require</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">exports</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">C</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">C</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">C</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">exports.</span><span style="color:#A6ACCD;">C</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">C</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div></div></div><h2 id="amd-dependency" tabindex="-1"><code>/// &lt;amd-dependency /&gt;</code> <a class="header-anchor" href="#amd-dependency" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>🚨这个指令已经废弃了。请使用 <code>import &quot;moduleName&quot;;</code> 代替</p></div><p><code>/// &lt;amd-dependency path=&quot;x&quot; /&gt;</code> 通知编译器一个非TS模块依赖需要被注入到生成的模块require调用中。</p><p><code>amd-dependency</code> 指令也可以有一个可选的 <code>name</code> 属性；这允许你给amd-denpendency传递一个可选name:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/// </span><span style="color:#89DDFF;font-style:italic;">&lt;</span><span style="color:#F07178;font-style:italic;">amd-dependency</span><span style="color:#89DDFF;font-style:italic;"> </span><span style="color:#C792EA;font-style:italic;">path</span><span style="color:#89DDFF;font-style:italic;">=</span><span style="color:#89DDFF;font-style:italic;">&quot;</span><span style="color:#C3E88D;font-style:italic;">legacy/moduleA</span><span style="color:#89DDFF;font-style:italic;">&quot;</span><span style="color:#89DDFF;font-style:italic;"> </span><span style="color:#C792EA;font-style:italic;">name</span><span style="color:#89DDFF;font-style:italic;">=</span><span style="color:#89DDFF;font-style:italic;">&quot;</span><span style="color:#C3E88D;font-style:italic;">moduleA</span><span style="color:#89DDFF;font-style:italic;">&quot;</span><span style="color:#89DDFF;font-style:italic;">/&gt;</span></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> moduleA</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyType</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">moduleA</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">callStuff</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>生成的JS代码：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">define</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">require</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">exports</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">legacy/moduleA</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;font-style:italic;">require</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;font-style:italic;">exports</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;font-style:italic;">moduleA</span></span>
<span class="line"><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">moduleA</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">callStuff</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="小结-个人补充" tabindex="-1">小结（个人补充） <a class="header-anchor" href="#小结-个人补充" aria-hidden="true">#</a></h2><p>看完这些，可能还是比较懵逼，下面以具体的例子对上面主要的指令进行演示。</p><p>以 <code>Vite</code> 项目为例。可以在 <code>tsconfig.json</code> 文件的 <code>types</code> 中看到这样的声明：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-1lGYI" id="tab-prQ7D8U" checked="checked"><label for="tab-prQ7D8U">tsconfig.json</label></div><div class="blocks"><div class="language-json active"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">compilerOptions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">types</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vite/client</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></div></div><p>这个类型位于：<code>node-modules/vite/client.d.ts</code></p><p><img src="`+o+`" alt="client.d.ts"></p><p>这个等价定义 <code>/// &lt;reference type=&quot;vite/client&quot;&gt;</code>指令。</p><p>我们也可以发现其定义了另外2个指令：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/// </span><span style="color:#89DDFF;font-style:italic;">&lt;</span><span style="color:#F07178;font-style:italic;">reference</span><span style="color:#89DDFF;font-style:italic;"> </span><span style="color:#C792EA;font-style:italic;">lib</span><span style="color:#89DDFF;font-style:italic;">=</span><span style="color:#89DDFF;font-style:italic;">&quot;</span><span style="color:#C3E88D;font-style:italic;">dom</span><span style="color:#89DDFF;font-style:italic;">&quot;</span><span style="color:#89DDFF;font-style:italic;"> /&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/// </span><span style="color:#89DDFF;font-style:italic;">&lt;</span><span style="color:#F07178;font-style:italic;">reference</span><span style="color:#89DDFF;font-style:italic;"> </span><span style="color:#C792EA;font-style:italic;">path</span><span style="color:#89DDFF;font-style:italic;">=</span><span style="color:#89DDFF;font-style:italic;">&quot;</span><span style="color:#C3E88D;font-style:italic;">./types/importMeta.d.ts</span><span style="color:#89DDFF;font-style:italic;">&quot;</span><span style="color:#89DDFF;font-style:italic;"> /&gt;</span></span>
<span class="line"></span></code></pre></div><p>先看 <code>/// &lt;reference path=&quot;./types/importMeta.d.ts&quot;</code> 是对相对路径引用，因为 <code>client.d.ts</code> 声明文件中用到了 <code>imprtMeta.d.ts</code> 中定义的类型</p><p><img src="`+t+'" alt="reference-path"></p><p>再看 <code>/// &lt;reference lib=&quot;dom&quot; /&gt;</code> 表示对typescript内置lib的引用，这里是因为用到了DOM APIs。</p><p>进入到 <code>lib.dom.d.ts</code> 声明文件内部，可以看到如下内容:</p><p><img src="'+n+'" alt="built-in libs"></p><p>而 <code>/// &lt;reference no-default-lib=&quot;true&quot; /&gt;</code> 则表示 <code>lib.dom.d.ts</code> 是一个默认libray，它会告诉编译器，不要将 <code>lib.dom.d.ts</code> 这个内置lib包含到编译中。</p><p><img src="'+p+'" alt="部分triple slashes指令"></p><p>原文档：</p><ul><li><a href="https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html" target="_blank" rel="noreferrer">Tripe-Slash Directives</a></li></ul><p>createAt: 2023年02月19日14:30:01</p>',66),i=[r];function d(y,D,F,u,f,h){return l(),e("div",null,i)}const m=s(c,[["render",d]]);export{A as __pageData,m as default};
