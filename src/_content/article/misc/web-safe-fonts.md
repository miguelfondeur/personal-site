---
title: Web Fonts
summary: How many of us have struggled to find the right font for a web project? Our first instinct is to use a custom font via a CDN or self-host it. We overlook web-safe fonts because we usually don't know what's available. But what if you could have the performance benefits without compromising style (too much)? Let's talk about it.
date: 2025-03-09
draft: false
---

<h2>Font vs Typeface vs Typography</h2>
<p>
    I may be in over my head even attempting to talk about typography. But it's important to establish some terms so we're on the same page. What is a font, and what is a typeface?
</p>
<p>
    Essentially, a typeface is what a character looks like, and a font is how that typeface is represented. <strong>Arial Bold 16px</strong> is a font, but <strong>Arial</strong> itself is a typeface.
</p>
<p>
    Typography, on the other hand, is the art and technique of arranging text to make it legible, readable, and visually appealing. It includes choosing typefaces, adjusting spacing, line height, and ensuring good readability in design.
</p>
<p>
    A nice font or fancy typeface doesn’t automatically mean good typography. Likewise, a simpler or generic typeface/font can look great with the right typographic choices. Again, this topic has a lot of weight to it (see what I did there?), but hopefully, this gives you a high-level perspective so you can dive deeper later.
</p>

<h2>What Makes Good Web Typography?</h2>
<p>
    I'm not an expert in typography, but we can go over some tools you can use to fine-tune a font. Some things are obvious—size, line-height, weight. Just adjusting those can completely change the feel of your typeface. But there are other properties, like <code>letter-spacing</code>, <code>text-decoration</code>, and <code>font-variant</code> for small caps, that can add more weight and character to your text.
</p>
<p>
    Another underrated CSS properties is <code>font-size-adjust</code>. It keeps the x-height (the height of lowercase letters) consistent when swapping fonts, so your fallback doesn’t look awkwardly big or too tiny. If you've ever switched a font and suddenly everything feels off, this property helps balance things out without messing with your entire layout. It’s one of those small tweaks that can make a big difference in readability.
</p>

```css
font-size-adjust: 0.5;
```

<p>
    Ligatures can be adjusted with font-variant-ligatures. You can optimize text rendering for better performance with:
</p>

```css
text-rendering: optimizeLegibility;
```

<p>
    And finally, you can improve visibility with:
</p>

```css
-moz-osx-font-smoothing: grayscale;
-webkit-font-smoothing: antialiased;
```

<h2>There's an App For That</h2>
<p>
    After searching for available web-safe fonts one too many times, I decided to build a little app to make it easier. Yes, I borrowed heavily from Google Fonts. If it ain’t broke…
</p>
<p><a href="https://web-safe-fonts.netlify.app" title="open web safe fonts app" target="_blank">web-safe-fonts.netlify.app</a></p>

<h2>Conclusion</h2>
<p>
    You may not need a heavy Google Font. Know what’s available and learn how to use it. Explore the built-in font features that can improve performance and readability. Happy coding.. 
</p>
