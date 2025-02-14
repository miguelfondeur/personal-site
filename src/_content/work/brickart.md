---
tags: work
permalink: false
name: Brick Art Creator
id: brickArt
role: Creator
start: Jan 2024
end: Oct 2024
thumb: /img/cv/cv-brickart.svg
header_image: /img/work/brickart/brickart-conversion.png
tech: [HTML Canvas, Web Components, Hugo, Tailwind]
description: Web app to convert images to mosaic art. Inspired by Lego's Art series.
summary: |
  This was a personal project I built inspired by Lego's Art series. The app creates a grid mosaic based on the 
  size and specification of the lego sets. You can upload an image and edit your own image, then transform it into
  a grid mosaic. You can then view the lego(esque) instructions and even purchase parts through a third party by uploading 
  parts data to their platform.
accomplishments:
  [
    "Created a web app to translate images to mosaics, inspired by the Lego Art series.",
    "Used canvas to analyze image in an two dimensional grid.",
    "Allowed users to edit mosaic.",
    "Used events library to share state across multiple components.",
    "Step Two allowed generated instructions on how to build mosaic based on grid data.",
    "Step Three allowed users to purchase parts and download parts data as XML.",
  ]
---

<!-- Details -->
<details>
    <summary>Goal and Approach</summary>
    <div class="details-content">
        <p>
            Inspired by the <strong>Lego Art Series</strong>, I set out to build a web app for creating mosaic-style artwork similar to Lego’s Batman, Iron Man, and Beatles sets. The goal was to allow users to generate their own pixel art mosaics, visualize the grid layout, and receive step-by-step building instructions, including a list of required parts that could be purchased from 
            <a href="https://www.webrick.com/" title="Go to Webrick's website" target="_blank">Webrick</a>.
        </p>
        <h3>Technical Approach</h3>
        <p>
            To achieve this, I used <strong>HTML Canvas</strong> to generate the artwork and store grid data, including the position and color of each "brick" (represented as 10px circles). Rather than relying on third-party JavaScript frameworks, I explored using <strong>native JavaScript custom elements</strong> to keep the project lightweight and modular.
        </p>
        <p>
            For styling and performance, I chose <strong>TailwindCSS</strong> alongside <strong>Hugo</strong> as a static site generator. Although the app functions as a single-page application, Hugo provided useful tools for managing front-end assets, such as handling relative links in production.
        </p>
        <p>
            Since frameworks like <strong>React</strong> and <strong>Vue</strong> offer built-in state management (e.g., Redux, Pinia), I implemented a <strong>custom event bus</strong> using the <strong>pub/sub pattern</strong> for component communication.
        </p>
        <p><strong>The application consists of three main experiences:</strong></p>
        <ul role="list">
            <li><strong>Project</strong> – for mosaic creation</li>
            <li><strong>Buy Parts</strong> – for generating a parts list</li>
            <li><strong>Instructions</strong> – for guiding users through the building process</li>
        </ul>
        <p>
            While the project remains a <strong>proof of concept</strong>, it successfully demonstrates that a complex front-end application can be built using <strong>JavaScript custom elements</strong> without relying on a framework. There are still areas for optimization, but I’m happy with the outcome and the lessons learned.
        </p>
    </div>
</details>
<details>
    <summary>Step One: Create Mosaic</summary>
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
    <summary>Step Two: Buy Parts</summary>
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
    <summary>Step Three: Instructions</summary>
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
