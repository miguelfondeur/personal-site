---
tags: work
permalink: false
name: Musora
id: musora
role: Lead Frontend Engineer
start: Oct 2020
end: Jan 2025
order: 1
thumb: /img/cv/cv-musora.webp
logo: /img/work/musora/musora-logo.svg
header_image: /img/work/musora/platform-workouts.webp
tech:
  [Vue.js, Alpine, AWS, Laravel, Tailwind, Sanity, NPM, Jest, Github, Docker]
description: Music Education Platform. Home of Drumeo, Pianote, Guitareo, and Singeo.
summary: |
  Musora is an online platform that provides comprehensive music education for piano, guitar, drums, and singing. It combines world-class teaching with interactive practice tools like speed control, looping, and progress tracking. Students can engage with a supportive community, receive live feedback, and refine their skills at their own pace in an immersive learning environment. As a musician myself, I took great joy in building features that provided value for other musicians and music lovers.
accomplishments:
  [
    "Guitar Quest: Developed the marketing page and gamified learning experience, featuring an interactive map for learning guitar.",
    "Unified Platform: Helped build the Musora Platform, a centralized hub for all brand channels.",
    "Stylesora: Created a Tailwind CSS utility class library to share common styles across brand applications.",
    "Custom Playlists: Developed a feature that allows students to organize content based on their preferences, enhancing user experience.",
    "Workouts/Challenges: Built short-form video lessons designed for busy schedules, providing value to musicians.",
    "Refactored Laravel templates into full-page Vue components, migrating many legacy components to Vue 3's Composition API.",
    "Created and maintained NPM packages for shared use across web and mobile teams.",
    "Led the transition of our web platform to a new Sanity CMS, improving content management and scalability.",
  ]
---

<!-- Details -->
<details>
    <summary>Guitar Quest</summary>
    <div class="details-content">
        <div class="detail-image-wrapper">
            <img src="/img/work/musora/guitar-quest.webp" alt="Image of Guitareo's Guitar Quest" loading="lazy">
        </div>
        <p>
            As part of an effort to increase engagement in the then <a href="https://www.guitareo.com" title="Go To Guitareo Website" target="_blank">Guitareo</a> application, we launched <a href="https://www.guitareo.com/shop/guitar-quest" title="Go to Guitar Quest website" target="_blank">Guitar Quest</a>—a gamified approach to learning electric guitar featuring musician and influencer <i>Rob Scallon</i>.
            <br>
            I was responsible for both the marketing and platform experiences. A key feature of Guitar Quest was an interactive <abbr title="Scalable Vector Graphics">SVG</abbr> map, used across both the marketing site and platform, to visually represent lesson "levels" where difficulty increased as students progressed. To improve performance on the marketing site, I introduced <a href="https://alpinejs.dev/" target="_blank">Alpine.js</a>, a lightweight (10 kB gzipped) JavaScript framework with <a href="https://vuejs.org/" target="_blank" title="Go to Vue.js website">Vue.js</a>-like syntax, which enhanced loading speeds.
            <br>
            For the platform experience, I developed new components on top of our existing Vue.js component library, <strong>Vuesora</strong>, and ensured seamless data flow from our <a href="https://laravel.com/" title="Go to Laravel websit" target="_blank">Laravel</a> controllers to the templates. I also introduced <a href="https://tailwindcss.com/" title="Go to Tailwind CSS website" target="_blank">Tailwind CSS</a> to streamline styling and establish a scalable convention for future development.
        </p>
    </div>
</details>

