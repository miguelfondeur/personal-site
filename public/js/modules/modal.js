// Close modal helper function
function closeModal(id) {
    if (window.location.hash === id) {
        history.replaceState(null, null, location.href.replace(id, ""));
    }
}

// Initialize modal functionality
export function initModals() {
    // Open modal logic
    document.addEventListener("click", (event) => {
        const workItemButton = event.target.closest(".work-item-button");
        if (workItemButton) {
            const modalId = workItemButton.getAttribute('popovertarget');
            if (modalId) {
                const modal = document.getElementById(modalId);
                if (modal && typeof modal.showPopover === 'function') {
                    modal.showPopover();
                    window.location.hash = modalId;
                }
            }
        }

        // Close modal logic
        const closeButton = event.target.closest(".close-dialog-button");
        if (closeButton) {
            const modalId = closeButton.getAttribute('popovertarget');
            if (modalId) {
                closeModal(`#${modalId}`);
            }
        }
    });

    // Handle initial hash on page load
    if (window.location.hash) {
        const modal = document.querySelector(window.location.hash);
        if (modal && typeof modal.showPopover === 'function') {
            modal.showPopover();
        }
    }

    // Close modal on Esc key
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && window.location.hash) {
            closeModal(window.location.hash);
        }
    });
} 