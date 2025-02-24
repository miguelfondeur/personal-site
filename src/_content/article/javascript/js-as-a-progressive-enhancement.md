---
title: JS As a Progressive Enhancement
summary: Many of us have grown accustomed to the current JavaScript landscape. We've worked with various component libraries and frameworks, learned front-end routing and state management, and, at times, experienced 'JavaScript fatigue.' But have we stretched the language too far beyond its original purpose?
date: 2024-02-24
draft: false
---

<h3>How We Got Here</h3>
<p>
    Most of us know the history, but just in case, here's a brief recap. Tim Berners-Lee developed HTML and built the first website in 1991 to share documents over a distributed network. CSS followed soon after in 1996, adding a <em>suggested</em> style to those documents. Then, Brendan Eich created JavaScript in 1995 to introduce interactivity to web pages.
</p>
<p>
    Initially, web development followed a simple structure: HTML for content, CSS for styling, and JavaScript for interactions. Back-end languages like PHP handled code splitting. Aside from browser compatibility concerns, developers shared a common approach to building the web. Then, the iPhone arrived.
</p>
<p>
    Smaller screens, lower bandwidth, and slower connections forced us to rethink web development. Responsive design became essential, as did reducing full-page reloads. Meanwhile, native apps took advantage of device capabilities and often worked offline. Product managers turned to web developers and asked, "Can you make it work like that app?" The answer was... Yes? Enter modern JavaScript.
</p>

<h3>The Problem</h3>
<p>
    Websites were never intended to function as native applications. The web was designed for shareable documents—a digital extension of print media. Browsers are built to search and display these documents, prioritizing accessibility and user preferences. Users can adjust font sizes, disable JavaScript, or rely on screen readers to consume content.
</p>
<p>
    As web development shifted toward JavaScript-first applications, we introduced new challenges. JavaScript had to replicate built-in browser behaviors like SEO handling, page history, and auto-scrolling. Frameworks emerged to solve these issues—<abbr title="Server Side Rendering">SSR</abbr> being a prime example. But think about it: we're now using JavaScript to generate HTML on the server, only to serve it as plain HTML. Have we lost the plot? Yes... Yes, we have.
</p>

<h3>What Are We Using JavaScript For Again?</h3>
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
    These use cases make sense, but the web evolves. Many JavaScript solutions become obsolete as native features emerge:
</p>
<ul>
    <li>
        <strong>Interactions:</strong> The native <code>popover</code> attribute eliminates the need for JavaScript-driven modals and dropdowns.
    </li>
    <li>
        <strong>Animations:</strong> CSS now supports robust animations, including page transitions.
    </li>
    <li>
        <strong>Code splitting:</strong> This has long been achievable with back-end languages like PHP. Static Site Generators (SSGs) such as Jekyll, Hugo, and 11ty now provide similar benefits without requiring a traditional server.
    </li>
    <li>
        <strong>Data updates:</strong> If real-time updates are necessary, JavaScript is essential—but how often do we truly need live data?
    </li>
</ul>

<h3>When You <em>Do</em> Need JavaScript</h3>
<p>
    While many features can now be handled natively, JavaScript remains necessary in some cases:
</p>
<ul>
    <li>Updating site data without full-page reloads.</li>
    <li>Interacting with an <abbr title="Application Programming Interface">API</abbr> that requires JavaScript.</li>
    <li>Using a Runtime that requires Javascript. (Node, Deno, Bun)</li>
    <li>When an app must function exactly like a mobile counterpart.</li>
</ul>
<p>
    The last point is particularly complex. No matter how well you mimic a native experience with Service Workers, device APIs, and front-end routing, you can’t prevent users from disabling JavaScript. The web prioritizes documents above all else—everything else is an enhancement.
</p>

<h3>So...</h3>
<p>
    If the web is fundamentally about documents, we should build with that priority in mind:
</p>
<ul>
    <li>Ensure documents are accessible and readable with or without JavaScript.</li>
    <li>Use JavaScript as an enhancement, not a requirement.</li>
    <li>Leverage native browser features whenever possible.</li>
    <li>If JavaScript is essential, clearly communicate that to users.</li>
</ul>
<p>
    Most of us are not developing complex web apps or games. We’re creating content-driven documents with styling and light interaction. Fortunately, browsers continue to evolve, reducing our dependency on JavaScript. But if you do need JavaScript, ensure your core content remains functional without it. JavaScript should enhance the web—not define it.
</p>
