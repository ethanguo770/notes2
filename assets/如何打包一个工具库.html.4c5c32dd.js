import{_ as v}from"./plugin-vue_export-helper.21dcd24c.js";import{r as o,o as m,c as b,b as a,w as p,a as s,e as t,d as n}from"./app.071c12c6.js";const q={},h=t('<h2 id="\u4E00\u3001\u76EE\u7684" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u76EE\u7684" aria-hidden="true">#</a> \u4E00\u3001\u76EE\u7684</h2><p>\u51CF\u5C11\u91CD\u590D\uFF0C\u5FEB\u901F\u5B9E\u73B0\u7EC4\u4EF6\u590D\u7528\uFF0C\u62D2\u7EDD\u91CD\u590D\u9020\u8F6E\u5B50</p><blockquote><p>Don&#39;t repeat yourself</p></blockquote><h2 id="\u4E8C\u3001\u51C6\u5907\u5DE5\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u51C6\u5907\u5DE5\u4F5C" aria-hidden="true">#</a> \u4E8C\u3001\u51C6\u5907\u5DE5\u4F5C</h2><h3 id="_1-\u6253\u5305\u5DE5\u5177\u5BF9\u6BD4" tabindex="-1"><a class="header-anchor" href="#_1-\u6253\u5305\u5DE5\u5177\u5BF9\u6BD4" aria-hidden="true">#</a> 1. \u6253\u5305\u5DE5\u5177\u5BF9\u6BD4</h3><table><thead><tr><th></th><th>webpack</th><th>rollup</th></tr></thead><tbody><tr><td>\u6267\u884C\u65F6\u95F4</td><td>71ms</td><td>17ms</td></tr><tr><td>\u6587\u4EF6\u5927\u5C0F</td><td>389KB</td><td>262KB</td></tr></tbody></table>',6),g=t('<div class="custom-container info"><p class="custom-container-title">rollup \u660E\u663E\u80DC\u51FA, \u6700\u4E3B\u8981\u662F rollup \u6253\u5305\u901F\u5EA6\u5FEB\u5440</p></div><h3 id="_2-\u8C01\u518D\u7528" tabindex="-1"><a class="header-anchor" href="#_2-\u8C01\u518D\u7528" aria-hidden="true">#</a> 2. \u8C01\u518D\u7528?</h3><p>\u867D\u7136 rollup \u51FA\u6765\u7684\u6BD4\u8F83\u665A\uFF0C\u603B\u4F53\u751F\u6001\u53EF\u80FD\u4E0D\u5982 webpack\uFF0C\u4F46\u4E5F\u6709\u5F88\u591A\u4F18\u79C0\u7684\u6846\u67B6\u5728\u4F7F\u7528\u5B83</p><ul><li>vue</li><li>vite</li><li>pinia</li><li>redux</li></ul><h2 id="\u4E09\u3001\u76F4\u63A5\u5F00\u5E72" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u76F4\u63A5\u5F00\u5E72" aria-hidden="true">#</a> \u4E09\u3001\u76F4\u63A5\u5F00\u5E72</h2><h3 id="_1-\u5DE5\u5177\u5E93\u6709\u54EA\u4E9B\u90E8\u5206\u7EC4\u6210" tabindex="-1"><a class="header-anchor" href="#_1-\u5DE5\u5177\u5E93\u6709\u54EA\u4E9B\u90E8\u5206\u7EC4\u6210" aria-hidden="true">#</a> 1. \u5DE5\u5177\u5E93\u6709\u54EA\u4E9B\u90E8\u5206\u7EC4\u6210 \uFF1F</h3>',6),y=t(`<h3 id="_2-\u5DE5\u5177\u5E93\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#_2-\u5DE5\u5177\u5E93\u521D\u59CB\u5316" aria-hidden="true">#</a> 2. \u5DE5\u5177\u5E93\u521D\u59CB\u5316</h3><p>2.1 \u521D\u59CB\u5316\u4ED3\u5E93\uFF0C\u5E76\u8C03\u6574 <code>package.json</code> \u914D\u7F6E\u6587\u4EF6</p><blockquote><p>\u4E07\u4E8B\u5F00\u5934\u96BE</p></blockquote><p>\u8FDB\u5EA6\uFF1A<progress value="5" max="100"></progress> 5%</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u521D\u59CB\u5316</span>
<span class="token function">npm</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;js-utils&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u53D1\u5E03\u5230\u516C\u6709\u4ED3\u5E93\u540E\u7684\u4E00\u4E2A\u8BF4\u660E, \u65B9\u4FBF\u68C0\u7D22</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;HESAI\u524D\u7AEF\u5DE5\u5177\u5E93&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5165\u53E3\u6587\u4EF6, \u5176\u4ED6\u9879\u76EE\u5F15\u5165\u5F53\u524D\u5305\u65F6\u7684\u5165\u53E3</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run test&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;repository&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;git&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://github.com/ZhixianKwok/js-utils.git&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u65B9\u4FBF\u5728npm\u7C7B\u4F3C\u7684\u7F51\u7AD9\u4E0A\u8FDB\u884C\u5FEB\u901F\u68C0\u7D22</span>
  <span class="token property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;utils&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u5DE5\u5177\u5E93&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;guozhixian&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ISC&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BE6\u7EC6\u4EE3\u7801</p>`,7),A=s("h3",{id:"_3-\u5B89\u88C5\u5DE5\u5177\u5E93",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_3-\u5B89\u88C5\u5DE5\u5177\u5E93","aria-hidden":"true"},"#"),n(" 3. \u5B89\u88C5\u5DE5\u5177\u5E93")],-1),_=s("p",null,[n("\u8FDB\u5EA6\uFF1A"),s("progress",{value:"40",max:"100"}),n(" 40%")],-1),f=s("p",null,[n("3.1 "),s("code",null,"rollup"),n("\u5B89\u88C5")],-1),x=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"npm"),n(),s("span",{class:"token function"},"install"),n(` --save-dev rollup
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),E=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"pnpm"),n(),s("span",{class:"token function"},"install"),n(` --save-dev rollup
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),B=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"yarn"),n(),s("span",{class:"token function"},"add"),n(` rollup --dev
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),j=t(`<p>3.2 <code>typescript</code>\u5B89\u88C5</p><div class="custom-container tip"><p class="custom-container-title">\u4EE5\u4E0B\u5305\u7684\u5B89\u88C5\u65B9\u5F0F\u4E0E 3.1 \u7C7B\u4F3C\uFF0C\u4E0B\u9762\u5C06\u4EE5 npm \u4E3A\u51C6\uFF0C\u5176\u4ED6\u5B89\u88C5\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003 3.1, \u4E3E\u4E00\u53CD\u4E09\u3002</p></div><ul><li>\u5B89\u88C5</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev typescript
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u914D\u7F6E tsconfig.json</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es2016&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lib&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;esnext&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;allowJs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipLibCheck&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;esModuleInterop&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;allowSyntheticDefaultImports&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;forceConsistentCasingInFileNames&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;noFallthroughCasesInSwitch&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esnext&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;moduleResolution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;resolveJsonModule&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;isolatedModules&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;noEmit&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7528\u4E8E\u8BBE\u7F6E\u522B\u540D</span>
    <span class="token property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;@/*&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;src/*&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;src/**/*&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*.js&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BE6\u7EC6\u4EE3\u7801</p>`,7),C=t(`<p>3.3 <code>eslint</code> &amp; <code>prettier</code> \u7684\u5B89\u88C5</p><ul><li><code>eslint</code> \u5B89\u88C5</li></ul><blockquote><p>eslint: Find and fix problems in your JavaScript code</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev eslint
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container info"><p class="custom-container-title">\u76F8\u5173\u4FE1\u606F</p><p>eslint \u672C\u8EAB\u5F88\u5E9E\u5927\uFF0C\u719F\u6089\u6240\u6709\u914D\u7F6E\u9700\u8981\u82B1\u8D39\u5927\u91CF\u7684\u65F6\u95F4\uFF0C\u53EF\u4EE5\u901A\u8FC7\u7B2C\u4E09\u65B9\u7684\u89C4\u8303\u6765\u7EA6\u675F\u6211\u4EEC\uFF0C\u6BD4\u5982 airbnb\u3001alibaba \u7B49\u5DF2\u6709\u7684\u5927\u5382\u89C4\u8303\uFF0C\u8FD9\u91CC\u6211\u4EEC\u4EE5 airbnb \u7684\u4E3A\u4F8B</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5\u57FA\u672C\u7248\u672C\u5373\u53EF\uFF0C\u8FD9\u91CC\u4E0D\u6D89\u53CA\u7EC4\u4EF6</span>
<span class="token function">npm</span> <span class="token function">install</span> --save-dev eslint-config-airbnb-base
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,6),D=n("airbnb \u7684"),w=s("code",null,"JavaScript",-1),S=n("\u89C4\u8303\u89C1\uFF1A"),I={href:"https://github.com/airbnb/javascript",target:"_blank",rel:"noopener noreferrer"},F=n("https://github.com/airbnb/javascript"),N=t(`<ul><li><code>eslintrc</code> \u914D\u7F6E\uFF0C \u65B0\u589E <code>eslintrc.js\u6587\u4EF6</code></li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;airbnb-base&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;prettier&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prettier/prettier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),z=t(`<ul><li><code>prettier</code> \u5B89\u88C5</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># eslint-plugin-prettier\u65B9\u4FBF\u548Ceslint\u7ED3\u5408\u4F7F\u7528</span>
<span class="token function">npm</span> <span class="token function">install</span> --save-dev  prettier eslint-plugin-prettier
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>prettier</code> \u914D\u7F6E</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;singleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;trailingComma&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es5&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;printWidth&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  <span class="token property">&quot;proseWrap&quot;</span><span class="token operator">:</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;endOfLine&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lf&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;semi&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BE6\u7EC6\u4EE3\u7801</p>`,5),L=s("p",null,"3.4 husky & lint-staged & commitlint & commitizen & commitlint-config-cz",-1),M=s("p",null,[s("mark",null,"\u63D0\u4EA4\u76F8\u5173\u7684\u5EFA\u8BAE\u5728\u672C\u5730\u5C1D\u8BD5\uFF0CStackBlitz \u8FDC\u7A0B\u6267\u884C husky \u547D\u4EE4\u65F6\u5B58\u5728\u4E00\u4E9B\u95EE\u9898\uFF01\uFF01\uFF01")],-1),J={class:"custom-container info"},K=t(`<p class="custom-container-title">\u4EE5\u4E0B\u5185\u5BB9\u5EFA\u8BAE\u5728\u672C\u5730\u5C1D\u8BD5</p><ul><li>\u5B89\u88C5 husky</li></ul><blockquote><p>husky \u662F\u4EC0\u4E48\uFF1AModern native Git hooks made easy</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev husky
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u914D\u7F6E package.json</li></ul><blockquote><p>StackBlitz \u4E0D\u652F\u6301 npm set-script\uFF0C\u53EF\u4EE5\u76F4\u63A5\u6DFB\u52A0\u5230\u5C06<code>&quot;prepare&quot;: &quot;husky install&quot;</code>\u6DFB\u52A0\u5230 package.json \u4E2D\uFF0C\u5E76\u6267\u884C npm run prepare</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> set-script prepare <span class="token string">&quot;husky install&quot;</span>
<span class="token function">npm</span> run prepare
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5B89\u88C5 lint-staged</li></ul><blockquote><p>\u4EC0\u4E48\u662F lint-staged: Run linters against staged git files and don&#39;t let \u{1F4A9} slip into your code base!</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev lint-staged
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u914D\u7F6E lint-staged \u9636\u6BB5\u9700\u8981\u6821\u9A8C\u7684\u6587\u4EF6\u7C7B\u578B</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;js-utils&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;HESAI\u524D\u7AEF\u5DE5\u5177\u5E93&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prepare&quot;</span><span class="token operator">:</span> <span class="token string">&quot;husky install&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run test&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;repository&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;git&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://github.com/ZhixianKwok/js-utils.git&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;utils&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u5DE5\u5177\u5E93&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;guozhixian&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ISC&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;eslint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^8.20.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;eslint-config-airbnb-base&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^15.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;eslint-plugin-prettier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.2.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;husky&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^8.0.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lint-staged&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^13.0.3&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rollup&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.77.2&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;typescript&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.7.4&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;lint-staged&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;**/*.{js,ts}&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;prettier --write&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;eslint&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;**/*.{md,json}&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;prettier --write&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BE6\u7EC6\u4EE3\u7801</p>`,13),V=t(`<ul><li><p>3.n \u914D\u7F6E <code>rollup</code> \u6587\u4EF6</p></li><li><p>\u6839\u76EE\u5F55\u6DFB\u52A0 <code>rollup.config.js</code> \u6587\u4EF6</p></li></ul><h3 id="n-\u8F85\u52A9\u5DE5\u5177\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#n-\u8F85\u52A9\u5DE5\u5177\u5B89\u88C5" aria-hidden="true">#</a> n. \u8F85\u52A9\u5DE5\u5177\u5B89\u88C5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3);function R(T,H){const u=o("ECharts"),r=o("Mermaid"),e=o("StackBlitz"),d=o("CodeTabs"),k=o("ExternalLinkIcon");return m(),b("div",null,[h,a(u,{id:"echarts-382ee1c7",config:"%7B%0A%20%20%22colors%22%3A%20%5B%22%235470C6%22%2C%20%22%2391CC75%22%2C%20%22%23EE6666%22%5D%2C%0A%20%20%22xAxis%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22type%22%3A%20%22category%22%2C%0A%20%20%20%20%20%20%22data%22%3A%20%5B%22webpack%22%2C%20%22rollup%22%5D%0A%20%20%20%20%7D%0A%20%20%5D%2C%0A%20%20%22yAxis%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22type%22%3A%20%22value%22%2C%0A%20%20%20%20%20%20%22name%22%3A%20%22%E6%89%A7%E8%A1%8C%E6%97%B6%E9%97%B4%22%2C%0A%20%20%20%20%20%20%22position%22%3A%20%22right%22%2C%0A%20%20%20%20%20%20%22axisLabel%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22formatter%22%3A%20%22%7Bvalue%7D%20ms%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22type%22%3A%20%22value%22%2C%0A%20%20%20%20%20%20%22name%22%3A%20%22%E6%96%87%E4%BB%B6%E5%A4%A7%E5%B0%8F%22%2C%0A%20%20%20%20%20%20%22position%22%3A%20%22left%22%2C%0A%20%20%20%20%20%20%22axisLabel%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22formatter%22%3A%20%22%7Bvalue%7D%20kb%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%5D%2C%0A%20%20%22series%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22name%22%3A%20%22%E6%89%A7%E8%A1%8C%E6%97%B6%E9%97%B4%22%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22bar%22%2C%0A%20%20%20%20%20%20%22data%22%3A%20%5B71%2C%2017%5D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22name%22%3A%20%22%E6%96%87%E4%BB%B6%E5%A4%A7%E5%B0%8F%22%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22bar%22%2C%0A%20%20%20%20%20%20%22data%22%3A%20%5B389%2C%20262%5D%2C%0A%20%20%20%20%20%20%22yAxisIndex%22%3A%201%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D%0A",title:"%E5%AF%B9%E6%AF%94%E5%9B%BE",type:"json"}),g,a(r,{id:"mermaid-382ee242",code:"flowchart%20LR%0A%0Ahu(hesai-utils)%20--%E6%89%93%E5%8C%85%20---%20rollup%0Ahu%20--%20%E8%AF%AD%E6%B3%95%20---%20typescript%0Ahu%20--%20%E8%A7%84%E8%8C%83%20---%20er(eslint%20%26%20prettier)%0Ahu%20--%20%E6%8F%90%E4%BA%A4%20---%20hc(husky%20%26%20commitlint)%0Ahu%20--%20%E8%B4%A8%E9%87%8F%20---%20jest%0A%0A"}),y,a(e,{id:"amos-js-utils",height:"50vh",hideExplorer:"",hideNavigation:"",file:"package.json",view:"editor"}),A,_,f,a(d,{data:[{title:"npm"},{title:"pnpm"},{title:"yarn"}],"tab-id":"shell"},{tab0:p(({title:i,value:l,isActive:c})=>[x]),tab1:p(({title:i,value:l,isActive:c})=>[E]),tab2:p(({title:i,value:l,isActive:c})=>[B]),_:1}),j,a(e,{id:"amos-js-utils",height:"50vh",hideExplorer:"",hideNavigation:"",file:"tsconfig.json",view:"editor"}),C,s("p",null,[D,w,S,s("a",I,[F,a(k)])]),N,a(e,{id:"amos-js-utils",height:"50vh",hideExplorer:"",hideNavigation:"",file:".eslintrc.json",view:"editor"}),z,a(e,{id:"amos-js-utils",height:"50vh",hideExplorer:"",hideNavigation:"",file:".prettierrc",view:"editor"}),L,M,s("div",J,[K,a(e,{id:"amos-js-utils",height:"50vh",hideExplorer:"",hideNavigation:"",file:"package.json",view:"editor"})]),V])}var Z=v(q,[["render",R],["__file","\u5982\u4F55\u6253\u5305\u4E00\u4E2A\u5DE5\u5177\u5E93.html.vue"]]);export{Z as default};
