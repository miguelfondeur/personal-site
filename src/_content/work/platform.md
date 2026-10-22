---
tags: work
permalink: false
name: Platform Design
id: platformDesign
role: Creator
order: 0.5
start: Jul 2026
end: Oct 2026
thumb: /img/cv/cv-platform.webp
header_image: /img/work/platform/platform-homepage.webp
tech: [Go, PostgreSQL, Web Components, Signals, MCP, Design Tokens, Figma, Railway]
description: A design token workspace for sharing one design system across frontend projects, Figma, and AI agents.
summary: |
  Platform (platformdesign.app) helped developers and designers create, manage, and share UI design systems across frontend projects and Figma using MCP and direct JSON exports. Each project was a single JSON token document that you could edit visually, share with teammates, preview, and connect to AI tools through a built-in MCP server. I built it with a Go backend, a vanilla JavaScript frontend using Web Components and a custom state manager, and PostgreSQL, all hosted on Railway. I've since decided to sunset the project, so this is a record of what I built and how I built it.
accomplishments:
  [
    "Designed and built the full product, including the Go API, Postgres schema, marketing site, documentation, and workspace UI.",
    "Built a Go backend on net/http with JWT auth, Google sign-in, email verification, and project sharing.",
    "Built the workspace as a single-page app using native Web Components with no build step.",
    "Created a signals-based state manager (Signal, Effect, Computed, and batch) to share state across components.",
    "Built an MCP server so AI agents like Claude Code could read a project's tokens and usage rules while writing components.",
    "Exported tokens as CSS variables, DTCG JSON for Figma, and a flat JSON theme object for React Native and CSS-in-JS.",
    "Generated 50 to 950 color ramps from a single seed color using OKLCh.",
    "Added CSS and DTCG imports so teams could bring in an existing design system.",
  ]
links:
  - Platform Design Agent Skill: https://github.com/Platform-DS/platform-design-skills
---

<!-- Details -->
<details name="accordion">
    <summary>Goal and Approach</summary>
    <div class="details-content">
        <p>
            Every team I've worked with has had a design system in some form, and it usually lives in several places at once: a Figma library, a CSS file full of custom properties, a theme object somewhere in the app, and a Storybook that may or may not be up to date. Keeping all of those in sync is manual work, and that's usually where inconsistencies creep in.
        </p>
        <p>
            AI coding tools made the problem even more noticeable. If an agent doesn't know your project has a <code>--color-primary</code> variable, it will happily make up its own hex value. I wanted to build a single place for a team's tokens to live, so that teammates, previews, exports, and AI agents were all reading from the same source.
        </p>
        <p><strong>The basic workflow looked like this:</strong></p>
        <ul role="list">
            <li><strong>Create a project</strong>: a single JSON token document, started from a default design system you could customize.</li>
            <li><strong>Add tokens</strong>: organized into groups like color, typography, spacing, radius, and shadow, with live previews as you type.</li>
            <li><strong>Share it</strong>: invite teammates by email so the project shows up in their workspace.</li>
            <li><strong>Use it</strong>: export to CSS, Figma, or JSON, or connect an AI client to the MCP server.</li>
        </ul>
        <div class="detail-image-wrapper">
            <img src="/img/work/platform/platform-docs.webp" alt="Platform documentation page titled Create and share your design systems" loading="lazy">
        </div>
    </div>
