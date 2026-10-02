"use strict";

import { initThemeToggle } from './modules/theme.js';
import { initModals } from './modules/modal.js';
import { initArticleSearch } from './modules/article-search.js';

console.log('%cWelcome to MiguelFondeur.com', 'color: #b6a572; font-size: 18px; font-family: serif;');

// Initialize theme toggle
initThemeToggle();

// Initialize modals
// initModals();

// Initialize article search (no-ops on pages without the articles list)
initArticleSearch();