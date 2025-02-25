---
title: Properties Vs Attributes in JS
summary: We've all used properties and attributes in our code. But for a long time, I really didn’t understand the difference. In short, attributes set initial values, while properties reflect an element’s dynamic state after interaction or manipulation. Simple enough, but how does that relate to data-attributes? What about custom elements? Let’s take a deep dive and figure out the key differences.
date: 2025-02-24
draft: false
---

<h2>Attributes vs. Properties</h2>
<br>
<h3>1. Attributes are static, properties are dynamic</h3>
<p>Attributes are <strong>defined in the HTML</strong> and serve as the initial state. However, once the page loads, JavaScript properties take over and can change independently.</p>

```html
<input id="myInput" type="text" value="Hello" />
<script>
  const input = document.getElementById("myInput");

  console.log(input.getAttribute("value")); // "Hello" (Attribute)
  console.log(input.value); // "Hello" (Property)

  input.value = "Goodbye";
  console.log(input.getAttribute("value")); // Still "Hello" (Attribute)
  console.log(input.value); // "Goodbye" (Property)
</script>
```

<p>Changing <code>input.value</code> updates the displayed text but <strong>does not</strong> update the <code>value</code> attribute in the DOM. However, if you manually reset the form or use <code>setAttribute()</code>, the attribute will be restored.</p>

<h3>2. Custom elements & observed attributes</h3>
<p>Built-in elements, like <code>&lt;input&gt;</code>, do <strong>not</strong> automatically sync properties with attributes. However, <strong>custom elements</strong> can listen for attribute changes using <code>observedAttributes()</code>.</p>

```html
<script>
  class MyElement extends HTMLElement {
    static get observedAttributes() {
      return ["title"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
      console.log(`Attribute ${name} changed from ${oldValue} to ${newValue}`);
    }
  }

  customElements.define("my-element", MyElement);
</script>

<my-element title="Hello"></my-element>

<script>
  const el = document.querySelector("my-element");
  el.setAttribute("title", "Updated Title");
  // Logs: "Attribute title changed from Hello to Updated Title"
</script>
```

<p>This behavior is <strong>opt-in</strong> for custom elements, but <strong>not available</strong> for built-in ones. For example, changing <code>input.value = "New"</code> will not trigger an attribute change.</p>

<h3>3. Attributes live in the DOM, properties live in memory</h3>
<p><strong>Attributes</strong> are stored in the DOM itself (<code>setAttribute()</code> modifies them).<br>
<strong>Properties</strong> are stored in JavaScript memory and <strong>may or may not sync</strong> with attributes.</p>

```html
<img id="logo" src="logo.png" />
<script>
  const img = document.getElementById("logo");
  console.log(img.getAttribute("src")); // "logo.png"
  console.log(img.src); // Full URL (e.g., "http://example.com/logo.png")

  img.src = "new-logo.png";
  console.log(img.getAttribute("src")); // Still "logo.png"
</script>
```

<p>This happens because properties often represent <strong>computed values</strong> (like <code>img.src</code> expanding to an absolute URL).</p>

<h2>Keeping Attributes & Properties in Sync</h2>
<p>If you want to <strong>keep attributes and properties in sync</strong>, you need to <strong>explicitly update them</strong>.</p>

```html
<input id="syncInput" value="Initial" />
<script>
  const input = document.getElementById("syncInput");

  // Keep value attribute in sync with property
  input.addEventListener("input", () => {
    input.setAttribute("value", input.value);
  });
</script>
```

<p>This ensures that when a user types, both the <strong>property</strong> (<code>input.value</code>) and <strong>attribute</strong> (<code>value="..."</code>) remain updated.</p>

<h2>How do Data Attributes Work?</h2>
<p>
  Native elements provide specific attributes by default, such as the <code>src</code> attribute on an <code>img</code> or the <code>type</code> attribute on an <code>input</code>. However, you can also define your own custom attributes using the <code>data-</code> prefix, which is commonly referred to as "data attributes." These custom data attributes are accessible in both your CSS and JavaScript, providing a flexible way to store extra information.
</p>

<p>
  Unlike the standard attributes like <code>src</code> or <code>value</code>, data attributes allow you to store custom data directly on HTML elements without affecting the rendering of the page. They’re especially useful for adding extra metadata or managing state within your app. Let’s see how they work in practice:
</p>

<h3>Example: Setting a Custom Data Attribute for Theming</h3>
<p>
  Imagine you want to store the theme preference in your HTML element. Here's how you'd do it with a data attribute:
</p>

```html
<body data-theme="dark">
  <!-- Content -->
</body>

<script>
  // Get Data
  const theme = document.body.dataset.theme; // Note the use of dataset
  console.log(theme); // "dark"

  // Set Data
  document.body.dataset.theme = "light";
  console.log(document.body.dataset.theme); // "light"
</script>
```

<p>
  In the example above, we added a <code>data-theme</code> attribute to the <code>&lt;body&gt;</code> tag. This attribute can be accessed in JavaScript via <code>dataset.theme</code>. Notice that when you access or set data attributes in JavaScript, you use the <code>dataset</code> object, which automatically converts <code>data-*</code> attributes into camelCase.
</p> 
<p>
  While data attributes are easy to use and versatile, it’s important to note that they should primarily be used for storing extra data that isn't critical to your page's layout or style. They help keep your HTML clean and provide a way to pass information around without cluttering the DOM or your CSS. I'll go into a deeper discussion on data attributes in a future article.
</p>

<h2>TL;DR</h2>
<ul>
    <li><strong>Attributes</strong> (set in HTML) provide the <strong>initial</strong> values.</li>
    <li><strong>Properties</strong> (set in JavaScript) represent the <strong>current state</strong>.</li>
    <li><strong>Changing a property does not update the attribute</strong> (unless manually synced).</li>
    <li><strong>Custom elements</strong> can observe attribute changes with <code>observedAttributes()</code>.</li>
    <li><strong>Attributes live in the DOM</strong>, while <strong>properties live in JavaScript memory</strong>.</li>
    <li><strong>Data attributes</strong> (<code>data-*</code>) allow you to store custom data in HTML elements that are accessible in both CSS and JavaScript.</li>
</ul>
<p>
  Understanding this distinction is key when working with forms, custom elements, or even React props vs. attributes. So next time you're debugging, be sure to check <strong>both</strong>—is it an attribute or a property?
</p>
