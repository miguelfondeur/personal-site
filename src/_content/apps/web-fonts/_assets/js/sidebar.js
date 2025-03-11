'use strict';

const body = document.body;
const filtersButton = document.getElementById('filters-button');

export const initSidebar = () => {
    if (!filtersButton) return; // Exit if button doesn’t exist

    document.addEventListener('click', e => {
        if (e.target.closest("#filters-button")) {
            const isOpen = body.getAttribute('data-sidebar-open') === "true";
            console.log("Before toggle:", isOpen); // Debugging

            body.setAttribute('data-sidebar-open', !isOpen);
            
            console.log("After toggle:", body.getAttribute('data-sidebar-open')); // Debugging
        }
    });

    window.addEventListener('resize', () => {
        if (body.getAttribute('data-sidebar-open') === "true") {
            body.setAttribute('data-sidebar-open', "false");
            console.log("Sidebar opened due to resize");
        }
    });
};

// Initialize sidebar functionality
initSidebar();
