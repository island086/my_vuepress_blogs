import{a1 as s,a2 as n,a3 as a,a8 as e}from"./framework-b045dc94.js";const l={},t=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#! /bin/bash</span>
<span class="token comment">#cd /home/runner/work/my_vuepress_blogs/my_vuepress_blogs</span>
<span class="token comment">#cd ./docs/zh</span>

<span class="token builtin class-name">cd</span> /mnt/e/VsCodeProjects/my_vuepress_blogs/docs/zh
<span class="token comment"># * 来自与 ls * (通过通配符匹配 文件名字符(不包括后缀名 .idea 等)为0或多个)</span>

<span class="token function-name function">path</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment"># $1 传入的第一个参数</span>
  <span class="token comment"># $a 取变量a的内容 //或 \${a} &quot;\${a}&quot;</span>
  <span class="token comment"># $() 执行命令 //或 &quot;$()&quot;</span>
  <span class="token comment"># echo &quot;helloWorld &quot; 输出字符串</span>
  <span class="token comment"># echo &quot;$a&quot;  输出变量值,(这里的引号，如果没有字符串拼接时，可以不加，加了更好)（双引号以防止通配符和分词）</span>
  <span class="token comment"># a=&quot;helloWorld&quot;  声明变量a,并把helloWorld赋值给a的内容，（推荐-&gt;)这里的等号两边不能有空格</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;目录 <span class="token variable">$1</span>&quot;</span>

    <span class="token comment"># ls输出是脆弱的使用 ./* glob 匹配全部文件</span>
    <span class="token keyword">for</span> <span class="token for-or-select variable">child</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span>/*<span class="token punctuation">;</span> <span class="token keyword">do</span>
      path <span class="token string">&quot;<span class="token variable">$child</span>&quot;</span>
    <span class="token keyword">done</span>
  <span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;文件 <span class="token variable">$1</span>&quot;</span>
  <span class="token keyword">fi</span>
<span class="token punctuation">}</span>
<span class="token comment"># 获取当前目录</span>
path <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[t];function i(c,p){return n(),a("div",null,o)}const u=s(l,[["render",i],["__file","bash.html.vue"]]);export{u as default};
