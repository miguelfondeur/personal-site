"use strict";

console.log('%cWelcome to MiguelFondeur.com', 'color: #b6a572; font-size: 18px; font-family: serif;');

// Dark/Light Mode with Event Delegation
(function() {
    const storedTheme = localStorage.getItem("theme");
    const body = document.body;

    // Apply stored or preferred theme
    body.dataset.theme = storedTheme || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light");

    // Toggle theme using event delegation
    document.addEventListener("click", (event) => {
        const themeToggleButton = event.target.closest("#theme-toggle");
        if (!themeToggleButton) return;

        const newTheme = body.dataset.theme === "dark" ? "light" : "dark";
        body.dataset.theme = newTheme;
        localStorage.setItem("theme", newTheme);
    });
})();

// Work Item Dialog Persistence with Event Delegation
(function() {
    document.addEventListener("click", (event) => {
        // Open modal logic
        const workItemButton = event.target.closest(".work-item-button");
        if (workItemButton) {
            const modalId = workItemButton.getAttribute('popovertarget');
            if (modalId) window.location.hash = modalId;
        }

        // Close modal logic
        const closeButton = event.target.closest(".close-dialog-button");
        if (closeButton) {
            const modalId = `#${closeButton.getAttribute('popovertarget')}`;
            closeModal(modalId);
        }
    });

    // Open Work Modals based on Hash
    document.querySelectorAll(".work-modal").forEach((modal) => {
        const modalId = `#${modal.getAttribute('id')}`;
        if (window.location.hash === modalId) {
            modal.showPopover();
        }
    });

    // Close modal on Esc key
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && window.location.hash) {
            closeModal(window.location.hash);
        }
    });

    // Close modal function
    function closeModal(id) {
        if (window.location.hash === id) {
            history.replaceState(null, null, location.href.replace(id, ""));
        }
    }
})();
