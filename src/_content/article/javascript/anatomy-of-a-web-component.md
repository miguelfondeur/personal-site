---
title: Anatomy Of A Web Component
summary: Did you know you could build with components without using a framework? Did you know you could use these components with other frameworks? You might be thinking, "How in the..". Let me show you the way... I'll walk you through the shape and usage of native JS components (or custom elements). Strap yourselves in kids, it's going to be a long one!
date: 2026-01-09
draft: false
---

## What Are Web Components

If you're already familiar with Javascript frameworks like *React* and *Vue* feel free to skip ahead.
For the uninitiated, Web components are a way of encapsulating functionality into a reusable custom element. We already have a bunch of useful elements in html, like `<inputs>` and `<buttons>` but sometimes you need something that the web doesn't provide like a `<carousel>`. And you might want to share that new thing across multiple files. Most developers use frameworks or Libraries for this. The advantage is, they provide a bunch or features and utilities out-of-the-box. But, what if we want to share our components across multiple, diverse front-end environments? Can you share React components with Vue?? NO! How about Vue components with Svelte? NEGATIVE! Luckily there's a solution for this. Enter custom elements, or what most of us call web components.

## What Do They Look Like

I'm so glad you asked. There are a lot of ways to create, write, and configure a web component. At the most basic level, a web component is just a JavaScript class that extends HTMLElement and gets registered with the browser.

Here’s the smallest valid web component you can write:

```js
class MyComponent extends HTMLElement {
  connectedCallback() {
    this.textContent = 'Hello from a Web Component!';
  }
}

customElements.define('my-component', MyComponent);
```

And then you can use it anywhere:

```html
<my-component></my-component>
```

Ok, that's the *what*, let's get into the *how* of creating components.

***

## Best Practices (and Opinion)

I personally like matching Vue’s structure because it’s pretty ergonomic (and I have the most experience with it). You can also write components in a React/JSX style if you really want.

The beauty of web components is that they’re just JavaScript, so there’s a lot of flexibility—but there are right ways and wrong ways to write them.

The two biggest mistakes I see:

1. Re-creating DOM nodes unnecessarily
2. Treating everything like a template string

Let’s talk about that.

### HTML Templates

There is a time to use template strings, and there is a time to create the element. It's a performance consideration. 

#### Do this:

Use a `<template>` when your markup is static or mostly static:

```js
const template = document.createElement('template');

template.innerHTML = `
  <style>
    :host {
      display: block;
      padding: 1rem;
      border: 1px solid #ccc;
    }
  </style>
  <slot></slot>
`;

class MyCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('my-card', MyCard);
```

Why this is good:

- Parsed once
- Cloned cheaply
- Clear separation of structure and logic

#### Not This:

Rebuilding your entire DOM on every update:

```js
class BadCard extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="card">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('bad-card', BadCard);
```

Why this is bad:

- Blows away DOM on every render
- Destroys event listeners
- Slower than you think

Template strings are fine for small, throwaway components, but don’t scale well.

***

## How Web Components are Like Other Frameworks

Let’s map common framework concepts to native web component APIs.

### Props

In terms of passing values to the component, we can just use **attributes**

```js
class MyButton extends HTMLElement {
  static get observedAttributes() {
    return ['label'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `<button></button>`;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'label') {
      this.shadowRoot.querySelector('button').textContent = newValue;
    }
  }
}

customElements.define('my-button', MyButton);
```

Usage:

```html
<my-button label="Click Me"></my-button>
```

So remember, *props are to frameworks as attributes are to Web Components*.

### Properties & Methods

Not everything in a component needs to flow through attributes.

Because web components are **real DOM elements**, you can expose properties and methods that are accessible from the outside using normal dot syntax—just like any other JavaScript object.

This is something frameworks often discourage, but for web components it’s a **first-class feature**.

#### Public Properties

Public properties can be read or written directly on the element instance.

```js
class ToggleElement extends HTMLElement {
  constructor() {
    super();
    this._open = false;
  }

  set open(value) {
    this._open = Boolean(value);
    this.render();
  }

  get open() {
    return this._open;
  }

  render() {
    this.textContent = this._open ? 'Open' : 'Closed';
  }
}

customElements.define('toggle-element', ToggleElement);
```

Usage:

```js
<toggle-element id="toggle"></toggle-element>

<script>
  const toggle = document.getElementById('toggle');

  toggle.open = true;     // Sets property
  console.log(toggle.open); // Reads property
</script>

```

