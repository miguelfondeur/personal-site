---
title: "Texture Library"
layout: oda-resource.html
thumb: "/img/apps/oda-texture-thumb.webp"
summary: "Visual assets that evoke the tactile quality of materials used in ancient and medieval Christian art."
tags: ["oda-resource"]
menu:
  - text: "Intro"
    href: "#intro"
  - text: "Parchment & Vellum"
    href: "#parchment"
  - text: "Fabric Textures"
    href: "#fabric"
  - text: "Paint & Brush Strokes"
    href: "#paint"
  - text: "Other Surfaces"
    href: "#other"
permalink: "/orthodox-digital-arts/{{ page.fileSlug }}/"
---

<section class="content-section">
  <header id="intro">
    <h2>Intro</h2>
    <p>
      This texture library collects visual assets that evoke the tactile quality of materials used in ancient and medieval Christian art—from parchment and vellum to brushstrokes and handwoven fabrics. These textures were sourced from various libraries and have been curated for stylistic relevance rather than strict historical accuracy.
    </p>
  </header>
</section>

<section class="content-section">
    <header>
        <h2>Settings</h2>
    </header>
    <div class="sub-section">
        <h3>Select a Color:</h3>
        <div class="swatch-wrapper">
            <label class="swatch-button" data-category="color" title="oklch(0.99 0 0)">
                <input type="radio" name="color">
                <div class="swatch-color" style="background-color: oklch(0.99 0 0)"></div>
                <p class="font-xs">Lead White</p>
            </label>
            <label class="swatch-button" data-category="color" title="oklch(.93 .02 75.98)">
                <input type="radio" name="color">
                <div class="swatch-color" style="background-color: oklch(.93 .02 75.98)"></div>
                <p class="font-xs">Parchment</p>
            </label>
            <label class="swatch-button" data-category="color" title="oklch(0.39 0.12 257.36)">
                <input type="radio" name="color" checked>
                <div class="swatch-color" style="background-color: oklch(0.39 0.12 257.36)"></div>
                <p class="font-xs">Lapis Lazuli</p>
            </label>
            <label class="swatch-button" data-category="color" title="oklch(0.52 0.14 27.27)">
                <input type="radio" name="color">
                <div class="swatch-color" style="background-color: oklch(0.52 0.14 27.27)"></div>
                <p class="font-xs">Red Ochre</p>
            </label>
            <label class="swatch-button" data-category="color" title="oklch(0.48 0.07 152.63)">
                <input type="radio" name="color" >
                <div class="swatch-color" style="background-color: oklch(0.48 0.07 152.63)"></div>
                <p class="font-xs">Green Earth</p>
            </label>
            <label class="swatch-button" data-category="color" title="oklch(0.26 0.01 0)">
                <input type="radio" name="color" >
                <div class="swatch-color" style="background-color: oklch(0.26 0.01 0)"></div>
                <p class="font-xs">Iron Gall</p>
            </label>
        </div>
    </div>
    <!-- Parchment & Vellum -->
    <div class="container sub-section" data-width="micro">
        <h3>Select Blend Mode:</h3>
        <select id="active-blend-mode">
            <option value="normal" selected>normal</option>
            <option value="color">color</option>
            <option value="color-burn">color-burn</option>
            <option value="color-dodge">color-dodge</option>
            <option value="darkness">darkness</option>
            <option value="exclusion">exclusion</option>
            <option value="hard-light">hard-light</option>
            <option value="hue">hue</option>
            <option value="lighten">lighten</option>
            <option value="luminosity">luminosity</option>
            <option value="multiply">multiply</option>
            <option value="overlay">overlay</option>
            <option value="saturation">saturation</option>
            <option value="screen">screen</option>
            <option value="soft-light">soft-light</option>
        </select>
    </div>
</section>

<section class="content-section">
    <header id="parchment">
        <h2>Parchment & Vellum</h2>
        <p>
        Subtle textures inspired by natural materials like animal skin (vellum) and handmade parchment. Often used as the base surface for illuminated manuscripts.
        </p>
    </header>
    <!-- Add individual textures here -->
    <div class="swatch-wrapper texture-wrapper">
        <div class="swatch-button">                            
            <div class="swatch-color swatch-large texture-paper"></div>                            
            <p class="font-xs">Paper</p>                        
        </div>
        <div class="swatch-button ">                            
            <div class="swatch-color swatch-large texture-exclusive-paper"></div>                            
            <p class="font-xs">Exclusive Paper</p>                        
        </div>
        <div class="swatch-button ">                            
            <div class="swatch-color swatch-large texture-paper-fibers"></div>                            
            <p class="font-xs">Paper Fibers</p>                        
        </div>
        <div class="swatch-button ">                            
            <div class="swatch-color swatch-large texture-groove-paper"></div>                            
            <p class="font-xs">Groove Paper</p>                        
        </div>
        <div class="swatch-button ">                            
            <div class="swatch-color swatch-large texture-gray-paper"></div>                            
            <p class="font-xs">Gray Paper</p>                        
        </div>
        <div class="swatch-button ">                            
            <div class="swatch-color swatch-large texture-cream-paper"></div>                            
            <p class="font-xs">Cream Paper</p>                        
        </div>
    </div>
