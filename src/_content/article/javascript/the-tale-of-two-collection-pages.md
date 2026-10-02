---
title: The Tale of Two Collection Pages
summary: Two collection pages on the same ecommerce domain, built years apart. One is vanilla JavaScript over server-rendered HTML, the other is React on Next.js. Same products, same grid, same job. I measured what each implementation actually costs the browser, and the gap is wider than the route code suggests.
date: 2026-10-01
draft: true
---

<h2>Two Pages, One Domain</h2>
<p>
    A collection page is a collection page. It lists products in a grid, it filters, it paginates, it lazy-loads images. The requirements have not meaningfully changed since 2010. So when a single ecommerce domain happens to serve two of them, built years apart on completely different stacks, you have something close to a natural experiment.
</p>
<p>
    I found exactly that while poking at a music retailer's site. Two collection pages, same company, same catalog, same CDN, same design language. One is vanilla JavaScript enhancing server-rendered HTML. The other is React, running on Next.js. Two teams solved the same problem twice, and the browser gets to pay for both.
</p>
<p>
    One note on scope before the numbers. The vanilla page does load jQuery, from a public CDN, as a site-wide dependency shared by every page on the domain. It is not part of the collection implementation, and it is third-party, so it is excluded from every measurement below. What I am comparing is the code each team wrote to render a product grid, plus whatever that code requires in order to run.
</p>

<h2>Identifying the Implementations</h2>
<p>
    You do not need source access to work out how a page is built. The vanilla page arrives with its grid already in the markup, and loads one route-specific bundle to enhance it:
</p>

```html
<script src="/dist/js/app/whats-new/index.js" defer></script>
```

<p>
    Server-rendered HTML, progressively enhanced. The products are in the document when it lands. JavaScript shows up afterward to handle filtering, pagination, and lazy loading.
</p>
<p>
    The React page announces itself differently:
</p>

```html
<script id="__NEXT_DATA__" type="application/json">{"props":{"pageProps":{...}}}</script>
<script src="/_next/static/chunks/framework-471a843c5613f1bc.js" defer></script>
<script src="/_next/static/chunks/pages/dealzone/[[...slug]]-45897dad35a6c3fb.js" defer></script>
<script src="/_next/static/_yoGcQVf2iXEU3EVqQbhj/_ssgManifest.js" defer></script>
```

<p>
    Next.js with a catch-all dynamic route and an <code>_ssgManifest</code>, meaning the page is statically generated at build time. Markup gets sent, serialized props get sent alongside it, then React boots and hydrates what the server already built.
</p>

<h2>The Route Code, and What It Stands On</h2>
<p>
    Here is where the measurement gets interesting, and where a naive comparison would mislead you. I pulled first-party JavaScript from the Resource Timing API, reading <code>transferSize</code> for what crossed the network and <code>decodedBodySize</code> for what the main thread has to parse. Then I split it into the route's own code and the baseline that code cannot run without.
</p>

<table>
    <thead>
        <tr>
            <th>Implementation</th>
            <th>Route code</th>
            <th>Baseline it requires</th>
            <th>Total</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Vanilla</td>
            <td>75 KB wire / 292 KB decoded</td>
            <td>313 KB / 1,144 KB</td>
            <td><strong>388 KB / 1,436 KB</strong></td>
        </tr>
        <tr>
            <td>React</td>
            <td>15 KB wire / 47 KB decoded</td>
            <td>584 KB / 2,077 KB</td>
            <td>599 KB / 2,124 KB</td>
        </tr>
    </tbody>
</table>

<p>
    Credit where it is due: <strong>React's route code is genuinely lean</strong>. Fifteen kilobytes over the wire to express an entire collection page, against seventy-five for the vanilla equivalent. If you stopped reading the numbers there, you would conclude React won decisively, and plenty of framework comparisons do stop exactly there.
</p>
<p>
    But that 15 KB cannot do anything on its own. Before the route chunk runs, the browser must download, parse, and execute the React runtime, the Next.js runtime, the webpack runtime, and a shared application shell called <code>_app.js</code> that is <strong>512 KB gzipped and 1.8 MB decoded</strong>. One file. Every route on the site drags it in, whether that route needs any of it or not.
</p>
<p>
    So the weight did not disappear. It moved. React's route code is small <em>because</em> the baseline is enormous, and the baseline is where 97% of its JavaScript lives. Counted honestly, from an empty cache to a rendered grid of products, the vanilla implementation ships <strong>35% less JavaScript over the wire and hands the parser 688 KB less work</strong>.
</p>
<p>
    That parse figure is the one people skip, and on a mid-range Android phone it is the one that hurts. Gzip makes bytes cheap to move. It does nothing to make them cheap to compile.
</p>

<h2>The Document</h2>
<p>
    The HTML tells a related story. Both pages carry the same third-party A/B testing tool, injected as a single inline script:
</p>

```html
<script class="__ss_csf_data" data-sitespect="true">
```

