---
title: Dark and Light Mode with Custom Properties
summary: The typical way of adding dark and light mode themes to a website is to add a class on the body that all of your styles can inherit. Using JavaScript, you toggle this class and even use localStorage to save the user's preferences. But with CSS custom properties and media queries, this process becomes much easier.
date: 2025-02-24
draft: false
---

<h2>Custom Properties</h2>
<p>If you're not familiar with custom properties (CSS variables), they allow us to store and reuse values in CSS dynamically. Unlike preprocessor variables (like Sass), CSS custom properties can be modified in real time and accessed via JavaScript.</p>

<p>Here’s a basic example:</p>

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

<p>One of the biggest advantages of custom properties is their ability to be redefined at different levels of the CSS cascade. For example, inside an <code>&lt;article&gt;</code>:</p>

```css
article {
  --text-color: lightblue;
}
```

<p>This means you can change the theme in a structured, maintainable way without rewriting large portions of your styles.</p>

<h2>The prefers-color-scheme Media Query</h2>
<p>Now that we understand custom properties, we can take advantage of the <code>prefers-color-scheme</code> media query. This query detects whether a user has set their system preference to light or dark mode and applies styles accordingly.</p>

```css
@media (prefers-color-scheme: dark) {
  :root {
    --background-color: black;
    --text-color: white;
  }
}
```

<p> With this approach, users automatically get a dark theme if their system is set to dark mode—no JavaScript required.</p>

<h2>Adding JavaScript for User Control</h2> 
<p>While the browser respects user preferences, we might still want to let users manually toggle themes and save their preference using <code>localStorage</code>.</p>

<p>Here's how we can do it:</p>
  
<h2>1. Setting the Default Theme</h2>
<p>Before applying the stored preference, we first check if the user has already chosen a theme. If not, we fall back to the system preference using <code>window.matchMedia</code>.</p>

```js
// Selectors
const button = document.getElementById("theme-toggle");
const body = document.body;

// Check Local Storage for a Saved Theme
const storedTheme = localStorage.getItem("theme");

if (storedTheme) {
  body.setAttribute("data-theme", storedTheme);
} else {
  // If No Stored Theme, Use System Preference
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  body.setAttribute("data-theme", prefersDark ? "dark" : "light");
}
```

<h2>2. Theme Toggle Button</h2>
<p>Now, we allow users to manually toggle between dark and light mode.</p>

```js
button.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});
```

<h2>Applying the Theme in CSS</h2>
<p>Now, we update our styles to reflect the JavaScript-controlled <code>data-theme</code> attribute:</p>

```css
[data-theme="dark"] {
  --background-color: black;
  --text-color: white;
}

[data-theme="light"] {
  --background-color: white;
  --text-color: black;
}

body {
  background-color: var(--background-color);
  color: var(--text-color);
}
```

<h2>No JavaScript? No Problem</h2>
<p>
  Even if JavaScript is disabled, the prefers-color-scheme media query still applies the correct theme. The JavaScript layer only enhances the experience by giving users manual control.
</p>
<p>
  This method is scalable and allows you to extend support for multiple themes beyond just dark and light. You could even introduce dynamic themes that change based on time of day!
</p>
<p>
  By combining CSS variables, media queries, and JavaScript, we get a clean and maintainable way to implement theme switching—without unnecessary complexity.
</p>
