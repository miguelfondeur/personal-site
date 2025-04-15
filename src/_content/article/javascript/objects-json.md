---
title: "Working with Objects: Consuming JSON"
summary: "JavaScript Object Notation, or JSON, is a data structure that's hard to avoid if you're working on professional web applications. We've already covered objects in the first three articles. Let's now explore what makes JSON different from vanilla JavaScript objects, how to encode and parse, and how to receive JSON data from an API."
date: 2025-04-15
draft: false
---

## JSON and its Benefits

JSON is most commonly used to transfer data from a back-end (server) to the front-end (client). JSON is useful because it acts as a contract between the front and back-end, defining how data should be structured and exchanged. This makes application development much more flexible.

Before JSON, it was common for the back-end to send raw HTML to the front-end—a valid strategy, and one that's actually making a resurgence thanks to libraries like HTMX. But by removing HTML from the response, the front-end developer gains full control over the template code, and the back-end can focus solely on sending the correct data. It's a clean separation of concerns, allowing each developer to focus on their skill set and strengths.

Another benefit is the ability to share the same data across multiple front-ends—such as web, iOS, and Android applications. One back-end for multiple front-ends.

## JSON vs Vanilla JS

Let’s get into the syntax. JSON is very similar to a vanilla JavaScript object. What’s the difference? In JSON, property names must be strings, and values must be valid JSON types—strings, numbers, booleans, arrays, objects, or `null`. JSON itself is always transferred as a string.

This string-based format is compact and easy to transmit over the network. Transferring strings to the front-end is generally performant, though very large payloads can still impact performance. Here's a quick comparison:

```js
// A regular JavaScript object
const cards = [
  {
    name: "Miguel Fondeur",
    id: 1,
    premium: false,
    profileURL: "#",
  },
  // more cards...
];

// A JSON string (notice the quotes and structure)
const cardJSON = `[
  {
    "name": "Miguel Fondeur",
    "id": 1,
    "premium": false,
    "profileURL": "#"
  }
]`;
```

## Parsing JSON Strings

When you receive JSON from an API, it's in string format. To work with it as a JavaScript object, you need to parse it.

```js
const cardJSONString = `
[
  {
    "name": "Miguel Fondeur",
    "id": 1,
    "premium": false,
    "profileURL": "#"
  }
]
`;

const parsedData = JSON.parse(cardJSONString);

console.log(parsedData[0].name); // Miguel Fondeur
```

Once parsed, you can access and manipulate the data using regular JavaScript.

## Fetching JSON

Instead of hardcoding JSON in the front-end, let’s learn how to fetch it dynamically. From this point forward, we'll be using MockAPI.io—a tool that lets us mimic a JSON API.

Here’s how to fetch data from a mock API:

```js
fetch("https://64c2cbfeeb7fd5d6ebd056e9.mockapi.io/api/v1/cards")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

This code uses the fetch() API to request resources from a URL endpoint. Since fetch() returns a promise, we wait for it to resolve. Then we call .json() on the response to convert the JSON string into a usable JavaScript object—also a promise. Once it resolves, we can use the data however we want.

We'll explore how to build full CRUD (Create, Read, Update, Delete) apps using APIs in a future article.

## Stringifying JSON

We just parsed a JSON string into a JavaScript object. To send data back to the server, we do the opposite: we convert the object into a JSON string using JSON.stringify().

```js
const updatedCard = {
  name: "Miguel Fondeur",
  id: 1,
  premium: true, // updated boolean value
};

const jsonString = JSON.stringify(updatedCard);

// Send a POST request to the API
fetch("https://64c2cbfeeb7fd5d6ebd056e9.mockapi.io/api/v1/cards", {
  method: "POST", // or 'PUT' if you're updating an existing record
  headers: {
    "Content-Type": "application/json",
  },
  body: jsonString,
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

We won’t get into the details of the POST request here for the sake of brevity, but as you can see, we're using the same endpoint to send updated "cards" data back to the server.

## Knowing JSON

All the object operations we’ve covered in earlier articles—filtering, mapping, sorting—can be done with JSON too. You just need to parse the data first, and optionally stringify it when sending it back.

Knowing JSON is essential whether or not you're building full JavaScript applications. Many static site generators (like 11ty, which powers this site) allow you to create static .json files that can be parsed and rendered on the front-end. This is useful for things like navigation, internationalization, or seeding components with data.

And if you ever decide to dabble in back-end development, JSON gives you a key tool in your toolbelt for exchanging data between services and clients.
