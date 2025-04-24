---
title: The :has Selector is Amazing
summary: This new CSS pseudo-class selector is amazing. For years we wanted a 'parent' selector but never thought it would come. What we ended up with was even better than I could imagine. Let's explore this powerful tool and how to use it.
date: 2025-04-24
draft: false
---

## The Need For a Parent Selector

I remember when <a href="https://sass-lang.com/" target="_blank" title="Go To Sass Documenation">Sass</a> was on the rise close to ten years ago. We were all amazed by what it could do. The `&` selector was one of my favorite features, now part of the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Nesting_selector#browser_compatibility" target="_blank" title="Go To Nesting Documenation">CSS Nesting spec</a>. One of my favorite tricks was to use `&` to style an element based on where it appeared in relation to another:

```css
a {
  color: blue;

  span > & {
    color: red;
  }
}
```

Which translated to:

```css
a {
  color: blue;
}
span > a {
  color: red;
}
```

It made me wonder if the Sass team might one day add a true parent selector. I imagined something like this:

```css
span < a {
  color: #c0ffee;
}
```

Of course, that never happened — and in raw CSS, we were stuck. For a long time, there was no way to style a parent element based on its children.

Sibling selectors gave us some flexibility, like styling an element that follows another, but we couldn’t style a parent based on whether it contained something. That kind of logic was reserved for JavaScript.

Until now.

## Enter :has()

The `:has()` pseudo-class is a game-changer. It allows us to apply styles to an element if it contains something specific — whether that's a child, a sibling, or even a combination of things.

What makes `:has()` even more powerful than the imaginary parent selector we were dreaming of is that it works more like a conditional. It's not just “select the parent of this element” — it's “select this element if it has something else inside or nearby.”

Here are a few practical ways to use it.

### Based on Direct Sibling

```css
h1 {
  margin-bottom: 2.4rem;
}
h1:has(+ h2) {
  margin-bottom: 1.6rem;
}
```

This decreases the bottom margin of an `h1` if it's immediately followed by an `h2`. Great for article intros or dynamic headings.

### Based on Children

```css
.card {
  display: flex;
}
.card:has(img) {
  gap: 1.2rem;
}
```

This adds spacing only if the `.card` contains an image. No more awkward layouts when an optional image is missing.

### Based on Descendants

You can go even deeper:

```css
section:has(form input[type="submit"]) {
  background: #f5f5f5;
}
```

This gives a background to sections that contain a submit button. Great for highlighting areas with actions.

## Combining with :not()

The `:not()` pseudo-class excludes elements based on a condition. When paired with `:has()`, the combo is incredibly useful.

### :has() inside :not()

Let’s say you want to style only cards without an image:

```css
.card:not(:has(img)) {
  justify-content: center;
  text-align: center;
}
```

This centers the content of `.card` elements that don’t contain an image. Perfect for fallback states or simplified designs.

### :not() inside :has()

You can also reverse it. For example, style a container if it contains an input that’s not of type checkbox:

```css
fieldset:has(input:not([type="checkbox"])) {
  border-left: 4px solid #009578;
}
```

This lets you apply styles to form groups based on specific input types. Super helpful for form design systems.

## TL;DR

The `:has()` selector is the closest thing we’ve ever had to a parent selector in CSS — and it's even better. It allows you to style elements based on their children, siblings, or other conditions inside the DOM, all without JavaScript.

Whether you're cleaning up spacing, styling interactive cards, or conditionally applying layout changes, `:has()` opens a new door to smarter, more dynamic CSS.

If you'd like to learn more, check out the excellent documentation on <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:has" target="_blank" title="Open up MDN documentation on :has selector">MDN</a>.
