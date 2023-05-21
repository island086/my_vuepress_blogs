const n=JSON.parse('{"key":"v-02ae0823","path":"/zh/note/Spring/ApplicationContextInitializer.html","title":"ApplicationContextInitializer","lang":"zh-CN","frontmatter":{"category":["Spring"],"tag":["Spring"],"title":"ApplicationContextInitializer"},"headers":[],"git":{"createdTime":1684677761000,"updatedTime":1684677761000,"contributors":[{"name":"wangruifei","email":"670635964@qq.com","commits":1}]},"readingTime":{"minutes":0.4,"words":120},"filePathRelative":"zh/note/Spring/ApplicationContextInitializer.md","localizedDate":"2023年5月21日","excerpt":"<p><strong>ApplicationContextInitializer</strong>&nbsp;接口用于在&nbsp;<strong>Spring</strong>&nbsp;容器刷新之前执行的一个回调函数，通常用于向&nbsp;<strong>SpringBoot</strong>&nbsp;容器中注入属性。</p>\\n<h4> 1. 使用</h4>\\n<h5> 1.1 自定义ApplicationContextInitializer</h5>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token doc-comment comment\\">/**  \\n * 自定义ApplicationContextInitializer  \\n */</span>\\n <span class=\\"token keyword\\">private</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">CustomerTypeExcludeFilterApplicationContextInitializer</span> <span class=\\"token keyword\\">implements</span> <span class=\\"token class-name\\">ApplicationContextInitializer</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">ConfigurableApplicationContext</span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token punctuation\\">{</span>  \\n    <span class=\\"token annotation punctuation\\">@Override</span>  \\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">initialize</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">ConfigurableApplicationContext</span> applicationContext<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>  \\n\\t\\t    <span class=\\"token comment\\">//TODO</span>\\n    <span class=\\"token punctuation\\">}</span>  \\n  \\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};