<details>
    <summary>Musora's Unified Platform</summary>
    <div class="details-content">
        <div class="detail-image-wrapper">
            <img src="/img/work/musora/musora-brand-selector.webp" alt="Image of Musora's brand selector" loading="lazy">
        </div>
        <p>
            Before we built <a href="https://www.musora.com/" title="Go to Musora's website" target="_blank">Musora’s</a> unified platform, Musora operated as four separate brand applications— 
            <a href="https://www.drumeo.com/" title="Go to Drumeo's website" target="_blank">Drumeo</a>, 
            <a href="https://www.pianote.com/" title="Go to Pianote's website" target="_blank">Pianote</a>, 
            <a href="https://www.guitareo.com/" title="Go to Guitareo's website" target="_blank">Guitareo</a>, and 
            <a href="https://www.singeo.com/" title="Go to Singeo's website" target="_blank">Singeo</a>. 
            This fragmented structure created technical challenges when delivering new features and limited students to a single brand and instrument per membership.
            <br>
            Previously, we maintained three separate internal libraries for shared code: <strong>Bladesora</strong> (<a href="https://laravel.com/docs/11.x/blade" title="Go to Blade documentation" target="_blank">Blade</a> templates), 
            <strong>Vuesora</strong> (Vue components), and <strong>Stylesora</strong> (Tailwind CSS utilities, which I created). 
            Deploying a new feature often required updates across seven different <a href="https://www.github.com" title="Go to Github's website" target="_blank">GitHub</a> repositories, slowing down development.
        </p>
        <div class="detail-image-wrapper" data-columns="2">
            <img src="/img/work/musora/mobile-dark-mode.webp" alt="Image of Musora's brand selector" loading="lazy">
            <img src="/img/work/musora/mobile-light-mode.webp" alt="Image of Musora's brand selector" loading="lazy">
        </div>
        <p>
            To streamline operations and improve the student experience, we embarked on an ambitious unification project. 
            I initiated the process by setting up our web and mobile GitHub repositories and ensuring all necessary technologies were installed. 
            I then migrated our shared libraries into the unified platform repository and led the development of a global app redesign. 
            This included a new navigation system, a cohesive site wrapper, and visual updates to support both light and dark modes.
            <br>
            By consolidating our platform, we significantly accelerated development and enabled students to access all instruments and brands under a single membership, 
            greatly increasing the value of their subscription.
        </p>
        <p>
            As part of the new unified Musora platform, I also decoupled the marketing front-end environment from the main platform. This separation allowed the marketing team to use their preferred tools without causing unintended side effects on the platform, and vice versa. I achieved this by using separate <strong>Laravel Mix</strong> configurations, ensuring that each environment had its own optimized build process. This enabled the marketing team to leverage lightweight libraries like 
            <a href="https://alpinejs.dev/" title="Go to Alpine.js documentation" target="_blank">Alpine.js</a>, improving 
            performance and <abbr title="Search Enging Optimization">SEO</abbr> without impacting the main application.
        </p>
    </div>
</details>

<details>
    <summary>Playlists Feature</summary>
    <div class="details-content">
        <p>
            In the legacy platforms, students could only bookmark content into a single collection called "My List." 
            With the launch of the unified Musora platform, we wanted to enhance this functionality by allowing students to organize all content—Songs, Lessons, and Exercises—into individual playlists. 
            Taking inspiration from Spotify, we introduced features enabling users to edit playlist names, reorder items via drag-and-drop, update thumbnails, and more. 
            Additionally, students could pin up to five playlists to the main sidebar for quick access.
        </p>
        <div class="detail-image-wrapper">
            <img src="/img/work/musora/musora-playlist.webp" alt="Image of a Musora Playlist" loading="lazy">
        </div>
        <p>
            I led the front-end development of these new features, creating the Playlist index page with drag-and-drop sorting and implementing the pin functionality for the sidebar. 
            To manage playlist state across multiple <strong>Vue</strong> components, I introduced <a href="https://pinia.vuejs.org/" title="Go to Pinia's documentation" target="_blank">Pinia</a>, ensuring efficient data sharing across the application. I also updated the playback page experience to support multiple content types.
        </p>
        <div class="detail-image-wrapper">
            <img src="/img/work/musora/musora-create-playlist.webp" alt="Image of a Musora Playlist Creation" loading="lazy">
        </div>
        <p>
            In addition, I supervised and mentored another front-end developer in building the "Create Playlist" modal, which needed to be integrated across all content types. 
            Unlike Spotify, our platform had the unique challenge of handling content with child items, requiring careful UI considerations to allow students to decide whether to include child content in their playlists.
        </p>
    </div>
</details>

<details>
  <summary>Workouts Feature</summary>
    <div class="details-content">
        <div class="detail-image-wrapper">
            <img src="/img/work/musora/platform-workouts.webp" alt="Image of a Musora Workouts Page" loading="lazy">
        </div>
        <p>
            The goal of this feature was to offer short-form workout content as an alternative to our traditional multi-lesson 
            learning structure. Leveraging the third-party practice tool <a href="https://www.soundslice.com/" title="Go to Soundslice website" target="_blank">Soundslice</a>, 
            we combined video lessons with interactive sheet music to enhance the learning experience.
        </p>
        <p>
            I developed a component that segments the video into individual chapters, allowing students to quickly navigate 
            to specific sections. Each chapter card provides two options: jump directly to that point in the video or open the 
            Soundslice player to loop and practice along with sheet music in real time. To optimize the user experience, I 
            utilized Soundslice's <abbr title="Application Programming Interface">API</abbr> to customize the player’s behavior, ensuring it met our specific learning needs.
        </p>
    </div>
</details>

