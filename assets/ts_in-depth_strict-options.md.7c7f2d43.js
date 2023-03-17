import{_ as s,c as n,o as a,N as l}from"./chunks/framework.90b54eba.js";const A=JSON.parse('{"title":"strict options","description":"","frontmatter":{"title":"strict options"},"headers":[],"relativePath":"ts/in-depth/strict-options.md","lastUpdated":1679023713000}'),o={name:"ts/in-depth/strict-options.md"},p=l(`<p>它位于 <code>tsconfig.json</code> 的 <code>compilerOptions</code>中，功能是 <a href="./../tsconfig/compiler/type-checking.html">Type Checking</a></p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">compilerOptions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">/* Type Checking */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">strict</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span><span style="color:#A6ACCD;">                                      </span><span style="color:#676E95;font-style:italic;">/* Enable all strict type-checking options. */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// &quot;noImplicitAny&quot;: true,                            /* Enable error reporting for expressions and declarations with an implied &#39;any&#39; type. */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// &quot;strictNullChecks&quot;: true,                         /* When type checking, take into account &#39;null&#39; and &#39;undefined&#39;. */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// &quot;strictFunctionTypes&quot;: true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// &quot;strictBindCallApply&quot;: true,                      /* Check that the arguments for &#39;bind&#39;, &#39;call&#39;, and &#39;apply&#39; methods match the original function. */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// &quot;strictPropertyInitialization&quot;: true,             /* Check for class properties that are declared but not set in the constructor. */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// &quot;noImplicitThis&quot;: true,                           /* Enable error reporting when &#39;this&#39; is given the type &#39;any&#39;. */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// &quot;useUnknownInCatchVariables&quot;: true,               /* Default catch clause variables as &#39;unknown&#39; instead of &#39;any&#39;. */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// &quot;alwaysStrict&quot;: true,                             /* Ensure &#39;use strict&#39; is always emitted. */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// &quot;noUnusedLocals&quot;: true,                           /* Enable error reporting when local variables aren&#39;t read. */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// &quot;noUnusedParameters&quot;: true,                       /* Raise an error when a function parameter isn&#39;t read. */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// &quot;exactOptionalPropertyTypes&quot;: true,               /* Interpret optional property types as written, rather than adding &#39;undefined&#39;. */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// &quot;noImplicitReturns&quot;: true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// &quot;noFallthroughCasesInSwitch&quot;: true,               /* Enable error reporting for fallthrough cases in switch statements. */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// &quot;noUncheckedIndexedAccess&quot;: true,                 /* Add &#39;undefined&#39; to a type when accessed using an index. */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// &quot;noImplicitOverride&quot;: true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// &quot;noPropertyAccessFromIndexSignature&quot;: true,       /* Enforces using indexed accessors for keys declared using an indexed type. */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// &quot;allowUnusedLabels&quot;: true,                        /* Disable error reporting for unused labels. */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// &quot;allowUnreachableCode&quot;: true,                     /* Disable error reporting for unreachable code. */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><a href="https://maxoid.io/how-to-configure-tsconfigjson-typescript-strict-options/" target="_blank" rel="noreferrer">How To Configure tsconfig.json: TypeScript Strict options - @maxoid</a> 本文介绍了最常用的一些类型检测项的作用：</p><ul><li><p><code>useUnknownInCatchVariables</code> 用于对 <code>try - catch(error)</code> 中的 <code>error</code>，默认类型是 <code>any</code>, 开启后，将其变为 <code>unknown</code> 类型</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">catch</span><span style="color:#A6ACCD;">(e) </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// e 是 \`any\` 类型</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">trim</span><span style="color:#F07178;">())</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 开启后</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">catch</span><span style="color:#A6ACCD;">(e) </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// e 是 \`unknown\` 类型</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">e</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">instanceof</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Error</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">message</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li><li><p><code>noImplicitAny</code> 禁用隐式any</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 开启后 data隐式any类型将报错</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// error TS7006: Parameter &#39;data&#39; implicitly has an &#39;any&#39; type.</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">printData</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">data</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// ![code error]</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li><li><p><code>strictNullChecks</code> 对 <code>null | undefined</code> 值在使用前进行校验</p></li><li><p><code>strictBindCallApply</code> 对传入 <code>bind() | call() | apply()</code> 方法的context进行校验</p></li><li><p><code>strictFunctionTypes</code> 严格函数签名类型</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">loggerFn</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 开启后报错</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> logTransaction</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">loggerFn</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">[</span><span style="color:#89DDFF;">\${</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toDateString</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">] </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">trim</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">}\`</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">logTransaction</span><span style="color:#A6ACCD;">(transactionId)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div></li><li><p><code>noImplicitThis</code> 对隐式的 <code>this</code> 进行报错</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> createCharacter </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">level</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    label</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">[</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">level</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> lvl] </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">}\`</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    info</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">prefix</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// TypeError: Cannot read property &#39;label&#39; of undefined</span></span>
<span class="line highlighted error"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">prefix</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">: </span><span style="color:#89DDFF;">\${</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">label</span><span style="color:#89DDFF;">}\`</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 修正方法，将其变为arrow function</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> createCharacter </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">level</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    label</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">[</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">level</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> lvl] </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">}\`</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    info</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">prefix</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// TypeError: Cannot read property &#39;label&#39; of undefined</span></span>
<span class="line highlighted error"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">prefix</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">: </span><span style="color:#89DDFF;">\${</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">label</span><span style="color:#89DDFF;">}\`</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div></li><li><p><code>strictPropertyInitialization</code> 针对Class，要求属性必须包含初始值或者用构造函数进行赋值</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Character</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// error TS2564: Property &#39;name&#39; has no initializer and is not definitely assigned in the constructor.</span></span>
<span class="line highlighted error"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//  error TS2564: Property &#39;level&#39; has no initializer and is not definitely assigned in the constructor.</span></span>
<span class="line highlighted error"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">level</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">greeting</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">callerName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">[</span><span style="color:#89DDFF;">\${</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">level</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">] </span><span style="color:#89DDFF;">\${</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">: Hello, </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">callerName</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">!</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li><li><p><code>alwaysStrict</code> 总是运行在严格模式下，会给源文件的最上面都加上 <code>&quot;use strict;&quot;</code></p></li></ul><p>而使用 <code>strict: true</code> 会开启上面所有的配置项，不用一个一个的去设置。</p><p>2023年02月28日15:13:16</p>`,6),e=[p];function t(c,r,y,i,D,F){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{A as __pageData,d as default};