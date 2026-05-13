---
tags: work
permalink: false
name: Sweetwater
id: sweetwater
role: Senior UX Engineer | Consultant
start: Dec 2025
end: May 2026
order: 0
thumb: /img/cv/cv-sweetwater.webp
logo: /img/work/sweetwater/sweetwater-logo.svg
header_image: /img/work/sweetwater/whats-new.webp
tech:
  [Web Components, Storybook.js, Design System, View Transitions, Algolia]
description: The world's leading music technology and instrument retailer.
summary: |
  Sweetwater is one of the largest pro audio retailers globally, providing a wide selection of musical instruments and audio equipment along with supporting services such as technical assistance and flexible payment options. My work focused on improving core front-end systems that power product discovery and merchandising experiences.
accomplishments:
  [
    "Built a reusable Algolia collection host component capable of rendering any product collection through the Algolia REST API",
    "Introduced a state-driven development architecture to improve cross-component communication, scalability, and maintainability",
    "Rebuilt the \"What's New\" experience using client-side rendering to improve performance and user experience",
    "Developed Sweetwater’s \"Top Selling\" product experience using the reusable Algolia collection architecture",
    "Contributed to \"Sugar,\" a front-end design system built with native Web Components, including Storybook.js documentation and component testing",
    "Improved global JavaScript and CSS architecture for better developer ergonomics and long-term maintainability",
    "Prototyped an LLM-powered chatbot integrated with the Algolia collection architecture to deliver contextual product recommendations"
  ]
links:
  - Sweetwater | What's New: https://www.sweetwater.com/whats-new/
  - Sweetwater | Top Selling: https://www.sweetwater.com/top-selling/
---

<!-- Details -->
<details name="accordion">
   <summary>Sugar Design System</summary>
   <div class="details-content">
      <div class="detail-image-wrapper">
         <img src="/img/work/sweetwater/sugar-home.webp" alt="Sugar Design System homepage" loading="lazy">
      </div>
      <h3>The Problem</h3>
      <p>
         Sweetwater’s ecommerce ecosystem spans multiple repositories and technologies maintained by different teams. Parts of the platform were built with React, Vue, jQuery, Tailwind, vanilla JavaScript, and varying Sass architectures. There was no shared component strategy, documentation system, or agreed-upon front-end conventions across teams.
      </p>
      <p>
         Because the UX team was responsible for maintaining the visual consistency of the entire platform, this created major challenges around scalability, maintainability, and developer experience.
      </p>
      <h3>The Solution</h3>
      <p>
         I was brought in to help establish a more maintainable front-end architecture. After reviewing the existing ecosystem, it became clear that the missing piece was a framework-agnostic design system built around reusable components and shared design tokens.
      </p>
      <p>
         The goal was not to enforce a rigid framework or heavily opinionated architecture. Instead, the focus was on creating lightweight tools developers could adopt incrementally regardless of their stack.
      </p>
      <p>
         To support documentation, testing, and component discoverability, I implemented the system using <a href="https://storybook.js.org/" target="_blank">Storybook.js</a>, giving teams a centralized environment for previewing and validating components.
      </p>
      <div class="detail-image-wrapper">
         <img src="/img/work/sweetwater/sugar-tokens.webp" alt="Sugar design tokens" loading="lazy">
      </div>
      <h3>Design Tokens</h3>
      <p>
         With the help of the design team’s existing Figma specs, I created a design token system powered by CSS Custom Properties. Drawing inspiration from projects like <a href="https://open-props.style/" target="_blank">Open Props</a> and guidelines from Tailwind's <a href="https://refactoringui.com/" target="_blank">Refactoring UI</a>, I established a scalable naming convention using the <code>--sds</code> prefix to avoid collisions across applications.
      </p>
      <p>
         These tokens standardized spacing, typography, colors, shadows, sizing, and other foundational design primitives across the platform.
      </p>
      <div class="detail-image-wrapper">
         <img src="/img/work/sweetwater/sugar-product-card.webp" alt="Sugar product card component" loading="lazy">
      </div>
      <h3>Web Components</h3>
      <p>
         Rather than rebuilding every interface on the site, I focused on defining a strong baseline component library that teams could compose and extend as needed.
      </p>
      <p>
         The system included two categories of components:
      </p>
      <ul>
         <li>
            <strong>UI Components:</strong> for small reusable interface elements such as buttons, badges, and checkboxes
         </li>
         <li>
            <strong>Composite Components:</strong> for larger experiences composed of multiple UI components, such as product cards and collection layouts
         </li>
      </ul>
      <p>
         By building these with native Web Components, the system could be consumed across React, Vue, PHP templates, or plain HTML without requiring framework-specific rewrites.
      </p>
      <h3>Utilities</h3>
      <p>
         To improve developer ergonomics, I also created several supporting utilities around the component ecosystem. This included lightweight framework adapters for React and Vue, shared accessibility helpers, skeleton loading utilities, and a small reactive state manager inspired by publish/subscribe patterns and modern signal-based architectures.
      </p>
      <h3>Deployment & Adoption</h3>
      <p>
         I worked closely with the DevOps team to distribute the design system as a shared <abbr title="Node Package Manager">NPM</abbr> package consumed across multiple repositories. I also integrated Google’s <a href="https://github.com/GoogleChromeLabs/postcss-jit-props">postcss-jit-props</a> which made custom properties globally available without having to import them in the CSS/SCSS.
      </p>
      <p>
         The system was successfully adopted across several major customer-facing experiences, including 
         <a href="https://sweetwater.com/whats-new/">What's New</a>, 
         <a href="https://sweetwater.com/top-selling/">Top Selling</a>, and 
         <a href="https://sweetwater.com/giveaways/">Giveaways</a>.
      </p>
   </div>
