---
tags: work
permalink: false
name: Brick Art Creator
id: brickArt
role: Creator
order: 2
start: Jan 2024
end: Present
thumb: /img/cv/cv-brickart.webp
header_image: /img/work/brickart/brickart-conversion.webp
tech: [Go, PostgreSQL, Web Components, Signals, HTML Canvas, Stripe, Google OAuth, Railway]
description: Web app that turns a photo into a buildable brick mosaic, with a parts list and step-by-step building instructions.
summary: |
  Brick Art Creator (brickartcreator.com) turns any photo into a brick mosaic you can actually build. You pick a canvas size,
  upload a photo, convert it to bricks, and touch up any brick by hand. When you finish, you get a parts list you can order
  from LEGO Pick a Brick or BrickLink, plus a step-by-step building booklet. I started it in 2024 as a personal project inspired
  by LEGO's Art series, and in the fall of 2026 I rebuilt it as a product: a Go server, PostgreSQL, Google sign-in, saved mosaics,
  and Stripe payments. Designing is free, and you pay $9 to unlock one build or $49 a year for unlimited builds.
links:
  - brickartcreator.com: https://brickartcreator.com
  - github.com: https://github.com/miguelfondeur/legoartcreator
accomplishments:
  [
    "Designed and built the full product, including the landing page, the creator, accounts, payments, and the building booklet.",
    "Rebuilt the backend in Go on net/http with PostgreSQL, embedded SQL migrations, and a single binary that serves the whole site.",
    "Added Google sign-in and saved mosaics that sync from the browser to the account a few seconds after each change.",
    "Integrated Stripe Checkout with verified, idempotent webhooks for one-time unlocks and a yearly Unlimited plan.",
    "Kept the creator in vanilla JavaScript Web Components and moved shared state to signals.",
    "Matched photo colors to the brick palette in CIELAB using CIEDE2000, averaging pixels in linear light so hues hold up in dark areas.",
    "Exported parts lists for LEGO Pick a Brick (CSV) and BrickLink (XML), with price totals.",
    "Generated a printable building booklet split into 16x16 sections, with a cover that shows the finished mosaic hanging in a room.",
    "Covered the app with Go tests, unit tests, and end-to-end tests that drive the real binary in Chrome.",
  ]
---

<!-- Details -->
<details name="accordion">
    <summary>Rebuilding It as a Product (2026)</summary>
    <div class="details-content">
        <p>
            In the fall of 2026 I came back to Brick Art Creator with a bigger goal: I wanted to turn the proof of concept into something people could sign up for, save their work in, and pay for. The creator itself was still in good shape, so I kept it and rebuilt everything around it. It now lives at <a href="https://brickartcreator.com" title="Go to Brick Art Creator" target="_blank">brickartcreator.com</a>.
        </p>
        <h3>The Backend</h3>
        <p>
            I replaced Hugo with a <strong>Go</strong> server built on <code>net/http</code>. It renders the pages, owns the JSON API, and embeds the built front-end assets, so a single binary is the whole deployment. <strong>PostgreSQL</strong> stores users, subscriptions, and saved mosaics, and the SQL migrations run automatically at startup. People sign in with <strong>Google</strong>, and payments go through <strong>Stripe</strong> Checkout with signature-verified webhooks. Designing a mosaic is free. You pay $9 to unlock one build, or $49 a year for unlimited builds, and unlocking gives you the full parts list, the exports, and the building booklet.
        </p>
        <p>
            I wanted saving to feel invisible. The browser keeps the working copy in <code>localStorage</code>, and when you're signed in, the same snapshot is pushed to your account a few seconds after each change. The server stores it as JSONB in the exact shape the browser writes, so I can add a new tool to the creator without writing a migration.
        </p>
        <h3>The Creator</h3>
        <p>
            The creator is still built with vanilla JavaScript custom elements, but I made two changes I talk about in Lessons Learned. I moved shared state from my pub/sub event bus to <strong>signals</strong>, and I moved the components to the light DOM so they could share one stylesheet. The steps are now Canvas, Image, Edit, and Finish. Finish holds the parts list, the building booklet, and a shareable picture of the finished mosaic.
        </p>
        <p>
            I also rewrote the color matching. Comparing colors by straight distance in RGB treats every channel the same, which isn't how our eyes work, so dark, shaded colors were collapsing onto whatever brick happened to be closest. Now I average pixels in linear light and match them to the brick palette in <strong>CIELAB</strong> using <strong>CIEDE2000</strong>, which keeps hues intact. The before and after slider on the landing page runs the same matcher in the browser, so it shows the product's real output.
        </p>
        <h3>Parts and Instructions</h3>
        <p>
            Webrick is gone. The parts list now exports to <strong>LEGO Pick a Brick</strong> as CSV and to <strong>BrickLink</strong> as XML, so you can order genuine parts. The instructions became a printable booklet split into 16x16 sections, and its cover shows your mosaic hanging in a room, using a set of photos I processed to find where each size of board fits.
        </p>
        <p>
            The sections below describe the original 2024 version and how I built it.
        </p>
    </div>
