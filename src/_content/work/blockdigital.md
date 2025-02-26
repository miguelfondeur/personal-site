---
tags: work
permalink: false
name: Block Digital
id: blockDigital
role: Business Owner / Solutions Architect
start: Sep 2017
end: Mar 2020
order: 3
thumb: /img/cv/cv-block.webp
header_image: /img/work/block/block-homepage.webp
tech: [Hugo, React, Sass, Gulp, Netlify, Github]
description: Website templates built with the JAM Stack to simplify development and content management.
summary: |
  "Sites Made Simple." BLOCK Digital was built to deliver modern, high-performance, and lightweight websites using JAMstack technologies. At its core, BLOCK leveraged the Hugo Static Site Generator, where I developed reusable components—or “blocks”—that could be referenced in Markdown files to generate pages dynamically. The sites were deployed via Netlify, with a fully editable CMS powered by Netlify CMS and React.js.<br>
  Each site also included a custom Style Guide, serving as both a UI reference for clients and a developer-friendly resource with code examples, ensuring seamless content management and scalability. There were many aspects to this project but in the details below I go through what I believe are the key points that were worth sharing.
accomplishments:
  [
    Developed a custom CMS using Netlify CMS for streamlined content management.,
    Built live preview functionality using React components for real-time content editing.,
    Automated deployments directly to Netlify from GitHub repositories.,
    Designed and Developed six unique website templates tailored for different business needs.,
    "Built all websites, including the Block Digital, site using Hugo for speed and flexibility.",
    Optimized assets using Gulp to enhance performance and load times.,
    Integrated third-party APIs for custom functionality based on business requirements.,
  ]
---

