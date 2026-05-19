---
title: Are LLMs Just UIs?
summary: Ive had the experience of building LLM chat bots at both a production level and an exploratory level and I've come to a realzation that.. they might just be a User Interface? It may seem obvious to some, or scandalous to others. I'm going to explore  this idea based on my own experience with this tech. Enjoy the short read. 
date: 2026-05-18
draft: false
---
<h2>The LLM Experience</h2>
<p>
  Large Language Models like Chat-GPT have been promoted as all-knowing IO machines. And to the untrained or inexperienced, this is valid. But if you have any technical experience or you've had the chance to build with these tools yourself, your experience is likely completely the opposite.
</p>
<p>
  Most of us have experienced the downsides of LLMs and even agentic workflows: hallucinations, misinformation, or just being verbose and unhelpful. This is due to a number of factors: training data limitations, poor context management, and overlay large context windows. And as a result, we get frustrated, blame the AI, and thus continue the love/hate relationship we have with this technology.
</p>
<p>
  I believe part of the issue is in our approach or perspective on it. We may be expecting too much out of something that may in fact be just a User Interface, albeit a very powerful and unpredictable one.
</p>
<h2>My Experience</h2>
<p>
  When <a href="celestefondeur.com" target="_blank">Celeste</a> and I created <i>Prompt Shorty</i>, a <abbr title="Proof of Concept">POC</abbr> storytelling application, I was surprised at how easy it was to implement and use LLM software. You give it context, it gives you responses. But likewise, without context, you're subject to whatever training data the model has available. <i>"Write Me A Story..."</i>, results may vary. In our case, we were using OpenAI's <strong>Completions API</strong> and passing user input into the "Sytem Prompt" to get more curated responses. We also created a <abbr title="Retrieval Augmented Generation">RAG</abbr> toolchain to add reading level data which further improved the responses. It was clear to us that models didn't just "work" out of the box. They need fine-tuning.
</p>
<!-- <div class="article-image-wrapper">
    <img src="/img/articles/taggy-header.webp" alt="An image of Taggy, the e-commerce chat-bot." width="100%" loading="lazy">
</div> -->
<p>
  Recently while working with the Sweetwater team, I decided to prototype another chat bot "Taggy" to allow contextual search of real product data from Algolia. I trained the bot to receive product questions, interpret them, and repsond in JSON which I could feed into the Algolia request. Then I would use the Algolia response to feed the bot product data. Finally, the bot would use this data in its response, and update the collecion UI. This worked too well.
</p>
<p><i>Click the "Sweetwater" card on my <a href="/portfolio" target="_blank">portfolio</a> to see a video walkthrouh.</i></p>
<p>
But what was I actually doing? I wasn't replacing the existing UI with a bot... I wasn't even replacing the search functionality of the page. I was allowing the customer to interact with the same data, business logic, and visual UI in a new way, giving them options. No different than optimizing your site for screen readers. You're not building a different experience entirely (although I suppose you could), you're optimizing your enhancing your current experience.
</p>
<p>
  I'm of course not the only one approaching LLM's this way. Google is working on their own in-browser agentic experience that allows you to expose page data to it through custom data attributes. So in the near future, we may be implementing a shared convention for agentic web pages. We'll see.
</p>
<h2>TLDR</h2>
<p>
  LLMs take in messages and output responses based on its context and training data. That's a good thing. It can be a quick win for your site visitors/customers. But, you have to train them, otherwise they're not going to be helpful at all.
</p>
<p>
  Like the web, there are tons of things working under the hood to deliver you a website, but a website is not helpful in and of itself. You need to add helpful information, structure, etc. Just like an LLM.
</p>
<p>
  Goodbye!
</p>
