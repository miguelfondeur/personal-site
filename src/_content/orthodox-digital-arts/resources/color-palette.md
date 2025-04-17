---
title: "Color Palette"
layout: oda-resource.html
thumb: "/img/apps/oda-palette-thumb.webp"
summary: "A collection of pigments used from antiquity to the late medieval period."
tags: ["oda-resource"]
menu:
  - text: "Pigments"
    href: "#colors"
    children:
      - text: "White Pigments"
        href: "#white-pigments"
      - text: "Color Pigments"
        href: "#color-pigments"
      - text: "Black Pigments"
        href: "#black-pigments"
  - text: "Color Usage"
    href: "#color-usage"
  - text: "Pigments By Time Period"
    href: "#pigments-by-time-period"
  - text: "Pigments By Works"
    href: "#pigments-by-works"
#   - text: "Color Meaning In Icons"
#     href: "#color-meaning"
permalink: "/orthodox-digital-arts/{{ page.fileSlug }}/"
---

<section class="content-section md-strip">
    <header id="colors">
        <h2>Pigments</h2>
        <p>
            Below is a collection of pigments used from antiquity through the late medieval period. 
            Select a white pigment, a black pigment, and a color pigment to view more information 
            and usage details <a href="#color-usage">below</a>.
        </p>
    </header>
    <div class="sub-section">
        <!-- White Pigments-->
        <h3 id="white-pigments">White Pigments</h3>
        {% include "oda-resources/pigments/whites.html" %}
    </div>
    <div class="sub-section">
        <!-- Color Pigments-->
        <h3 id="color-pigments">Color Pigments</h3>
        <p>
            For each color, we've included a set of possible values due to natural pigments varying in color
        </p>
        <div class="color-grid">
            {% include "oda-resources/pigments/colors.html" %}
        </div>
    </div>
    <div class="sub-section">
        <!-- Black Pigments-->
        <h3 id="black-pigments">Black Pigments</h3>
        {% include "oda-resources/pigments/blacks.html" %}
    </div>
</section>

<section class="content-section"md-strip>
    <header id="color-usage">
        <h2>Color Usage</h2>
        <p>
        Below is a monochrome palette featuring your selected pigments, along with a sample of each color at reduced opacity.
        </p>
    </header>
    <div class="active-wrapper" id="active-white">
        <h3>Active White</h3>
        <div class="active-swatch" style="background-color: var(--active-white)"></div>
        <h4>Gypsum</h4>
        <p>A mineral of hydrated calcium sulfate, used as a white pigment in manuscripts from ancient Egypt to the Middle Ages.</p>
        <small><strong>Period:</strong> <span class="period-text">Ancient Egypt – Middle Ages</span></small>
    </div>
    <div class="active-wrapper" id="active-color">
        <h3>Active Color</h3>
        <div class="active-swatch" style="background-color: var(--active-color)"></div>
        <h4>Lapis Lazuli</h4>
        <p>A semi-precious stone ground into a rich blue pigment. Used in manuscripts from the 10th century onward.</p>
        <small><strong>Period:</strong> <span class="period-text">10th century – onward</span></small>
    </div>
    <div class="active-wrapper" id="active-black">
        <h3>Active Black</h3>
        <div class="active-swatch" style="background-color: var(--active-black)"></div>
        <h4>Sepia</h4>
        <p>Squid ink used as a dark brown pigment. Common in manuscripts from the 12th century onward.</p>
        <small><strong>Period:</strong> <span class="period-text">12th century – onward</span></small>
    </div>
    <!-- Monochrome Palette -->
    <div class="sub-section">
        <h3>Monochrome Palette</h3>
        <!-- Palette -->
        <div class="usage-palette">
            <div class="swatch" style="background-color: color-mix(in oklch, var(--active-white), var(--active-color) 10%)"></div>
            <div class="swatch" style="background-color: color-mix(in oklch, var(--active-white), var(--active-color) 20%)"></div>
            <div class="swatch" style="background-color: color-mix(in oklch, var(--active-white), var(--active-color) 40%)"></div>
            <div class="swatch" style="background-color: color-mix(in oklch, var(--active-white), var(--active-color) 60%)"></div>
            <div class="swatch" style="background-color: color-mix(in oklch, var(--active-white), var(--active-color) 80%)"></div>
            <div class="swatch" style="background-color: var(--active-color);"></div>
            <div class="swatch" style="background-color: color-mix(in oklch, var(--active-black), var(--active-color) 80%)"></div>
            <div class="swatch" style="background-color: color-mix(in oklch, var(--active-black), var(--active-color) 60%)"></div>
            <div class="swatch" style="background-color: color-mix(in oklch, var(--active-black), var(--active-color) 40%)"></div>
            <div class="swatch" style="background-color: color-mix(in oklch, var(--active-black), var(--active-color) 20%)"></div>
        </div>
        <!-- Gradient -->
        <div class="usage-gradient" style="background-image: linear-gradient(to right, color-mix(in oklch, var(--active-white), var(--active-color) 10%), var(--active-color), color-mix(in oklch, var(--active-black) 80%, var(--active-color)));"></div>
    </div>
    <!-- Opacity Palette -->
    <div class="sub-section">
        <h3>Opacity Palette</h3>
        <!-- Palette -->
        <div class="usage-palette">
            <div class="swatch" style="background-color: color-mix(in oklch, transparent, var(--active-color) 10%)"></div>
            <div class="swatch" style="background-color: color-mix(in oklch, transparent, var(--active-color) 20%)"></div>
            <div class="swatch" style="background-color: color-mix(in oklch, transparent, var(--active-color) 30%)"></div>
            <div class="swatch" style="background-color: color-mix(in oklch, transparent, var(--active-color) 40%)"></div>
            <div class="swatch" style="background-color: color-mix(in oklch, transparent, var(--active-color) 50%)"></div>
            <div class="swatch" style="background-color: color-mix(in oklch, transparent, var(--active-color) 60%)"></div>
            <div class="swatch" style="background-color: color-mix(in oklch, transparent, var(--active-color) 70%)"></div>
            <div class="swatch" style="background-color: color-mix(in oklch, transparent, var(--active-color) 80%)"></div>
            <div class="swatch" style="background-color: color-mix(in oklch, transparent, var(--active-color) 90%)"></div>
            <div class="swatch" style="background-color: color-mix(in oklch, transparent, var(--active-color) 100%)"></div>
        </div>
        <!-- Gradient -->
        <div class="usage-gradient" style="background-image: linear-gradient(to right, color-mix(in oklch, transparent, var(--active-color) 10%), var(--active-color));"></div>
    </div>
</section>

<section class="content-section"md-strip>
    <header id="pigments-by-time-period">
        <h2>Pigments by Time Period</h2>
        <p>
        A breakdown of pigments available across the medieval era, highlighting when certain colors were introduced over time.
        </p>
    </header>
    {% include "oda-resources/pigments/periods.html" %}
</section>

<section class="content-section"md-strip>
    <header id="pigments-by-works">
        <h2>Pigments by Works</h2>
        <p>
        Pigments used in notable religious manuscripts and artworks throughout the medieval period. 
        We've excluded gold leaf, as it lacks a specific color definition.
        </p>
    </header>
    {% include "oda-resources/pigments/works.html" %}
</section>

<!-- <section class="content-section"md-strip>
    <header id="color-meaning">
        <h2>Color Meaning in Icons</h2>
        <p>
        Each color in iconography carries symbolic meaning. Explore the theological and cultural associations of common liturgical hues.
        </p>
    </header>
</section> -->