</details>

<details name="accordion">
   <summary>Algolia Collection</summary>
   <div class="details-content">
      <div class="detail-image-wrapper" data-scrollable="true">
         <div class="scroll-container" tabindex="0" role="region" aria-label="Scrollable image content">
            <img src="/img/work/sweetwater/old-nowshipping.webp" alt="Legacy Now Shipping collection page" loading="lazy">
         </div>
         <div class="scroll-indicator">
            <em><span class="sr-only">This section is</span> Scrollable</em>
         </div>
      </div>
      <h3>The Problem</h3>
      <p>
         The UX team wanted to redesign Sweetwater’s “Now Shipping” page to provide a more modern collection browsing experience. The existing implementation lacked many standard ecommerce features such as filtering, sorting, searching, and client-side pagination.
      </p>
      <p>
         Additionally, the company wanted to move away from hard page reloads and rely more heavily on their Algolia datasets rather than traditional backend-rendered collection pages. Since Algolia exposes highly optimized JSON responses, this approach offered major performance and UX advantages.
      </p>
      <h3>The Solution</h3>
      <p>
         Fortunately, much of the foundational work had already been established through the Sugar Design System. I already had reusable product card components, shared design tokens, and a lightweight reactive state manager that could support a highly interactive collection experience.
      </p>
      <p>
         From there, I designed and built a reusable collection “host component” responsible for:
      </p>
      <ul>
         <li>Fetching collection data from the Algolia REST API</li>
         <li>Updating a centralized store</li>
         <li>Hydrating child UI components</li>
         <li>Rendering products client-side</li>
      </ul>
      <h3>Architecture</h3>
      <p>
         I wanted the collection system to be modular, reusable, and framework-agnostic. The architecture was built around a centralized reactive store with isolated UI components subscribing to shared state updates.
      </p>
      <ul>
         <li>Host/parent collection component</li>
         <li>Centralized store and state manager</li>
         <li>Child components subscribed to store updates</li>
         <li>Algolia service layer for data fetching and query management</li>
         <li>Utility functions for normalization and shared logic</li>
         <li>Native Web Components throughout the entire system</li>
      </ul>
      <div class="detail-image-wrapper" data-scrollable="true">
         <div class="scroll-container" tabindex="0" role="region" aria-label="Scrollable image content">
            <img src="/img/work/sweetwater/algolia-diagram.webp" alt="Algolia collection architecture diagram" loading="lazy">
         </div>
         <div class="scroll-indicator">
            <em><span class="sr-only">This section is</span> Scrollable</em>
         </div>
      </div>
      <h3>Reusability</h3>
      <p>
         One of the primary goals was making the collection highly configurable with minimal implementation overhead. I exposed a set of declarative <code>data-attributes</code> that allowed consuming applications to quickly render entirely different collections without modifying the underlying component logic.
      </p>
      <p>
         Because the system was fully self-contained, there was effectively no frontend coupling to backend-rendered templates. The collection handled its own data fetching, state updates, rendering, and UI interactions internally.
      </p>
      <p>
         Some configurable collection properties included:
      </p>
      <ul>
         <li>Filter queries for preconfigured collection views</li>
         <li>Algolia index selection</li>
         <li>Total hit limits</li>
         <li>Hits per page</li>
         <li>Sorting configuration</li>
         <li>Feature toggles for collection behaviors</li>
      </ul>
      <p>
         This architecture made it extremely fast for teams to launch entirely new collection experiences using the same underlying system.
      </p>
   </div>
