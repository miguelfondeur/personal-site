---
tags: work
permalink: false
name: Knozen
id: knozen
role: Lead Frontend Engineer
start: Jan 2016
end: Aug 2016
order: 4
thumb: /img/cv/cv-knozen.webp
header_image: /img/work/knozen/knozen-desktop.webp
tech: [Django, JQuery, Sass, Photoshop, Mobile Web]
description: Personality quiz that gave users a personality chart with 12 traits.
summary: |
  Knozen was a fun, engaging, fast way to get a beautiful personality profile.
  Over three years,
  1,000,000
  people completed our quiz, answered over
  50,000,000
  questions, and shared thousands of their profiles on Instagram We were also featured in various media channels such as Techcrunch, Business Insider, and Product Hunt.
accomplishments:
  [
    Built new features for the popular Knozen personality quiz to enhance user engagement.,
    Optimized mobile performance by hardware-accelerating style- and animation-intensive experiences.,
    Translated Zeplin design specs into mobile web interfaces using Django,
    Sass,
    and jQuery.,
    Designed Facebook assets in Photoshop to support marketing efforts for the Knozen Quiz.,
    Built all websites including the business site using Hugo.,
  ]
links:
  - Knozen for business: https://medium.com/@cenedella/knozen-for-business-get-a-free-personality-profile-of-your-users-for-marketing-product-or-sales-76e0551912c6
  - Why don’t introverts break laws?: https://byrslf.co/why-don-t-introverts-break-laws-43701c141af0
  - Knozen launches Feelings: https://medium.com/@cenedella/knozen-launches-feelings-7016c4833fa8
  - Customize Knozen with your headline and story: https://medium.com/@cenedella/customize-knozen-with-your-headline-and-story-33caac97541d
  - Is it crush or crash?: https://medium.com/rooting-for-you/is-it-crush-or-clash-be0ec78cd219
---

<!-- Details -->
<details>
    <summary>Joining The Team</summary>
    <div class="details-content">
        <p>
            As the team's Frontend UI Engineer, I was responsible for translating our lead designer’s <a href="https://zeplin.io/" title="Go to Zeplin Website" target="_blank">Zeplin</a> specs into a functional web experience. I built every feature of the site using <strong>CSS3</strong>, <a href="https://jquery.com/" title="Go To jQuery website" target="_blank">jQuery</a>, and <a href="https://docs.djangoproject.com/en/5.1/topics/templates/" title="Go To Django Documentation" target="_blank">Django</a> templates.
        </p>
        <p>
            I joined during what they considered Knozen 4.0. The Team had gone through 3 major rereleases up until that point, with the original being to use personality charts to find the right job applicants and vice versa. When I joined, the team had just finished porting the Knozen native mobile app to the web. The app used Facebook authentication for logging in and was primarily marketed to Facebook users—a strategy that proved highly effective. Once the web app launched, engagement grew exponentially.
        </p>
        <p>
            To capitalize on this momentum, the team worked rapidly to develop new features that would add value and keep users engaged beyond completing the Knozen quiz and generating their personality chart. However, transitioning to the web also introduced unique challenges, as web applications have limitations that native apps do not. 
        </p>
        <p>
            In the next section, I'll discuss these challenges and the solutions I implemented to overcome them.
        </p>
    </div>
</details>
<details>
    <summary>Mobile Performance Optimizations</summary>
    <div class="details-content">
        <div class="detail-image-wrapper">
            <img src="/img/work/knozen/knozen-performance.webp" alt="Musora UI Colors" loading="lazy">
        </div>
        <p>
            The site featured a wide range of colors, animations, and fixed elements—more than I had ever seen rendered on a single web page. The Knozen quiz itself had an infinitely scrolling background with dynamic feedback animations that indicated which traits increased or decreased based on user responses. Additionally, the background color changed with each question, and the user's personality chart updated in real time.
        </p>
        <p>
            The personality chart alone featured at least 24 different colors, along with numerous other color variations throughout the site. All of this put a significant strain on performance, especially on mobile devices—where most of our traffic came from. In my mind, a mobile web app should function just as smoothly as a native app, so I set out to optimize performance.
        </p>
        <p>
            To minimize browser repainting issues, I used GPU-friendly CSS and ensured all animations were hardware-accelerated. Where appropriate, I applied <code>transform: translateZ(0);</code> to trigger GPU acceleration instead of relying on the browser’s default rendering. Additionally, the combination of animations, a fixed navigation bar, and <code>overflow-scroll</code> on the wrapper caused noticeable stuttering during scrolling on mobile devices. I resolved this by applying <code>-webkit-overflow-scrolling: touch;</code>.
        </p>
        <p>
            To debug the mobile experience without relying on tools like <strong>BrowserStack</strong> (I hate BrowserStack), I connected my <strong>iPhone</strong> directly to my <strong>MacBook</strong>. Using <a href="developer.apple.com/safari/technology-preview/" title="Go to Safari Technology Preview website" target="_blank">Safari Technology Preview</a>, I was able to open an inspector window on my Mac that pointed to a webpage running in my mobile Safari browser.
        </p>
        <p>
            The end result was a much smoother, more performant mobile web app that closely mimicked the responsiveness of a native application.
        </p>
    </div>
