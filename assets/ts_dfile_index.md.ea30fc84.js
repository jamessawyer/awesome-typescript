import{_ as e,c as a,o as i,N as n}from"./chunks/framework.845f34fe.js";const m=JSON.parse(`{"title":"声明文件简介","description":"","frontmatter":{"title":"声明文件简介"},"headers":[{"level":2,"title":"声明参考手册（Declaration Reference）","slug":"声明参考手册-declaration-reference","link":"#声明参考手册-declaration-reference","children":[]},{"level":2,"title":"库结构（Library Structure）","slug":"库结构-library-structure","link":"#库结构-library-structure","children":[]},{"level":2,"title":"可为与不可为（Do's and Don'ts）","slug":"可为与不可为-do-s-and-don-ts","link":"#可为与不可为-do-s-and-don-ts","children":[]},{"level":2,"title":"深入（Deep Dive）","slug":"深入-deep-dive","link":"#深入-deep-dive","children":[]},{"level":2,"title":"发布到npm（Publish to npm）","slug":"发布到npm-publish-to-npm","link":"#发布到npm-publish-to-npm","children":[]},{"level":2,"title":"找到和安装声明文件（Find & Install Declaration Files）","slug":"找到和安装声明文件-find-install-declaration-files","link":"#找到和安装声明文件-find-install-declaration-files","children":[]}],"relativePath":"ts/dfile/index.md","lastUpdated":1678774012000}`),t={name:"ts/dfile/index.md"},l=n('<nav class="table-of-contents"><ul><li><a href="#声明参考手册-declaration-reference">声明参考手册（Declaration Reference）</a></li><li><a href="#库结构-library-structure">库结构（Library Structure）</a></li><li><a href="#可为与不可为-do-s-and-don-ts">可为与不可为（Do&#39;s and Don&#39;ts）</a></li><li><a href="#深入-deep-dive">深入（Deep Dive）</a></li><li><a href="#发布到npm-publish-to-npm">发布到npm（Publish to npm）</a></li><li><a href="#找到和安装声明文件-find-install-declaration-files">找到和安装声明文件（Find &amp; Install Declaration Files）</a></li></ul></nav><p>声明文件章节用于帮助你写出高质量的TS声明文件（<code>Declaration File</code>）。需要对基础的类型，模块有基本的了解。</p><p>学习 <code>.d.ts</code> 如何工作的最常见办法就是对没有类型的npm包输入类型。这种情况，你可以直接学习 <a href="./templates/modules-d-ts.html">Modules .d.ts</a> 章节。</p><p>声明文件章节可以划分为以下几个部分。</p><h2 id="声明参考手册-declaration-reference" tabindex="-1">声明参考手册（Declaration Reference） <a class="header-anchor" href="#声明参考手册-declaration-reference" aria-hidden="true">#</a></h2><p>当我们只有底层库的例子来指导我们时，我们经常会遇到编写声明文件的问题。<a href="./declaration-reference.html">声明参考手册</a> 小结展示很多通用API模式，以及每种模式该如何写声明。该指南针对还不熟悉TypeScript语言的新手。</p><h2 id="库结构-library-structure" tabindex="-1">库结构（Library Structure） <a class="header-anchor" href="#库结构-library-structure" aria-hidden="true">#</a></h2><p><a href="./library-structure.html">库结构</a> 小节帮助我们理解常见库格式，以及对每种格式该如何书写合适的声明文件。如果你正编辑已有的文件，你可能不需要阅读本小结。强烈建议新声明文件的作者阅读本节，以正确理解库的格式如何影响声明文件的编写。😎</p><p>在模板小结，你可以找到一些声明文件，并用它们当做是写新的声明文件的起点。如果你已经知道你的结构是什么了，可以在侧边栏查看 d.ts 模板小节。</p><h2 id="可为与不可为-do-s-and-don-ts" tabindex="-1">可为与不可为（Do&#39;s and Don&#39;ts） <a class="header-anchor" href="#可为与不可为-do-s-and-don-ts" aria-hidden="true">#</a></h2><p>声明文件中很多常见错误可以轻松避免。 <a href="./do-and-not-do.html">Do&#39;s and Don&#39;ts</a> 小节帮助你识别常见错误，描述如何检测它们，以及如何修复它们。</p><p>每个人都应该阅读本小节，以避免常见错误🚀。</p><h2 id="深入-deep-dive" tabindex="-1">深入（Deep Dive） <a class="header-anchor" href="#深入-deep-dive" aria-hidden="true">#</a></h2><p>对声明文件底层运作机制感兴趣的老手，<a href="./deep-dive.html">Deep Dive</a> 小节介绍了很多书写声明文件的高级概念，以及如何利用这些高级概念创建更干净直观的声明文件。</p><h2 id="发布到npm-publish-to-npm" tabindex="-1">发布到npm（Publish to npm） <a class="header-anchor" href="#发布到npm-publish-to-npm" aria-hidden="true">#</a></h2><p><a href="./publishing.html">Publishing</a> 小节解释如何发布自己的声明文件到npm package，以及如何管理依赖包。</p><h2 id="找到和安装声明文件-find-install-declaration-files" tabindex="-1">找到和安装声明文件（Find &amp; Install Declaration Files） <a class="header-anchor" href="#找到和安装声明文件-find-install-declaration-files" aria-hidden="true">#</a></h2><p>对JS库用户，<a href="./consumption.html">Consumption</a> 小节提供了一些用于定位和安装相应声明文件的简单步骤。</p><p>2022年08月27日23:17:46</p>',19),r=[l];function d(s,o,c,p,h,u){return i(),a("div",null,r)}const _=e(t,[["render",d]]);export{m as __pageData,_ as default};
