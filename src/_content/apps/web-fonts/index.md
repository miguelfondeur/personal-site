---
title: Home
appName: Web Fonts
summary: A playground for exploring and testing web fonts, with tools for previewing, comparing, and learning about web typography.
layout: web-fonts-layout.html
thumb: /img/apps/app-web-fonts.webp
sidebarContent: |
  <form>
      <fieldset>
          <h3>Preview</h3>
          <div class="field-group">
              <input
                  type="text" 
                  id="sample-text" 
                  placeholder="Type something"
                  autocomplete="off" 
                  autocorrect="off" 
                  autocapitalize="off" 
                  spellcheck="false" 
              >
          </div>
      </fieldset>
      <fieldset>
          <h3>Styles</h3>
          <div class="field-group">
              <label class="style-select">
                  <input type="checkbox" name="serif" id="serif-select">
                  <div class="icon">✓</div>
                  Serif
              </label>
              <label class="style-select">
                  <input type="checkbox" name="sans-serif" id="sans-serif-select">
                  <div class="icon">✓</div>
                  Sans Serif
              </label>
              <label class="style-select">
                  <input type="checkbox" name="monospace" id="monospace-select">
                  <div class="icon">✓</div>
                  Monospace
              </label>
              <label class="style-select">
                  <input type="checkbox" name="cursive" id="cursive-select">
                  <div class="icon">✓</div>
                  Cursive
              </label>
              <label class="style-select">
                  <input type="checkbox" name="fantasy" id="fantasy-select">
                  <div class="icon">✓</div>
                  Fantasy
              </label>
              <label class="style-select">
                  <input type="checkbox" name="symbol" id="symbol-select">
                  <div class="icon">✓</div>
                  Symbol
              </label>
          </div>
      </fieldset>
  </form>
---

<header id="page-header">
    <section class="header-top">
        <h1 id="logo">
            <span class="long">
                <span class="accent">Web</span> Fonts
            </span>
            <span class="short"><span class="accent">W</span>F</span> 
        </h1>
        <input 
            id="search" 
            type="search" 
            autocomplete="off" 
            autocorrect="off" 
            autocapitalize="off" 
            spellcheck="false" 
            placeholder="Search fonts"
        >
    </section>
    <section id="cta-wrapper">
        <button id="filters-button" data-open="false"> 
            Filters
        </button>
    </section>
</header>
<!-- Cards -->
<section id="card-wrapper" data-layout="grid"></section>
<!-- Card Details -->
<dialog id="details" popover>
    <header>
        <button tabindex="0" class="close-dialog-button" popovertarget="details" popovertargetaction="hide">Back</button>
        <h1 id="active-font-title"></h1>
        <details>
            <summary>Use Font</summary>
            <div class="content">
                <p><strong>CSS Declaration</strong></p>
                <div id="css-declaration"></div>
                <p><strong>Using Styles</strong></p>
                <pre><code>
font-weight: bold; 
font-weight: 600;
font-style: italic;
font-variant: small-caps;
color: #C0FFEE;
                </code></pre>
                <p><strong>Considerations</strong></p>
                <p>Use fallbacks. Not all browsers and operating systems support all fonts. If you're using a font with multiple font-weights, consider a fallback that also includes a similar quantity.</p>
                <div id="css-fallbacks"></div>
                <p>Consider adding your font as a CSS custom property. This is especially useful when using more than one font.</p>
                <pre><code>
:root {
--font-heading: Tahoma;
--font-body: sans-serif;
}
                </code></pre>
                <p>Consider Optimizing Legibility</p>
                <pre><code>