</details>
<details>
   <summary>Feelings Feature</summary>
   <div class="details-content">
      <div class="detail-image-wrapper">
         <img src="/img/work/knozen/knozen-feelings-feature.webp" alt="Musora UI Colors" loading="lazy">
      </div>
      <p>
         As I mentioned earlier, I was brought in to help add new features that would increase engagement while building on the success of the core feature, the Knozen Quiz. One of these new features was <strong>"Feelings."</strong>
      </p>
      <p>
         We noticed that users frequently revisited their profiles and reshared their personality charts with friends. To build on this behavior, we introduced a way for users to share how they were feeling at any given time.
      </p>
      <p>
         The feature allowed users to select an emoji from a modal within their profile. Once chosen, the emoji would appear on their public profile for friends to see. The UI consisted of:
      </p>
      <ul>
         <li>A <strong>large emoji</strong> representing the user's current mood.</li>
         <li>An <strong>infinite scrolling background</strong> of other emojis, reinforcing the idea that it was one of many options.</li>
         <li>A <strong>subtle fade-in/out animation</strong> on profile images to display the emoji dynamically.</li>
      </ul>
      <p>
         The infinite scrolling effect was achieved using <strong>CSS keyframes</strong>, while the emoji fade-in/out was handled with <strong>CSS animations</strong>. The end result was a lightweight, engaging feature that seamlessly fit into the existing Knozen experience.
      </p>
   </div>
</details>
<details>
    <summary>Themed Quizzes</summary>
    <div class="details-content">
        <div class="detail-image-wrapper">
            <img src="/img/work/knozen/knozen-themed-quizzes.webp" alt="Musora UI Colors" loading="lazy">
        </div>
        <p>
            The last feature we launched was <strong>Themed Quizzes</strong>. Building on the popularity of the Knozen Quiz, we made a bet that the most engaging part of the app was taking quizzes. 
        </p>
        <p>
            We developed multiple themed quizzes, such as:
        </p>
        <ul role="list">
            <li><em>Are You a Cat?</em></li>
            <li><em>Are You a Rebel?</em></li>
            <li><em>Are You Wild at Heart?</em></li>
        </ul>
        <p>
            The quiz UI featured a <strong>carousel</strong> positioned beneath the user's Knozen chart. Users could scroll or click through the carousel to browse available quizzes. Selecting a quiz card would initialize a new quiz session.
        </p>
        <p>
            Upon completion, players were rewarded with a fun <strong>GIF animation</strong> or meme. Towards the end of the project, I also took on the responsibility of creating and editing these images in Photoshop.
        </p>
        <p>
            Quiz results were displayed on both the user's profile and their friends' profiles, allowing them to see how compatible they were.
        </p>
    </div>
</details>
<details>
    <summary>Lessons Learned</summary>
    <div class="details-content">
        <p>
            I enjoyed my time at Knozen and I'm grateful to the team for the opportunity. I also learned valuable lessons on both the technical and business sides.
        </p>
        <h3>Lesson One - Optimize for Mobile.</h3>
        <p>
            Today, the term <strong>"Mobile First"</strong> is ubiquitous among designers and developers. Back in 2016, however, many web developers still prioritized desktop, with mobile as an afterthought.  
        </p>
        <p>
            The problem? Desktop computers are far more powerful than mobile phones. A smooth experience on your desktop might be completely broken on mobile.  
            <strong>Test on mobile early and often!</strong>
        </p>
        <h3>Lesson Two - Analytics Matter.</h3>
        <p>
            With Facebook and Google Analytics, we could see where our traffic was coming from, user demographics, and which devices were most popular.  
        </p>
        <p>
            This data directly influenced our feature prioritization and played a crucial role in optimizing for mobile users.
        </p>
        <h3>Lesson Three - New Features <span style="font-size: var(--font-size-h2)">≠</span> Success.</h3>
        <p>
            We worked hard, and after launching Knozen 4.0, traffic spiked—only to drop soon after. In marketing terms, it wasn’t <strong>“sticky.”</strong>
        </p>
        <p>
            I once heard, <em>"You have to throw things at a wall and see what sticks."</em> At the time, I resented that approach—it felt thoughtless. But in hindsight, there was wisdom in it.  
        </p>
        <p>
            You can’t predict which features will succeed. Even if you pour your heart and soul into an idea, <strong>your users determine its success or failure.</strong>  
            In our case, I believe our audience was primarily younger individuals who enjoyed quick, fun iPhone games.
        </p>
    </div>
</details>
