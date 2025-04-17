---
title: "The Art vs. Utility of Web Development"
summary: "We’ve all seen websites that stretch the limits of what a website can do—true works of art. But the ugliest websites are often the most performant and have higher conversion. So what is the real purpose of a website? Here's what I learned from a recent project."
date: 2025-04-16
draft: false
---

## What Are We Doing Again?

A while ago, I wrote an article on [JavaScript as a progressive enhancement](/articles/js-as-a-progressive-enhancement/). In that post, I explained that the primary purpose of the web is to share documents. A webpage, at its core, is just that—a document. That’s also how browsers treat them.

Of course, a document can take many forms: informative, promotional, entertaining, interactive, or expressive. But the main goal—across all forms of media—is communication.

Webpages can evolve into full-blown applications, and that's a good thing. Take <a href="https://www.figma.com/" target="_blank">Figma</a>: it’s a browser-based design app that runs cross-platform, unlike desktop software like **Photoshop**, which isn't available for Linux. But there’s still a difference between what we _can_ do on the web and what a site’s _purpose_ should be.

## My Recent Art Project

Recently, I started a project inspired by Medieval Illuminated Manuscripts. I’ve always been drawn to typography and graphic design, and these manuscripts—arguably the highest form of “documents”—felt like a natural inspiration.

My goal was to bring those principles to the web, particularly in service of the Orthodox Church. My priest was excited by the idea, which gave me confidence. After all, for most of history, art was religious. I wasn’t doing anything radical—I was simply trying to create meaningful work using modern tools.

I dove into research on medieval typefaces and styles like _Textura Insular Majuscule_ and _Carolingian Minuscule_. I curated historical color palettes, matching natural pigments to OKLCH color values. I experimented with blending, masking, and layered textures. Eventually, I compiled everything into what I called the _Orthodox Digital Arts Project_.

It reminded me that typography is the foundation of any document—especially on the web, which is a document-based medium. I broke my design hierarchy down like this:

**Typography → Color → Texture → Images → Motion**

## The Challenges

As much as I was enjoying the process—exploring religious art, studying type, and building something personal—I started running into challenges that now feel obvious in hindsight.

I was reminded that the web isn’t print. It’s dynamic, fluid, and ever-changing. Visitors bring different devices, screen sizes, preferences, and accessibility needs. They don’t read in fixed columns—they scan in an [F-pattern](https://www.nngroup.com/articles/text-scanning-patterns-eyetracking/), often moving quickly through content.

I realized I was trying to make a website behave like a manuscript. I was bending the medium to fit my vision, rather than letting the strengths of the web guide the experience. In a way, I was reinventing the wheel—the very thing I’ve often criticized others for doing.

## A Reality Check

Then my priest reviewed the site.

> "Oh, this is beautiful... but it’s too wordy. I’m not sure what I’m supposed to do on this page."

That hit home. His feedback was simple: it needed to be clearer. Simpler. More like a marketing site. Even though I _knew_ this instinctively, I had been avoiding it in favor of artistic experimentation.

## Painful (but Helpful) Reminder

I fell into "shiny new thing" syndrome. I forgot that a website is, more often than not, a utility. It’s not always a blank canvas for expression. People expect certain patterns. There’s solid data showing that visually experimental websites often perform worse. Websites made by services like **ClickFunnels** are ugly—but they convert.

Sure, there are exceptions. But generally, form should follow function. I’m creative, and I love visual experimentation—but the purpose of a tool should guide its design.

A mental shortcut I come back to is this: _What does a calculator do?_ You know the answer immediately. Now imagine someone reinvented the calculator UI—would you use it? Or would you stick with the trusty **Texas Instruments** model?

## There's Still Room for Creativity

The web has been around since 1991. We’ve learned a lot. Reuse established patterns. That’s why Bootstrap sites feel similar. It’s not a lack of creativity—it’s a focus on usability.

Start with the basics:

- What does your site do?
- What do similar sites look like?
- What patterns work?
- Can I use a good design system or template?

If you want to start from scratch, educate yourself on designing for users. <a href="https://www.refactoringui.com/" target="_blank">_Refactoring UI_</a> (by the Tailwind team) and <a href="https://every-layout.dev/layouts/" target="_blank">_Every Layout_</a> are both excellent resources.

Once the fundamentals are in place, **then** you can layer in creativity—carefully. Color, images, and texture are tools, not crutches. Remember, it’s all about communication.

---

I’ve moved on from that initial art-heavy design, but I took the best ideas from it. I created a modern template for Orthodox churches that borrows from Medieval styles while honoring today's web standards.

If you'd like to see what I built during my Medieval manuscript exploration, you can check it out [here](/orthodox-digital-arts/).