<!-- Details -->
<details>
    <summary>Building Block Digital</summary>
    <div class="details-content">
        <div class="detail-image-wrapper" data-scrollable="true">
            <div class="scroll-container" tabindex="0" role="region" aria-label="Scrollable image content">
                <img src="/img/work/block/block-homepage.webp" alt="Block Digital website" loading="lazy">
            </div>
            <div class="scroll-indicator">
                <em><span class="sr-only">This Section is</span> Scrollable</em>
            </div>
        </div>
        <h3>Forming the Idea</h3>
        <p>
            I wanted to create a faster, simpler, and cheaper way to develop and deploy sites for small businesses. I wanted to avoid the headache of developing and maintaining Wordpress sites. Scaling this into a viable business was my first goal, but my second goal was to experiment with <strong>JAMstack</strong> technologies and see exactly what was possible. I wanted to "productize" web services. The main product being website development. Other services I wanted to offer were:
        </p>
        <ul role="list">
            <li>Web Design</li>
            <li>Brand Strategy</li>
            <li>Digital Marketing</li>
            <li>Site Audits</li>
        </ul>
        <p>
            Web Design would be provided by the <a href="https://www.manypixels.co/" title="Go to ManyPixels website" target="_blank">ManyPixels</a> design agency. I leaned on my own professional experience to provide Brand Strategy and Site Audits. The idea was to work with clients to identify the goal of their existing site or brand and provide advice on how to best communicate that to their customers. For all design updates to their existing brand or site, I would lean on <strong>ManyPixels</strong>. 
        </p>
        <p>
            Digital Marketing involved providing a social media content strategy and a paid ad strategy, with the help of my better half, <strong>Celeste Fondeur</strong>, who has professional experience as a content writer and social media strategist.
        </p>
        <div class="detail-image-wrapper" data-scrollable="true">
            <div class="scroll-container" tabindex="0" role="region" aria-label="Scrollable image content">
                <img src="/img/work/block/blockPlans.webp" alt="Block Digital website" loading="lazy">
            </div>
            <div class="scroll-indicator">
                <em><span class="sr-only">This Section is</span> Scrollable</em>
            </div>
        </div>
        <h3>How Tech Informed Pricing</h3>
        <p>
            The goal of the pricing strategy was to market for volume. With a lower price point, I would be able to gain more clients. The turnaround time would be much faster given the simpler tech stack. I would utilize <strong>ManyPixels</strong> to create templates that would fit most small business needs.
        </p>
        <p>
            I would upsell based on the number of revisions, which I priced as "Site Monitoring." If the customer wanted something completely custom-built, the price was determined after a conversation with them. This could include, and in fact did, working with customers who had completely different tech stacks and tech needs.
        </p>
        <h3>Choosing the JAMStack</h3>
        <p>
            The <strong>JAMstack</strong> (JavaScript, APIs, and Markdown) is a modern web architecture commonly used with <strong>static site generators</strong> like <a href="https://gohugo.io/" title="Go To Hugo Website" target="_blank">Hugo</a> and <a href="https://www.11ty.dev/" title="Go To 11ty Website" target="_blank">11ty</a>. These tools convert Markdown files into HTML at build time, eliminating the need for a server-side language like <abbr title="Personal Home Page Hypertext Preprocessor">PHP</abbr>. This approach allows for reusable templates and a highly efficient deployment process.
        </p>
        <p>
            To deploy these sites, I simply pushed each project to a dedicated <strong>GitHub repository</strong> and connected it to <strong>Netlify</strong>. With minimal setup, any updates pushed to GitHub would trigger an automatic build and deployment.
        </p>
        <p>
            Netlify also provided a <strong>Git-based CMS</strong>, originally called <strong>Netlify CMS</strong> (now <a href="https://decapcms.org/docs/intro/" target="_blank" title="Go to Decap CMS website">Decap CMS</a>). Unlike traditional databases, Decap CMS stores content directly in a Git repository, making it a lightweight solution perfect for small business marketing sites.
        </p>
        <div class="detail-image-wrapper">
            <img src="/img/work/block/block-jamstack-diagram.webp" alt="A rough diagram of How the Hugo Static Site Generator, Netlify, and Netlify CMS technologies work together" loading="lazy">
        </div>
        <p>
            To enhance the CMS experience, I built <strong>custom <a href="https://react.dev/" title="Go to React.js website" target="_blank">React</a> components</strong> for the preview window, ensuring a 1:1 representation of the final website. This approach eliminated the need for paid hosting, as there was no PHP backend to maintain. Any additional functionality—such as social media feeds or event calendars—was handled through <strong>third-party APIs</strong>.
        </p>
        <p>
            I chose <strong>Hugo</strong> as the static site generator due to its <strong>blazing-fast build times</strong>. I also created multiple <strong>pre-built templates</strong> tailored to different business needs. The end result was 
            a highly adaptable system that provided small businesses with cost-effective, low-maintenance websites requiring 
            minimal configuration.
        </p>
        <p>
            Next, I'll dive into the <strong>technical details</strong> behind the CMS and custom templates, followed by key <strong>lessons learned</strong> from building Block Digital.
        </p>
    </div>
</details>
<details>
    <summary>Building The CMS</summary>
    <div class="details-content">
        <div class="detail-image-wrapper">
            <img src="/img/work/block/block-config-columns.webp" alt="Config File for Netlify CMS" loading="lazy">
        </div>
        <h3>The CMS Config</h3>
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
            <li>Content (Rich Text / Markdown)</li>
            <li>Images</li>
            <li>Forms</li>
        </ul>
        <p>
            For more complex layouts, I introduced "nested columns," which allowed additional components inside them. This created a flexible system where users could build intricate layouts directly from the CMS.
        </p>
        <div class="detail-image-wrapper">
            <img src="/img/work/block/block-cms-column.webp" alt="Config File for Netlify CMS" loading="lazy">
        </div>
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
        <div class="detail-image-wrapper">
            <img src="/img/work/block/block-cms-blog.webp" alt="Config File for Netlify CMS" loading="lazy">
        </div>
        <p>
            Inside the <code>static/admin/previews/</code> directory, I created preview components for the blog and general page layouts. Then, in a <code>preview.js</code> file, I registered them with the CMS:
        </p>

