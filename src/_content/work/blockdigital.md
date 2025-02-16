---
tags: work
permalink: false
name: Block Digital
id: blockDigital
role: Solutions Architect
start: Sep 2017
end: Mar 2020
thumb: /img/cv/cv-block.svg
header_image: /img/work/block/blockHomepage.png
tech: [Hugo, React, Sass, Gulp, Netlify, Github]
description: Website templates built with the JAM Stack to simplify development and content management.
summary: |
  "Sites Made Simple." BLOCK Digital was built to deliver modern, high-performance, and lightweight websites using JAMstack technologies. At its core, BLOCK leveraged the Hugo Static Site Generator, where I developed reusable components—or “blocks”—that could be referenced in Markdown files to generate pages dynamically. The sites were deployed via Netlify, with a fully editable CMS powered by Netlify CMS and React.js.<br>
  Each site also included a custom Style Guide, serving as both a UI reference for clients and a developer-friendly resource with code examples, ensuring seamless content management and scalability. There were many aspects to this project but in the details below I go through what I believe are the key points that were worth sharing.
accomplishments:
  [
    Built Custom CMS using Netlify CMS.,
    Created Live Preview windows using React Components.,
    Deployed directly to Netlify from Github Repositories.,
    Created 6 Unique website templates for various organization types.,
    Built all websites including the business site using Hugo.,
    Used Gulp for asset optimization,
    minification.,
    Connected third party API's depending on business needs.,
  ]
---

<!-- Details -->
<details>
    <summary>Choosing the JAMstack</summary>
    <div class="details-content">
        <p>
            The <strong>JAMstack</strong> (JavaScript, APIs, and Markdown) is a modern web architecture commonly used with <strong>static site generators</strong> like <a href="https://gohugo.io/" title="Go To Hugo Website" target="_blank">Hugo</a> and <a href="https://www.11ty.dev/" title="Go To 11ty Website" target="_blank">11ty</a>. These tools convert Markdown files into HTML at build time, eliminating the need for a server-side language like <abbr title="Personal Home Page Hypertext Preprocessor">PHP</abbr>. This approach allows for reusable templates and a highly efficient deployment process.
        </p>
        <p>
            To deploy these sites, I simply pushed each project to a dedicated <strong>GitHub repository</strong> and connected it to <strong>Netlify</strong>. With minimal setup, any updates pushed to GitHub would trigger an automatic build and deployment. Netlify also provided a <strong>Git-based CMS</strong>, originally called <strong>Netlify CMS</strong> (now <a href="https://decapcms.org/docs/intro/" target="_blank" title="Go to Decap CMS website">Decap CMS</a>). Unlike traditional databases, Decap CMS stores content directly in a Git repository, making it a lightweight solution perfect for small business marketing sites.
        </p>
        <p>
            To enhance the CMS experience, I built <strong>custom <a href="https://react.dev/" title="Go to React.js website" target="_blank">React</a> components</strong> for the preview window, ensuring a 1:1 representation of the final website. This approach eliminated the need for paid hosting, as there was no PHP backend to maintain. Any additional functionality—such as social media feeds or event calendars—was handled through <strong>third-party APIs</strong>.
        </p>
        <p>
            I chose <strong>Hugo</strong> as the static site generator due to its <strong>blazing-fast build times</strong>. I also created multiple <strong>pre-built templates</strong> tailored to different business needs. The end result was 
            a highly adaptable system that provided small businesses with cost-effective, low-maintenance websites requiring 
            minimal configuration.
        </p>
    </div>
