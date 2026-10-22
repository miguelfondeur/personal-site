// Keep the portfolio modals in step with the URL hash, so a reload or a
// shared link opens the same project. The dialogs open and close through
// command/commandfor in the markup; this file only mirrors that in the URL.
const MODAL_SELECTOR = "dialog.work-modal";

// replaceState rather than setting location.hash: it doesn't add a history
// entry per project viewed, and it doesn't make the page jump.
function setHash(id) {
    const url = new URL(window.location.href);
    url.hash = id ? `#${id}` : "";
    history.replaceState(null, "", url);
}

function getModalFromHash() {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return null;

    const modal = document.getElementById(id);
    return modal?.matches(MODAL_SELECTOR) ? modal : null;
}

function syncModalWithHash() {
    const target = getModalFromHash();

    document.querySelectorAll(`${MODAL_SELECTOR}[open]`).forEach((modal) => {
        if (modal !== target) modal.close();
    });

    if (target && !target.open) target.showModal();
}

export function initModals() {
    const modals = document.querySelectorAll(MODAL_SELECTOR);
    if (!modals.length) return;

    modals.forEach((modal) => {
        // Fired on the dialog by its invoker button, native or polyfilled.
        modal.addEventListener("command", (event) => {
            if (event.command === "show-modal") setHash(modal.id);
        });

        // Fires however the dialog closes: the close button, Escape, or close().
        modal.addEventListener("close", () => {
            // A closed modal shouldn't keep playing, like the Sweetwater demo.
            modal.querySelectorAll("video").forEach((video) => video.pause());

            if (window.location.hash === `#${modal.id}`) setHash("");
        });
    });

    // A link to another project's hash, or a hash typed into the address bar.
    window.addEventListener("hashchange", syncModalWithHash);

    // Open the project named in the URL on page load.
    syncModalWithHash();
}
