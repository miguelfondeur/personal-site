---
title: Using Web Fonts
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

<h2>Using Web Fonts</h2>
<p>
    Now, that we're all on the same page. Let's talk about web fonts, or web safe fonts. Web fonts are the fonts that are pre-packaged in your operating system and web browser. If you create a web page and you <em>don't</em> declare a font-family in your CSS, your browser will set it to the default serif font like <strong>'Times'</strong>. If you search for a font-family in your inspector you'll get a short list of available fonts. But, the list is typically longer than what the inspector shows you. There's a collection of Serif, and Sans-serif fonts that are readily available along with some odd typefaces like, fantasy, monospace, and symbol. Many of these have style variants like font-weight and italic styles.
</p>

<h2>Caveat: Font Availability</h2>
<p>
    To the uninitiated, you might think all web fonts are available across all operating systems and browsers. Unfortunately, that's not the case. Browsers and operating systesms will always have their particularities. Some OS's offer fonts that others don't. It can be frustrating. Luckily, there are workarounds. You can use fallbacks to make sure if that your font looks good across different operatings systems, even if they vary in style slightly.  
</p>

```css
font-family: "Baskerville", Georgia, "Times New Roman", "DejaVu Serif", Times,
  serif;
```

<h2>Improving Web Fonts</h2>
<p>
    I'm not an expert in typography, but we can go over some tools you can use to fine-tune a font. Some things are obvious—size, line-height, weight. Just adjusting those can completely change the feel of your typeface. But there are other properties, like <code>letter-spacing</code>, <code>text-decoration</code>, and <code>font-variant</code> for small caps, that can add more weight and character to your text.
</p>
<p>
    Another underrated CSS property is <code>font-size-adjust</code>. It keeps the x-height (the height of lowercase letters) consistent when switching between fonts, so your fallback doesn’t look awkwardly big or too tiny. If you've ever switched a font and suddenly everything feels off, this property helps balance things out without messing with your entire layout. It’s one of those small tweaks that can make a big difference in readability.
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

<h2>Where to Find Web Fonts</h2>
<p>
    After searching for available web-safe fonts one too many times, I decided to build a little app to make it easier. Yes, I borrowed heavily from Google Fonts. If it ain’t broke…
</p>
<p>
    <a href="https://www.miguelfondeur.com/apps/web-fonts/" title="open web safe fonts app" target="_blank">https://www.miguelfondeur.com/apps/web-fonts/</a>
</p>
<p>I'll add to it over time. For now, you can search for a font and see examples of how to use it. I've also added some notes and things to consider. Check it out.</p>

<h2>Conclusion</h2>
<p>
    You may not need a heavy custom font. Know what’s available and learn how to use it. Explore the built-in font features that can improve performance and readability. Happy coding 
</p>