-moz-osx-font-smoothing: grayscale;
-webkit-font-smoothing: antialiased;
text-rendering: optimizeLegibility;
font-variant-ligatures: common-ligatures;
font-size-adjust: 0.5;
                </code></pre>
            </div>
        </details>
    </header>
    <!-- Specimen? -->
    <section id="specimen-section">
        <h2 class="display-text">Whereas disregard and contempt for human rights have resulted.</h2>
    </section>
    <!-- Styles -->
    <section id="styles-section">
        <h2>Styles</h2>
        <div id="style-preview"></div>
    </section>
    <!-- Characters -->
    <section id="character-section">
        <h2>Characters</h2>
        <!-- Numbers -->
        <div class="character-wrapper">
            <!-- Uppercase -->
            <details class="character-dropdown" open>
                <summary>Uppercase</summary>
                <div class="dropdown-body">
                    <div class="character-grid">
                        <span>A</span>
                        <span>B</span>
                        <span>C</span>
                        <span>D</span>
                        <span>E</span>
                        <span>F</span>
                        <span>G</span>
                        <span>H</span>
                        <span>I</span>
                        <span>J</span>
                        <span>K</span>
                        <span>L</span>
                        <span>M</span>
                        <span>N</span>
                        <span>O</span>
                        <span>P</span>
                        <span>Q</span>
                        <span>R</span>
                        <span>S</span>
                        <span>T</span>
                        <span>U</span>
                        <span>V</span>
                        <span>W</span>
                        <span>X</span>
                        <span>Y</span>
                        <span>Z</span>
                    </div>
                </div>
            </details>
            <!-- Lowercase -->
            <details class="character-dropdown">
                <summary>Lowercase</summary>
                <div class="dropdown-body">
                    <div class="character-grid">
                        <span>a</span>
                        <span>b</span>
                        <span>c</span>
                        <span>d</span>
                        <span>e</span>
                        <span>f</span>
                        <span>g</span>
                        <span>h</span>
                        <span>i</span>
                        <span>j</span>
                        <span>k</span>
                        <span>l</span>
                        <span>m</span>
                        <span>n</span>
                        <span>o</span>
                        <span>p</span>
                        <span>q</span>
                        <span>r</span>
                        <span>s</span>
                        <span>t</span>
                        <span>u</span>
                        <span>v</span>
                        <span>w</span>
                        <span>x</span>
                        <span>y</span>
                        <span>z</span>
                    </div>
                </div>
            </details>
            <!-- Numbers -->
            <details class="character-dropdown">
                <summary>Numbers</summary>
                <div class="dropdown-body">
                    <div class="character-grid">
                        <span>0</span>
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                        <span>6</span>
                        <span>7</span>
                        <span>8</span>
                        <span>9</span>
                        <span>½</span>
                        <span>¼</span>
                        <span>⅛</span>
                        <span>¾</span>
                        <span>⅜</span>
                        <span>⅝</span>
                        <span>⅞</span>
                    </div>
                </div>
            </details>
            <!-- Symbols and Punctuation -->
            <details class="character-dropdown">
                <summary>Symbols and Punctuation</summary>
                <div class="dropdown-body">
                    <div class="character-grid">
                        <span>⁄</span>
                        <span>,</span>
                        <span>;</span>
                        <span>:</span>
                        <span>!</span>
                        <span>‼</span>
                        <span>?</span>
                        <span>¿</span>
                        <span>“</span>
                        <span>”</span>
                        <span>@</span>
                        <span>*</span>
                        <span>/</span>
                        <span>\</span>
                        <span>|</span>
                        <span>(</span>
                        <span>)</span>
                        <span>&</span>
                        <span>#</span>
                        <span>%</span>
                        <span>©</span>
                        <span>®</span>
                        <span>~</span>
                        <span>$</span>
                        <span>¢</span>
                    </div>
                </div>
            </details>
        </div>
    </section>
    <!-- Playground -->
    <section id="playground-section">
        <h2>Type Tester</h2>
        <div class="text-playground">
            <div class="playground-header">
                <p>Playground</p>
            </div>
            <div class="text-body" contenteditable="true" spellcheck="false">
                <h1>Whereas recognition of the inherent dignity</h1>
                <h2>Section Title Three</h2>
                <p>
                    <strong>Whereas</strong> all individuals are entitled to <em>universal</em> and 
                    <u>equal access</u> to digital resources, and whereas digital literacy is a 
                    fundamental right, it is essential to establish principles of <mark>accessibility</mark>, 
                    <s>discrimination</s>-free practices, and ethical data governance.  
                </p>
                <h3>Section Title Three</h3>
                <p>
                    The protection of personal data <sub>(Article 12)</sub> and the safeguarding 
                    of online freedoms <sup>(Amendment II)</sup> are paramount. 
                    No entity shall <del>infringe</del> upon these rights without due process.
                </p>
                <p>
                    <ins>Therefore</ins>, let it be resolved that all digital entities shall uphold 
                    the principles of security, transparency, and <b>fairness</b>. The right to 
                    online privacy shall not be abridged, and all individuals shall retain ownership 
                    of their digital presence. 
                </p>                        
            </div>
        </div>
    </section>
</dialog>