</details>
<details name="accordion">
    <summary>Goal and Approach (2024)</summary>
    <div class="details-content">
        <div class="detail-image-wrapper">
            <img src="/img/work/brickart/brickart-creator.webp" alt="Brick Art Creator mosaic creator" loading="lazy">
        </div>
        <p>
            Inspired by the <a href="https://www.lego.com/en-us/product/jim-lee-batman-collection-31205" title="Go to Lego's Jim Lee Batman Art website" target="_blank">Lego Art Series</a>, I set out to build a web app for creating mosaic-style artwork similar to Lego’s Batman, Iron Man, and Beatles sets. The goal was to allow users to generate their own pixel art mosaics, visualize the grid layout, and receive step-by-step building instructions, including a list of required parts that could be purchased from 
            <a href="https://www.webrick.com/" title="Go to Webrick's website" target="_blank">Webrick</a>.
        </p>
        <h3>Technical Approach</h3>
        <p>
            To achieve this, I used <strong>HTML Canvas</strong> to generate the artwork and store grid data, including the position and color of each "brick" (represented as 10px circles). Rather than relying on third-party JavaScript frameworks, I explored using <strong>native JavaScript custom elements</strong> to keep the project lightweight and modular.
        </p>
        <p>
            For styling and performance, I chose <a href="https://tailwindcss.com/" title="Go to Tailwind's website" target="_blank">TailwindCSS</a> alongside <a href="https://gohugo.io/" title="Go to Hugo's website" target="_blank">Hugo</a> as a static site generator. Although the app functions as a single-page application, Hugo provided useful tools for managing front-end assets, such as handling relative links in production.
        </p>
        <p>
            Since frameworks like <strong>React</strong> and <strong>Vue</strong> offer built-in state management (e.g., Redux, Pinia), I implemented a <strong>custom event bus</strong> using the <strong>publish/subscribe pattern</strong> for component communication.
        </p>
        <div class="detail-image-wrapper">
            <img src="/img/work/brickart/brickart-code-pubsub.webp" alt="Code example of brickartcreator's publish/subscribe class" loading="lazy">
        </div>
        <p><strong>The application consists of three main experiences:</strong></p>
        <ul role="list">
            <li><strong>Create</strong> – for mosaic creation</li>
            <li><strong>Buy Parts</strong> – for generating a parts list</li>
            <li><strong>Instructions</strong> – for guiding users through the building process</li>
        </ul>
        <p>
            While the project remains a <strong>proof of concept</strong>, it successfully demonstrates that a complex front-end application can be built using <strong>JavaScript custom elements</strong> without relying on a framework. There are still areas for optimization, but I’m happy with the outcome and the lessons learned.
        </p>
    </div>
