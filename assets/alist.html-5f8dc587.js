import{a1 as l,a2 as t,a3 as c,a5 as i,a4 as n,a6 as s,a7 as e,a8 as r,J as o}from"./framework-b045dc94.js";const p={},d=n("h1",{id:"安装alist",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装alist","aria-hidden":"true"},"#"),s(" 安装alist")],-1),u=r(`<h3 id="_1、docker安装" tabindex="-1"><a class="header-anchor" href="#_1、docker安装" aria-hidden="true">#</a> 1、docker安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">-v</span> /etc/alist:/opt/alist/data <span class="token parameter variable">-p</span> <span class="token number">5244</span>:5244 <span class="token parameter variable">--name</span><span class="token operator">=</span><span class="token string">&quot;alist&quot;</span> xhofe/alist:latest

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查看管理员信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> alist ./alist admin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2、安装nginx" tabindex="-1"><a class="header-anchor" href="#_2、安装nginx" aria-hidden="true">#</a> 2、安装nginx</h3><p>安装前需复制好conf文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token parameter variable">-p</span> <span class="token number">443</span>:443 <span class="token parameter variable">--name</span> nginx <span class="token punctuation">\\</span>
 <span class="token parameter variable">-v</span> /root/nginx/html:/usr/share/nginx/html <span class="token punctuation">\\</span>
 <span class="token parameter variable">-v</span> /root/nginx/logs:/var/log/nginx <span class="token punctuation">\\</span>
 <span class="token parameter variable">-v</span> /root/nginx/conf:/etc/nginx <span class="token punctuation">\\</span>
 <span class="token parameter variable">-d</span> nginx:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-安装acme-sh" tabindex="-1"><a class="header-anchor" href="#_3-安装acme-sh" aria-hidden="true">#</a> 3 安装acme.sh</h3><p>安装过程需要服务器已安装 <code>socat</code> 模块，它是一个多功能的网络小工具。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>dnf <span class="token function">install</span> socat <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过下面命令安装 <code>acme.sh</code> ，Email 用来接收重要重要通知，如证书快到期未更新会收到通知。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> https://get.acme.sh <span class="token operator">|</span> <span class="token function">sh</span> <span class="token parameter variable">-s</span> <span class="token assign-left variable">email</span><span class="token operator">=</span>my@example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4、ssl证书" tabindex="-1"><a class="header-anchor" href="#_4、ssl证书" aria-hidden="true">#</a> 4、ssl证书</h3><h4 id="生成ssl证书" tabindex="-1"><a class="header-anchor" href="#生成ssl证书" aria-hidden="true">#</a> 生成ssl证书</h4><ul><li>buypas standalone</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>acme.sh <span class="token parameter variable">--server</span> https://api.buypass.com/acme/directory  <span class="token punctuation">\\</span>
         <span class="token parameter variable">--issue</span> <span class="token parameter variable">-d</span> alist.islandcloud.me <span class="token punctuation">\\</span>
         <span class="token parameter variable">--days</span> <span class="token number">170</span> <span class="token parameter variable">--standalone</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>default zerossl webroot</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>acme.sh <span class="token parameter variable">--issue</span> <span class="token parameter variable">-d</span> www.driveyun.ml <span class="token parameter variable">--webroot</span> /root/nginx/html/ <span class="token parameter variable">--debug</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5、-安装证书" tabindex="-1"><a class="header-anchor" href="#_5、-安装证书" aria-hidden="true">#</a> 5、 安装证书</h3><p>在 <code>~/.acme.sh/example.com/</code> 目录生成的证书文件中，我们主要需要用到两个文件：<code>fullchain.cer</code> 和 <code>example.com.key</code>。下面以 Nginx 为例，来看看如何安装证书。</p><h3 id="_1-创建通用-ssl-配置文件" tabindex="-1"><a class="header-anchor" href="#_1-创建通用-ssl-配置文件" aria-hidden="true">#</a> 1) 创建通用 SSL 配置文件</h3><p>在 <code>/etc/ginx/</code> 目录下，创建一个为名 <code>ssl-options.conf</code> 的 SSL 通用配置文件，内容参考如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssl_protocols               TLSv1.2 TLSv1.3<span class="token punctuation">;</span>
ssl_ciphers                 ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384<span class="token punctuation">;</span>
ssl_prefer_server_ciphers   off<span class="token punctuation">;</span>
ssl_session_cache           shared:le_nginx_SSL:10m<span class="token punctuation">;</span>
ssl_session_timeout         1200m<span class="token punctuation">;</span>
ssl_session_tickets         on<span class="token punctuation">;</span>
ssl_stapling                on<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明：</p><ul><li><code>ssl_protocols</code>：加密协议；</li><li><code>ssl_ciphers</code>：加密算法；</li><li><code>ssl_prefer_server_ciphers</code>：服务端加密算法优先；</li><li><code>ssl_session_cache</code>：会话缓存；</li><li><code>ssl_session_timeout</code>：用户会话缓存失效时间，对安全性有高要求的站点需要降低该值；</li><li><code>ssl_stapling</code>：启用 OCSP 可减少用户验证证书的时间；</li><li><code>ssl_session_tickets</code>：为复用会话创建或加载 Ticket Key。</li></ul><h3 id="_2-生成-dhparam-pem" tabindex="-1"><a class="header-anchor" href="#_2-生成-dhparam-pem" aria-hidden="true">#</a> 2) 生成 dhparam.pem</h3><p>OpenSSL 的 dhparam 用于生成和管理 dh 文件。dh(Diffie-Hellman) 是著名的密钥交换协议，它可以保证通信双方安全地交换密钥。</p><p>使用如下命令生成一个 <code>dhparam.pem</code> 文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>openssl dhparam <span class="token parameter variable">-out</span> /root/nginx/conf/dhparam.pem <span class="token number">2048</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-为-nginx-站点配置证书" tabindex="-1"><a class="header-anchor" href="#_3-为-nginx-站点配置证书" aria-hidden="true">#</a> 3) 为 Nginx 站点配置证书</h3><p>在 nginx.conf中增加上游服务器</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code>    <span class="token operator">#</span> 上游服务器  
    upstream <span class="token function">alist</span><span class="token punctuation">{</span>  
      server <span class="token number">172.17</span><span class="token number">.0</span><span class="token number">.1</span><span class="token punctuation">:</span><span class="token number">5244</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>先为网站的证书创建一个存放目录：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /root/nginx/conf/cert/example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>目录中的文件我们后面通过脚本复制进来，这里先不管。</p><p>打开对应的 Nginx 站点配置文件，例如：<code>/etc/nginx/conf.d/example.com.conf</code>，参考编辑其内容如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># /etc/nginx/conf.d/example.com.conf</span>
server <span class="token punctuation">{</span>  
    listen       <span class="token number">80</span><span class="token punctuation">;</span>  
    listen  <span class="token punctuation">[</span>::<span class="token punctuation">]</span>:80<span class="token punctuation">;</span>  
    <span class="token comment"># http 1.1 request header host:example.com  </span>
    <span class="token comment"># nginx 监听 host字段的值example.com  </span>
    <span class="token comment"># *.example.com 不包括 example.com  </span>
    server_name  alist.islandcloud.me<span class="token punctuation">;</span>   
  
    <span class="token builtin class-name">return</span>       <span class="token number">301</span> https://<span class="token variable">$host</span><span class="token variable">$request_uri</span><span class="token punctuation">;</span>  
  
  
  
<span class="token punctuation">}</span>  
  
server <span class="token punctuation">{</span>  
    listen              <span class="token number">443</span> ssl<span class="token punctuation">;</span>  
    server_name         alist.islandcloud.me<span class="token punctuation">;</span>  
    server_tokens       off<span class="token punctuation">;</span> <span class="token comment"># 禁止在响应报文中包含Nginx版本信息  </span>
  
    ssl_certificate     /etc/nginx/cert/alist.islandcloud.me/fullchain.cer<span class="token punctuation">;</span>  
    ssl_certificate_key /etc/nginx/cert/alist.islandcloud.me/alist.islandcloud.me.key<span class="token punctuation">;</span>  
    include             /etc/nginx/ssl-options.conf<span class="token punctuation">;</span>  
    ssl_dhparam         /etc/nginx/dhparam.pem<span class="token punctuation">;</span>  
  
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$host</span> <span class="token operator">!=</span> <span class="token string">&#39;alist.islandcloud.me&#39;</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token builtin class-name">return</span>          <span class="token number">301</span> https://alist.islandcloud.me<span class="token variable">$request_uri</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
  
    <span class="token comment">#access_log  /var/log/nginx/host.access.log  main;  </span>
      
    <span class="token comment">#映射 static 路径(path)  </span>
    location /static/ <span class="token punctuation">{</span>  
        root /usr/share/nginx/html<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
  
    location / <span class="token punctuation">{</span>  
        <span class="token comment"># 转发后 重新添加nginx默认去掉的请求头  </span>
<span class="token comment">#        proxy_set_header Host $host;  </span>
        <span class="token comment"># 代理通过 把这个请求转交给谁  </span>
        <span class="token comment"># 自动 负载均衡的转到上游服务器组         </span>
        proxy_pass http://alist<span class="token punctuation">;</span>  
        proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>  
        proxy_set_header Host <span class="token variable">$http_host</span><span class="token punctuation">;</span>  
        proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>  
        proxy_redirect off<span class="token punctuation">;</span>  
        <span class="token comment"># 上传的最大文件尺寸  </span>
        client_max_body_size 20000m<span class="token punctuation">;</span>  
  
<span class="token comment">#        proxy_http_version  1.1;  </span>
<span class="token comment">#        proxy_set_header    Upgrade $http_upgrade;  </span>
<span class="token comment">#        proxy_set_header    Connection keep-alive;  </span>
<span class="token comment">#        proxy_set_header    Host $host;  </span>
<span class="token comment">#        proxy_cache_bypass  $http_upgrade;  </span>
<span class="token comment">#        proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for;  </span>
<span class="token comment">#        proxy_set_header    X-Forwarded-Proto $scheme;  </span>
    <span class="token punctuation">}</span>  
  
    <span class="token comment">#error_page  404              /404.html;  </span>
  
    <span class="token comment"># redirect server error pages to the static page /50x.html  </span>
    <span class="token comment">#  </span>
    error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>  
    location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>  
        root   /usr/share/nginx/html<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
  
<span class="token punctuation">}</span>\`\`<span class="token variable"><span class="token variable">\`</span>

 <span class="token comment">### 4) 安装和自动更新证书</span>

<span class="token variable">\`</span></span>\`\`sh
acme.sh --install-cert <span class="token parameter variable">-d</span> alist.islandcloud.me <span class="token punctuation">\\</span>
--key-file       /root/nginx/conf/cert/alist.islandcloud.me/alist.islandcloud.me.key <span class="token punctuation">\\</span>
--fullchain-file /root/nginx/conf/cert/alist.islandcloud.me/fullchain.cer <span class="token punctuation">\\</span>
<span class="token parameter variable">--reloadcmd</span>      <span class="token string">&quot;docker restart nginx&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6、azure开放端口" tabindex="-1"><a class="header-anchor" href="#_6、azure开放端口" aria-hidden="true">#</a> 6、Azure开放端口</h3><p><img src="http://note.youdao.com/yws/public/resource/f19e14db517658ef635f4a111d194c53/xmlnote/WEBRESOURCE038abe97d5b443ac8117566cdfa53236/5938" alt="设置-&gt;网络"></p><h3 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考 :</h3>`,40),m={href:"https://alist.nn.ci/zh/guide/install/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://zhuanlan.zhihu.com/p/445852299",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/acmesh-official/acme.sh",target:"_blank",rel:"noopener noreferrer"},h={href:"https://docs.azure.cn/zh-cn/articles/azure-operations-guide/virtual-machines/aog-virtual-machines-howto-verify-connectivity-with-ping-command#%E6%9B%B4%E5%AE%89%E5%85%A8%E7%9A%84-nsg-%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.huing.cn/archives/azureping.html",target:"_blank",rel:"noopener noreferrer"},_={href:"https://blog.csdn.net/m0_37859032/article/details/123003336",target:"_blank",rel:"noopener noreferrer"};function g(x,f){const a=o("ExternalLinkIcon");return t(),c("div",null,[d,i(" more "),i(`
 more之前的是摘要，默认也会读取一级标签 
`),u,n("ul",null,[n("li",null,[n("a",m,[s("安装 | AList文档"),e(a)])]),n("li",null,[n("a",v,[s("Let's Encrypt SSL 泛域名证书申请和配置 - 知乎"),e(a)])]),n("li",null,[n("a",b,[s("GitHub - acmesh-official/acme.sh: A pure Unix shell script implementing ACME client protocol"),e(a)])]),n("li",null,[n("a",h,[s("使 Azure 虚拟机可 Ping 的方法 | Azure Docs"),e(a)])]),n("li",null,[n("a",k,[s("微软Azure开启ping端口的方法 - 个人知识记录-虎吟博客"),e(a)])]),n("li",null,[n("a",_,[s("Azure Linux如何启用root用户登录_飞鱼丶灬的博客-CSDN博客_azure root 登录"),e(a)])])])])}const y=l(p,[["render",g],["__file","alist.html.vue"]]);export{y as default};