```js
//Import Previews
import SitePagePreview from "./SitePagePreview.js";
import BlogPagePreview from "./BlogPagePreview.js";
import HeaderPreview from "./HeaderPreview.js";
import NavigationPreview from "./NavigationPreview.js";
import FooterPreview from "./FooterPreview.js";
import SettingsPreview from "./SettingsPreview.js";

//Preview Style
CMS.registerPreviewStyle("../../css/style.css");

//Preview Pages
CMS.registerPreviewTemplate("site", SitePagePreview);
CMS.registerPreviewTemplate("blog", BlogPagePreview);
CMS.registerPreviewTemplate("footer", HeaderPreview);
CMS.registerPreviewTemplate("navigation", NavigationPreview);
CMS.registerPreviewTemplate("footer", FooterPreview);
CMS.registerPreviewTemplate("settings", SettingsPreview);
```

        <p>
            This approach ensured that the preview inside the CMS closely matched the live website. The site's assets, including JavaScript bundles and minified CSS, were handled with Gulp.js for optimization. (Today, alternative tools like Vite or esbuild provide more modern asset bundling solutions.)
        </p>
        <p>
            While this CMS setup successfully met my goals, it also introduced some challenges—such as styling limitations and CMS-specific quirks—which I'll discuss in the <strong>Lessons Learned</strong> section.
        </p>
    </div>

</details>
<details>
    <summary>Building Custom Templates</summary>
    <div class="details-content">
        <div class="detail-image-wrapper">
            <img src="/img/work/block/block-markdown-code.webp" alt="Screenshot of Block Digital’s Markdown code configuration for Netlify CMS" loading="lazy">
        </div>
        <h3>Configuring Markdown Files</h3>
        <!-- <p>
            In the previous section, <strong>"Building the CMS,"</strong> I discussed how Netlify CMS reads a configuration file to generate editable fields for users. Now, I'll explain how Netlify interacts with Hugo's markdown files to build pages.
        </p> -->
        <p>
            Like many static site generators (SSGs), Hugo uses markdown files in combination with layout templates to generate pages. The markdown files store content and metadata, while layout files determine how the content is displayed. The front matter in a markdown file specifies which layout should be used. 
        </p>
        <p>
            Typically, there is a <code>list</code> layout for blogs and a <code>single</code> layout for individual pages. Sections, columns, components, and attributes are defined in the markdown content in the same way they are structured in the CMS configuration. At build time, Hugo parses the markdown metadata, selects the appropriate template, and renders the final page. 
        </p>
        <h3>Converting Markdown to HTML</h3>
        <p>
            Inside these templates, you can include logic to iterate through the markdown data. Since Hugo’s front matter supports structured data formats like <abbr title="Yet Another Markup Language">YAML</abbr>, you can define arrays and objects, making them accessible within the template.
        </p>
        <div class="detail-image-wrapper">
            <img src="/img/work/block/block-component-code.webp" alt="Example of Hugo template rendering components from markdown data" loading="lazy">
        </div>
        <p>
            Once I ensured that the markdown structure in my content file matched the Netlify CMS <code>config.yml</code> file, it was just a matter of rendering the appropriate HTML. For both the <code>single.html</code> and the <code>list.html</code> files within <code>layouts/_default/</code>, I iterated through the markdown data structure specified in each content file. The template itself checks to see if a section or component exists, then builds the HTML accordingly.
        </p>
        <p>
            This ensured that any updates made in the CMS editor were reflected in the generated site. In essence, the entire site structure existed as data—so all we were doing was manipulating data to render HTML. 
        </p>
        <h3>Building The Templates</h3>
        <p>
            Building the templates themselves was straightforward. Once the structure was in place, I could create almost any layout. Since I was working solo, I didn't have a dedicated <abbr title="User Experience">UX</abbr> designer, so I partnered with an external agency, <strong>ManyPixels</strong>.
        </p>
        <div class="detail-image-wrapper" data-scrollable="true">
            <div class="scroll-container" tabindex="0" role="region" aria-label="Scrollable image content">
                <img src="/img/work/block/blockTemplate.webp" alt="Screenshot of Block Digital’s template selection page, displaying available website layouts" loading="lazy">
            </div>
            <div class="scroll-indicator">
                <em><span class="sr-only">This Section is</span> Scrollable</em>
            </div>
        </div>
        <p>
            They designed six flexible layouts that could be adapted to fit various businesses—including the design for the Block Digital website. Once the designs were complete, I handled the development, ensuring that all websites were fully responsive and accessible on all devices. The image above showcases the 'StoreFront' layout, designed to be suitable for most small businesses.
        <h3>Adding a Style Guide</h3>
        <p>
            Lastly, I wanted to include a style guide with each website. Why? If a client ever wanted to modify the layout of their site—not just the content—I wanted them to have a reference.
        </p>
        <div class="detail-image-wrapper" data-scrollable="true">
            <div class="scroll-container" tabindex="0" role="region" aria-label="Scrollable image content">
                <img src="/img/work/block/blockDLS2.webp" alt="Example of Block Digital’s storefront template, showing a preview of an e-commerce layout" loading="lazy">
            </div>
            <div class="scroll-indicator">
                <em><span class="sr-only">This Section is</span> Scrollable</em>
            </div>
        </div>
        <p>
            The style guide showcased all available components, such as form elements and buttons, along with guidelines on typography, colors, and accessibility best practices (including ADA compliance).
        </p>
        <p>
            By incorporating these guidelines, I ensured that clients had full control over their site's visual identity while maintaining consistency and usability. Best case scenario.
        </p>
    </div>
