import{_ as l,c as s,o as e,b as o}from"./app.fbfc4732.js";const h=JSON.parse('{"title":"watch\u9009\u9879","description":"","frontmatter":{"title":"watch\u9009\u9879"},"headers":[{"level":2,"title":"watchFile","slug":"watchfile"},{"level":2,"title":"watchDirectory","slug":"watchdirectory"},{"level":2,"title":"fallbackPolling","slug":"fallbackpolling"},{"level":2,"title":"synchronousWatchDirectory","slug":"synchronouswatchdirectory"},{"level":2,"title":"excludeDirectories","slug":"excludedirectories"},{"level":2,"title":"excludeFiles","slug":"excludefiles"}],"relativePath":"ts/tsconfig/watch/index.md","lastUpdated":1661184443000}'),a={name:"ts/tsconfig/watch/index.md"},n=o(`<nav class="table-of-contents"><ul><li><a href="#watchfile">watchFile</a></li><li><a href="#watchdirectory">watchDirectory</a></li><li><a href="#fallbackpolling">fallbackPolling</a></li><li><a href="#synchronouswatchdirectory">synchronousWatchDirectory</a></li><li><a href="#excludedirectories">excludeDirectories</a></li><li><a href="#excludefiles">excludeFiles</a></li></ul></nav><p>\u4F60\u53EF\u4EE5\u914D\u7F6ETS <code>--watch</code> \u5982\u4F55\u5DE5\u4F5C\u3002\u672C\u8282\u4E3B\u8981\u7528\u4E8E\u5904\u7406 <code>fs.watch</code> \u548C <code>fs.watchFile</code> \u5177\u6709\u9644\u52A0\u7EA6\u675F\u7684\u60C5\u51B5\uFF0C\u4F8B\u5982\u5728 Linux \u4E0A\u3002\u4F60\u53EF\u4EE5\u9605\u8BFB <a href="https://www.typescriptlang.org/docs/handbook/configuring-watch.html" target="_blank" rel="noopener noreferrer">Configuring Watch</a> \u4E86\u89E3\u66F4\u591A\u3002</p><h2 id="watchfile" tabindex="-1"><code>watchFile</code> <a class="header-anchor" href="#watchfile" aria-hidden="true">#</a></h2><p>\u8FD9\u4E2A\u914D\u7F6E\u7528\u4E8E\u5355\u4E2A\u6587\u4EF6\u5982\u4F55\u88AB\u76D1\u6D4B\u7684\u7B56\u7565\u3002</p><ul><li><code>fixedPollingInterval</code>\uFF1A \u4EE5\u56FA\u5B9A\u5468\u671F\uFF0C\u68C0\u6D4B\u6587\u4EF6\u6BCF\u79D2\u53D8\u5316\u591A\u5C11\u6B21</li><li><code>priorityPollingInterval</code>\uFF1A\u68C0\u6D4B\u6BCF\u4E2A\u6587\u4EF61s\u5185\u66F4\u6539\u51E0\u6B21\uFF0C\u4F46\u662F\u4F7F\u7528<code>\u542F\u53D1\u5F0F</code>\u68C0\u67E5\u67D0\u4E9B\u7C7B\u578B\u7684\u6587\u4EF6\u7684\u9891\u7387\u8981\u4F4E\u4E8E\u5176\u4ED6\u7C7B\u578B\u7684\u6587\u4EF6</li><li><code>dynamicPriorityPolling</code>\uFF1A\u4F7F\u7528\u52A8\u6001\u961F\u5217\uFF0C\u4FEE\u6539\u9891\u7387\u4F4E\u7684\u6587\u4EF6\u88AB\u68C0\u6D4B\u7684\u8D8A\u5C11</li><li><code>useFsEvents</code>(\u9ED8\u8BA4)\uFF1A\u5BF9\u6587\u4EF6\u53D8\u5316\uFF0C\u5C1D\u8BD5\u4F7F\u7528\u64CD\u4F5C\u7CFB\u7EDF\u6216\u6587\u4EF6\u7CFB\u7EDF\u539F\u751F\u4E8B\u4EF6\u6765\u68C0\u6D4B</li><li><code>useFsEventsOnParentDirectory</code>\uFF1A\u5C1D\u8BD5\u4F7F\u7528\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u6587\u4EF6\u7CFB\u7EDF\u539F\u751F\u4E8B\u4EF6\u76D1\u542C\u6587\u4EF6\u7236\u76EE\u5F55\u7684\u53D8\u5316</li></ul><div class="tip custom-block"><p class="custom-block-title">\u{1F4A1}</p><p>\u53EF\u80FD\u503C\uFF1A</p><ul><li><code>fixedPollingInterval</code></li><li><code>priorityPollingInterval</code></li><li><code>dynamicPriotityPolling</code></li><li><code>fixedChunkSizePolling</code></li><li><code>useFsEvents</code></li><li><code>useFsEventsOnParentDirectory</code></li></ul></div><h2 id="watchdirectory" tabindex="-1"><code>watchDirectory</code> <a class="header-anchor" href="#watchdirectory" aria-hidden="true">#</a></h2><p>\u5728\u7F3A\u4E4F\u9012\u5F52\u6587\u4EF6\u76D1\u89C6\u529F\u80FD\u7684\u7CFB\u7EDF\u4E0B\uFF0C\u5982\u4F55\u76D1\u89C6\u6574\u4E2A\u76EE\u5F55\u6811\u7684\u7B56\u7565\u3002</p><ul><li><code>fixedPollingInterval</code>: \u4EE5\u56FA\u5B9A\u5468\u671F\uFF0C\u68C0\u6D4B\u6587\u4EF6\u6BCF\u79D2\u53D8\u5316\u591A\u5C11\u6B21</li><li><code>dynamicPriorityPolling</code>\uFF1A \u4F7F\u7528\u52A8\u6001\u961F\u5217\uFF0C\u4FEE\u6539\u9891\u7387\u4F4E\u7684\u76EE\u5F55\u88AB\u68C0\u6D4B\u7684\u8D8A\u5C11</li><li><code>useFsEvents</code> (\u9ED8\u8BA4)\uFF1A\u5C1D\u8BD5\u5BF9\u76EE\u5F55\u53D8\u66F4\u4F7F\u7528\u64CD\u4F5C\u7CFB\u7EDF\u6216\u6587\u4EF6\u7CFB\u7EDF\u539F\u751F\u4E8B\u4EF6</li></ul><div class="tip custom-block"><p class="custom-block-title">\u{1F4A1}</p><p>\u53EF\u80FD\u503C\uFF1A</p><ul><li><code>fixedPollingInterval</code></li><li><code>dynamicPriotityPolling</code></li><li><code>fixedChunkSizePolling</code></li><li><code>useFsEvents</code></li></ul></div><h2 id="fallbackpolling" tabindex="-1"><code>fallbackPolling</code> <a class="header-anchor" href="#fallbackpolling" aria-hidden="true">#</a></h2><p>\u5F53\u4F7F\u7528\u6587\u4EF6\u7CFB\u7EDF\u4E8B\u4EF6\uFF0C\u8FD9\u4E2A\u914D\u7F6E\u9879\u7528\u4E8E\u5F53\u539F\u751F\u4E8B\u4EF6watchers\u7528\u5B8C <code>&amp;|</code> \u4E0D\u652F\u6301\u539F\u751F\u6587\u4EF6watchers\u65F6\uFF0C \u6307\u5B9A\u56DE\u9000\u7684\u8F6E\u8BE2\u7B56\u7565\u3002</p><ul><li><code>fixedPollingInterval</code>\uFF1A\u4EE5\u56FA\u5B9A\u5468\u671F\uFF0C\u68C0\u6D4B\u6587\u4EF6\u6BCF\u79D2\u53D8\u5316\u591A\u5C11\u6B21</li><li><code>priorityPollingInterval</code>: \u68C0\u6D4B\u6587\u4EF6\u6BCF\u79D2\u53D8\u5316\u591A\u5C11\u6B21\uFF0C\u4F46\u662F\u4F7F\u7528<code>\u542F\u53D1\u5F0F</code>\u68C0\u67E5\u67D0\u4E9B\u7C7B\u578B\u7684\u6587\u4EF6\u7684\u9891\u7387\u8981\u4F4E\u4E8E\u5176\u4ED6\u7C7B\u578B\u7684\u6587\u4EF6</li><li><code>dynamicPriorityPolling</code>\uFF1A\u4F7F\u7528\u52A8\u6001\u961F\u5217\uFF0C\u4FEE\u6539\u9891\u7387\u4F4E\u7684\u6587\u4EF6\u88AB\u68C0\u6D4B\u7684\u8D8A\u5C11</li><li><code>synchronousWatchDirectory</code>\uFF1A\u7981\u7528\u5BF9\u76EE\u5F55\u7684\u5EF6\u8FDF\u68C0\u6D4B\u3002\u5EF6\u8FDF\u76D1\u6D4B\u5BF9\u5F88\u591A\u6587\u4EF6\u53EF\u80FD\u540C\u65F6\u53D8\u5316\u5F88\u6709\u7528\uFF08\u6BD4\u5982\uFF1A\u901A\u8FC7\u5141\u8BB8 <code>npm install</code> \uFF0C<code>node_modules</code> \u7684\u53D8\u5316\uFF09\uFF0C\u4F46\u662F\u5BF9\u4E8E\u4E00\u4E9B\u4E0D\u592A\u5E38\u89C1\u7684\u8BBE\u7F6E\uFF0C\u4F60\u53EF\u80FD\u9700\u8981\u4F7F\u7528\u8FD9\u4E2A\u6807\u5FD7\u6765\u7981\u7528\u5B83\u3002</li></ul><div class="tip custom-block"><p class="custom-block-title">\u{1F4A1}</p><p>\u53EF\u80FD\u503C\uFF1A</p><ul><li><code>fixedPollingInterval</code></li><li><code>priorityInterval</code></li><li><code>dynamicPriotityPolling</code></li><li><code>fixedChunkSize</code></li></ul></div><h2 id="synchronouswatchdirectory" tabindex="-1"><code>synchronousWatchDirectory</code> <a class="header-anchor" href="#synchronouswatchdirectory" aria-hidden="true">#</a></h2><p>\u5728\u4E0D\u652F\u6301\u539F\u751F\u9012\u5F52\u76D1\u89C6\u7684\u5E73\u53F0\u4E0A\uFF0C\u540C\u6B65\u8C03\u7528\u56DE\u8C03\u5E76\u66F4\u65B0\u76EE\u5F55\u76D1\u89C6\u7A0B\u5E8F\u7684\u72B6\u6001\u3002\u800C\u4E0D\u662F\u7ED9\u51FA\u4E00\u4E2A\u5C0F\u8D85\u65F6\uFF0C\u4EE5\u5141\u8BB8\u5728\u4E00\u4E2A\u6587\u4EF6\u4E0A\u53EF\u80FD\u53D1\u751F\u591A\u4E2A\u7F16\u8F91\u3002</p><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">watchOptions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">synchronousWatchDirectory</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="excludedirectories" tabindex="-1"><code>excludeDirectories</code> <a class="header-anchor" href="#excludedirectories" aria-hidden="true">#</a></h2><p>\u4F60\u53EF\u4EE5\u4F7F\u7528 excludeFiles \u6781\u5927\u7684\u51CF\u5C11\u4F7F\u7528 <code>--watch</code> \u9009\u9879\u65F6\u76D1\u6D4B\u7684\u6587\u4EF6\u6570\u91CF\u3002\u8FD9\u662F\u4E00\u79CD\u5F88\u6709\u7528\u7684\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u51CF\u5C11TypeScript\u5728Linux\u4E0A\u8DDF\u8E2A\u7684\u6253\u5F00\u6587\u4EF6\u7684\u6570\u91CF\u3002</p><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">watchOptions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">excludeDirectories</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">**/node_modules</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">_build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">temp/*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="excludefiles" tabindex="-1"><code>excludeFiles</code> <a class="header-anchor" href="#excludefiles" aria-hidden="true">#</a></h2><p>\u4F60\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E2A\u914D\u7F6E\u4ECE\u76D1\u89C6\u7684\u6587\u4EF6\u4E2D\u5220\u9664\u4E00\u7EC4\u7279\u5B9A\u7684\u6587\u4EF6\u3002</p><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">watchOptions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">excludeFiles</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">temp/file.ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u539F\u6587\u6863\uFF1A</p><ul><li><a href="https://www.typescriptlang.org/tsconfig#watch-options" target="_blank" rel="noopener noreferrer">Watch Options</a></li></ul><p>2022\u5E7408\u670822\u65E523:42:49</p>`,26),c=[n];function t(i,p,r,d,D,y){return e(),s("div",null,c)}var u=l(a,[["render",t]]);export{h as __pageData,u as default};