Framerwork analogy:

- React → `ref.current`
- Vue → `template ref`
- Web Components → direct element access

#### Public Methods

Methods allow consumers to imperatively control a component when declarative props aren’t enough.

```js
class ModalElement extends HTMLElement {
  open() {
    this.setAttribute('open', '');
  }

  close() {
    this.removeAttribute('open');
  }
}

customElements.define('modal-element', ModalElement);
```

Usage:

```js
document.querySelector('modal-element').open();
```

This is especially useful for:

- Modals
- Tooltips
- Focus management
- Media controls

### Private Properties & Methods

Sometimes, you don’t want consumers touching your internal state.
Modern JavaScript allows true private fields using `#`.

```js
class SecureCounter extends HTMLElement {
  #count = 0;

  increment() {
    this.#count++;
    this.textContent = this.#count;
  }
}

customElements.define('secure-counter', SecureCounter);
```

Outside access:

```js
const counter = document.querySelector('secure-counter');

counter.increment(); // ✅ works
counter.#count;      // ❌ SyntaxError (truly private)
```

Why this matters:

- Prevents accidental misuse
- Clearly defines your public API
- Makes components safer to share

### When to Use What

- **Attributes** → declarative, serializable, HTML-friendly
- **Properties** → dynamic state
- **Methods** → imperative actions
- **Private fields** → internal implementation details

This pattern mirrors how native elements:

- `<video>.play()`
- `<input>.value`
- `<dialog>.showModal()`

Look at us! We're using the platform!

### LifeCycle Hooks

```js
class LifeCycleDemo extends HTMLElement {
  constructor() {
    super();
    console.log('constructor');
  }

  connectedCallback() {
    console.log('mounted');
  }

  disconnectedCallback() {
    console.log('unmounted');
  }

  attributeChangedCallback(name, oldVal, newVal) {
    console.log('prop changed', name);
  }
}

customElements.define('lifecycle-demo', LifeCycleDemo);
```

Mapping:

| Framework | Web Component |
|----------|---------------|
| mounted  | `connectedCallback` |
| unmounted | `disconnectedCallback` |
| watch | `attributeChangedCallback` |

### Events

Events work exactly like you’d expect, because they’re just DOM events.

```js
class EventButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `<button>Click</button>`;
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector('button')
      .addEventListener('click', () => {
        this.dispatchEvent(
          new CustomEvent('my-click', {
            detail: { time: Date.now() },
            bubbles: true,
            composed: true
          })
        );
      });
  }
}

customElements.define('event-button', EventButton);

```

Usage:

```html
<event-button></event-button>

<script>
  document.querySelector('event-button')
    .addEventListener('my-click', e => {
      console.log(e.detail);
    });
</script>
```

### Reactivity?

There’s no built-in reactivity system—but you don’t need one.

```js
class CounterElement extends HTMLElement {
  constructor() {
    super();
    this._count = 0;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <button>+</button>
      <span>0</span>
    `;
  }

  connectedCallback() {
    this.shadowRoot.querySelector('button')
      .addEventListener('click', () => {
        this.count++;
      });
  }

  set count(val) {
    this._count = val;
    this.shadowRoot.querySelector('span').textContent = val;
  }

  get count() {
    return this._count;
  }
}

customElements.define('counter-element', CounterElement);
```

Reactivity is just:

- state
- setters
- updating the DOM

No proxies. No magic. Full control.

***

## Using Web Components with Other Frameworks

Yes, it is absolutely possible—and this is where web components really shine.

Because they’re just HTML, every major framework supports them.

### Using in React

```jsx
function App() {
  return (
    <my-button
      label="Hello"
      onMy-click={(e) => console.log(e.detail)}
    />
  );
}
```

### Using in Vue

```html
<template>
  <event-button @my-click="handleClick" />
</template>

<script>
  export default {
    methods: {
      handleClick(e) {
        console.log(e.detail);
      }
    }
  }
</script>
```

Props go in. Events come out. No adapters required.

***

## Final Thoughts

Web components aren’t here to replace frameworks—but they do replace the need to rewrite the same component over and over again for every framework.

If you:

- Build design systems
- Share components across teams
- Want framework-agnostic UI

Web components are worth learning.

And the best part?
You already know enough JavaScript to write them.
