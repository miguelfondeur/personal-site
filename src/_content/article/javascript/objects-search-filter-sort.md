---
title: Working with Objects in JavaScript: Filtering, Searching & Sorting
summary: In my first post on attributes, we looked at the difference between attributes and props. This time we'll dive deeper into data attributes. Learn how to leverage the JavaScript dataset API for dynamic data management in the DOM. Explore performance benefits, event delegation, MutationObserver, and best practices for using data attributes efficiently.
date: 2025-03-04
draft: true
---

<p>
    JavaScript is a versatile language, widely used for handling and manipulating data. Among the most common data structures you'll work with are objects. Objects are incredibly powerful in JavaScript because they allow you to store key-value pairs, making them ideal for representing structured data. From user profiles to product listings, objects are often the go-to choice for organizing information in JavaScript.
</p>
<p>
    In this post, we’ll explore some common operations you can perform on objects in JavaScript—filtering, searching, and sorting—which are essential for working with collections of data. We’ll use a sample array of user profile cards and demonstrate how to apply these operations in a real-world scenario.
</p>
<h2>Filtering Objects</h2>
<p>
    Filtering is one of the most common operations when working with collections of objects. It allows you to narrow down a set of data based on specific criteria.
</p>
<p>
    Let's say we have an array of cards, each representing a user. We might want to filter the cards based on a category, such as whether the user has a premium account.
</p>

```js
// Data
const cards = [
  { name: "Miguel Fondeur", id: 1, premium: false, profileURL: "#" },
  { name: "Michael Denny", id: 2, premium: true, profileURL: "#" },
  { name: "Celeste Fondeur", id: 3, premium: true, profileURL: "#" },
];
```

```js
function filterCards() {
  let filtered = cards;

  // Filter by Premium/Basic
  if (select.value === "premium") {
    filtered = filtered.filter((card) => card.premium);
  } else if (select.value === "basic") {
    filtered = filtered.filter((card) => !card.premium);
  }

  renderCards(filtered);
}
```

<p>
    In this example, we check the value of the dropdown (select.value) to determine whether we want to filter for premium or basic users. The filter() method creates a new array containing only the cards that meet the criteria.
</p>

<h2>Searching Objects</h2>
<p>Another common task is searching through objects. Often, you want to find items that match a specific term or keyword.</p>

<p>Here’s how we can filter our array of cards based on a search term:</p>

```js
const searchTerm = search.value.trim().toLowerCase();
if (searchTerm) {
  filtered = filtered.filter((card) =>
    card.name.toLowerCase().includes(searchTerm)
  );
}
```

<p>
    In this case, we’re filtering the cards by the name of the user, making the search case-insensitive. The <code>includes()</code> method is used to check if the name contains the search term.
</p>

<h2>Sorting Objects</h2>
<p>
    Sorting allows you to rearrange objects in a collection according to specific criteria, such as alphabetically by name or numerically by ID.
</p>