</details>
<details name="accordion">
    <summary>Building "Create"</summary>
    <div class="details-content">
        <p>
            The <strong>Create</strong> step consists of three parts: the HTML canvas for creating the mosaic, the left sidebar for each step of the process, and the view window itself. I built custom elements for the canvas, steps 1-4 of the creation process, and finally, the <code>index.js</code> file to house all of these elements. The index also contained the code for the view window. Let's discuss each part in more detail.  
        </p>
        <h3>Rendering the Mosaic Grid</h3>
        <p>
            This was by far the most complicated part of the project. The core logic for rendering the mosaic grid lies in the <code>drawGrid()</code> function. This function is responsible for initializing the blank state of the canvas and is called when a user resets their project or changes the canvas size.  
        </p>
        <div class="detail-image-wrapper">
            <img src="/img/work/brickart/brickart-code-drawgrid.webp" alt="Code example of brickartcreator's drawgrid function" loading="lazy">
        </div>
        <p>
            The function first applies two guard clauses: one to ensure the drawing context exists and another to prevent errors when an invalid <code>canvasWidth</code> is provided. It then retrieves the grid configuration from <code>GRID_CONFIG</code>, which determines the grid size (rows and columns) and dimensions (width and height). These values are passed into <code>setGridSize()</code> and <code>setCanvasDimensions()</code>, ensuring the grid dynamically adjusts when resized.
        </p>
        <p>
            The actual drawing process begins by calculating the radius of each circle based on the grid size. The function sets the global composite operation to <code>destination-over</code> to ensure new elements are drawn beneath existing content. Then, it initializes an array, <code>this.circles</code>, which stores the position, fill color, and stroke color of each circle in the grid.
        </p>
        <p>
            Using a nested loop, <code>drawGrid()</code> iterates over each row and column, calculating the X and Y coordinates for every circle. It then uses the <code>arc()</code> method to draw each circle on the canvas. These circles represent the Lego studs in the mosaic. Finally, each circle's properties (position, fill, and stroke color) are stored in <code>this.circles</code> for reference when rendering updates.
        </p>
        <h3>Mosaic Creation Steps</h3>
        <p> 
            The mosaic creation process consists of four steps, with Step One focused on setting up the canvas. Here, we choose the canvas size, background color, and frame color. Each step includes HTML inputs that dispatch events, which are handled by <code>index.js</code>. This file updates child components like <code>_canvas.js</code> by modifying attributes on the <code>MosaicCanvas</code> custom element. These attributes trigger updates to the UI using the <code>attributeChangedCallback</code> lifecycle method. 
        </p> 
        <div class="detail-image-wrapper">
            <img src="/img/work/brickart/brickart-step-two.webp" alt="Brick Art Creator Upload Image page" loading="lazy">
        </div>
        <p> 
            Step Two introduces image uploading. The uploaded image is received by the <code>MosaicCanvas</code> component and drawn onto a secondary canvas. This project uses two canvas elements: one for the mosaic grid and another for the reference image. I also add an <abbr title="Scalable Vector Graphics">SVG</abbr> overlay of the grid to help the user visualize what the converted image will look like. When an image is uploaded, an <code>updateImage</code> event is dispatched, updating the image attribute and triggering the <code>draw()</code> method, which redraws the imageCanvas. After editing the image with available tools, we convert it into a mosaic using the <code>convert()</code> function. 
        </p> 
        <div class="detail-image-wrapper">
            <img src="/img/work/brickart/brickart-step-two-converted.webp" alt="Brick Art Creator Convert Image page" loading="lazy">
        </div>
        <p> The <code>convert()</code> function performs two key tasks: </p> 
        <ul role="list" class="long-list"> 
            <li>
                It iterates over the mosaic grid (an array of objects with set <code>x</code> and <code>y</code> coordinates) and extracts the primary color at each point using the <code>calculateResult()</code> function, which retrieves pixel data via Canvas’s <code>getImageData()</code> method.
            </li> 
            <li>
                The extracted color is compared to LEGO’s color palette using the <code>compareColors()</code> function. This finds the closest match and updates the <code>this.circles</code> array, storing the new color values.
            </li> 
        </ul> 
        <p> 
            Finally, the <code>drawCircles()</code> function renders the updated color data onto the mosaic canvas, while the image canvas is hidden. 
        </p> 
        <div class="detail-image-wrapper">
            <img src="/img/work/brickart/brickart-step-three.webp" alt="Brick Art Creator Edit Image page" loading="lazy">
        </div>
        <p> 
            Step Three enables further editing. Users can modify colors in groups or adjust individual circles by detecting the closest grid coordinate to a mouse click. Like previous steps, updates are triggered through dispatched events that the canvas elements receive. 
        </p> 
        <p> 
            In the final step, clicking “Finish” completes the mosaic. This action unlocks additional options, including <strong>Instructions</strong> and <strong>Buy Parts</strong>, allowing users to finalize their creation. 
        </p>
        <h3>View Window</h3>
        <p> 
            The view window houses both the step controls and the project itself. It is designed to enhance the user experience by allowing zoom functionality, making it easier to edit individual circles on the grid. 
        </p> 
        <p> 
            The window has two main features: the zoom slider and the image toggle. The image toggle is a simple checkbox that shows or hides the <code>imageCanvas</code>, allowing users to compare their mosaic with the original image while editing. 
        </p> 
        <p> 
            The zoom slider adjusts the canvas size by applying a <code>transform: scale()</code> value via CSS on the <code>mosaicCanvas</code> element. Since the parent container has <code>overflow: auto</code>, users can scroll to navigate the enlarged canvas as they zoom in. 
        </p>
    </div>
