---
title: "Working with Objects: Creating, Updating & Deleting"
summary: "In my last post on objects, I mentioned how most of what we do as JavaScript developers is working with objects. It's foundational to building JavaScript applications. We spoke about filtering, searching, and sorting. In this post, I'll go through three aspects of CRUD: Create, Update, and Delete."
date: 2025-03-29
draft: false
---

## What is CRUD?

Before we get started, let's define CRUD. CRUD stands for **Create, Read, Update, Delete**. The most common example of a CRUD app is a Todo List. But imagine an app where you're creating a cartoon character, saving your character to be viewed later, and clicking edit to update or delete it. Most of your favorite applications can be reduced to these operations.

For our purposes, we'll stick to the card design from the [last post](/articles/objects-search-filter-sort/) on filtering, searching, and sorting.

## Starting Point

We've already introduced some card data and demonstrated how to filter, search, and sort it. Now, using the same structure, let’s take it a step further by adding functionality to create, update, and delete cards.

We'll use three array methods:

- `push()` to **Create**
- `find()` to **Update**
- `splice()` to **Delete**

## Creating Cards

Let's start with the **Create** operation. We'll need a form to add new cards dynamically. There are many ways you can do this: opening a modal, creating a separate page, or editing the card directly. For this example, we'll use a modal, which is a common UI pattern.

To keep things simple and modern, I’ll use the native `<dialog>` element with the `popover` attribute, which makes it easy to create modals without relying on JavaScript libraries. We won't go over `<dialog>` here, but MDN has great <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog" title="Open Dialog documentation on MDN" target="_blank">documentation</a> on it.

Here's the code:

```html
<header>
  <button id="create" popovertarget="add-popover">Add Card</button>
</header>

<div id="cards"></div>

<!-- Add Card Modal -->
<dialog id="add-popover" popover>
  <h2>Add Card</h2>
  <form id="newCard">
    <label for="name">
      Name:
      <input type="text" id="name" required />
    </label>
    <label for="premium">
      Is Premium:
      <input type="checkbox" id="premium" />
    </label>
    <div class="button-group">
      <button type="submit" class="success">Submit</button>
      <button
        type="button"
        class="cancel"
        popovertarget="add-popover"
        popovertargetaction="hide"
      >
        Cancel
      </button>
    </div>
  </form>
</dialog>
```

<p>
    We're adding a simple button at the top to trigger the modal form. The form captures the new card data, which we'll handle with JavaScript.
</p>
<p>
    Here's how you capture and add the card:
</p>

```js
const addForm = document.querySelector("#newCard");
const addPopover = document.querySelector("#add-popover");

const addCard = (event) => {
  event.preventDefault();

  const name = event.target.name.value.trim();
  const premium = event.target.premium.checked;

  if (name) {
    cards.push({
      id: Date.now(),
      name,
      premium,
    });

    renderCards();
    addPopover.hidePopover();
    event.target.reset();
  }
};

addForm.addEventListener("submit", addCard);
```

<p>
    This captures the form data, creates a new object, and adds it to the cards array. It then re-renders the cards and hides the modal.
</p>

<h2>Updating Cards</h2>
<p>
    For the Update operation, we'll add another <code>dialog</code> modal form. We'll follow the same structure as before, but with a 'Delete' button included for convenience. We'll also add an 'Edit' button to each card to trigger the modal.
</p>

<h3>HTML for Edit Modal</h3>

```html
<dialog id="edit-popover" popover>
  <h2>Edit Card</h2>
  <form id="editCard">
    <label for="edit-name"
      >Name:
      <input type="text" id="edit-name" required />
    </label>
    <label for="edit-premium"
      >Is Premium:
      <input type="checkbox" id="edit-premium" />
    </label>
    <div class="button-group">
      <button type="submit" class="success">Save</button>
      <button
        type="button"
        class="cancel"
        popovertarget="edit-popover"
        popovertargetaction="hide"
      >
        Cancel
      </button>
      <button type="button" id="delete-btn" class="delete">Delete</button>
    </div>
  </form>
</dialog>
```

<h3>Updating the Render Function</h3>
<p>
    We'll add an "Edit" button to each card so it can trigger the edit modal:
</p>

```js
function renderCards() {
  const container = document.querySelector("#cards");

  container.innerHTML = cards
    .map(
      (card, index) => `
      <div class="card ${card.premium ? "premium" : ""}">
        <h3>${card.name}</h3>
        <p>ID: ${card.id}</p>
        <button onclick="openEditPopover(${index})">Edit</button>
      </div>`
    )
    .join("");
}
```

<h3>Opening the Edit Modal</h3>
<p>
    When you click "Edit," it pre-fills the modal with the card's current data, making it easy to modify and save:
</p>

```js
const editPopover = document.querySelector("#edit-popover");
let currentEditIndex = null;

function openEditPopover(index) {
  currentEditIndex = index;
  const card = cards[index];

  document.querySelector("#edit-name").value = card.name;
  document.querySelector("#edit-premium").checked = card.premium;

  editPopover.showPopover();
}

function updateCard(e) {
  e.preventDefault();

  if (currentEditIndex !== null) {
    const card = cards[currentEditIndex];

    card.name = document.querySelector("#edit-name").value;
    card.premium = document.querySelector("#edit-premium").checked;

    renderCards();
    editPopover.hidePopover();
  }
}

document.querySelector("#editCard").addEventListener("submit", updateCard);
```

<h2>Deleting Cards</h2>
<p>
    To Delete a card, we'll use the same modal. The 'Delete' button will call a function to remove the card from the cards array using splice().
</p>

```js
function deleteCard() {
  if (currentEditIndex !== null) {
    cards.splice(currentEditIndex, 1);
    renderCards();
    editPopover.hidePopover();
  }
}

document.querySelector("#delete-btn").addEventListener("click", deleteCard);
```

<h2>Final Result</h2>
<p>
    Here's the final implementation. I've removed the previous filtering, searching, and sorting functionality for simplicity. I'll include all features in a future demo of a complete vanilla JavaScript application.
</p>

<iframe height="500" style="width: 100%;" scrolling="no" title="CRUD Cards" src="https://codepen.io/miguelfondeur/embed/qEBymPL?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"> See the Pen <a href="https://codepen.io/miguelfondeur/pen/qEBymPL">CRUD Cards</a> by Miguel Fondeur on <a href="https://codepen.io">CodePen</a>. </iframe>

<h2>CRUD is a Concept</h2>
<p>
    We just covered a basic CRUD implementation using JavaScript's array methods: push(), find(), and splice(). This is perfect for prototyping ideas.
</p>
<p>
    In the real world, you'd be sending requests to an API, storing data in a database, and handling validation. Whether you're using Firebase, Supabase, or a traditional backend with SQL or NoSQL, the CRUD concept remains the same.
</p>
<p>
    In future posts, we'll expand this app to include API requests, authentication, and additional features like profiles. Stay tuned!
</p>
