---
title: A deeper dive into data attributes.
summary: In my first post on attributes, we looked at the difference between attributes and props. This time we'll dive deeper into data attributes. Learn how to leverage the JavaScript dataset API for dynamic data management in the DOM. Explore performance benefits, event delegation, MutationObserver, and best practices for using data attributes efficiently.
date: 2025-03-04
draft: false
---

<h2>Backstory - How the DOM Creates Attributes and Props</h2>
<p><em>Feel free to <a href="#what-is-dataset" title="Go to next page section">skip to the next</a> section if you don't need the backstory..</em></p>
<p>
    The last time I went over attributes and props, we discussed how HTML attributes are static and JS properties are dynamic. The HTML elements in the document include attributes, and when the browser renders this document, it creates a Document Object Model (DOM). The DOM, to put it clearly, is a <strong>Model</strong> of the HTML <strong>Document</strong> represented as a Javascript <strong>Object</strong>. 
</p>
<p>
    Let's look under the hood. If you type <code>window.document.all</code> in your console, you'll see an array-like collection of objects representing all of the elements in your HTML document. Eventually, you'll get to an element like an anchor tag <code>&lt;a&gt;</code> or a <code>&lt;button&gt;</code> tag. Let's use an anchor tag as an example. If you open the anchor tag object, you'll see some familiar properties and methods: things like <code>onclick</code>, ARIA labels, and properties like <code>id</code> and <code>href</code>. But if you keep searching, you'll also see a property called <code>attributes</code>. 
</p>
<p>
    If you open up that object, you'll actually see an <code>href</code> property with the same value you set in the document. So why are there two? The <em>properties</em> you see on the element object are mapped from <em>attributes</em> when the browser loads the page. However, if you select that anchor tag in the console and change its <code>.href</code> property to, say, <em>https://google.com</em>, and inspect the DOM again, you'll notice something interesting: the <code>href</code> <strong>attribute</strong> has not changed, but the <code>href</code> <strong>property</strong> has. 
</p>
<p>
    Hopefully, by now, you see how attributes and properties are not the same, and why some are available as properties of the element object while others are not. Now, if you look at this element object again, you might notice another property called <code>dataset</code>. 
</p>

<h2 id="what-is-dataset">What is <code>dataset</code>?</h2>
<p>
    Some attributes map directly to element properties, like <code>id</code> and <code>href</code>. But what about custom attributes? This is where <code>dataset</code> comes in. The <code>dataset</code> API allows you to access custom <code>data-*</code> attributes as JavaScript properties.
</p>
<p>
    Example: If you add <code>data-price="2.00"</code> to an element, JavaScript provides easy access to it via <code>element.dataset.price</code>. Als notice how it automatically converts kebab-case (<code>data-is-open</code>) to camelCase (<code>dataset.isOpen</code>).
</p>

<h2>Leveraging <code>dataset</code> for Dynamic Data Management</h2>

<h3>1. Why Use <code>dataset</code> Instead of Attributes?</h3>
<p>
    The <code>dataset</code> API is often more efficient than <code>getAttribute()</code> and <code>setAttribute()</code>, especially when working with custom metadata in JavaScript.
</p>

<p><strong>Key Benefits:</strong></p>
<ul>
    <li><strong>Faster Access:</strong> <code>element.dataset.key</code> is more efficient than <code>getAttribute("data-key")</code>.</li>
    <li><strong>Cleaner Code:</strong> Allows easy interaction with custom data without cluttering the HTML.</li>
    <li><strong>Avoids Unnecessary Reflows:</strong> Updating <code>dataset</code> does not trigger style recalculations <strong>unless</strong> the data attribute is used in CSS.</li>
</ul>

<h3>2. Optimizing Performance: <code>dataset</code> vs. <code>classList</code></h3>
<p>
    If you use <code>data-*</code> attributes in CSS, modifying them in JavaScript may cause reflows:
</p>

```css
[data-theme="dark"] {
  background-color: black;
  color: white;
}
```

```html
<body data-theme="light"></body>
<script>
  document.body.dataset.theme = "dark"; // ⚠️ Triggers a repaint & possible reflow
</script>
```

<p>
    <strong>Best practice:</strong> If <code>data-*</code> is used for <strong>state</strong> but it <strong>affects styling</strong>, consider using <code>classList.toggle()</code>:
</p>

```js
document.body.classList.toggle("dark-theme"); // More efficient
```

<h3>3. Practical Use Cases for <code>dataset</code></h3>

<h4>a) Storing Stateful Data in UI Elements</h4> 
<p>Instead of managing a separate JavaScript object, store state <strong>directly</strong> in the HTML:</p>

```html
<button id="likeBtn" data-liked="false">Like</button>

<script>
  const btn = document.getElementById("likeBtn");

  btn.addEventListener("click", () => {
    const isLiked = btn.dataset.liked === "true";
    btn.dataset.liked = !isLiked;
    btn.textContent = isLiked ? "Like" : "Unlike";
  });
</script>
```

<h4>b) Using <code>dataset</code> for Event Delegation</h4> 
<p>Instead of attaching separate event listeners to each button, delegate events using <code>dataset</code>:</p>

```html
<ul id="taskList">
  <li data-task-id="1">Task 1 <button data-action="delete">X</button></li>
  <li data-task-id="2">Task 2 <button data-action="delete">X</button></li>
</ul>

<script>
  document.getElementById("taskList").addEventListener("click", (e) => {
    if (e.target.dataset.action === "delete") {
      const taskId = e.target.closest("li").dataset.taskId;
      console.log(`Deleting Task ${taskId}`);
      e.target.closest("li").remove();
    }
  });
</script>
```

<p>This reduces event listeners and improves performance.</p> 
<h3>4. Watching <code>dataset</code> Changes with <code>MutationObserver</code></h3> 
<p>If multiple scripts modify <code>dataset</code>, you can observe changes dynamically:</p>

```html
<div id="user" data-status="offline">User Status</div>

<script>
  const userDiv = document.getElementById("user");

  const observer = new MutationObserver(() => {
    console.log(`User status changed to: ${userDiv.dataset.status}`);
  });

  observer.observe(userDiv, {
    attributes: true,
    attributeFilter: ["data-status"],
  });

  // Simulating a status change
  setTimeout(() => {
    userDiv.dataset.status = "online";
  }, 2000);
</script>
```

<p>This is useful for real-time applications that rely on dataset changes.</p>

<h2>TL;DR</h2> 
<ul> 
    <li>Use <code>dataset</code> for JavaScript state instead of modifying attributes.</li> 
    <li>Avoid using <code>data-*</code> for styling to prevent unnecessary reflows.</li> 
    <li>Use <code>classList.toggle()</code> when styling changes are required.</li> 
    <li>Event delegation is more efficient with <code>dataset</code>.</li> 
    <li><code>MutationObserver</code> helps watch for <code>data-*</code> changes dynamically.</li>    
</ul> 
<p>
    By understanding how <code>dataset</code> works, you can efficiently manage dynamic metadata and improve performance while keeping your JavaScript code clean.
</p>
