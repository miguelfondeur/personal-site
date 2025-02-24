---
title: Dark and Light Mode with Custom Properties
summary: The typical way of adding dark and light mode themes to a website is to add a class on the body that all of your styles can inherit. Using JavaScript, you toggle this class and even use localStorage to save the user's preferences. But with custom properties and a new media query, this is much easier.
date: 2024-09-05
draft: false
---

<h3>Custom Properties</h3>
<p>If you're not familiar with custom properties (CSS variables), they allow us to store and reuse values in CSS, similar to Sass variables but with more flexibility. Unlike preprocessor variables, CSS custom properties can be modified dynamically and even accessed via JavaScript.</p>

<p>A simple implementation looks like this:</p>

```css
:root {
  --background-color: white;
  --text-color: black;
}

body {
  background-color: var(--background-color);
  color: var(--text-color);
}
```

<p>One of the biggest advantages of custom properties is their ability to be redefined at different levels of the CSS cascade. For example, you could have a global text color but override it within an <code>&lt;article&gt;</code>:</p>

```css
article {
  --text-color: lightblue;
}
```

<p>This means you can change the theme in a structured, maintainable way without rewriting large portions of your styles.</p>

<h3>The <code>prefers-color-scheme</code> Media Query</h3>
<p>Now that we understand custom properties, we can take advantage of the <code>prefers-color-scheme</code> media query. This query detects whether a user has set their system preference to light or dark mode and applies styles accordingly.</p>

```css
@media (prefers-color-scheme: dark) {
  :root {
    --background-color: black;
    --text-color: white;
  }
}
```

<p> With this approach, users automatically
  get
  a
  dark
  theme
  if
  their
  system
  is
  set
  to
  dark
  mode—no
  JavaScript
  required.</p
  > <h3
  > Tying
  It
  Together</h3
  > <p
  > Rather
  than
  writing
  separate
  dark
  and
  light
  mode
  styles,
we
  can
  simply
  redefine
  our
  custom
  property
  values
  inside
  <code
  > prefers-color-scheme</code
  > .
  This
  keeps
  our
  styles
  DRY
  (Don’t Repeat Yourself)
  and
  ensures
  that
  all
  components
  inherit
  the
  correct
  colors
  effortlessly.</p> 
  
```css
:root {
    --background-color: white;
    --text-color: black;
}

@media (prefers-color-scheme: dark) {
:root {
--background-color: black;
--text-color: white;
}
}

body {
background-color: var(--background-color);
color: var(--text-color);
}

````

<p>This method is scalable and easy to maintain.</p>

<h3>Do We Need JavaScript?</h3>
<p>Not necessarily. Since the browser already respects user preferences, there's no need for JavaScript in most cases. However, we might still want to allow users to toggle themes manually.</p>

<p>A simple way to do this is by adding a <code>data-theme</code> attribute to <code>&lt;body&gt;</code> and toggling it with JavaScript:</p>

```html
<button id="theme-toggle">Toggle Theme</button>
```

```js
const button = document.getElementById("theme-toggle");
const body = document.body;

button.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

// Apply stored preference on load
const storedTheme = localStorage.getItem("theme");
if (storedTheme) {
  body.setAttribute("data-theme", storedTheme);
}
````

<p>Then, we adjust our CSS accordingly:</p>

```css
[data-theme="dark"] {
  --background-color: black;
  --text-color: white;
}

[data-theme="light"] {
  --background-color: white;
  --text-color: black;
}
```

<p>If JavaScript is disabled, the <code>prefers-color-scheme</code> styles still apply. This approach respects progressive enhancement while giving users control over the theme.</p>

<h3>Get Creative</h3>
<p>Using this method, you’re not limited to just dark and light themes. You can extend it to support multiple themes or even dynamic themes that adjust based on the time of day.</p>

<p>By leveraging custom properties and modern CSS features, we can simplify theme switching while keeping our codebase clean and maintainable. And best of all—it works even without JavaScript.</p>
