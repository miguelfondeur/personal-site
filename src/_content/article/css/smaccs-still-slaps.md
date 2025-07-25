---
title: Why SMACSS Still Slaps
summary: I know I'm probably too old to say something "slaps", but SMACSS really does. After over a decade building front-end apps, I’ve yet to find a more practical, scalable way to structure CSS. Here’s why it still holds up.
date: 2025-07-23
og_image: /img/articles/smacss.webp
draft: false
---

<div class="article-image-wrapper">
    <img src="/img/articles/smacss.webp" alt="An image of the Draw The Owl exercise." width="100%" loading="lazy">
</div>

## What is SMACSS

SMACSS stands for Scalable Modular Architecture for CSS. It was created by **Jonathan Snook** during his time at Yahoo, around the rise of CSS preprocessors like Sass and Less. These tools allowed us, for the first time, to split code into partials, nest styles using `&` selectors, and even add logic.

Today, many of those features are built into the browser. Still, with great power came a lot of spaghetti code. Preprocessors gave us flexibility, but we needed structure. Enter [SMACSS](https://smacss.com/), a design pattern that organizes CSS into logical groups:

1. **Base** – resets and base styles  
2. **Layout** – overall page structure (header, nav, footer)  
3. **Module** – reusable components like cards and modals  
4. **Theme** – design variations such as light and dark mode  
5. **State** – UI states like `is-open` or `is-active`

Each group would live in its own folder inside your main CSS directory. Every folder would have an `index.css` file that imports all partials in that section. These would then be imported in order into the main `style.css`. The idea is to respect the cascade. Layout styles override base styles, module styles override layout styles, and so on.

## So, What Problems Does This Solve?

I’m convinced we’ll never fully solve the problem of “What the hell am I looking at?” when stepping into an unfamiliar codebase. Whether it’s your own work or someone else's, figuring out the structure can be frustrating, especially when conventions aren’t followed and tools like AI or smart IDEs generate structureless code.

SMACSS provides that missing structure. It gives your team a clear idea of where everything lives, even without relying on a global search. And when you do need to search across files, you’re less likely to run into unexpected cascade or specificity issues.

You might be thinking, "This sounds like a lot of ceremony." If so, you probably haven't experienced the pain of maintaining a large-scale UI. I have. And I’ve used SMACSS on every large team I’ve worked with, from [The Ladders](https://www.theladders.com/) to [Belk](https://www.belk.com/).

## Aren’t There Better Ways?

Today, we have scoped CSS, CSS modules, and utility-first frameworks like Tailwind. All of these tools are valid. I’ve used most of them. But unless you're using a build process that includes tree shaking or Tailwind's Just-in-Time (JIT) compilation, many of the same problems will reappear.

With Tailwind, we often end up creating our own utility classes just to avoid cluttering our HTML with endless class names. In component-based libraries, scoped CSS can lead to duplication and bloated final builds. And there’s little consistency between the many approaches to scoped styles and utility libraries.

## My Approach

Modern CSS gives us the core benefits of Sass, along with new features that make SMACSS easier to implement without any additional tooling. Here’s my current structure:

```text
css/
├── base/
│   ├── reset.css
│   ├── variables.css
│   ├── base.css
│   ├── typography.css
│   └── index.css
├── layout/
│   ├── layout.css
│   ├── grid.css
│   ├── header.css
│   ├── footer.css
│   ├── sections.css
│   └── index.css
├── components/
│   ├── buttons.css
│   ├── cards.css
│   ├── modals.css
│   ├── forms.css
│   └── index.css
├── utilities/
│   ├── helpers.css
│   ├── animations.css
│   └── index.css
├── libraries/
│   ├── prism.css
│   └── index.css
└── style.css
```

And in `style.css`, I import the layers like this:

```css
/* Set Layers */
@layer base, layout, components, utilities, libraries;

/* Import Layers */
@import "./base/index.css" layer(base);
@import "./layout/index.css" layer(layout);
@import "./components/index.css" layer(components);
@import "./utilities/index.css" layer(utilities);
@import "./libraries/index.css" layer(libraries); 


```

This is just the foundation. From here, you can add more utility classes, implement critical CSS, enable tree shaking, or scope styles as needed. The benefit of this approach is that it works well as-is, but can also evolve with your tooling.

## Final Thoughts

If you don’t want to use a library, scoped CSS, or JIT compilation, or if you’re trying to wrangle an existing front-end, use SMACSS. It’s a battle-tested, flexible system you can adapt to your needs. And yes, it still slaps.