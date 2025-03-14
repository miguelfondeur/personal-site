'use strict';

const body = document.body;
const filtersButton = document.getElementById('filters-button');
const mobileSidebarTrigger = document.getElementById('mobile-sidebar-trigger');

export const initSidebar = () => {
    if (!filtersButton) return; // Exit if button doesn’t exist

    // Ensure sidebar is closed by default if screen width is less than 960px
    if (window.innerWidth < 960) {
        body.setAttribute('data-sidebar-open', "false");
    }

    document.addEventListener('click', e => {
        if (e.target.closest("#filters-button")) {
            const isOpen = body.getAttribute('data-sidebar-open') === "true";
            console.log("Before toggle:", isOpen);

            body.setAttribute('data-sidebar-open', !isOpen);
            
            console.log("After toggle:", body.getAttribute('data-sidebar-open'));
        }

        // Close sidebar if clicking #mobile-sidebar-trigger
        if (e.target.closest("#mobile-sidebar-trigger")) {
            body.setAttribute('data-sidebar-open', "false");
            console.log("Sidebar closed via mobile trigger");
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth < 960) {
            body.setAttribute('data-sidebar-open', "false");
            console.log("Sidebar closed due to resize below 960px");
        }
    });
};

// Initialize sidebar functionality
initSidebar();