<table>
    <thead>
        <tr><th>Implementation</th><th>Total HTML</th><th>That one script tag</th><th>Share of document</th></tr>
    </thead>
    <tbody>
        <tr><td>Vanilla</td><td><strong>850 KB</strong></td><td><strong>5.6 KB</strong></td><td><strong>0.7%</strong></td></tr>
        <tr><td>React</td><td>2.06 MB</td><td>2.00 MB</td><td>97.1%</td></tr>
    </tbody>
</table>

<p>
    Same tool, same vendor, same site. On the vanilla page it costs 5.6 KB. On the React page it is <strong>97% of the entire document</strong>, and on a cache miss I watched it reach 9.1 MB of a 9.18 MB response.
</p>
<p>
    It is worth being precise about what that payload is not. It is not product data. The markup around it is effectively identical on both pages, the same 578 <code>div</code> elements, the same 35 list items, the same 23 product links, and it contains only sixteen timestamp entries either way. Nothing in the page's content justifies megabytes.
</p>
<p>
    I cannot tell you from the outside exactly why one tool behaves so differently across two pages on one domain. What I can say is that a document which is mostly serialized framework state offers a vendor script a lot more to attach itself to than a document which is mostly content. Fewer seams, fewer places for something to go wrong.
</p>

<h2>The Server</h2>
<p>
    Then the part that surprised me most. I wanted each implementation's true origin cost, with the CDN taken out of the picture, so I forced a cache miss on both and read the <code>x-timer</code> header, which reports how long the edge spent waiting on the backend.
</p>

<table>
    <thead>
        <tr><th>Implementation</th><th>Server time on a cache miss</th></tr>
    </thead>
    <tbody>
        <tr><td>Vanilla</td><td><strong>~100 ms</strong></td></tr>
        <tr><td>React</td><td>3,032 to 3,445 ms</td></tr>
    </tbody>
</table>

<p>
    The vanilla backend produces a complete, content-filled document in about a tenth of a second. The React page's origin takes <strong>three to three and a half seconds</strong>, roughly thirty times longer. Static generation plus a CDN hides that almost all the time, which is precisely the danger: when the cache entry expires, somebody waits three seconds, and nobody on the team hears about it.
</p>
<p>
    The vanilla page has nowhere to hide a number like that. Its backend renders HTML and hands it over. When it is slow, it is slow in front of you.
</p>

<h2>What Vanilla Actually Buys You</h2>
<p>
    Pulling it together: for a functionally indistinguishable product grid, the vanilla implementation ships 35% less JavaScript, hands the parser 688 KB less work, keeps its document a quarter the size, holds a third-party script to 0.7% of the page instead of 97%, and renders on the server about thirty times faster.
</p>
<p>
    None of that is because vanilla JavaScript is a better tool than React. React is a better tool than hand-rolled DOM code for a great many problems. It is because of what this architecture <em>does not do</em>. There is no application shell to fetch before the first product appears. There is no hydration pass that re-walks a DOM the server just finished building. There is no serialized copy of the page's data shipped alongside the page itself. The server sends HTML, the browser renders HTML, and the JavaScript arrives afterward to improve what is already on screen.
</p>
<p>
    The deeper advantage is legibility. When something goes wrong in the vanilla implementation, the cause sits in plain sight, in a response header or one route bundle, and you can find it in an afternoon with <code>curl</code> and the Network panel. When something goes wrong in the React implementation, the cause is somewhere under static generation, a hydration boundary, an edge cache, and a 1.8 MB shared shell. You can go years without noticing a three second render, because the CDN is quietly covering for you.
</p>
<p>
    Lean code is not only cheaper to download. It is cheaper to reason about, and on a codebase that has to survive fifteen years of team turnover, that is probably the thing that actually matters.
</p>

<h3>A Note on Method, and on Fairness</h3>
<p>
    Measurements came from <code>curl</code> for header and origin behavior, and from the Navigation and Resource Timing APIs in a real Chrome session for load behavior, four loads per page. jQuery is excluded throughout, as a shared site-wide third-party dependency rather than part of either collection implementation. React's <code>polyfills</code> chunk is also excluded, since modern Chrome skips it. Two caveats on the rest: the automation tab ran hidden and Chrome does not paint hidden tabs, so I have no First Contentful Paint or Largest Contentful Paint figures, these are network and parse metrics rather than perceived-render metrics. And forcing a cache miss required a query parameter, which also inflated that A/B payload, so the three second origin figure covers a larger response than the cached one. A like-for-like render would land somewhat lower, still far behind the other page.
</p>
<p>
    In fairness, the vanilla page is not trouble-free in production. It has real problems, and on a repeat visit it currently loses to the React page on wall-clock load time. But those problems live entirely in caching configuration, a couple of response headers that stop the browser and the CDN from reusing anything they already have, and they are one-line fixes. They have nothing to do with the JavaScript implementation, which is what I set out to measure here. The front-end code is doing its job well. The delivery layer in front of it is throwing that work away, and that is a separate post.
</p>
