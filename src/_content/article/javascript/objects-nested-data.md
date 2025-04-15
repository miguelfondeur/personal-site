---
title: "Working with Objects: Traversing Nested Data"
summary: "In earlier parts of the *Working with Objects* series, we explored working with object data that's only one level deep. But in real-world applications, JSON data is often deeply nested. Before we continue building our little application, let’s go over how to navigate that structure."
date: 2025-04-14
draft: false
---

## A Nested Data Structure

What do we mean when we say the data is "nested" or "deeply nested"? Here's a quick example of the card data we've been working with:

```js
const cards = [
  { name: "Miguel Fondeur", id: 1, premium: false, profileURL: "#" },
  // ...
];
```

This works well for simple card data. But imagine we're building a profile page. Profiles often include smaller collections like example projects or an image gallery. These additional collections are arrays of objects nested within the parent object—in our case, each card.

Let’s add a nested collection of external links to our existing data:

```js
const cards = [
  {
    name: "Miguel Fondeur",
    id: 1,
    premium: false,
    profileURL: "#",
    external_links: [
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/miguelfondeur/",
      },
      {
        name: "codepen",
        url: "https://codepen.io/miguelfondeur",
      },
    ],
  },
  // ...
];
```

It's not uncommon—though it can hurt performance and readability—to see objects with multiple layers of nesting. Deep nesting makes traversal more complex and can lead to brittle code if not structured carefully. The <a href="https://jsonapi.org/" target="_blank">JSON:API</a> spec offers best practices for structuring your data when building APIs, which we’ll touch on in a future article.

## Accessing Nested Data

Now that we have our nested data structure, let’s print those external links for each card:

```js
cards.forEach((card) => {
  console.log(`${card.name}'s links:`);
  card.external_links.forEach((link) => {
    console.log(`- ${link.name}: ${link.url}`);
  });
});
```

This loops through each card, then through each nested external link, printing them to the console.

## Finding Nested Data

Sometimes we need to find something within a nested array. For example, let’s find the first member who has a LinkedIn URL:

```js
const hasLinkedIn = cards.find((card) =>
  card.external_links.some((link) => link.name === "linkedin")
);

console.log(hasLinkedIn.name); // Miguel Fondeur
```

We use `.find()` on the top-level `cards` array, and `.some()` on the nested `external_links` array to check for a match. The `.some()` method returns `true` if any item in the array passes the test. It's also very readable: find some item with this condition—almost plain English.

## Flattening Nested Data

What if we want a list of all external platforms that users have added? This is useful for something like building a platform filter later.

```js
const allLinks = cards.flatMap((card) =>
  card.external_links.map((link) => link.name)
);

console.log(allLinks);
// ["linkedin", "codepen", ...]
```

This combines all the nested `external_links` arrays into one flat array using `.flatMap()`.

## Takeaways

Avoid nesting data too deeply if you can—especially when working with APIs or large datasets. Keep your structure predictable and consistent.

Understanding how to traverse nested objects gives you more confidence when handling real-world data. And when your data structures and access patterns are thoughtfully planned, your code becomes easier to reason about and maintain.

This is another tool in your JavaScript tool belt. Keep it sharp.
