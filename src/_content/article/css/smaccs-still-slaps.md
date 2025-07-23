---
title: Why SMACSS Still Slaps
summary: The thought that I'm probably too old to be using Gen-Z vernacular is not lost on me. That aside, SMACSS does indeed "slap". In my over a decade of building large front-end applications, I have yet to find a more comprehensive approach towards structuring CSS. Here's my praise of Jonathan Snook's approach as well as my own additions to it.
date: 2025-06-23
og_image: /img/articles/smacss.webp
draft: false
---

<div class="article-image-wrapper">
    <img src="/img/articles/smacss.webp" alt="An image of the Draw The Owl exercise." width="100%" loading="lazy">
</div>

## What is SMACSS
Well, it stands for Scalable Modular Architecture for CSS. It was created by <strong>Jonathan Snook</strong> during his time at Yahoo. It was developed right around the time that CSS preprocessors Sass and Less were on the rise. Preprocessors allowed us for the first time to split up our code into partials, nest our code with `&` selectors, and even add logic. Today these things are available in the browser. Anyway, with great power comes great spaghetti code. Preprocessors were great but we needed structure. Enter <a href="https://smacss.com/" target="_blank" title="Go to SMACSS website">SMACSS</a>, a design pattern that helped break up our CSS into logical groups:

1.  Base - *base styles and resets*
2.  Layout - *header, nav, footer*
3.  Module - *components, cards, modals*
4.  Theme - *light/dark mode*
5.  State - *open/closed states*

These directories would live within your main CSS directory. They would all have their own `index.css` that would import all the partials of that section. Each `index.css` would then be imported (in order) into the main `styles.css` file. The directory names are self explanatory for the most part. It's structured with the 'cascade' in mind. Layout styles should override base styles, and module styles should override layout, etc.

## So, What Problems Does This Solve Exactly?

I'm pretty convinced that we'll never completely be able to solve the problem of, "What the hell am I looking at?". We've all experienced entering into a codebase whether our own or someone else's and wondering, "what's going on here?". It's only exacerbated by generative AI tools and IDE's. Code that is complicated, structureless, or too abstract. Especially when working on a team that doesn't enforce conventions. The solution is, well, structure. SMACSS allows you and your team to know where things are without having to do a global search. And even with a global search, it will help you avoid running into cascade and hierarchy issues. 

You might be thinking "sounds like a lot of ceremony", if you are, you probably haven't experienced the pain of managing large application UI. I have, and I've implemented this in every large team I've worked on from <a href="https://www.theladders.com/" target="_blank">The Ladders</a> to <a href="https://www.belk.com/" target="_blank">Belk</a>.

## Aren't There Better Ways?
Today we have modularized CSS and utility classes like Tailwind. That's fine. I've used almost all of these tools. Unless you're using a "tree shaking" approach or Tailwind's <abbr title="Just In Time">JIT</abbr> compilation, the old issues are going to come back to haunt your code. In Tailwind, we end up creating our own utility classes in order to avoid a soup of class names in our HTML. In JS libraries, our scoped CSS becomes unmanageable - inevitably duplicating styles across components and creating a messy final build. Not to mention there are multiple different approaches to scoped CSS and utility class libraries.  

## My Approach
Today, modern CSS offers the benefits of Sass (plus a little extra) that makes using the SMACSS method easy, without any additional tooling. Here's my current SMACSS-like approach:

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

And in my `style.css` the imports look something like this:

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

I consider this a bare-bones setup. From here, you can expand on it by creating more utility classes, implementing critical CSS, enabling tree shaking, or building components with scoped CSS. The beauty of this approach is that you have a solid foundation that functions effectively with or without additional tooling.

## Final Thoughts

If you don't want to use a library, scoped CSS, JIT compilation, or you have to tame the beast of a preexisting front-end, use the SMACSS method and make it your own. 