<details>
  <summary>Musora UI</summary>
    <div class="details-content">
        <div class="detail-image-wrapper" data-scrollable="true">
            <div class="scroll-container" tabindex="0" role="region" aria-label="Scrollable image content">
                <img src="/img/work/musora/musora-ui.webp" alt="An example image of the Simply360 application" loading="lazy">
            </div>
            <div class="scroll-indicator">
                <em><span class="sr-only">This Section is</span> Scrollable</em>
            </div>
        </div>
        <p>
            Early in my time at Musora, I aimed to improve the onboarding process by creating documentation for our frontend libraries: 
            <strong>Bladesora</strong> for HTML templates, <strong>Vuesora</strong> for Vue components, and <strong>Stylesora</strong> for custom Tailwind classes.
        </p>
        <p>
            To achieve this, I used <a href="https://vuepress.vuejs.org/" title="Go to VuePress website" target="_blank">VuePress</a> to generate 
            a documentation site, which I then deployed to <a href="https://www.netlify.com/" title="Go to Netlify's website" target="_blank">Netlify</a>. 
            VuePress made it easy for developers to reference core frontend components and copy/paste code snippets directly into their projects, 
            streamlining development and onboarding.
        </p>
    </div>
</details>

<details>
    <summary>Stylesora Library</summary>
    <div class="details-content">
        <div class="detail-image-wrapper">
            <img src="/img/work/musora/musora-ui-colors.webp" alt="Musora UI Colors" loading="lazy">
        </div>
        <p>
            I built a Tailwind utility class library called <strong>Stylesora</strong> to centralize Musora's custom styles. 
            Working closely with the UX team, I ensured all <a href="https://www.figma.com/" title="Go to Figma's website" target="_blank">Figma</a> designs were accurately reflected in the front-end implementation. By using CSS as JSON, I seamlessly integrated Stylesora into our Tailwind config, making it easy to maintain and scale our design system.
        </p>
        <div class="detail-image-wrapper">
            <img src="/img/work/musora/musora-ui-buttons.webp" alt="Musora UI Colors" loading="lazy">
        </div>
    </div>
</details>

<details>
    <summary>Sanity CMS Migration</summary>
    <div class="details-content">
        <p>
            The team aimed to migrate our MySQL database and existing <strong>Musora CMS</strong> to 
            <a href="https://www.sanity.io/studio" title="Go to Sanity's website" target="_blank">Sanity CMS</a>. 
            This transition required a fundamental shift in how our front-end components received data. Instead of passing data 
            from <strong>Laravel</strong> controllers to templates and then to Vue components as props, we needed the components 
            themselves to fetch data directly from Sanity.
        </p>
        <div class="detail-image-wrapper">
            <img src="/img/work/musora/mcs-diagram-dark.webp" alt="Diagram of Musora Content Services Package" loading="lazy">
        </div>
        <p>
            I led the front-end team in refactoring our Blade templates, replacing multiple HTML partials with single-page Vue components. Each page component now retrieves its own data and passes it to child components, enabling a more modular and scalable architecture. To improve the user experience, we introduced skeleton loaders across the site, which are triggered <code>onBeforeMount</code> while awaiting data from Sanity.
        </p>
        <p>
            Another key challenge was ensuring both mobile and web front-end teams stayed aligned during this large-scale migration. Since <a href="https://www.sanity.io/docs/groq" title="Go to Sanity GROQ documentation" target="_blank"><abbr title="Graph-Relational Object Queries">GROQ</abbr> queries</a> can be complex, and not all developers were experienced in writing them, I created an <a href="https://www.npmjs.com/" title="Go to NPM website" target="_blank">NPM</a> package called <strong>Musora Content Services</strong> (<abbr title="Musora Content Services">MCS</abbr>). This package provided standardized functions for both mobile and web teams to retrieve content data from Sanity. 
        </p>
        <p>
            To maintain reliability, we implemented <a href="https://jestjs.io/" title="Go to Jest website" target="_blank">Jest</a> tests for all GROQ queries, ensuring they worked correctly with every update. These tests were integrated into <strong>GitHub Actions</strong> to run automatically on every push to <i>main</i>. We also expanded the package to include user-specific endpoints from our own <abbr title="Application Programming Interface">API</abbr>, making it the central gateway for all data requests in our web and mobile applications.
        </p>
        <p>
            To improve the developer experience, I created documentation using JSDoc, a tool that generates API documentation from properly formatted JavaScript comments. By simply ensuring that all new functions and classes were commented, developers could run a build command to generate updated documentation automatically. I documented the process in the <strong>README</strong> file and published the docs to the web using GitHub Pages. 
        </p>
        <p>
            Additionally, I set up a symlink from the Musora Content Services repository to our Musora Web Platform repository. This allowed developers to test changes to the MCS package directly within the web platform—without needing to push, publish, and reinstall every iteration. This significantly reduced friction in development and sped up the feedback loop.
        </p>
        <p>
            This migration not only improved development efficiency but also laid the groundwork for decoupling the web application from the back-end. By shifting toward a fully front-end-driven architecture, we enabled the possibility of deploying static files instead of relying on Laravel to generate HTML, ultimately reducing infrastructure costs and improving performance.
        </p>
    </div>
