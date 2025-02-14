---
title: Properties Vs Attributes in JS
summary: We've all used properties and attributes in our code. But, for a long time, I really didn't understand the difference. In short, attributes set initial values, while properties reflect an elements dynamic value, after interaction or manipulation. Simple enough, but how does that relate to data-attributes? What about custom elements? Let's take a deep dive and figure out the key differences.
date: 2024-09-05
draft: false
---

The HTML attribute (value="...") is static and sets the initial value.
The JavaScript property (input.value) is dynamic and reflects the current value.
Changing the property does not update the attribute, but resetting the form or using setAttribute() affects the attribute.

Custom elements opt-in to attribute observation using observedAttributes().
Built-in elements do not have this feature. For example, changing input.value does not trigger an attribute change.

The attribute is stored in the DOM (setAttribute()).
The property is stored in JavaScript memory (el.title = "...").
Updating a property does not update the attribute, unless you manually sync them.

If you want attributes and properties to stay in sync, you must explicitly update them.