</details>

<details name="accordion">
    <summary>"What's New" Page Rebuild</summary>
    <div class="details-content">
        <div class="detail-image-wrapper">
            <img src="/img/work/sweetwater/whats-new.webp" alt="Image of Sweetwater's What's New page" loading="lazy">
        </div>
        <p>
            As described in the previous section, the team wanted to rebuild their existing "Now Shipping" page. 
            Thanks to the reusable <code>algolia-collection</code> component, implementation was straightforward. 
            I simply configured the collection using data attributes to pre-filter new products and limit the collection to 1000 items.
        </p>
        <h3>Enhancements</h3>
        <p>
            Alongside the core collection experience, we wanted to improve product discovery by adding quick category filters above the collection itself. 
            This allowed customers to jump directly into a category without needing to use the filter sidebar, creating a faster and more intuitive browsing experience.
        </p>
        <p>
            To support this, I built a reusable <code>category-filters</code> web component within the Sugar Design System. 
            Each category button dispatched custom events that could be consumed by the parent application. 
            Inside the <code>algolia-collection</code> host component, I listened for these events and updated the centralized collection store accordingly, automatically synchronizing all subscribed child components downstream.
        </p>
        <p>
            I also wanted to improve the visual experience during collection reloads. 
            Even though the new implementation was significantly faster than the previous server-rendered version, rapid DOM updates created noticeable blinking when filters or sorting changed.
        </p>
        <p>
            To solve this, I implemented a lightweight <code>withViewTransition</code> helper built around the browser's native View Transitions API. 
            With minimal code, the collection could smoothly crossfade and intelligently animate DOM updates between states. 
            Since the feature progressively enhances the experience, unsupported browsers simply fall back to the default behavior without issue.
        </p>
        <p>
            You can view the live implementation 
            <a href="https://sweetwater.com/whats-new/" target="_blank">here</a>.
        </p>
    </div>
</details>

<details name="accordion">
    <summary>"Top Selling" Page</summary>
    <div class="details-content">
        <div class="detail-image-wrapper">
            <img src="/img/work/sweetwater/top-selling.webp" alt="Image of Sweetwater's Top Selling page" loading="lazy">
        </div>
        <p>
            This page was intentionally very similar to the "What's New" implementation, and that was a good thing. 
            One of the primary goals of the <code>algolia-collection</code> architecture was reusability. 
            By simply changing a few data attributes, I was able to render an entirely different collection experience tailored to a new business goal.
        </p>
        <p>
            In this case, the collection pointed to a different Algolia index containing Sweetwater's top-selling products. 
            I also introduced an additional attribute to disable sorting controls since changing the order of a curated top-selling collection would not have aligned with the intended UX.
        </p>
        <p>
            You can view the live implementation 
            <a href="https://sweetwater.com/top-selling/" target="_blank">here</a>.
        </p>
    </div>
</details>