</details>
<details>
    <summary>Lessons Learned</summary>
    <div class="details-content">
        <p>
            Block Digital was a fun and ambitious project, but ultimately, it was not sustainable. It served as a tech demo showcasing what was possible with this stack. I learned that you could mimic a traditional CMS—including live previews—using Netlify and the JAMstack. These technologies saved time and money, but as I quickly realized, good technology alone does not make a successful business.
        </p>
        <h3>Lesson One: Good Tech <span style="font-size: var(--font-size-h2)">≠</span> Good User Experience.</h3>
        <p>
            While Netlify CMS provided a powerful way to structure content using nested fields, the user experience was far from ideal. Users had to navigate deeply nested dropdowns to find the fields they needed, making content management cumbersome. This was less a limitation of Netlify itself and more a result of my design choices. In hindsight, I wish there had been a more intuitive way to visualize nested fields—perhaps something Decap CMS has improved upon.
        </p>
        <h3>Lesson Two: The Difference Between a Service and a Product is TIME.</h3>
        <p>
            My original goal as a business owner was to create a tech stack so simple that I could customize and deploy a website within three days—just add the company name, upload assets, update copy, and launch. In reality, clients often require multiple revisions. During my time as a Sr. Frontend Developer at <a href="https://union.co/" title="Go To Union.co website">Union.co</a>, a high-end digital marketing agency in Charlotte, NC, I learned about the <strong>AOR</strong> ("Agency of Record") model, where agencies keep clients on retainer. This approach allows clients a set number of revisions while ensuring the agency's time and resources are used efficiently. If I had adopted a similar model, it could have helped balance client needs with sustainable business practices.
        </p>
        <h3>Lesson Three: Simplicity is Subjective.</h3>
        <p>
            What seems simple to a developer—nested columns, attributes, and components—may not be simple to a client. Many clients were already familiar with widely used platforms like WordPress or newer solutions like Squarespace. Introducing an alternative CMS, even if technically superior or more cost-effective, often added complexity rather than solving a problem for them. One client asked if I built Squarespace templates, another asked if I used WordPress, and one required WordPress due to their business needs. This experience led me to my next realization...
        </p>
        <h3>Lesson Four: Maybe You Shouldn't Reinvent the Wheel.</h3>
        <p>
            Just because you <i>can</i> build something doesn’t mean you <em>should</em>. If the business goal is to create websites quickly, it's essential to research all available technologies before reinventing the wheel. Ironically, my highest-paying client <em>required</em> me to build and update WordPress templates instead of using a custom solution. It spoke volumes that a larger agency like <strong>Union.co</strong> also relied on WordPress, alongside other PHP-based CMSs like Craft. Ultimately, the best choice is the one that aligns with both your business goals and your clients' needs. Overengineering can be a costly mistake.
        </p>
    </div>
</details>
