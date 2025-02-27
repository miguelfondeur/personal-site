//Dark/Light Mode
(function(){
    //Variables
    const storedTheme = localStorage.getItem("theme");
    const themeToggleButton = document.getElementById("theme-toggle");
    const body = document.body;
    
    //Setting Default
    
    //Stored Theme
    if (storedTheme) {
        body.dataset.theme = storedTheme;
    } else {
        //User Agent Theme
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            body.dataset.theme = "dark";
        } else {
            body.dataset.theme = "light";
        }
    }
    
    //Update Theme On Click
    themeToggleButton.addEventListener("click", () => {
      const currentTheme = body.dataset.theme;
      const newTheme = currentTheme === "dark" ? "light" : "dark";

      body.dataset.theme = newTheme;
      localStorage.setItem("theme", newTheme);
    });    
})();