</section>

<section class="content-section">
    <header id="fabric">
        <h2>Fabric Textures</h2>
        <p>
        Textures mimicking linen, wool, and woven cloth used in religious garments, bindings, or backgrounds in iconographic art.
        </p>
    </header>
    <!-- Add more as needed -->
    <div class="swatch-wrapper texture-wrapper">
        <div class="swatch-button ">                            
            <div class="swatch-color swatch-large texture-binding"></div>                            
            <p class="font-xs">Binding</p>                        
        </div>
        <div class="swatch-button ">                            
            <div class="swatch-color swatch-large texture-fabric"></div>                            
            <p class="font-xs">Fabric</p>                        
        </div>
        <div class="swatch-button ">                            
            <div class="swatch-color swatch-large texture-fabric-dark"></div>                            
            <p class="font-xs">Fabric Dark</p>                        
        </div>
    </div>
</section>

<section class="content-section">
  <header id="paint">
    <h2>Paint & Brush Strokes</h2>
    <p>
      Surface effects that resemble hand-painted details, egg tempera layers, and brushwork often seen in iconography and manuscript illumination.
    </p>
  </header>
  <div class="swatch-wrapper texture-wrapper">
        <div class="swatch-button swatch-wide">                            
            <div class="swatch-color swatch-large texture-brush-1"></div>                            
            <p class="font-xs">Brush 1</p>                        
        </div>
        <div class="swatch-button swatch-wide">                            
            <div class="swatch-color swatch-large texture-brush-2"></div>                            
            <p class="font-xs">Brush 2</p>                        
        </div>
        <div class="swatch-button swatch-wide">                            
            <div class="swatch-color swatch-large texture-brush-3"></div>                            
            <p class="font-xs">Brush 3</p>                        
        </div>
        <div class="swatch-button swatch-wide">                            
            <div class="swatch-color swatch-large texture-brush-4"></div>                            
            <p class="font-xs">Brush 4</p>                        
        </div>
        <div class="swatch-button swatch-wide">                            
            <div class="swatch-color swatch-large texture-brush-5"></div>                            
            <p class="font-xs">Brush 5</p>                        
        </div>
        <div class="swatch-button swatch-wide">                            
            <div class="swatch-color swatch-large texture-brush-6"></div>                            
            <p class="font-xs">Brush 6</p>                        
        </div>
        <div class="swatch-button swatch-wide">                            
            <div class="swatch-color swatch-large texture-brush-7"></div>                            
            <p class="font-xs">Brush 7</p>                        
        </div>
        <div class="swatch-button swatch-wide">                            
            <div class="swatch-color swatch-large texture-brush-8"></div>                            
            <p class="font-xs">Brush 8</p>                        
        </div>
        <div class="swatch-button swatch-wide">                            
            <div class="swatch-color swatch-large texture-brush-white-1"></div>                            
            <p class="font-xs">Brush White 1</p>                        
        </div>
    </div>
</section>

<section class="content-section">
  <header id="other">
    <h2>Other Surfaces</h2>
    <p>
        Additional textures inspired by stone, wood, gilding, and mosaic backgrounds found in medieval architecture and devotional artwork.
    </p>
  </header>
    <div class="swatch-wrapper texture-wrapper">
        <div class="swatch-button ">                            
            <div class="swatch-color swatch-large texture-scribble"></div>                            
            <p class="font-xs">Scribble</p>                        
        </div>
        <div class="swatch-button ">                            
            <div class="swatch-color swatch-large texture-subtle-white"></div>                            
            <p class="font-xs">Subtle White</p>                        
        </div>
        <div class="swatch-button ">                            
            <div class="swatch-color swatch-large texture-fresh-snow"></div>                            
            <p class="font-xs">Fresh Snow</p>                        
        </div>
    </div>
</section>