</details>
<details name="accordion">
    <summary>Building "Buy Parts"</summary>
    <div class="details-content">
        <div class="detail-image-wrapper">
            <img src="/img/work/brickart/brickart-buy-parts.webp" alt="Brick Art Creator Buy Parts page" loading="lazy">
        </div>
        <p>
            The <strong>Buy Parts</strong> step processes the parts data from the previous step, listing each part, its quantity, and relevant metadata such as Webrick part IDs, color codes, prices, and images. This metadata is stored locally in a <abbr title="JavaScript Object Notation">JSON</abbr> file.
        </p>
        <p>
            In <code>index.js</code>, I iterate through the saved parts data, cross-matching it with the stored JSON file. If a color code matches, I merge additional part details into the existing dataset. This enriched data is then used to generate the UI, including a sidebar that calculates total costs for purchasing parts individually from both Webrick and LEGO. To do this, I extract unique color codes, count their occurrences, and multiply them by their respective prices, storing the results in a structured object.
        </p>
        
```js
<INVENTORY>
    ${ this.parts.map(item => `
    <ITEM>
        <ITEMTYPE>P</ITEMTYPE>
        <ITEMID>${item.id.bricklink}</ITEMID>
        <COLOR>${item.id.color_id}</COLOR>
        <MINQTY>${item.quantity}</MINQTY>
    </ITEM>`).join('')}
</INVENTORY>
```

        <p>
            Users can also download the parts data as an <abbr title="eXtensible Markup Language">XML</abbr> file, which Webrick supports for direct cart uploads. To achieve this, I use JavaScript template literals to map the parts data into XML format. The XML file is then generated as a Blob URL, allowing users to download and upload it to the
            <a href="https://www.webrick.com/toolkit" title="Go to Webrick Parts Tool page" target="_blank">Webrick Parts Tool</a> for easy purchasing.
        </p>
    </div>

</details>
<details name="accordion">
    <summary>Building "Instructions"</summary>
    <div class="details-content">
        <div class="detail-image-wrapper">
            <img src="/img/work/brickart/brickart-instructions.webp" alt="Brick Art Creator Instructions page" loading="lazy">
        </div>
        <p>
            The final step, <strong>Instructions</strong>, closely follows LEGO's instruction format. The process begins with an introduction page comparing the finished artwork to the original image, followed by step-by-step assembly instructions.
        </p>
        <div class="detail-image-wrapper">
            <img src="/img/work/brickart/brickart-instructions-section.webp" alt="Brick Art Creator Instructions section example" loading="lazy">
        </div>
        <p>
            To achieve this, I divided the mosaic into smaller <strong>16x16 grids</strong>, numbering each item and providing a legend of unique colors. This ensures users don’t have to distinguish between similar shades. The legend assigns a number to each color, while the right-hand grid displays the corresponding mosaic section.
        </p>
        <p>
            This required multiple HTML <code>&lt;canvas&gt;</code> elements. I processed the full parts data to create a structured dataset representing the 16x16 grids. The <code>initializeBrickData</code> function calculates the number of subgrids needed along the X and Y axes, storing the results in a <code>gridArray</code>. Then, two functions handle rendering:
        </p>
        <ul role="list">
            <li>
                <strong>printPages</strong>: Generates the necessary HTML for each instruction page. A 48x48 grid, for example, results in 9 instruction pages.
            </li>
            <li>
                <strong>printBoards</strong>: Draws each subgrid onto its corresponding canvas, targeting the elements using the <code>art-board="{i + 1}"</code> attribute.
            </li>
        </ul>
        <div class="detail-image-wrapper">
            <img src="/img/work/brickart/brickart-instructions-grid.webp" alt="Brick Art Creator Instructions first page example" loading="lazy">
        </div> 
        <p>
            Each section follows an overview page showing the mosaic portion being worked on. Users progress through each subsection until the entire mosaic is complete. The final step renders the finished mosaic, simulating artwork hanging on a wall.
        </p>
        <p>
            This project came with many challenges, and there are aspects I’d like to revisit and improve. However, I'm pleased with the core experience and look forward to refining it further.
        </p>
        <div class="detail-image-wrapper">
            <img src="/img/work/brickart/brickart-instructions-finished.webp" alt="Brick Art Creator Instructions finished section example" loading="lazy">
        </div>
    </div>
