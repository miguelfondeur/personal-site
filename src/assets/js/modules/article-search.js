// Search and category filtering for the articles page.
//
// This is a progressive enhancement. The page ships every article in the HTML
// with the controls hidden, so without JavaScript you still get the full list.
// Everything below only ever adds behavior on top of a page that already works.

// Long enough that a view transition runs once you pause typing, rather than
// firing on every keystroke and interrupting itself.
const TYPING_DELAY = 180;

export function initArticleSearch() {
    const search = document.querySelector("[data-article-search]");
    const list = document.querySelector("[data-article-list]");
    if (!search || !list) return;

    const input = search.querySelector("[data-search-input]");
    const status = search.querySelector("[data-search-status]");
    const chips = Array.from(search.querySelectorAll("[data-filter]"));
    const cards = Array.from(list.querySelectorAll("[data-search-text]"));
    const emptyState = list.querySelector("[data-empty-state]");
    if (!input || cards.length === 0) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Each card gets its own transition name so the browser animates them
    // independently, instead of cross-fading the whole list as one block.
    cards.forEach((card, index) => {
        card.style.viewTransitionName = `article-card-${index}`;
    });

    let term = "";
    let category = "all";
    let typingTimer;

    function matches(card) {
        const inCategory = category === "all" || card.dataset.category === category;
        const inSearch = term === "" || card.dataset.searchText.includes(term);
        return inCategory && inSearch;
    }

    function render() {
        let visible = 0;

        for (const card of cards) {
            const show = matches(card);
            card.hidden = !show;
            if (show) visible += 1;
        }

        if (emptyState) emptyState.hidden = visible > 0;

        // Only announce once the visitor is actually filtering, otherwise a
        // screen reader reads a count nobody asked for on page load.
        status.textContent = term === "" && category === "all"
            ? ""
            : `Showing ${visible} of ${cards.length} articles`;
    }

    function update() {
        // View transitions are the nicety here, not the feature. Without
        // support, or when less motion is requested, the filter applies instantly.
        if (!document.startViewTransition || reduceMotion.matches) {
            render();
            return;
        }

        document.startViewTransition(() => render());
    }

    input.addEventListener("input", () => {
        term = input.value.trim().toLowerCase();
        clearTimeout(typingTimer);
        typingTimer = setTimeout(update, TYPING_DELAY);
    });

    input.addEventListener("keydown", (event) => {
        if (event.key !== "Escape" || input.value === "") return;
        input.value = "";
        term = "";
        clearTimeout(typingTimer);
        update();
    });

    search.addEventListener("click", (event) => {
        const chip = event.target.closest("[data-filter]");
        if (!chip) return;

        category = chip.dataset.filter;
        for (const button of chips) {
            button.setAttribute("aria-pressed", String(button === chip));
        }

        clearTimeout(typingTimer);
        update();
    });

    search.hidden = false;
}
