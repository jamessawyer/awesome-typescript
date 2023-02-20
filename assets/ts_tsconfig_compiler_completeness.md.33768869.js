import{_ as e,c as t,o as i,d as c}from"./app.a2f7fa70.js";const f=JSON.parse('{"title":"完整性","description":"","frontmatter":{"title":"完整性"},"headers":[{"level":2,"title":"skipDefaultLibCheck","slug":"skipdefaultlibcheck","link":"#skipdefaultlibcheck","children":[]},{"level":2,"title":"skipLibCheck 👍","slug":"skiplibcheck-👍","link":"#skiplibcheck-👍","children":[]}],"relativePath":"ts/tsconfig/compiler/completeness.md","lastUpdated":1676788701000}'),s={name:"ts/tsconfig/compiler/completeness.md"},l=c('<nav class="table-of-contents"><ul><li><a href="#skipdefaultlibcheck">skipDefaultLibCheck</a></li><li><a href="#skiplibcheck-👍">skipLibCheck 👍</a></li></ul></nav><h2 id="skipdefaultlibcheck" tabindex="-1"><code>skipDefaultLibCheck</code> <a class="header-anchor" href="#skipdefaultlibcheck" aria-hidden="true">#</a></h2><p>请使用下面的 <a href="#skiplibcheck-%F0%9F%91%8D">skipLibCheck</a> 。对默认库声明文件跳过类型检查。</p><h2 id="skiplibcheck-👍" tabindex="-1"><code>skipLibCheck</code> 👍 <a class="header-anchor" href="#skiplibcheck-👍" aria-hidden="true">#</a></h2><p>对声明文件跳过类型检查。</p><p>以类型系统的精确性作为代价，节省编译时间😎。例如，两个库可以以不一致的方式定义同一类型的两个副本。TypeScript不会对所有的<code>d.ts</code>文件进行全面检查，而是会对你应用中使用到的类型进行类型检查。</p><p>你可能会用到 <code>skipLibCheck</code> 的一个常见场景是，在 <code>node_modules</code> 中对一个库存在2个类型副本。在这种情况下，你可能需要使用 <a href="https://yarnpkg.com/lang/en/docs/selective-version-resolutions/" target="_blank" rel="noreferrer">yarn resolutions</a> 这样的功能，确保你只依赖其中某一个副本或者通过理解依赖关系解决方案，研究如何确保只有一个副本，从而在不使用其他工具的情况下修复问题。</p><p>另一种可能是，当你在不同的TypeScript版本之间迁移时，这些更改会导致node_modules和JS标准库崩溃，而你不想在TypeScript更新期间处理这些问题。</p><p>注意，如果这些问题来自于TS标准库，你可以使用 <a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html#supporting-lib-from-node_modules" target="_blank" rel="noreferrer">TypeScript4.5的lib替换技术</a> 替换该库。</p><div class="tip custom-block"><p class="custom-block-title">💡</p><p>🚀 推荐开启</p></div><p>原文档：</p><ul><li><a href="https://www.typescriptlang.org/tsconfig#Completeness_6257" target="_blank" rel="noreferrer">Completeness</a></li></ul><p>2022年08月27日22:49:30</p>',13),a=[l];function p(o,r,n,d,h,k){return i(),t("div",null,a)}const b=e(s,[["render",p]]);export{f as __pageData,b as default};
