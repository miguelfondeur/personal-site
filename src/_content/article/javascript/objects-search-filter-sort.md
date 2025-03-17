---
title: "Working with Objects: Filtering, Searching & Sorting"
summary: There are certain tasks so common that you're almost guaranteed to encounter them in any professional environment. One of those is working with objects. In this series, I'm exploring some of the most common ways we work with objects. For this entry, we're starting with filtering, searching, and sorting. Let's dig in.
date: 2025-03-17
draft: false
---

<h2>Expectations vs. Reality</h2>
<p>
    As a front-end developer, I’ve had many interviews that required a fairly high level of understanding of data structures and algorithms. I've also faced coding challenges that made me question whether they reflected the actual work being done at the company. 
</p>
<p>
    Behind the curtain, however, most companies and applications are surprisingly similar. You’ll often find yourself doing the same tasks—just in different ways. This can be good or bad, depending on your perspective. Personally, I believe the more you do something, the better you get. I’d rather not reinvent the wheel every time I need to solve a common problem. Consistency and conventions make development smoother.
</p>
<p>
    Working with object data is one of those common tasks. Once you recognize the patterns, they become second nature, making you more efficient each time you encounter them. That said, this breakdown of JavaScript objects isn’t exactly how things will function in the "real world." In a professional environment, you'll usually fetch data from an API, work with JSON that needs to be parsed, and update query string parameters to persist state on the front end. Consider this the meat and potatoes of working with objects—before we dive deeper into more advanced operations.
</p>

<p>Here's the HTML we'll be working with:</p>

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
    <option value="alphabetical">Alphabetical</option>
  </select>
</div>
<div id="cards"></div>
```

<h2>Filtering Objects</h2>
<p> 
    Before we dive into the code, let’s briefly define these terms. Filtering narrows down a list based on specific criteria, sorting changes the order of a list, and searching is essentially filtering based on a specific string of characters. Filtering is one of the most common operations when working with lists (or arrays) of objects.
</p> 
<p> 
    Let's say we have an array of cards, each representing a user. We might want to filter the cards based on a category, such as whether the user has a premium account. 
</p>

```js
// Data
const cards = [
  { name: "Miguel Fondeur", id: 1, premium: false, profileURL: "#" },
  { name: "Michael Denny", id: 2, premium: false, profileURL: "#" },
  { name: "Scott Endicott", id: 3, premium: true, profileURL: "#" },
  { name: "Bogdan Chayka", id: 4, premium: true, profileURL: "#" },
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
    In this example, we check the value of the dropdown (<code>select.value</code>) to determine whether we want to filter for premium or basic users. The <code>filter()</code> method creates a new array containing only the cards that meet the criteria. 
</p> 
<h2>Searching Objects</h2> 
<p>
    Another common task is searching through objects. Often, you want to find items that match a specific term or keyword.
</p> 
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
    In this example, if the user selects "alphabetical" from the dropdown, we sort the cards alphabetically by the <code>name</code> property using <code>localeCompare()</code>. This is a modern way to handle string comparisons, ensuring sorting works properly regardless of character set or locale. 
</p>

<h2>Bringing It All Together</h2> 
<p> 
    Now let’s see how all of this works together. Here's the full working example of managing a list of cards with search, filter, and sort functionality: 
</p>

<iframe height="400" style="width: 100%;" scrolling="no" title="Website Example Code: Searching, Filtering, Sorting" src="https://codepen.io/miguelfondeur/embed/KKroEQx?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/miguelfondeur/pen/KKroEQx">
  Website Example Code: Searching, Filtering, Sorting</a> by Miguel Fondeur (<a href="https://codepen.io/miguelfondeur">@miguelfondeur</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<h2>The Fundamentals You Can Build On</h2> 
<p> 
    Filtering, searching, and sorting are fundamental operations you’ll use in many applications, whether you’re working with user data, products, or other types of objects. These techniques form the foundation for more advanced operations that involve creating, updating, and deleting objects—also known as CRUD operations. 
</p> 
<p> Stay tuned for our next post, where we dive into CRUD operations with objects and how to manage data effectively in JavaScript.</p>