</details>
<details name="accordion">
    <summary>Building the Workspace</summary>
    <div class="details-content">
        <p>
            I organized each project into four categories: <strong>Brand</strong>, <strong>Assets</strong>, <strong>Design Tokens</strong>, and <strong>Components</strong>. Each category had its own section in the sidebar, and you could add to it by opening the category and creating a new entry from its modal. New projects started from the <strong>Platform Starter</strong>, a complete design system with real values in every category, so users had something to work with right away. Let's go through each category.
        </p>
        <h3>Brand</h3>
        <div class="detail-image-wrapper" data-scrollable="true">
            <div class="scroll-container" tabindex="0" role="region" aria-label="Scrollable image content">
                <img src="/img/work/platform/brand-category.webp" alt="Platform's Brand category showing the Start Here document of the Platform Starter project" loading="lazy">
            </div>
            <div class="scroll-indicator">
                <em><span class="sr-only">This Section is</span> Scrollable</em>
            </div>
        </div>
        <p>
            Brand held the written documentation for the design system, such as brand guidelines, design principles, how to use the tokens, component conventions, and a checklist to review before shipping. These were the documents I expected a new teammate, or an AI agent, to read first. The MCP server also sent these usage rules along with the tokens.
        </p>
        <h3>Assets</h3>
        <div class="detail-image-wrapper" data-scrollable="true">
            <div class="scroll-container" tabindex="0" role="region" aria-label="Scrollable image content">
                <img src="/img/work/platform/assets-category.webp" alt="Platform's Assets category showing a grid of SVG icon tokens" loading="lazy">
            </div>
            <div class="scroll-indicator">
                <em><span class="sr-only">This Section is</span> Scrollable</em>
            </div>
        </div>
        <p>
            Assets were for SVG icons, images, and masks. Under the hood they worked just like tokens, but I gave them their own category since they point to a file rather than describe a value. For security, SVG markup was rendered as an image source instead of being injected into the page, which meant an icon could never run a script.
        </p>
        <div class="detail-image-wrapper">
            <img src="/img/work/platform/new-assets-modal.webp" alt="New asset group modal with a group name field and an SVG token type" loading="lazy">
        </div>
        <h3>Design Tokens</h3>
        <div class="detail-image-wrapper" data-scrollable="true">
            <div class="scroll-container" tabindex="0" role="region" aria-label="Scrollable image content">
                <img src="/img/work/platform/design-tokens-category.webp" alt="Platform's Design Tokens category showing seven color seeds, each with a generated 50 to 950 ramp" loading="lazy">
            </div>
            <div class="scroll-indicator">
                <em><span class="sr-only">This Section is</span> Scrollable</em>
            </div>
        </div>
        <p>
            Design Tokens were the core of the app. Platform supported groups for color, size, font family, font size, font weight, line height, letter spacing, border radius, border width, shadows, opacity, gradients, filters, transforms, clip paths, and more. When you created a group, you gave it a name and chose a token type, and every token in that group shared the type. Exported variables were named by type, so you could name your groups however you liked. Each group also had space for its own documentation.
        </p>
        <div class="detail-image-wrapper">
            <img src="/img/work/platform/new-design-token-modal.webp" alt="New token group modal with a group name field and a Color token type" loading="lazy">
        </div>
        <p>
            The palette in the screenshot above shows how color worked. You chose one seed color per hue, and Platform generated a full 50 to 950 ramp from it. The starter's seven hues became seventy-seven CSS variables on export. I'll explain how the ramps were generated in the backend section.
        </p>
        <h3>Components</h3>
        <div class="detail-image-wrapper" data-scrollable="true">
            <div class="scroll-container" tabindex="0" role="region" aria-label="Scrollable image content">
                <img src="/img/work/platform/components-category.webp" alt="Platform's Components category showing button variants rendered above their HTML markup" loading="lazy">
            </div>
            <div class="scroll-indicator">
                <em><span class="sr-only">This Section is</span> Scrollable</em>
            </div>
        </div>
        <p>
            Components let you build examples of your UI with HTML markup and a stylesheet that used the project's own tokens. Each component was previewed in a sandboxed frame that didn't run JavaScript. Since the styles referenced tokens, updating a value like <code>--color-primary</code> updated every button variant and state in the preview.
        </p>
        <div class="detail-image-wrapper">
            <img src="/img/work/platform/new-component-modal.webp" alt="New component modal with a component name field and a Start from option" loading="lazy">
        </div>
    </div>
