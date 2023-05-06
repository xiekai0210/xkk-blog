import{_ as n,p as s,q as a,a1 as t}from"./framework-5866ffd3.js";const p={},e=t(`<h1 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h1><h2 id="es6扩展" tabindex="-1"><a class="header-anchor" href="#es6扩展" aria-hidden="true">#</a> ES6扩展</h2><h3 id="array-from" tabindex="-1"><a class="header-anchor" href="#array-from" aria-hidden="true">#</a> Array.from()</h3><blockquote><p>Array.from(arrayLike, mapFn), 从可迭代或类数组对象创建一个新的浅拷贝的数组实例。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Array [&quot;f&quot;, &quot;o&quot;, &quot;o&quot;]</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token parameter">x</span> <span class="token operator">=&gt;</span> x <span class="token operator">+</span> x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Array [2, 4, 6]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 类似数组</span>
<span class="token keyword">let</span> arrayLike <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;0&#39;</span><span class="token operator">:</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;1&#39;</span><span class="token operator">:</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;2&#39;</span><span class="token operator">:</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">3</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// ES5 的写法</span>
<span class="token keyword">var</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arrayLike<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;]</span>

<span class="token comment">// ES6 的写法</span>
<span class="token keyword">let</span> arr2 <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arrayLike<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回值：<code>一个新的数组实例</code></li></ul><h3 id="array-of" tabindex="-1"><a class="header-anchor" href="#array-of" aria-hidden="true">#</a> Array.of()</h3><blockquote><p>通过可变数量的参数创建一个新的 Array 实例，而不考虑参数的数量或类型。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Array<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">// [1]</span>
Array<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// [1, 2, 3]</span>
Array<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [undefined]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回值：<code>一个新的数组实例</code></li></ul><h3 id="array-prototype-fill" tabindex="-1"><a class="header-anchor" href="#array-prototype-fill" aria-hidden="true">#</a> Array.prototype.fill()</h3><blockquote><p>fill(value, start, end), 用一个固定值填充一个数组中从起始索引（默认为 0）到终止索引（默认为 array.length）内的全部元素。它返回修改后的数组。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> array1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>array1<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Array [1, 2, 0, 0]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>array1<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Array [1, 5, 5, 5]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>array1<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Array [6, 6, 6, 6]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回值：<code>经 value 填充修改后的数组。</code></li></ul><h3 id="array-prototype-entries-keys-values" tabindex="-1"><a class="header-anchor" href="#array-prototype-entries-keys-values" aria-hidden="true">#</a> Array.prototype.entries()|keys()|values()</h3><blockquote><p>entries()，keys()和values()——用于遍历数组。它们都返回一个遍历器对象,可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token keyword">of</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 0</span>
<span class="token comment">// 1</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> elem <span class="token keyword">of</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>elem<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// &#39;a&#39;</span>
<span class="token comment">// &#39;b&#39;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>index<span class="token punctuation">,</span> elem<span class="token punctuation">]</span> <span class="token keyword">of</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> elem<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 0 &quot;a&quot;</span>
<span class="token comment">// 1 &quot;b&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回值：<code>一个新的可迭代迭代器对象</code></li></ul><h2 id="数组遍历" tabindex="-1"><a class="header-anchor" href="#数组遍历" aria-hidden="true">#</a> 数组遍历</h2><h3 id="for" tabindex="-1"><a class="header-anchor" href="#for" aria-hidden="true">#</a> for</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;red&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;green&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;blue&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> colors<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>colors<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="foreach" tabindex="-1"><a class="header-anchor" href="#foreach" aria-hidden="true">#</a> forEach</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;blue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
colors<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> index<span class="token punctuation">,</span> array</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">element=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>element<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">; index=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>index<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">; array=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>array<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// element=red; index=0; array=red,green,blue;</span>
<span class="token comment">// element=green; index=1; array=red,green,blue;</span>
<span class="token comment">// element=blue; index=2; array=red,green,blue;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>返回值：<code>undefined</code></p></li><li><p><code>forEach() 不会改变源数组，但是，作为 callbackFn 的函数可以更改数组</code></p></li></ul><h3 id="for-of" tabindex="-1"><a class="header-anchor" href="#for-of" aria-hidden="true">#</a> for...of</h3><blockquote><p>for...of语句在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> iterable <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> value <span class="token keyword">of</span> iterable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    value <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 11</span>
<span class="token comment">// 21</span>
<span class="token comment">// 31</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回值：-</li></ul><h3 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> map()</h3><blockquote><p>返回由每个数组元素上执行 callback 的返回值所组成的新数组</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> a2 <span class="token operator">=</span> a1<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> index<span class="token punctuation">,</span> array</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;A&#39;, &#39;B&#39;, &#39;C&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回值：<code>一个新数组，每个元素都是回调函数的返回值</code></li></ul><h3 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> filter()</h3><blockquote><p>返回一个新数组，其中包含 callback 返回 true 的元素。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> a2 <span class="token operator">=</span> a1<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> index<span class="token punctuation">,</span> array</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">typeof</span> element <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [10, 20, 30]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回值：<code>返回给定数组的一部分的【浅拷贝】，其中只包括通过提供的函数实现的测试的元素。如果没有元素通过测试，则返回一个空数组</code></li></ul><h3 id="find" tabindex="-1"><a class="header-anchor" href="#find" aria-hidden="true">#</a> find()</h3><blockquote><p>返回 callback 返回 true 的第一个元素。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> i <span class="token operator">=</span> a1<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">typeof</span> item <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回值：<code>数组中第一个满足所提供测试函数的元素的值，否则返回 undefined</code></li></ul><h3 id="findindex" tabindex="-1"><a class="header-anchor" href="#findindex" aria-hidden="true">#</a> findIndex()</h3><blockquote><p>返回 callback 返回 true 的第一个元素的[索引]。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> i <span class="token operator">=</span> a1<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">typeof</span> item <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回值：<code>数组中第一个满足测试条件的元素的索引。否则返回 -1</code></li></ul><h3 id="reduce" tabindex="-1"><a class="header-anchor" href="#reduce" aria-hidden="true">#</a> reduce()</h3><blockquote><p>对数组中的每个值执行 callback(accumulator, currentValue, currentIndex, Array)，目的是将列表中的元素减少到单个值。reduce 函数返回 callback 函数返回的最终值。如果指定了 initialValue，则调用 callback，并将 initialValue 作为第一个参数值，将数组中第一个元素的值作为第二个参数值。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> total <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">accumulator<span class="token punctuation">,</span> currentValue</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> accumulator <span class="token operator">+</span> currentValue<span class="token punctuation">,</span>
  <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>total<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 60</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回值：<code>使用“reducer”回调函数遍历整个数组后的结果。</code></li></ul><h2 id="数组方法" tabindex="-1"><a class="header-anchor" href="#数组方法" aria-hidden="true">#</a> 数组方法</h2><h3 id="concat" tabindex="-1"><a class="header-anchor" href="#concat" aria-hidden="true">#</a> concat()</h3><blockquote><p>连接两个或多个数组并返回一个新的数组</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> myArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
myArray <span class="token operator">=</span> myArray<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// myArray 现在是 [&quot;1&quot;, &quot;2&quot;, &quot;3&quot;, &quot;a&quot;, &quot;b&quot;, &quot;c&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="join" tabindex="-1"><a class="header-anchor" href="#join" aria-hidden="true">#</a> join()</h3><blockquote><p>将数组中的所有元素连接成一个字符串</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> myArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Wind&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Rain&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Fire&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> list <span class="token operator">=</span> myArray<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39; - &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// list 现在是 &quot;Wind - Rain - Fire&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="push" tabindex="-1"><a class="header-anchor" href="#push" aria-hidden="true">#</a> push()</h3><blockquote><p>在数组末尾添加一个或多个元素，并返回数组操作后的 length</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> myArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
myArray<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// myArray 现在是 [&quot;1&quot;, &quot;2&quot;, &quot;3&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回值：<code>数组的长度</code></li></ul><h3 id="pop" tabindex="-1"><a class="header-anchor" href="#pop" aria-hidden="true">#</a> pop()</h3><blockquote><p>从数组移出最后一个元素，并返回该元素</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> myArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> last <span class="token operator">=</span> myArray<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// myArray 现在是 [&quot;1&quot;, &quot;2&quot;]，last 为 &quot;3&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回值：<code>移出的元素</code></li></ul><h3 id="shift" tabindex="-1"><a class="header-anchor" href="#shift" aria-hidden="true">#</a> shift()</h3><blockquote><p>从数组移出第一个元素，并返回该元素</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> myArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> first <span class="token operator">=</span> myArray<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// myArray 现在是 [&quot;2&quot;, &quot;3&quot;]，first 为 &quot;1&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回值：<code>移出的元素</code></li></ul><h3 id="unshift" tabindex="-1"><a class="header-anchor" href="#unshift" aria-hidden="true">#</a> unshift()</h3><blockquote><p>在数组开头添加一个或多个元素，并返回数组的新长度</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> myArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
myArray<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token string">&#39;4&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;5&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// myArray 变成了 [&quot;4&quot;, &quot;5&quot;, &quot;1&quot;, &quot;2&quot;, &quot;3&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>返回值：<code>数组的长度</code></li></ul>`,72),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","index.html.vue"]]);export{r as default};
