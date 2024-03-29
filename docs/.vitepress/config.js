const nav = [
  { 
    text: '📄ts Docs', 
    items: [
      { text: 'tsconfig', link: '/ts/tsconfig/index' },
      { text: 'd.ts声明文件', link: '/ts/dfile/index' },
      { text: 'reference', link: '/ts/reference/index' },
      { text: '🔥深入理解tsconfig配置', link: '/ts/in-depth/tsconfig-overview' },
    ] 
  },
  { 
    text: '🍬Tricks',
    items: [
      { text: 'Basarat', link: '/tricks/basarat/index' },
    ]
  },
  { text: '🧑‍💻blog', link: '/blog/resource' },
  { text: '🏂TS挑战', link: '/challenge/index' },
  { 
    text: '📚书籍', 
    items: [
      { text: 'TS类型体操', link: '/book/master-ts/2' },
      { text: 'tackle typescript', link: '/book/tackle-ts/index' },
    ]
  },
  {
    text: '🔥常用工具',
    items: [
      { text: 'tsup', link: '/lib/tsup/index' },
      { text: 'tsx', link: '/lib/tsx/index' },
      { text: 'tsc', link: '/lib/tsc' },
    ]
  },
]

const sidebar_doc = {
  '/ts/tsconfig': [ // TSConfig.json 配置文件
    {
      text: 'TSConfig',
      items: [
        { text: 'Introduce', link: '/ts/tsconfig/index' },
      ]
    },
    {
      text: 'Root Fields',
      collapsible: true,
      items: [
        { text: '根字段介绍', link: '/ts/tsconfig/root/index' },
        { text: 'files', link: '/ts/tsconfig/root/files' },
        { text: 'extends', link: '/ts/tsconfig/root/extends' },
        { text: 'include', link: '/ts/tsconfig/root/include' },
        { text: 'exclude', link: '/ts/tsconfig/root/exclude' },
        { text: 'references', link: '/ts/tsconfig/root/references' },
      ]
    },
    {
      text: 'Compiler Options',
      collapsible: true,
      items: [
        { text: '编译选项', link: '/ts/tsconfig/compiler/index' },
        { text: '⚡类型检测', link: '/ts/tsconfig/compiler/type-checking' },
        { text: '⚡模块（modules）', link: '/ts/tsconfig/compiler/modules' },
        { text: '⚡生成产物（Emit）', link: '/ts/tsconfig/compiler/emit' },
        { text: 'JS支持', link: '/ts/tsconfig/compiler/js-support' },
        { text: '编辑器支持', link: '/ts/tsconfig/compiler/editor-support' },
        { text: '⚡互操性约束', link: '/ts/tsconfig/compiler/interop-constraints' },
        { text: '语言和环境', link: '/ts/tsconfig/compiler/lang-and-env' },
        { text: '完整性', link: '/ts/tsconfig/compiler/completeness' },
      ]
    },
    {
      text: 'Watch Options',
      collapsible: true,
      items: [
        {
          text: 'watch配置项', link: '/ts/tsconfig/watch/index'
        },
      ]
    },
    {
      text: 'Type Acquisition',
      collapsible: true,
      items: [
        {
          text: '类型识别', link: '/ts/tsconfig/type-acquisition/index'
        },
      ]
    },
  ],
  '/ts/dfile': [ // TypeScript 声明文件.d.ts
    {
      text: '声明文件',
      items: [
        { text: 'Introduce', link: '/ts/dfile/index' },
        { text: '声明参考手册', link: '/ts/dfile/declaration-reference' },
        { text: '⚡库结构', link: '/ts/dfile/library-structure' },
        { text: '模板 Modules .d.ts', link: '/ts/dfile/templates/modules-d-ts'},
        { text: '模板 Modules Plugin', link: '/ts/dfile/templates/modules-plugin'},
        { text: '模板 Modules Class', link: '/ts/dfile/templates/modules-class'},
        { text: '模板 Modules Function', link: '/ts/dfile/templates/modules-function'},
        { text: '模板 Global .d.ts', link: '/ts/dfile/templates/global-d-ts'},
        { text: '⚡模板 全局修改模块', link: '/ts/dfile/templates/global-modify-module'},
        { text: '⚡可为与不可为', link: '/ts/dfile/do-and-not-do'},
        { text: '⚡深入理解', link: '/ts/dfile/deep-dive'},
        { text: '发布', link: '/ts/dfile/publishing'},
        { text: '使用声明文件', link: '/ts/dfile/consumption'},
      ]
    },
  ],
  '/ts/reference': [
    {
      text: '📚参考手册',
      items: [
        { text: '工具类型', link: '/ts/reference/utility-types' },
        { text: '⚡声明合并', link: '/ts/reference/declaration-merging' },
        { text: '枚举类型', link: '/ts/reference/enums' },
        { text: 'Mixins', link: '/ts/reference/mixins' },
        { text: 'Node中的ESM', link: '/ts/reference/esm-in-nodejs' },
        { text: '⚡Modules', link: '/ts/reference/modules' },
        { text: '三斜线指令', link: '/ts/reference/triple-slashes-directives' },
      ],
    },
  ],
  '/ts/in-depth': [
    {
      text: '深入理解配置',
      items: [
        { text: 'target 和 lib 的作用', link: '/ts/in-depth/target-vs-lib' },
        { text: 'rootDir 生成产物目录', link: '/ts/in-depth/rootDir' },
        { text: 'rootDirs 的含义', link: '/ts/in-depth/rootDirs' },
        { text: 'Strick Options 相关的配置项', link: '/ts/in-depth/strict-options' },
      ]
    },
    {
      text: '博文搬运',
      items: [
        { text: '详解tsconfig.json文件', link: '/ts/in-depth/tsconfig-overview' },
        { text: '⚡TypeScirpt类型声明完全指南', link: '/ts/in-depth/declaration-file-guide' },
        { text: '在TypeScript中使用namespace封装数据', link: '/ts/in-depth/namespace-in-typescript' },
      ]
    }
  ]
}
const sidebar_blog = {
  '/blog/': [
    {
      text: 'Resource',
      items: [
        { text: '资源', link: '/blog/resource' }
      ]
    },
    {
      text: 'blog',
      items: [
        { text: '第一篇blog', link: '/blog/first' }
      ]
    },
    { 
      text: '🚀 好文翻译',
      collapsible: true,
      items: [
        // {
        //   text: 'Path & URL的用法',
        //   link: '/blog/translate/file-system-paths'
        // },
        // {
        //   text: 'FS in Node',
        //   link: '/blog/translate/fs-in-node'
        // },
        // {
        //   text: 'Web Streams on Node',
        //   link: '/blog/translate/web-streams-on-node'
        // },
      ]
    }
  ],
}
const sidebar_book = {
  '/book/tackle-ts': [ // Tackle TypeScript
    { 
      text: 'Tackle TypeScript',
      items: [
        {
          text: '主页',
          link: '/book/patterns/the-node-platform',
        },
      ]
    }
  ],
  '/book/master-ts': [ // TypeScript 类型体操通关秘籍
    {
      text: 'TypeScript 类型体操通关秘籍',
      items: [
        { text: '2.TS必火的原因', link: '/book/master-ts/2' },
        { text: '3.TS类型编程为什么叫类型体操?', link: '/book/master-ts/3' },
        { text: '4.TS支持的类型和类型运算', link: '/book/master-ts/4' },
        { text: '5.套路1 - 模式匹配', link: '/book/master-ts/5' },
        { text: '6.套路2 - 重新构造做变换🔥', link: '/book/master-ts/6' },
        { text: '7.套路3 - 递归复用做循环🔥', link: '/book/master-ts/7' },
        { text: '8.套路4 - 数组长度做计数', link: '/book/master-ts/8' },
        { text: '9.套路5 - 联合分散可简化🔥', link: '/book/master-ts/9' },
        { text: '10.套路6 - 特殊特性要记清', link: '/book/master-ts/10' },
        { text: '11.类型体操顺口溜', link: '/book/master-ts/11' },
        { text: '16.TS新语法：infer extends🍭', link: '/book/master-ts/16' },
        { text: '17.原理篇：逆变、协变、双向协变、不变👩‍🏫', link: '/book/master-ts/17' },
        { text: '23.3种类型来源和3种模块语法📚', link: '/book/master-ts/23' },
        { text: '26.2个真实的TS类型编程案例🧚‍♀️', link: '/book/master-ts/26' },
        { text: '27.TS新语法：satisfies推导🍭', link: '/book/master-ts/27' },
      ]
    }
  ]
}
const sidebar_lib = {
  '/lib/tsup': [
    {
      text: 'tsup@v6.6+',
      items: [
        { text: '官方文档', link: '/lib/tsup/index' }
      ]
    }
  ],
  '/lib/tsx': [
    {
      text: 'tsx',
      items: [
        { text: '官方文档', link: '/lib/tsx/index' }
      ]
    }
  ],
}

