import{_ as s,c as p,o as t,N as e}from"./chunks/framework.90b54eba.js";const a="/awesome-typescript/assets/27-1.2fc47ab2.webp",o="/awesome-typescript/assets/27-2.a651db14.webp",c="/awesome-typescript/assets/27-3.1ea20ab8.webp",n="/awesome-typescript/assets/27-4.aa727f52.webp",i="/awesome-typescript/assets/27-5.b0954558.webp",r="/awesome-typescript/assets/27-6.09901cf5.webp",l="/awesome-typescript/assets/27-7.49ea93ca.webp",m="/awesome-typescript/assets/27-8.d5d0dadb.webp",d="/awesome-typescript/assets/27-9.41c7a3ed.webp",g="/awesome-typescript/assets/27-10.c0543617.webp",_="/awesome-typescript/assets/27-11.d0fbdfae.webp",y="/awesome-typescript/assets/27-12.df51df4c.webp",b="/awesome-typescript/assets/27-13.eea2397c.webp",w="/awesome-typescript/assets/27-14.baa71080.webp",f="/awesome-typescript/assets/27-15.ac01f5d1.webp",h="/awesome-typescript/assets/27-16.cb3926e4.webp",u="/awesome-typescript/assets/27-17.ad6d08f6.webp",C="/awesome-typescript/assets/27-18.68781c6d.webp",D="/awesome-typescript/assets/27-19.1e983049.webp",N=JSON.parse('{"title":"satisfies","description":"","frontmatter":{"title":"satisfies"},"headers":[],"relativePath":"book/master-ts/27.md","lastUpdated":1679279862000}'),k={name:"book/master-ts/27.md"},A=e('<p>用了 TypeScript 之后，我们就可以声明类型，然后给 js 变量加上这个类型。</p><p>比如这样：就有<strong>类型提示</strong>了</p><p><img src="'+a+'" alt="ts提示"></p><p>也会做<strong>类型检查</strong>：</p><p><img src="'+o+'" alt="ts类型检查"></p><p>但也不是所有的变量都要<strong>手动声明类型</strong>，因为 ts 会做自动类型推导：</p><p><img src="'+c+'" alt="自动推断类型"></p><p>同样是有类型提示和检查的：</p><p><img src="'+n+'" alt="ts提示"></p><p><img src="'+i+'" alt="ts类型检查"></p><p>而且推导的时候还可以加上 <code>as const</code>，这样推导出的是<strong>字面量类型</strong>（不过会有 <code>readonly</code> 的修饰）：</p><p><img src="'+r+'" alt="as const"></p><p>🤔那问题来了，<strong>什么时候手动声明类型，什么时候用自动推导呢？</strong></p><p>比如上面这个 obj，b 属性推导出的是 string，但其实也可能是一个 number。但给它赋值 number 会报错：</p><p><img src="'+l+'" alt="检查"></p><p>这种就得手动声明类型了：</p><p><img src="'+m+'" alt="手动声明"></p><p>还有，函数的参数，只有调用的时候才能知道参数具体的类型，这时候怎么自动推导？</p><p>没办法推导。</p><p>所以也得手动声明类型：</p><p><img src="'+d+'" alt="函数参数也需要手动声明"></p><p>总之，<strong>ts 代码包括自动推导出的类型、手动声明的类型两种。</strong></p><p>自动类型推导省去了很多写类型的麻烦，但很多情况下还是要手动声明类型的。</p><p>但手动声明的类型是有局限性的，比如这样的类型：</p><ul><li><code>key:string</code> 那部分是索引签名，也就是任意的 key 为 string，value 为任意类型的索引都可以加。</li></ul><p>它是可以检查出类型错误，也支持扩展任意索引。</p><p><img src="'+g+'" alt="索引类型"></p><p>但它只会提示声明的索引，<strong>动态添加</strong>的那些是不会提示的：</p><p><img src="'+_+'" alt="索引类型手动添加类型的局限性"></p><p>这样其实有的时候并不方便。</p><p>而如果自动推导呢？</p><p><img src="'+y+'" alt="索引类型自动类型会有提示"></p><p>这样就可以提示所有的索引了。</p><p>但是呢，其中 <code>b</code> 的类型又不对，还是需要声明类型来约束。</p><p>是不是就很头疼？😅</p><p><strong>用声明的方式少了具体赋值的变量类型的信息，用自动推导的方式又不能保证类型是对的。</strong></p><p>有没有两全其美的办法呢？</p><p>4.9 之前还真没有。</p><p>不过 <code>TS v4.9</code> 加入了一个 <code>satisfies</code> 的新语法。</p><p>这样用：</p><p><img src="'+b+'" alt="satisfies"></p><p>不需要给变量声明这个类型了，用自动推导出来的类型，这样提示就是根据具体的值来的。</p><p>而且，还有了声明的方式的类型检查😎。</p><p><img src="'+w+'" alt="satisfies"></p><p>是不是两全其美！</p><p>这就是为什么 ts 要增加 <code>satisfies</code> 这个语法。</p><p>它的作用就是<strong>让你用自动推导出的类型，而不是声明的类型，增加灵活性，同时还可以对这个推导出的类型做类型检查，保证安全。</strong></p><p>但是，<code>satisfies</code> 的方式也有它的问题，比如这里用了推导出的类型：</p><p><img src="'+f+'" alt="satisfies导致无法动态扩展索引类型"></p><p><strong>那就不能动态扩展索引了：</strong></p><p><img src="'+h+'" alt="satisfies导致无法动态扩展索引类型"></p><p>而如果是声明的那种索引签名，是支持扩展的😅：</p><p><img src="'+u+'" alt="不使用satisfies则可动态扩展"></p><p>所以，具体什么时候用声明的类型，什么时候用推导出的类型 + <code>satisfies</code>，还是要看情况的。</p><p>这个新语法还是很有用的，估计以后在代码里会经常看到。</p><h2 id="npm-查看版本命令tips" tabindex="-1">npm 查看版本命令tips <a class="header-anchor" href="#npm-查看版本命令tips" aria-label="Permalink to &quot;npm 查看版本命令tips&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>原文写作时间是在 <code>typescript v4.9</code> 发布之前，而目前ts已经 <code>v5.0.2</code>了， 因此下面内容和原文有所不同。</p></div><p>可使用 <code>npm dist-tag ls</code> 查看npm包最新版本和beta版本，而 <code>npm view [package] versions --json</code> 可以查看package所有版本</p><p><img src="'+C+'" alt="npm dist-tag ls命令"></p><p>可以看出typescript目前最新版本是 <code>v5.0.2</code>，因此使用 <code>satisfies</code> 完全是没有问题的。</p><p>说点题外话，这个 tag 是怎么打上的呢？</p><p>发包的时候会用 npm publish，这种会自动打上 latest 的 tag。</p><p>也可以手动 <code>npm publish --tags beta</code>，这样打的就是 beta 的 tag了。</p><p>除了发包的时候可以指定 tag，平时也可以通过 npm dist-tag 命令来给某个版本的包打上 tag：</p><p><img src="'+D+`" alt="npm dist-tag ls命令"></p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>TypeScript 中变量的类型有两种，一种是手动声明的，一种是自动推导的。</p><ul><li><p>大多数情况下，不用手动声明类型，用自动推导的就行，比较方便。</p></li><li><p>但像函数参数、需要约束的变量类型等情况下就得手动声明了。</p></li><li><p>有的时候还是自动推导出的类型更合适一些，但是还需要通过声明的方式对其中的类型做约束。</p></li></ul><p>不能两全其美。</p><p>所以 ts 加入了 <code>satisfies</code> 的语法，这样就可以用自动推导出的类型了，它也可以加上类型的约束🎉。</p><p><strong>算是融合了自动推导的类型和手动声明的类型的优点。</strong></p><p>我是用手动声明的类型，还是自动推导的类型 + satiesfies 呢？这是个问题。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>另外npm相关的2个命令 ：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 显示最新版本，beta版本，rc， next版本</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dist-tag</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ls</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">package</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示package所有版本</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">view</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">package</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">versions</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--json</span></span>
<span class="line"></span></code></pre></div></div><p>原文链接：</p><ul><li><a href="https://juejin.cn/post/7186991340347981882" target="_blank" rel="noreferrer">TypeScript 新语法 satisfies：用声明还是用推导？这是个问题 - 神光@juejin</a></li><li><a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#the-satisfies-operator" target="_blank" rel="noreferrer">TypeScript satisfies Operator - TS Docs</a></li></ul><p>2023年03月20日10:14:09</p>`,76),v=[A];function F(T,S,E,j,x,B){return t(),p("div",null,v)}const q=s(k,[["render",F]]);export{N as __pageData,q as default};