</details>
<details>
    <summary>Building The CMS</summary>
    <div class="details-content">
        <div class="detail-image-wrapper">
            <img src="/img/work/musora/musora-ui-colors.png" alt="Musora UI Colors" loading="lazy">
        </div>
        <p>
            Netlify CMS relies on a <code>config.yml</code> file to define its behavior, specifying where content is stored, how collections are structured, and how the editing interface is configured. The core of this setup revolves around <code>collections</code> and <code>fields</code>, which determine what content can be edited and the specific fields available for each type of content.
        </p>
        <p>
            Each field is defined by a <code>widget</code> property, which determines the type of input used. Some common widgets include:
        </p>
        <ul role="list">
            <li><code>string</code> – Basic text input</li>
            <li><code>boolean</code> – A simple true/false toggle</li>
            <li><code>image</code> – File upload for images</li>
            <li><code>list</code> – A repeatable set of items</li>
            <li><code>object</code> – A container for grouping multiple fields</li>
        </ul>
        <p>
            The <code>object</code> widget is especially powerful because it allows nesting multiple widgets under a single field. You can even nest other <code>object</code> widgets, making it ideal for structured content.
        </p>
        <h3>Structuring Pages and Components</h3>
        <p>
            I structured each page of the website as a collection and used appropriate field widgets to build out the content. The key to flexibility was leveraging <code>list</code> and <code>object</code> fields to create <strong>nested components and multi-column layouts</strong>.
        </p>
        <p>
            To enable this, I added a <code>list</code> field called <code>components</code>. Each component within this list was an <code>object</code> containing elements such as:
        </p>
        <ul role="list">
            <li>Buttons</li>
            <li>Text (Markdown content)</li>
            <li>Images</li>
            <li>Forms</li>
        </ul>
        <p>
            For more complex layouts, I introduced "nested columns," which allowed additional components inside them. This created a flexible system where users could build intricate layouts directly from the CMS.
        </p>
        <h3>Custom Attributes and Styling</h3>
        <p>
            To allow users to customize styles and attributes, I added a <code>list</code> widget called <code>attributes</code> to most elements. This let users define custom attributes and values as needed. 
        </p>
        <p>
            Additionally, column elements accepted a string of class names, making it easy to apply custom styles—such as defining column widths in a CSS grid system.
        </p>
        <h3>Creating the CMS Interface</h3>
        <p>
            The CMS interface itself required a dedicated HTML file at <code>/static/admin/index.html</code>, which acted as a <strong>single-page application (SPA)</strong>. Netlify CMS provided an option to extend the interface with custom React components, making it possible to preview content inside the CMS.
        </p>
        <p>
            Inside the <code>static/admin/previews/</code> directory, I created preview components for the blog and general page layouts. Then, in a <code>preview.js</code> file, I registered them with the CMS:
        </p>
        <pre>
        <code>
    CMS.registerPreviewTemplate("site", SitePagePreview);
        </code></pre>
        <p>
            This approach ensured that the preview inside the CMS closely matched the live website. The site's assets, including JavaScript bundles and minified CSS, were handled with Gulp.js for optimization. (Today, alternative tools like Vite or esbuild provide more modern asset bundling solutions.)
        </p>
        <p>
            While this CMS setup successfully met my goals, it also introduced some challenges—such as styling limitations and CMS-specific quirks—which I'll discuss in the <strong>Lessons Learned</strong> section.
        </p>
    </div>

</details>
<details>
    <summary>Building Custom Hugo Templates</summary>
    <div class="details-content">
        <div class="detail-image-wrapper">
            <img src="/img/work/musora/musora-ui-colors.png" alt="Musora UI Colors" loading="lazy">
        </div>
        <p>
            I built a Tailwind utility class library called <strong>Stylesora</strong> to centralize Musora's custom styles. 
            Working closely with the UX team, I ensured all <a href="https://www.figma.com/" title="Go to Figma's website" target="_blank">Figma</a> designs were accurately reflected in the front-end implementation. By using CSS as JSON, I seamlessly integrated Stylesora into our Tailwind config, making it easy to maintain and scale our design system.
        </p>
    </div>
</details>
<details>
    <summary>Lessons Learned</summary>
    <div class="details-content">
        Block Digital was a fun and ambitious project, but ultimately it was not sustainable. It served as a tech demo of what was possible with this Stack. I learned that you could mimic a traditionaly CMS including a live preview with the Netlify and the JAMstack. I learned that it saves time and money when choosing these technologies. Unfortunately, good technology does not a successful business make... 
        First Lesson - As far as User Experience was concerned, the Netlify CMS nested field structure was not optimal.. While it was possible to build out the entire page UI using nested fields, the user would have to spulunk through these nested dropdowns until they found the actual field they were looking for. This was less the fault of Netlify and more a personal design choice, but I wish there was a better way of visualizing nested fields. Perhaps Decap will/has solved this problem. 
        Second Lesson - Time Management. My original goal as a business owner was to make the tech stack so simple, that I could easily customize and deploy within 3 days. Add Company Name, add image assets and copy, done! In the real world, clients want multiple revisions. During my time as a Senior Frontend Developer at <a href="https://union.co/" title="Go To Union.co website">Union.co</a>, I learned the concept of being an <strong>AOR</strong> "Agency of Record" and having clients on retainer. It alows your clients a certain amount of revisions (billed monthly) while not wasting your personal time and money. 
        Lesson Three - what is simple to a developer, nested columns, attributes, and components, may not be simple to your client. They might have already been trained in the ubiquitous technology that is Wordpress, or even new CMS's like Squarespace. Introducing an alternative may be introducing added complexity for them. 
        Lesson Four - cost benefit of technology choices. Similar to the last point, but with a slightly different emphasis. Just because you <i>can</i> do something, does not mean you <i>should</i>. If the business goal is to create websites quickly, research all of the technology available before you reinvent the wheel. In the end, ironically, my hightest paying client (who I can't disclose due to an NDA), payed my small agency to build and update custom Wordpress templates. <strong>Union.co</strong> also used wordpress tempaltes, along with other PHP based CMSs such as Craft. At the end of the day you should do what's best for you business goals, and your clients. And be very very careful to not overengineer your solution. 
    </div>
</details>
