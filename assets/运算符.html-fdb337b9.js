import{a1 as n,a2 as a,a3 as s,a8 as e}from"./framework-b045dc94.js";const t={},l=e(`<h3 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h3><p>java中的数据类型分为两种</p><ul><li>基本类型</li></ul><blockquote><p>int float double boolean char short long byte</p></blockquote><ul><li>引用类型</li></ul><blockquote><p>除了以上八种都是引用类型</p></blockquote><h3 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h3><h4 id="算术运算符" tabindex="-1"><a class="header-anchor" href="#算术运算符" aria-hidden="true">#</a> 算术运算符</h4><h5 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> ==</h5><p>== 是判断左边的值是否等于右边，是的话会返回true，不是的话返回false</p><p><strong>注意</strong> 它的左右两边既可以是引用类型也可以是基本类型</p><ul><li>如果两边都是基本类型的话，只有除了boolean基本类型不能和其他七个基本类型判断（会抛出 不可比较的类型的 编译时异常），其他七个基本类型任意两个之间都可以直接进行判断，会进行自动向上的类型转换，然后判断两侧的值是否相等。</li><li>如果两边都是引用类型的话，只有两边是同一个引用类型时，才会判断两侧的地址值是否相同，否则抛出 不可比较的类型的 编译时异常。</li><li>如果一边是基本类型，一边是引用类型： 只有当基本类型不为boolean类型,且引用类型为基本类型的包装类类型，且不为Boolean类型时，则会先对引用类型自动拆箱为基本类型(若自动装箱失败，则会抛出异常 /npe），然后进行自动向上的类型转换，再判断两侧的值是否相等。 其他情况则会抛出 不可比较的类型的 编译时异常</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>  
<span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token class-name">Long</span> l <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>  
    <span class="token comment">// 基本类型 == 引用类型</span>
    <span class="token comment">// 此处错误因为 Long类型的l自动进行拆箱 调用 l.longValue()</span>
    <span class="token comment">// 但l 为null,导致 npe_</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>l <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// npe</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),o=[l];function c(i,p){return a(),s("div",null,o)}const r=n(t,[["render",c],["__file","运算符.html.vue"]]);export{r as default};
