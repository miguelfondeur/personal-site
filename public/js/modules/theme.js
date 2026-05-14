// Theme toggle functionality
export function initThemeToggle() {
    // Toggle theme using event delegation
    document.addEventListener("click", (event) => {
        const themeToggleButton = event.target.closest("#theme-toggle");
        if (!themeToggleButton) return;

        const newTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
        document.documentElement.dataset.theme = newTheme;
        localStorage.setItem("theme", newTheme);
    });
} 