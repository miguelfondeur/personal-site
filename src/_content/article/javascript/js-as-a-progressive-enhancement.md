---
title: Javascript As a Progressive Enhancement
summary: Many of us have grown accustomed to the current JavaScript landscape. We've worked with various component libraries and frameworks, learned front-end routing and state management, and, at times, experienced 'JavaScript fatigue.' But have we stretched the language too far beyond its original purpose?
date: 2025-02-24
draft: false
---

<h2>How We Got Here</h2>
<p>
    Most of us know the history, but just in case, here's a brief recap. Tim Berners-Lee developed HTML and built the first website in 1991 to share documents over a distributed network. CSS followed in 1996, adding a <em>suggested</em> style to those documents. Brendan Eich created JavaScript in 1995 to introduce interactivity to web pages, and it became the <strong>ECMA-262</strong> standard in 1997.
</p>
<p>
    Initially, web development followed a simple structure: HTML for content, CSS for styling, and JavaScript for interactions. Back-end languages like PHP handled server-side logic, data persistence, and code splitting. Aside from browser compatibility concerns, developers shared a common approach to building the web. Then, the iPhone arrived.
</p>
<p>
    Smaller screens, lower bandwidth, and slower connections forced us to rethink web development. Responsive design became essential, as did reducing full-page reloads. Meanwhile, native apps took advantage of device capabilities and often worked offline. Product managers turned to web developers and asked, "Can you make it work like the app?" The answer was... Yes? Enter modern JavaScript.
</p>

<h2>The Problem</h2>
<p>
    Websites were never intended to function as native applications. The web was designed for shareable documents—a digital extension of print media. Browsers are built to search and display these documents, prioritizing accessibility and user preferences. Users can adjust font sizes, disable JavaScript, or rely on screen readers to consume content.
</p>
<p>
    As web development shifted toward JavaScript-first applications, new challenges emerged. JavaScript had to replicate built-in browser behaviors like page history and scroll positions. It also raised SEO concerns when browsers couldn’t crawl content because JavaScript was responsible for building the page. Frameworks and libraries emerged to solve these issues—<abbr title="Server Side Rendering">SSR</abbr> being a prime example. But think about it: we're now using JavaScript to generate HTML on the server, only to serve it as plain HTML. Have we lost the plot? Yes... Yes, we have.
</p>

<h2>What Are We Using JavaScript For Again?</h2>
<p>
    Most of us aren't building complex HTML Canvas games. Instead, we typically use JavaScript for:
</p>
<ul>
    <li>Adding interactivity (the traditional way).</li>
    <li>Handling animations and visual updates.</li>
    <li>Code splitting (structuring HTML components).</li>
    <li>Sharing and updating data dynamically.</li>
</ul>
<p>
    These use cases make sense, but we often forget that the web evolves. Many JavaScript solutions become obsolete or overkill as native features emerge. Here are a few examples:
</p>
<ul>
    <li>
        <strong>Interactions:</strong> The native <code>popover</code> attribute eliminates the need for JavaScript-driven modals and dropdowns.
    </li>
    <li>
        <strong>Animations:</strong> CSS now supports robust animations, including page transitions.
    </li>
    <li>
        <strong>Code splitting:</strong> This has long been achievable with back-end languages like PHP, but Static Site Generators (SSGs) such as Jekyll, Hugo, and 11ty now provide similar benefits without requiring a traditional server.
    </li>
    <li>
        <strong>Data updates:</strong> JavaScript is essential for real-time updates—but how often do we actually need data to update live?
    </li>
</ul>

<h2>When You <em>Do</em> Need JavaScript</h2>
<p>
    While many features can now be handled natively, JavaScript remains necessary in some cases:
</p>
<ul>
    <li>Updating site data without reloading the page.</li>
    <li>Working with an <abbr title="Application Programming Interface">API</abbr> that relies on JavaScript.</li>
    <li>Running in a JavaScript environment like Node, Deno, or Bun.</li>
    <li>Making a web app behave like its mobile counterpart.</li>
</ul>
<p>
    The last point is particularly tricky. No matter how well you replicate a native experience with Service Workers, device APIs, and front-end routing, there’s one thing you can’t control—users disabling JavaScript. You might think, “Who even does that?” But some do, often for security or privacy reasons. For example, the <a href="https://brave.com/" target="_blank" title="Go To Brave Browser website">Brave</a> browser provides a simple toggle in the URL bar to disable scripts. More importantly, we need to step back and consider what the web was designed for. At its core, the web is built for documents—everything else is just an enhancement.
</p>

<h2>So...</h2>
<p>
    If the web is fundamentally about documents, we should build with that in mind:
</p>
<ul>
    <li>Ensure documents are accessible and readable with or without JavaScript.</li>
    <li>Use JavaScript as an enhancement, not a requirement.</li>
    <li>Leverage native browser features whenever possible.</li>
    <li>If JavaScript is essential, clearly communicate that to users.</li>
</ul>
<p>
    Most of us aren’t building complex web apps or games—we’re creating content-driven documents with styling and light interaction. Thankfully, browsers keep evolving, reducing our reliance on JavaScript.
</p>
<p>
    And just to be clear—I <em>like</em> JavaScript. I’ve spent over a decade using it on both the client and server. But the key is using the right tool for the job. Build from simple to complex, not the other way around. And when you do need JavaScript (on the web), make sure your core content still works without it.
</p>
<p>
    JavaScript should enhance the web—not define it.
</p>