</details>
<details name="accordion">
    <summary>Lessons Learned (2024)</summary>
    <div class="details-content">
        <p>
            Wow, while the experiment of building a complex front-end application with JavaScript Custom Elements was ultimately a success, I definitely learned a lot about how they work <em>under the hood</em>.
        </p>
        <h3>Lesson One - It's possible.</h3>
        <p>
            Let's start with the positive: It's possible. You can build an application with Custom Elements. You can use them to break your site’s structure into modules—headers, navs, footers, etc. You can pass data to them using internal properties or attributes. They do <em>almost</em> everything that Vue and React components can do, but with less tooling. Vanilla JS Custom Elements are more performant than using a virtual DOM to re-render the front end, especially when you don't need to update multiple components at a time.
        </p>
        <h3>Lesson Two - It's simpler, in some ways.</h3>
        <p>
            This one is a bit more subjective, but I wanted to include it regardless. There's something about building Custom Elements that feels <em>closer to the bone</em> than using a third-party framework or library. You know exactly what you're building, and you're only building what's necessary. While it may be simpler to spin up a new Vue or React project, especially if you're experienced with these tools, it comes at a cost—vendor lock-in is one. Major version updates can introduce breaking changes. And let's not forget the endless <code>node_modules</code> dependencies.
        </p>
        <h3>Lesson Three - You'll miss reactivity.</h3>
        <p>
            You’ll miss reactivity. The ability to update a value and have multiple components re-render is kind of a beautiful thing. Everyone has had that experience of "Oh... it just works!" that a virtual DOM and partial re-renders provide. If you want multiple elements in your application to update at once, you only have so many options. I used a pub/sub pattern and created an event dispatcher, but you have to manually tell components to listen for specific events and update accordingly. I also experimented with a state machine and even considered using a web worker to manage application state. But no matter what, you still have to worry about manually re-rendering components when the state changes. Granted, this could be considered a "feature, not a bug" of working with Custom Elements. And the fact that you're only building what you need is still a plus.
        </p>
        <h3>Lesson Four - You can't have your CSS cake and eat it too.</h3>
        <p>
            If you use the Shadow DOM in your Custom Elements, they won't inherit your global CSS. So say goodbye to using your favorite CSS framework globally. The Shadow DOM provides encapsulation, which is great for sharing components between projects without worrying about restyling them or dealing with unintended side effects from global styles. However, this also breaks the convention of separating concerns. If you have similar styles shared between multiple components, you’ll have to rewrite them repeatedly.  
        </p>
        <p>
            There is one exception: <strong>CSS Custom Properties</strong> (aka CSS variables) <em>do</em> inherit through the Shadow DOM. Additionally, there's a somewhat hacky workaround where you can import an external CSS stylesheet into your component. That said, you can always create your component without using the Shadow DOM, but that comes with its own trade-offs: lack of encapsulation, leaky CSS, and possible conflicts when using <code>document.querySelector</code>. Like everything in software engineering, there are always trade-offs.
        </p>        
        <h3>Lesson Five - I wish we had back-end rendering.</h3>
        <p>
            A lot of what I was rendering didn’t need to be dynamically updated. How much of this would have been solved with native HTML partials (if they existed)? If we had built-in HTML partials, I’d argue that many static site generators (SSGs) would be unnecessary. Yes, there are many tools that attempt to solve this problem (including 11ty), but there is no native, out-of-the-box solution. You're still creating multiple JS files and either bundling them or importing them into an <code>index.js</code> and including it in your page. If the user disables JavaScript... there goes your application.
        </p>
        <p>
            For interactive components that manage their own state, yes, we need JavaScript, and we always will. But for presentational components that exist just to structure layout, I wish we could somehow render them as native HTML. Of course, this goes against the unfortunate norm of the web: "build everything in JavaScript <del>React</del>."
        </p>
        <h3>Lesson Six - Would I do it again? YES.</h3>
        <p>
            I believe the benefits outweigh the costs. My JavaScript Custom Element will outlive your Svelte, Vue, React, Ember, Angular, etc., component. When I'm building a new component, I know what I'm writing. I know how it works. It’s part of the core language. Also, no compilation time—Custom Elements work out of the box. If you want to use a module bundler and tree-shaker, go right ahead... but it's not required.  
        </p>
        <p>
            They can be used with any framework. And I have a feeling that the language will evolve and browsers will start supporting new features that mimic some of the best parts of modern frameworks—without the headaches. I've seen it happen time and time again.
        </p>
        <h3>Looking Back from 2026</h3>
        <p>
            When I rebuilt the app, I acted on two of these lessons. I missed reactivity enough that I replaced the pub/sub event bus with signals, and now components update when the values they read change. I also moved the components out of the Shadow DOM and into the light DOM, which let me organize all of the CSS into one set of stylesheets. I still build with custom elements, and I'd still make the same choice.
        </p>
    </div>
</details>