</details>
<details name="accordion">
    <summary>Building the Backend</summary>
    <div class="details-content">
        <p>
            The server was written in Go using the standard <code>net/http</code> package. Go 1.22 added method and path patterns to <code>ServeMux</code>, so I could write the route table with one handler per line. Handlers that required a signed-in user were wrapped in an auth middleware that passed the user in as an argument. The public pages (home, docs, and sign in) were rendered with Go HTML templates, and the workspace was a single-page app served as static files.
        </p>
        <p>
            Data was stored in PostgreSQL behind small repository interfaces, which also made it easy to fake the database in tests. The schema migrated automatically on startup, so running the whole app locally only took a <code>docker compose up</code>.
        </p>
        <h3>Importing and Exporting Tokens</h3>
        <p>
            Most of the interesting work happened in the import and export code. A few decisions shaped how it worked:
        </p>
        <ul role="list" class="long-list">
            <li>
                <strong>Resolving aliases on import.</strong> When a design system referenced one token from another, I resolved the reference at import time, so every stored token was a literal value. This also worked well for Figma, since many Figma plugins can't resolve aliases.
            </li>
            <li>
                <strong>Testing the round trip.</strong> A group called "Primitives Color" holding <code>green-500</code> exported as <code>primitives/color/green-500</code>, which is the same path it would have been imported from. I wrote a test to make sure an export could be imported back without any changes.
            </li>
            <li>
                <strong>Working within Figma's limits.</strong> The DTCG export was meant to give a Figma file a starting point, but it didn't keep the two in sync. Figma also has no variable type for shadows, gradients, or images (those are styles in Figma), so I still exported them for importing back into Platform and noted in the docs that Figma plugins would skip them.
            </li>
            <li>
                <strong>Separate files for authoring and code.</strong> The JSON export kept everything needed to edit the design system, including groups, order, and descriptions. The code export was a flat object with camelCased keys like <code>colorGreen500</code>, for React Native, styled-components, or a plain theme object. Flattening the keys lost the group information, so the code export couldn't be imported back.
            </li>
        </ul>
        <h3>Generating Color Ramps</h3>
        <p>
            A color token stored the single value someone chose, and Platform generated an eleven-step ramp (50 to 950) wherever it was needed. I used the OKLCh color space for this. Mixing toward white and black in sRGB tends to produce muddy mid-tones and shift the hue, while OKLCh keeps the steps looking even. I also reduced the chroma at both ends of the ramp so the lightest shades didn't look neon and the darkest didn't look muddy. Step 500 was always the original seed color.
        </p>
        <p>
            One challenge was that the CSS export was built in the browser and the code export was built in Go, so I had to write the same algorithm twice. To keep them consistent, I generated a fixtures file from the JavaScript version and wrote a Go test that checks its output against it.
        </p>
    </div>
</details>
<details name="accordion">
    <summary>Building the Frontend</summary>
    <div class="details-content">
        <p>
            After <strong>Brick Art Creator</strong>, I wanted to see how far I could take vanilla Web Components. The Platform workspace was a single-page app built entirely with native custom elements. There was no bundler or transpiler, so the <code>.mjs</code> files in the <code>public/</code> folder were exactly what the browser loaded, and the production Docker image didn't need Node at all.
        </p>
        <p>
            I did use TypeScript as a development-only type checker. Running <code>tsc --checkJs --noEmit</code> over the JSDoc in my helper files (token documents, palettes, and exports) found sixteen real bugs on the first run, including three fields that were silently being dropped when a project loaded.
        </p>
        <h3>A Signals-Based State Manager</h3>
        <p>
            In the Brick Art Creator lessons, I wrote that you'll miss reactivity when working with Custom Elements. For Platform, I built a small signals library to fill that gap. A <code>Signal</code> holds a value and notifies its subscribers when it changes, an <code>Effect</code> keeps track of the signals it reads and re-runs when any of them change, and a <code>Computed</code> derives its value from other signals.
        </p>
        <p>
            The part I'm most proud of is <code>batch()</code>. Editing a token can update several signals at once, and without batching, every subscriber would run after each update and briefly show a partially updated state. Inside a batch, notifications are queued and then delivered once after the last update. I also added a limit on how many times the queue can re-run, so if two effects ever kept triggering each other, the app logs an error and stops rather than freezing the browser tab.
        </p>
        <h3>The App's Own Design System</h3>
        <p>
            Of course, a design token app needed its own design tokens. The app's styles were built on CSS custom properties in a single <code>tokens.css</code> file, shared by the marketing site and the workspace in both light and dark modes. One example of a rule from that file: the bright brand green only had about 1.8:1 contrast against the light background, so I used <code>--color-primary</code> for fills and a separate, darker <code>--color-primary-text</code> for accent text in light mode.
        </p>
        <p>
            Each project could also have a preview page, written in HTML and CSS by the project's author. Platform injected the project's tokens as CSS custom properties and rendered the page in a sandboxed iframe. This meant that <code>var(--color-primary)</code> in the preview used the same variable name a developer would use in production.
        </p>
    </div>