const sidebar_tricks = {
  '/tricks/basarat': [
    {
      text: 'Basarat TS Tricks',
      items: [
        { text: 'introduce', link: '/tricks/basarat/index' },
        { text: 'lookup types', link: '/tricks/basarat/lookup-types' },
      ]
    }
  ]
}

const sidebar_challenge = {
  '/challenge/': [
    {
      text: 'TS类型挑战',
      items: [
        { text: 'introduce', link: '/challenge/index' },
      ]
    },
  ]
}

const sidebar = {
  ...sidebar_doc,
  ...sidebar_blog,
  ...sidebar_book,
  ...sidebar_lib,
  ...sidebar_tricks,
  ...sidebar_challenge,
}

export default {
  title: 'Awesome TypeScript',
  description: 'TS相关的一些文档，书籍和资料',
  lastUpdated: true,
  base: '/awesome-typescript/', // 非常重要这个属性！！！
  
  head:[
    ['link', { rel: 'icon', href: '/awesome-typescript/favicon.ico' }]
  ],
  
  themeConfig: {
    logo: '/logo.svg',
    outlineTitle: '目录',
    outline: [2, 3],
    editLink: {
      text: '在GitHub编辑此页',
      pattern: 'https://github.com/jamessawyer/awesome-typescript/edit/main/docs/:path'
    },
    nav,
    sidebar
  },
  markdown: {
    // lineNumbers: true, // 是否显示行号
    // options for markdown-it-toc-done-right
    toc: { level: [1, 2, 3] },
  }
}