</details>
<details>
    <summary>Lessons Learned</summary>
    <div class="details-content">
        <p>
            I spent four action-packed years at Musora and held three different titles. I did everything from managing staff to creating workflows in Jira to building experiences from the ground up. Here are some of my takeaways, both technical and personal.
        </p>
        <h3>Lesson One: The Necessary Evil of Frameworks in Large Teams.</h3>  
        <p>  
            I enjoy writing my own code. I don't like relying on third-party libraries and frameworks—for many reasons.  
        </p>  
        <p>  
            That said, they have their advantages (whether I like it or not). Libraries and frameworks set conventions. When I'm creating a library or package, I want it to be well-structured, readable, and documented with human-friendly naming conventions. But very rarely do we get the time to do this.  
        </p>  
        <p>  
            When you use a library like Vue.js or Tailwind CSS, these conventions are already established, tested, and backed by a community. I can tell my devs, "Read the documentation," and trust that they'll find what they need. That’s far more efficient than teaching them the "Miguel way" of doing things.  
        </p>  
        <p>  
            It also helps with onboarding. If a new developer already knows these technologies, they can start contributing right away instead of learning our custom-built solutions.  
        </p>  
        <h3>Lesson Two: Working with iFrames is a pain.</h3>  
        <p>  
            Most of my work at Musora followed a familiar pattern—create components, fetch data, build new routes, repeat. But every so often, I had to work with a third-party package rendered as an iFrame.  
        </p>  
        <p>  
            Out of consideration, I won’t name the package, but it was a core feature of the Musora platform. Because of that, marketers and project managers frequently requested updates and customizations.  
        </p>  
        <p>  
            Here’s the problem: iFrames, like web workers, are completely encapsulated. You can’t manipulate them from the outside unless they expose a way to send and receive messages. Events won’t work because they bubble (or propagate) to the parent, and the iFrame can’t capture events from the parent.  
        </p>  
        <p>  
            And don’t even think about targeting elements inside an iFrame from the outside—that violates the browser’s Same-Origin Policy.  
        </p>  
        <p>  
            In a perfect world, iFrame-based packages would expose all the necessary options to update the UI and listen for changes. But we don’t live in a perfect world. If the iFrame’s owner doesn’t add your domain to the CORS headers, you have no way to modify it. You have to work with what you're given.  
        </p>  
        <p>  
            When all else fails, build it yourself.  
        </p>  
        <h3>Lesson Three: Take Initiative—Don’t Wait for Things to Happen.</h3>  
        <p>  
            It’s easy to say, "It’s not my job," or "That person is out sick," or "Someone else was supposed to do it." But waiting for the ideal situation will only slow you down.  
        </p>  
        <p>  
            Instead, take ownership. Offer solutions.  
        </p>  
        <p>  
            If the UX manager is juggling multiple projects and the Figma designs lack error states—add them yourself. Even if they’re not perfect, at least they’ll exist.  
        </p>  
        <p>  
            If you're waiting on a back-end engineer for a solution, but you can offer a workaround—make that Plan A. Pitch it, implement it. Chances are, you’ll be making their life easier.  
        </p>  
        <p>  
            If a Jira ticket requires engineers from different teams, but you can do both jobs, don’t let others’ availability block progress.  
        </p>  
        <p>  
            My father always said, "Perfect is the enemy of good," and "A job worth doing is worth doing well enough." Essentially—get it done.  
        </p>  
        <p>  
            Of course, this mindset can lead to burnout—something I know all too well. Leadership often means doing more, taking responsibility, and stepping up when things stall. The upside? You’ll learn more and have more to show for your time at a company.  
        </p>  
        <h3>Lesson Four: Put People First.</h3>  
        <p>  
            If I can be blunt—don’t be an asshole. You won’t get the best performance, collaboration, or respect by treating people poorly.  
        </p>  
        <p>  
            Do the opposite. Go out of your way to acknowledge that nothing on the <em>Project Roadmap</em> gets done without people.  
        </p>  
        <p>  
            I won’t open the can of worms that is <strong>Generative AI</strong>, but even AI still needs humans—because people understand context. Even the lowest-performing team members can provide valuable insights into why something isn’t working. Listen to them. Make them feel appreciated.  
        </p>  
        <p>  
            Technology exists for people, not the other way around.  
        </p>  
        <p>  
            And this applies to yourself too. Your job, with all its arbitrary deadlines, is not more important than your health. You can’t do good work if you completely neglect yourself.  
        </p>  
        <p>  
            Ultimately, that’s what companies should want for their employees, even if they don’t say it enough. Maybe it’s worth reminding them once in a while.  
        </p>  
    </div>  
</details>
