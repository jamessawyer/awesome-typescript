import{_ as s,c as a,o as n,b as l}from"./app.660e8875.js";const A=JSON.parse('{"title":"\u58F0\u660E\u53C2\u8003\u624B\u518C","description":"","frontmatter":{"title":"\u58F0\u660E\u53C2\u8003\u624B\u518C"},"headers":[{"level":2,"title":"\u5305\u542B\u5C5E\u6027\u7684\u5BF9\u8C61","slug":"\u5305\u542B\u5C5E\u6027\u7684\u5BF9\u8C61"},{"level":2,"title":"\u91CD\u8F7D\u51FD\u6570","slug":"\u91CD\u8F7D\u51FD\u6570"},{"level":2,"title":"\u53EF\u590D\u7528\u7C7B\u578B\uFF08Interfaces\uFF09","slug":"\u53EF\u590D\u7528\u7C7B\u578B\uFF08interfaces\uFF09"},{"level":2,"title":"\u53EF\u590D\u7528\u7C7B\u578B\uFF08Type Aliases\uFF09","slug":"\u53EF\u590D\u7528\u7C7B\u578B\uFF08type-aliases\uFF09"},{"level":2,"title":"\u7EC4\u7EC7\u7C7B\u578B","slug":"\u7EC4\u7EC7\u7C7B\u578B"},{"level":2,"title":"\u7C7B","slug":"\u7C7B"},{"level":2,"title":"\u5168\u5C40\u53D8\u91CF","slug":"\u5168\u5C40\u53D8\u91CF"},{"level":2,"title":"\u5168\u5C40\u51FD\u6570","slug":"\u5168\u5C40\u51FD\u6570"}],"relativePath":"ts/dfile/declaration-reference.md","lastUpdated":1662303402000}'),p={name:"ts/dfile/declaration-reference.md"},o=l(`<nav class="table-of-contents"><ul><li><a href="#\u5305\u542B\u5C5E\u6027\u7684\u5BF9\u8C61">\u5305\u542B\u5C5E\u6027\u7684\u5BF9\u8C61</a></li><li><a href="#\u91CD\u8F7D\u51FD\u6570">\u91CD\u8F7D\u51FD\u6570</a></li><li><a href="#\u53EF\u590D\u7528\u7C7B\u578B\uFF08interfaces\uFF09">\u53EF\u590D\u7528\u7C7B\u578B\uFF08Interfaces\uFF09</a></li><li><a href="#\u53EF\u590D\u7528\u7C7B\u578B\uFF08type-aliases\uFF09">\u53EF\u590D\u7528\u7C7B\u578B\uFF08Type Aliases\uFF09</a></li><li><a href="#\u7EC4\u7EC7\u7C7B\u578B">\u7EC4\u7EC7\u7C7B\u578B</a></li><li><a href="#\u7C7B">\u7C7B</a></li><li><a href="#\u5168\u5C40\u53D8\u91CF">\u5168\u5C40\u53D8\u91CF</a></li><li><a href="#\u5168\u5C40\u51FD\u6570">\u5168\u5C40\u51FD\u6570</a></li></ul></nav><p>\u672C\u6307\u5357\u7684\u76EE\u7684\u65E8\u5728\u6559\u4F60\u5982\u4F55\u4E66\u5199\u9AD8\u8D28\u91CF\u7684\u58F0\u660E\u6587\u4EF6\u3002\u672C\u6307\u5357\u901A\u8FC7\u5C55\u793A\u6587\u6863\u7684\u67D0\u4E9BAPI\uFF0C\u5E76\u4F34\u968F\u8BE5API\u7684\u4F7F\u7528\u6837\u4F8B\uFF0C\u4EE5\u53CA\u89E3\u91CA\u5982\u4F55\u4E66\u5199\u76F8\u5BF9\u5E94\u7684\u58F0\u660E\u3002</p><h2 id="\u5305\u542B\u5C5E\u6027\u7684\u5BF9\u8C61" tabindex="-1">\u5305\u542B\u5C5E\u6027\u7684\u5BF9\u8C61 <a class="header-anchor" href="#\u5305\u542B\u5C5E\u6027\u7684\u5BF9\u8C61" aria-hidden="true">#</a></h2><p><code>\u6587\u6863</code>\uFF1A</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5168\u5C40\u53D8\u91CF <code>myLib</code> \u6709\u4E00\u4E2A <code>makeGreeting</code> \u51FD\u6570\u521B\u5EFAgreetings\uFF0C\u5E76\u6709\u4E00\u4E2A <code>numberOfGreetings</code> \u5C5E\u6027\uFF0C\u8868\u793A\u5DF2\u521B\u5EFAgreetings\u7684\u6570\u91CF\u3002</p></div><p><code>\u4EE3\u7801</code>\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> myLib</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">makeGreeting</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello, world</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">The computed greeting is:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> result)</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> myLib</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">numberOfGreetings</span></span>
<span class="line"></span></code></pre></div><p><code>\u58F0\u660E</code>\uFF1A</p><p>\u4F7F\u7528 <code>declare namespace</code> \u58F0\u660E\u901A\u8FC7\u70B9\u4E3B\u673A\u7684\u7C7B\u578B\u6216\u503C\u3002</p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">myLib</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">makeGreeting</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">numberOfGreetings</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u91CD\u8F7D\u51FD\u6570" tabindex="-1">\u91CD\u8F7D\u51FD\u6570 <a class="header-anchor" href="#\u91CD\u8F7D\u51FD\u6570" aria-hidden="true">#</a></h2><p><code>\u6587\u6863</code>\uFF1A</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>getWidget</code> \u51FD\u6570\u63A5\u6536\u4E00\u4E2Anumber\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2AWidget\uFF0C\u6216\u8005\u63A5\u6536\u4E00\u4E2Astring\uFF0C\u8FD4\u56DE\u4E00\u4E2AWidget\u6570\u7EC4\u3002</p></div><p><code>\u4EE3\u7801</code>\uFF1A</p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Widget</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getWidget</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">43</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Widget</span><span style="color:#A6ACCD;">[] </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getWidget</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">all of them</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p><code>\u58F0\u660E</code>\uFF1A</p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getWidget</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Widget</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getWidget</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Widget</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53EF\u590D\u7528\u7C7B\u578B\uFF08interfaces\uFF09" tabindex="-1">\u53EF\u590D\u7528\u7C7B\u578B\uFF08Interfaces\uFF09 <a class="header-anchor" href="#\u53EF\u590D\u7528\u7C7B\u578B\uFF08interfaces\uFF09" aria-hidden="true">#</a></h2><p><code>\u6587\u6863</code>\uFF1A</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5F53\u6307\u5B9A\u4E00\u4E2Agreeting\u65F6\uFF0C\u4F60\u5FC5\u987B\u4F20\u5165\u4E00\u4E2A <code>GreetingSettings</code> \u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u6709\u4E0B\u9762\u5C5E\u6027\uFF1A</p><ul><li><code>greeting</code>: \u5F3A\u5236\u5FC5\u987B\uFF0C\u5B57\u7B26\u4E32</li><li><code>duration</code>: \u53EF\u9009\uFF0C\u65F6\u95F4\u957F\u5EA6\uFF08\u5355\u4F4Dms\uFF09</li><li><code>color</code>: \u53EF\u9009\uFF0C\u5B57\u7B26\u4E32\uFF0C\u6BD4\u5982 <code>&#39;#ff00ff&#39;</code></li></ul></div><p><code>\u4EE3\u7801</code>\uFF1A</p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#82AAFF;">greet</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">greeting</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello world</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">duration</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4000</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p><code>\u58F0\u660E</code>\uFF1A\u4F7F\u7528 <code>interface</code> \u5B9A\u4E49\u5305\u542B\u5C5E\u6027\u7684\u7C7B\u578B</p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GreetingSettings</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">greeting</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">duration</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">color</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">greet</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">setting</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GreetingSettings</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53EF\u590D\u7528\u7C7B\u578B\uFF08type-aliases\uFF09" tabindex="-1">\u53EF\u590D\u7528\u7C7B\u578B\uFF08Type Aliases\uFF09 <a class="header-anchor" href="#\u53EF\u590D\u7528\u7C7B\u578B\uFF08type-aliases\uFF09" aria-hidden="true">#</a></h2><p><code>\u6587\u6863</code>\uFF1A</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5728\u4EFB\u4F55\u9700\u8981<code>greeting</code>\u7684\u5730\u65B9\uFF0C\u90FD\u53EF\u4EE5\u63D0\u4F9B\u4E00\u4E2A\u5B57\u7B26\u4E32\u3001\u8FD4\u56DE\u5B57\u7B26\u4E32\u7684\u51FD\u6570\u6216Greeter\u5B9E\u4F8B\u3002</p></div><p><code>\u4EE3\u7801</code>\uFF1A</p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getGreeting</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">howdy</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyGreeter</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Greeter</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">greet</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">greet</span><span style="color:#A6ACCD;">(getGreeting)</span></span>
<span class="line"><span style="color:#82AAFF;">greet</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">MyGreeter</span><span style="color:#A6ACCD;">())</span></span>
<span class="line"></span></code></pre></div><p><code>\u58F0\u660E</code>\uFF1A\u4F60\u53EF\u4EE5\u4F7F\u7528\u7C7B\u578B\u522B\u540D\u5BF9\u7C7B\u578B\u8FDB\u884C\u7B80\u5199\u{1F4A1}</p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GreetingLike</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyGreeter</span></span>
<span class="line"><span style="color:#FFCB6B;">delcare</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">greet</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">g</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GreetingLike</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"></span></code></pre></div><h2 id="\u7EC4\u7EC7\u7C7B\u578B" tabindex="-1">\u7EC4\u7EC7\u7C7B\u578B <a class="header-anchor" href="#\u7EC4\u7EC7\u7C7B\u578B" aria-hidden="true">#</a></h2><p><code>\u6587\u6863</code>\uFF1A</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>greeter</code> \u5BF9\u8C61\u53EF\u4EE5\u8BB0\u5F55\u5230\u6587\u4EF6\u6216\u8005\u663E\u793Aalert\u3002\u4F60\u53EF\u4EE5\u7ED9 <code>.log(...)</code> \u63D0\u4F9B <code>LogOptions</code> \uFF0C\u7ED9 <code>.alert(...)</code> \u63D0\u4F9B alert <code>options</code>\u3002</p></div><p><code>\u4EE3\u7801</code>\uFF1A</p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> g </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Greeter</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">g</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">verbose</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">g</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">alert</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">modal</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Current Greeting</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p><code>\u58F0\u660E</code>\uFF1A \u4F7F\u7528namespaces\u7EC4\u7EC7\u7C7B\u578B</p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> namespcae GreetingLib </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">LogOptions</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    verbose</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">AlertOptions</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    modal</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    title</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    color</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u{1F680} \u4F60\u4E5F\u53EF\u4EE5\u5728\u4E00\u4E2A\u58F0\u660E\u4E2D\u521B\u5EFA\u5D4C\u5957\u7684namespaces\uFF1A</p><div class="language-typescript"><span class="copy"></span><div class="highlight-lines"><br><div class="highlighted">\xA0</div><br><br><br><br><br><br><br><br><br><br></div><pre><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> namespcae GreetingLib</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Options </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u901A\u8FC7 GreetingLib.Options.Log \u5F15\u7528</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Log</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    verbose</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Alert</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    modal</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    title</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    color</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u7C7B" tabindex="-1">\u7C7B <a class="header-anchor" href="#\u7C7B" aria-hidden="true">#</a></h2><p><code>\u6587\u6863</code>\uFF1A</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u4F60\u53EF\u4EE5\u901A\u8FC7\u5B9E\u4F8B\u5316 <code>Greeter</code> \u5BF9\u8C61\u521B\u5EFA\u4E00\u4E2Agreeter\uFF0C\u6216\u8005\u901A\u8FC7\u7EE7\u627F\u5B83\u521B\u5EFA\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684greeter\u3002</p></div><p><code>\u4EE3\u7801</code>\uFF1A</p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> myGreeter </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Greeter</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello world</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">myGreeter</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">greeting </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">howdy</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">myGreeter</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">showGreeting</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SpecialGreeater</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Greeter</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">super</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">spicial greeter</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><code>\u58F0\u660E</code>\uFF1A \u4F7F\u7528 <code>declare class</code> \u6765\u63CF\u8FF0\u4E00\u4E2A\u7C7B\uFF0C\u6216\u8005\u50CF\u7C7B\u7684\u5BF9\u8C61\u3002\u7C7B\u53EF\u4EE5\u6709\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u4EE5\u53CA\u4E00\u4E2A\u6784\u9020\u5668</p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">delcare </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Greeter</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">greeting</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">greeting</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">showGreeting</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5168\u5C40\u53D8\u91CF" tabindex="-1">\u5168\u5C40\u53D8\u91CF <a class="header-anchor" href="#\u5168\u5C40\u53D8\u91CF" aria-hidden="true">#</a></h2><p><code>\u6587\u6863</code>\uFF1A</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5168\u5C40\u53D8\u91CF <code>foo</code> \u5305\u542Bwidgets\u6570\u91CF</p></div><p><code>\u4EE3\u7801</code>\uFF1A</p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Half the number of widgets is </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> foo </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p><code>\u58F0\u660E</code>\uFF1A</p><p>\u53EF\u4EE5\u4F7F\u7528 <code>declare var</code> \u58F0\u660E\u53D8\u91CF\u3002\u5982\u679C\u53D8\u91CF\u662F\u53EA\u8BFB\u7684\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>declare const</code> \u3002\u5982\u679C\u53D8\u91CF\u4F7F\u7528\u5757\u72B6\u4F5C\u7528\u57DF\uFF08<code>block-scoped</code>\uFF09\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528 <code>declare let</code>\u3002</p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// widgets\u6570\u91CF</span></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> foo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5168\u5C40\u51FD\u6570" tabindex="-1">\u5168\u5C40\u51FD\u6570 <a class="header-anchor" href="#\u5168\u5C40\u51FD\u6570" aria-hidden="true">#</a></h2><p><code>\u6587\u6863</code>\uFF1A</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u4F60\u53EF\u4EE5\u8C03\u7528\u51FD\u6570 <code>greet</code>\uFF0C\u5B83\u53C2\u6570\u4E3A\u5B57\u7B26\u4E32</p></div><p><code>\u4EE3\u7801</code>\uFF1A</p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#82AAFF;">greet</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hi</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p><code>\u58F0\u660E</code>\uFF1A</p><p>\u4F7F\u7528 <code>declare function</code> \u58F0\u660E\u51FD\u6570\uFF1A</p><div class="language-typescript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">greet</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">greeting</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u539F\u6587\u6863\uFF1A</p><ul><li><a href="https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html" target="_blank" rel="noopener noreferrer">Declaration Reference</a></li></ul><p>2022\u5E7408\u670827\u65E523:57:49</p>`,66),e=[o];function c(t,r,y,F,D,C){return n(),a("div",null,e)}var d=s(p,[["render",c]]);export{A as __pageData,d as default};
