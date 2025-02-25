---
tags: work
permalink: false
name: Simply360
id: s360
role: UX Developer
start: Jun 2014
end: Jun 2015
order: 5
thumb: /img/cv/cv-s360.svg
header_image: /img/work/s360/s360-people.webp
tech: [Ember.js, Sass, PSD to HTML]
description: App to help non-profit organizations manage their data.
summary: |
  "Nonprofit software made easy". Simply360 was created by SolveItSimply to aid nonprofits with all of their administrative needs. It's simple and user-friendly interface will allow them to manage staff, create reports, and even handle event check-ins. It is the first nonprofit software to be built as a single page responsive application using the latest industry tools.
accomplishments:
  [
    Developed user interfaces and key features for responsive web applications.,
    Built the UI for a responsive single-page web application designed to help non-profit organizations efficiently manage their data.,
  ]
links:
  - simply360: https://www.simply360.com/
---

<!-- Details -->
<details>
    <summary>Building the Simply360 Application</summary>
    <div class="details-content">
        <div class="detail-image-wrapper" data-scrollable="true">
            <div class="scroll-container" tabindex="0" role="region" aria-label="Scrollable image content">
                <img src="/img/work/s360/s360-people.webp" alt="An example image of the Simply360 application" loading="lazy">
            </div>
            <div class="scroll-indicator">
                <em><span class="sr-only">This Section is</span> Scrollable</em>
            </div>
        </div>
        <p>
            As the team's <abbr title="User Experience">UX</abbr> Developer, I was responsible for translating Photoshop design documents into a fully functional web application using HTML/Handlebars, CSS/Sass, and JavaScript/Ember.js. This included implementing all UI elements, interactions, and the responsive grid system.
        </p>
        <p>
            We collaborated with a talented Brooklyn-based design agency, 
            <a href="https://milkshake.studio/" title="Go to Milkshake's website" target="_blank">Milkshake</a>, who designed the UI for Simply360. We held regular review meetings to discuss new features, requirements, and any design or development constraints. Once the initial designs were complete, they were handed over to us for implementation.
        </p>
        <h3>Using Ember.js</h3>
        <p>
            We built the application using <a href="https://emberjs.com/" title="Go to Ember.js website" target="_blank">Ember.js</a>, an MVC JavaScript framework developed by the team behind Ruby on Rails. Ember.js had its own ecosystem and CLI tools for creating and managing components:
        </p>

```bash
ember generate component my-component-name
```

        <p>
            For our asset pipeline, we used
            <a href="https://github.com/broccolijs/broccoli?tab=readme-ov-file" title="Go to Broccoli's Github page" target="_blank">Broccoli</a>, which is comparable to Grunt or Gulp but optimized for fast incremental rebuilds.
        </p>
        <h3>Styling with Sass & SMACSS</h3>
        <p>
            For styling, I used <a href="https://sass-lang.com/" title="Go to Sass website" target="_blank">Sass</a> due to its ability to define variables, nest styles, and easily import other files. I followed the
            <a href="https://smacss.com/" title="Go to SMACSS website" target="_blank">SMACSS</a> methodology, ensuring that my "modules" aligned 1:1 with Ember components.
            This made it simple to organize and locate styles while maintaining a clear CSS hierarchy:
        </p>
        <ul role="list">
            <li>Base Styles</li>
            <li>Layout Styles</li>
            <li>Component (Module) Styles</li>
            <li>State Styles</li>
        </ul>
        <h3>Templating with Handlebars</h3>
        <p>
            Ember components consisted of a JavaScript file for interactions and a <code>.hbs</code> (Handlebars) file for HTML structure. Ember used
            <a href="https://guides.emberjs.com/v3.3.0/templates/handlebars-basics/" title="Go to Ember's Handlebars documentation" target="_blank">Handlebars</a>
            as a templating language, making it easy to inject dynamic content into the UI.
        </p>
        <h3>Creating a Native App Feel</h3>
        <p>
            The biggest motivation for using modern frameworks like Ember was to mimic the smooth experience of native applications while maintaining the accessibility of a web app. Unlike traditional multi-page applications that require <strong>hard reloads</strong>, Ember allowed for seamless page updates with client-side routing.
        </p>
        <div class="detail-image-wrapper">
            <img src="/img/work/s360/simply360-mobile.webp" alt="Musora UI Colors" loading="lazy">
        </div>
        <p>
            Beyond responsive design, I focused on interactions to make the app feel native, such as sidebar navigation animations. I achieved this using CSS transitions and transforms to create smooth motion effects.
        </p>
        <h3>Final Thoughts</h3>
        <p>
            Simply360 was an ambitious project, and we successfully launched an MVP for clients. I'm proud of the work we accomplished.
        </p>
        <p>
            In the next section, I’ll share some of the lessons I learned.
        </p>
    </div>

</details>
<details>
  <summary>Lessons Learned</summary>
  <div class="details-content">
      <p>
          Simply360 was my first opportunity after my time at the <strong>Startup Institute</strong> of NY. I learned a lot about working for a startup, building applications with modern tools, and collaborating within a small team. Here are some of my main takeaways.
      </p>
      <h3>Lesson One: Choose Your Technology Wisely.</h3>
      <p>
          At the time, we opted to use bleeding-edge technology, including Ember.js as our front-end framework, along with its CLI tool, Ember CLI, for creating new components. We also used Broccoli for asset management, along with other very new tools. 
      </p>
      <p>
          When adopting new technologies, there are inevitable challenges. One major issue we encountered was Ember injecting multiple <code>&lt;div&gt;</code> elements into the 
          <abbr title="Document Object Model">DOM</abbr> after compilation. Not knowing exactly what would be rendered to the DOM made styling difficult, as CSS that relied on nested elements became unpredictable. To work around this, I had to add excessive class names, which polluted the template.
      </p>
      <p>
          Another challenge of using new technology is the lack of developer support. Many times, we faced issues unique to our application that we couldn’t find answers for. At one point, our CTO even had to rewrite parts of the source code to accommodate our needs.
      </p>
      <h3>Lesson Two: Startups Are Not Regular Jobs.</h3>
      <p>
          As someone fresh into my web development career, I was excited for my first official job. During my time at the Startup Institute, I had gained experience by volunteering at several startups in New York, but this was different—this was my first time working in a non-linear environment.
      </p>
      <p>
          Unlike a traditional 9-to-5 job, working at a startup often means racing toward deadlines. Working 50–60 hours a week was common, and while early-stage employees typically receive some equity, a startup’s survival is never guaranteed. 
      </p>
      <p>
          That being said, your efforts directly impact the health and success of the company. The high-pressure environment is demanding but also incredibly rewarding—not just financially, but in terms of experience. I learned to take pride in my work, knowing that my code and contributions were directly affecting users. 
      </p>
      <p>
          If you're early in your career, working at a startup—or even starting your own—is one of the fastest ways to grow.
      </p>
  </div>
</details>
