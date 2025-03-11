'use strict';

// Imports
import { fonts } from './font-data.js';
import { initSidebar } from './sidebar.js';

// Elements
const cardWrapper = document.getElementById('card-wrapper');
const previewInput = document.getElementById('sample-text');
const searchInput = document.getElementById('search'); // Font search input
const styleSelects = document.querySelectorAll('.style-select input[type="checkbox"]');
const activeFontTitle = document.getElementById('active-font-title');
const stylePreview = document.getElementById('style-preview');

// Function to render fonts based on selected filters and search input
const renderFonts = () => {
    const selectedTypes = [...styleSelects]
        .filter(cb => cb.checked)
        .map(cb => cb.name); // Get checked font styles
    
    const searchQuery = searchInput.value.trim().toLowerCase(); // Get search input

    // Clear existing font cards
    cardWrapper.innerHTML = '';

    // Filter fonts based on styles and search query
    const filteredFonts = fonts.filter(font => {
        const matchesType = selectedTypes.length ? selectedTypes.includes(font.type) : true;
        const matchesSearch = font.name.toLowerCase().includes(searchQuery); // Checks if query exists anywhere in the name
        return matchesType && matchesSearch;
    });

    // Render filtered fonts
    filteredFonts.forEach(font => {
        const iconSize = '18px';
        const osIcons = {
            windows: `<svg xmlns="http://www.w3.org/2000/svg" height="${iconSize}" width="${iconSize}" viewBox="0 0 448 512" fill="currentColor"><title>Windows</title><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg>`,
            macos: `<svg xmlns="http://www.w3.org/2000/svg" height="${iconSize}" width="${iconSize}" fill="currentColor" viewBox="0 0 384 512"><title>Mac OS</title><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>`,
            linux: `<svg xmlns="http://www.w3.org/2000/svg" height="${iconSize}" width="${iconSize}" fill="currentColor" viewBox="0 0 576 512"><title>Linux</title><path d="M469.2 75A75.6 75.6 0 1 0 317.9 75a75.6 75.6 0 1 0 151.2 0zM154.2 240.7A75.6 75.6 0 1 0 3 240.7a75.6 75.6 0 1 0 151.2 0zM57 346C75.6 392.9 108 433 150 461.1s91.5 42.6 142 41.7c-14.7-18.6-22.9-41.5-23.2-65.2c-6.8-.9-13.3-2.1-19.5-3.4c-26.8-5.7-51.9-17.3-73.6-34s-39.3-38.1-51.7-62.5c-20.9 9.9-44.5 12.8-67.1 8.2zm395.1 89.8a75.6 75.6 0 1 0 -151.2 0 75.6 75.6 0 1 0 151.2 0zM444 351.6c18.5 14.8 31.6 35.2 37.2 58.2c33.3-41.3 52.6-92.2 54.8-145.2s-12.5-105.4-42.2-149.4c-8.6 21.5-24 39.6-43.8 51.6c15.4 28.6 22.9 60.8 21.9 93.2s-10.7 64-28 91.6zM101.1 135.4c12.4 2.7 24.3 7.5 35.1 14.3c16.6-24.2 38.9-44.1 64.8-58S255.8 70.4 285.2 70c.2-5.9 .9-11.9 2-17.7c3.6-16.7 11.1-32.3 21.8-45.5c-47.7-3.8-95.4 6-137.6 28.5S94.3 91.7 70.8 133.4c2.7-.2 5.3-.3 8-.3c7.5 0 15 .8 22.4 2.3z"/></svg>`,
            ios: `<svg xmlns="http://www.w3.org/2000/svg" height="${iconSize}" width="${iconSize}" fill="currentColor" viewBox="0 0 448 512"><title>iOS</title><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM127 384.5c-5.5 9.6-17.8 12.8-27.3 7.3-9.6-5.5-12.8-17.8-7.3-27.3l14.3-24.7c16.1-4.9 29.3-1.1 39.6 11.4L127 384.5zm138.9-53.9H84c-11 0-20-9-20-20s9-20 20-20h51l65.4-113.2-20.5-35.4c-5.5-9.6-2.2-21.8 7.3-27.3 9.6-5.5 21.8-2.2 27.3 7.3l8.9 15.4 8.9-15.4c5.5-9.6 17.8-12.8 27.3-7.3 9.6 5.5 12.8 17.8 7.3 27.3l-85.8 148.6h62.1c20.2 0 31.5 23.7 22.7 40zm98.1 0h-29l19.6 33.9c5.5 9.6 2.2 21.8-7.3 27.3-9.6 5.5-21.8 2.2-27.3-7.3-32.9-56.9-57.5-99.7-74-128.1-16.7-29-4.8-58 7.1-67.8 13.1 22.7 32.7 56.7 58.9 102h52c11 0 20 9 20 20 0 11.1-9 20-20 20z"/></svg>`,
            android: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height="${iconSize}" width="${iconSize}" fill="currentColor"><title>Android</title><path d="M420.6 301.9a24 24 0 1 1 24-24 24 24 0 0 1 -24 24m-265.1 0a24 24 0 1 1 24-24 24 24 0 0 1 -24 24m273.7-144.5 47.9-83a10 10 0 1 0 -17.3-10h0l-48.5 84.1a301.3 301.3 0 0 0 -246.6 0L116.2 64.5a10 10 0 1 0 -17.3 10h0l47.9 83C64.5 202.2 8.2 285.6 0 384H576c-8.2-98.5-64.5-181.8-146.9-226.6"/></svg>`
        };

        // Generate only the icons that exist in supportedOS
        const iconsHTML = font.supportedOS
            .filter(os => osIcons[os]) // Ensure only valid OS keys are used
            .map(os => osIcons[os])
            .join('');

        const html = `
            <button 
                class="card" 
                data-name="${font.name}" 
                data-declaration="${font.declaration}" 
                data-type="${font.type}"
                data-weights="${font.weights}"
                data-supported="${font.supportedOS.join(', ')}"
                popovertarget="details" 
            >
                <div class="card-top">
                    <h3>${font.name}</h3>
                    <p>${font.weights.length} Styles</p>
                </div>
                <p class="text-example" style="font-family: ${font.declaration};">
                    The quick brown fox jumps over a lazy dog
                </p>
                <div class="supported-by">
                    ${iconsHTML}
                </div>
            </button>`;

        cardWrapper.insertAdjacentHTML('beforeEnd', html);
    });
};


// Initial render
renderFonts();

// Click event for font selection (separate from sidebar logic)
document.addEventListener('click', e => {
    const card = e.target.closest('.card'); // Find the closest card element

    if (card) {
        // Close the sidebar if open
        const body = document.body;
        if (body.getAttribute('data-sidebar-open') === "true") {
            body.setAttribute('data-sidebar-open', "false");
        }

        // Open font details
        const weights = card.dataset.weights.split(',');
        openDetails(card.dataset.name, card.dataset.declaration, weights, card.dataset.type);
    }
});

// Open font details
const openDetails = (fontName, declaration, weights, type) => {
    stylePreview.innerHTML = ""; //Clear First!

    // Set Active Values
    activeFontTitle.innerText = fontName;
    document.documentElement.style.setProperty('--active-font', declaration);
    
    // Update CSS declarations
    document.getElementById('css-declaration').innerHTML = `<pre><code>font-family: ${declaration};</code></pre>`;
    document.getElementById('css-fallbacks').innerHTML = `<pre><code>font-family: ${declaration}, ${type};</code></pre>`;

    weights.forEach(weight => {
        const styleCardHTML = `
            <div class="style-card">
                <div><strong><small>Regular ${weight}</small></strong></div>
                <p style="font-weight: ${weight}" class="text-example" contenteditable="true">
                    The quick brown fox jumps over a lazy dog
                </p>
            </div>
            <div class="style-card">
                <div><strong><small>Italic ${weight}</small></strong></div>
                <p style="font-weight: ${weight}" class="text-example" contenteditable="true">
                    <em>The quick brown fox jumps over a lazy dog</em>
                </p>
            </div>`;
        stylePreview.insertAdjacentHTML('beforeend', styleCardHTML);
    });
};

// Update preview text dynamically
previewInput.addEventListener('keyup', () => {
    document.querySelectorAll('.text-example').forEach(element => {
        element.textContent = previewInput.value || "The quick brown fox jumps over a lazy dog";
    });
});

// Handle checkbox changes for filtering
styleSelects.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const label = checkbox.closest('.style-select');
        label.setAttribute('data-selected', checkbox.checked);
        renderFonts(); // Re-render fonts on checkbox change
    });
});

// Handle search input (filters for any matching part of the name)
searchInput.addEventListener('keyup', () => {
    renderFonts(); // Re-render fonts on search input
});