</details>
<details name="accordion">
    <summary>Building the MCP Server</summary>
    <div class="details-content">
        <p>
            The feature I was most excited about was the built-in <abbr title="Model Context Protocol">MCP</abbr> server. Any MCP client, like Claude Code, could connect to <code>/mcp</code> with a personal access token and use two tools: <code>list_projects</code> and <code>get_design_tokens</code>.
        </p>

```bash
claude mcp add --transport http platform https://platformdesign.app/mcp \
  --header "Authorization: Bearer YOUR_TOKEN"
```

        <p>
            I put a lot of thought into what the agent received. The response started with the project's <strong>rules</strong>, the usage guide written by the project's author, since that's the part that tells an agent which token to use and when. After that came the token groups, in the same order the author arranged them. Each token included both its CSS variable name and its JavaScript property name (<code>css_variable</code> and <code>js_property</code>), so the agent didn't have to guess how to reference it in code.
        </p>
        <p>
            I also published a companion <a href="https://github.com/Platform-DS/platform-design-skills" title="Go to the Platform Design Agent Skill on GitHub" target="_blank">Agent Skill</a> that teaches an agent how to use this data. Inside the app, there was also an AI sidebar, which went through the server so the API key never reached the browser.
        </p>
    </div>
</details>
<details name="accordion">
    <summary>Lessons Learned</summary>
    <div class="details-content">
        <p>
            Platform was a fun project, and I'm happy with what I built. I've decided to sunset it, though, and the reason behind that decision is probably the most valuable thing I learned.
        </p>
        <h3>Lesson One: Switching Has a Cost.</h3>
        <p>
            Many teams already have their own workflows for managing design systems. Asking them to adopt another platform means asking them to invest time in setup, migration, and learning something new. The productivity gains have to outweigh that effort, and for the teams I was hoping to help, I don't think the case was strong enough.
        </p>
        <h3>Lesson Two: I've Seen This Before.</h3>
        <p>
            In my Block Digital lessons, I wrote "maybe you shouldn't reinvent the wheel" and "simplicity is subjective." Platform reminded me of the same thing. Even if a tool is simpler or better integrated than what a team uses now, the team still has to choose to switch. Next time, I'd talk to more teams about what switching would actually cost them before building so much of the product.
        </p>
        <h3>Lesson Three: You Can Go a Long Way With Vanilla.</h3>
        <p>
            A Go server, native Web Components, and a signals library under 300 lines were enough to build a multi-user app with auth, sharing, imports, exports, and an MCP server. I never felt like I needed a framework, and the codebase stayed easy to understand the whole way through.
        </p>
        <h3>Lesson Four: Hosting Has Its Ups and Downs.</h3>
        <p>
            Railway made it easy to deploy a Dockerfile alongside a Postgres database, and the Go server shut down gracefully so in-flight requests could finish during each redeploy. It had its rough patches, though, and with managed hosting there's only so much you can control.
        </p>
        <p>
            If you're interested in how design systems can speed up development on larger teams, with AI or otherwise, feel free to reach out. I'd love to talk about it.
        </p>
    </div>
</details>