<details name="accordion">
    <summary>Taggy: Prototype Chat Bot</summary>
    <div class="details-content">
        <div class="detail-image-wrapper">
            <img src="/img/work/sweetwater/taggy-bot.webp" alt="Taggy prototype chat assistant" loading="lazy">
        </div>
        <p>
            As a final experimental project, I built a prototype conversational assistant to explore what a more contextual shopping experience could look like on top of the existing <code>algolia-collection</code> architecture. 
            Because the collection was already built around a centralized store with a publish/subscribe model, it was straightforward to integrate additional components that could both read from and influence collection state.
        </p>
        <h3>Concept: Taggy</h3>
        <p>
            During development, I identified a gap in the empty-state experience of the collection. The default fallback message was functional but not helpful. 
            I explored existing internal patterns for inspiration and found a more engaging empty state in another application that introduced "Taggy", a playful internal mascot.
        </p>
        <p>
            I extended this concept into a conversational assistant inspired by early UI companions such as Microsoft’s Clippy. 
            The goal was to create a lightweight, friendly interface that could guide users toward products when traditional filtering was not sufficient.
        </p>
        <h3>Implementation</h3>
        <p>
            Taggy was implemented as a set of native Web Components using the same host + store architecture as the rest of the system. 
            It leveraged the OpenAI API to interpret natural language queries and convert them into structured JSON parameters compatible with the Algolia collection layer.
        </p>
        <p>
            The response flow was bidirectional: user input was converted into structured search parameters, the Algolia results were returned, and then passed back into the LLM to generate a conversational explanation of the results.
        </p>
        <p>
            This created a unified experience where natural language input could seamlessly drive existing search infrastructure without modifying the underlying data model.
        </p>
        <h3>Outcome and Exploration</h3>
        <p>
            The primary value of this prototype was demonstrating contextual search on top of a traditional faceted filtering system. 
            While functionally equivalent to existing filters, the conversational interface lowered friction for non-technical queries such as “find me a blue guitar for my uncle’s birthday.”
        </p>
        <p>
            Additional enhancements included prompting the assistant to recommend sales support when no results were found and shaping responses in a more personable tone for engagement.
        </p>
        <p>
            This was built in approximately one day as a proof of concept and served as an exploration of how LLM-driven interfaces could augment existing e-commerce search systems without replacing them.
        </p>
        <p>
            If you have not already, feel free to click the video at the top of the window to view the demo, and enjoy some light Brazilian background music while you watch.
        </p>
    </div>
</details>

<details name="accordion">
    <summary>Lessons Learned</summary>
    <div class="details-content">
        <p>
            I spent four action-packed years at Sweetwater across three different roles. During that time, I worked on everything from managing teams and defining Jira workflows to building front-end experiences from the ground up. Below are some key technical and personal lessons from that period.
        </p>
        <h3>Lesson One: Knowing when architecture matters</h3>  
        <p>  
            I enjoy building systems from scratch and often prefer native browser APIs over third-party frameworks. That said, I learned that architecture should always match the problem. Over-engineering can slow teams down just as easily as poor structure.
        </p> 
        <h3>Lesson Two: Change needs buy-in</h3>  
        <p>  
            Technical improvements are only effective when the team understands and supports them. Even well-designed systems can fail if you do not bring other developers along with you before introducing major changes.
        </p>  
        <h3>Lesson Three: Voice controls are not always the answer</h3>  
        <p>  
            Accessibility features like voice control are powerful, but real-world usability often depends on context. I learned that “technically supported” does not always mean “practically usable.”
        </p>  
        <h3>Lesson Four: Use structured metadata early</h3>
        <p>
            I learned the importance of structured data like JSON-LD when working with heavily client-rendered applications. Search engines and crawlers still rely on clear, pre-defined metadata, especially when content is rendered dynamically. It is far easier to design for this from the start than to retrofit it later.
        </p>
        <h3>Lesson Five: Define device support up front</h3>
        <p>
            Do not wait until late in a project to discover which browsers and devices are officially supported. Cutting-edge features like <code>@scope</code> can introduce unexpected compatibility issues. Establishing a clear support matrix early prevents rework and surprises later in development.
        </p>
    </div>  
</details>
