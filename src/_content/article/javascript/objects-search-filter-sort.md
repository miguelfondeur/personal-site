---
title: "Working with Objects in JavaScript: Filtering, Searching & Sorting"
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

```js
if (sort.value === "alphabetical") {
  filtered = filtered.toSorted((a, b) => a.name.localeCompare(b.name));
}
```

<p>
    In this example, if the user selects "alphabetical" from the dropdown, we sort the cards alphabetically by the <code>name</code> property using <code>localeCompare()</code>. This is a modern way to handle string comparisons, which ensures the sorting is done properly regardless of the character set.
</p>

<h2>Bringing It All Together</h2>
<p>
    Now let’s see how all of this works together in one cohesive example. Below is the complete JavaScript code for managing a list of cards with search, filter, and sort functionality:
</p>

```html
<div class="flex">
  <input class="mr-2" type="search" id="search" placeholder="Search by Name" />
  <select class="mr-2">
    <option>All Members</option>
    <option value="premium">Premium</option>
    <option value="basic">Basic</option>
  </select>

  <select id="sort" class="">
    <option>Sort:</option>
    <option value="alphabetical">Alpabetical</option>
  </select>
</div>
<div id="cards"></div>
```

```js
<script>
  const container = document.querySelector("#cards");
  const search = document.querySelector("#search");
  const btn = document.querySelector("#btn");
  const select = document.querySelector("select");
  const sort = document.querySelector("#sort");

  const cards = [
    { name: "Miguel Fondeur", id: 1, premium: false, profileURL: "#" },
    { name: "Michael Denny", id: 2, premium: true, profileURL: "#" },
    { name: "Celeste Fondeur", id: 3, premium: true, profileURL: "#" },
  ];

  function renderCards(filteredCards = cards) {
    container.innerHTML = filteredCards
      .map(
        (card) => `
        <a href="${card.profileURL}" class="card ${card.premium ? "premium" : "basic"}">
          ${card.name}<br>id: ${card.id}
        </a>`
      )
      .join("");
  }

  function filterCards() {
    let filtered = cards;

    const searchTerm = search.value.trim().toLowerCase();
    if (searchTerm) {
      filtered = filtered.filter((card) => card.name.toLowerCase().includes(searchTerm));
    }

    if (select.value === "premium") {
      filtered = filtered.filter((card) => card.premium);
    } else if (select.value === "basic") {
      filtered = filtered.filter((card) => !card.premium);
    }

    if (sort.value === "alphabetical") {
      filtered = filtered.toSorted((a, b) => a.name.localeCompare(b.name));
    }

    renderCards(filtered);
  }

  search.addEventListener("input", filterCards);
  select.addEventListener("change", filterCards);
  sort.addEventListener("change", filterCards);

  btn.addEventListener("click", () => {
    cards.push({ name: "New Card", id: cards.length + 1, premium: false, profileURL: "#" });
    filterCards();
  });

  renderCards();
</script>
```

<h2>The Fundamentals You Can Build On</h2>
<p>
    Filtering, searching, and sorting are fundamental operations you’ll use in many applications, whether you’re working with user data, products, or other types of objects. These techniques form the foundation for more advanced operations that involve creating, updating, and deleting objects, known as CRUD operations.
</p>

<p>
    Stay tuned for our next post where we dive into CRUD operations with objects and how to manage data effectively in JavaScript!
</p>
