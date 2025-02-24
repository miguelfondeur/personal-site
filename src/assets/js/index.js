"use strict";

console.log('%cWelcome to MiguelFondeur.com', 'color: #b6a572; font-size: 18px; font-family: serif;');

//Dark/Light Mode
(function(){
    //Variables
    const storedTheme = localStorage.getItem("theme");
    const themeToggleButton = document.getElementById("theme-toggle");
    const body = document.body;
    
    //Setting Default
    
    //Stored Theme
    if (storedTheme) {
        body.setAttribute("data-theme", storedTheme);
    } else {
        //User Agent Theme
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            body.setAttribute("data-theme", "dark");
        } else {
            body.setAttribute("data-theme", "light");
        }
    }
    
    //Update Theme On Click
    themeToggleButton.addEventListener("click", () => {
      const currentTheme = body.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
    
      body.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    });    
})();

//Work Item Dialog Persistence
(function(){
    //Variables
    const workItemButtons = document.querySelectorAll(".work-item-button");
    const workModals = document.querySelectorAll(".work-modal");
    const closeButtons = document.querySelectorAll(".close-dialog-button")

    //Handle Button Click
    workItemButtons.forEach( button => {
        button.addEventListener( 'click', ()=> {
            window.location.hash = button.getAttribute('popovertarget');
        });
    });

    //Open WorkModals based on Hash
    workModals.forEach( modal => {
        const modalId = `#${modal.getAttribute('id')}`;
        if(window.location.hash === modalId ) {
            modal.showPopover();
        }

        //Handle Esc Key
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                closeModal(modalId);
            }
        });
    })

    closeButtons.forEach( button => {
        const modalId = `#${button.getAttribute('popovertarget')}`;
        button.addEventListener('click', ()=> {
            closeModal(modalId);
        })
    })

    //close modal logic
    function closeModal(id) {
        if(window.location.hash === id ) {
            const newUrl = location.href.replace(id, "");
            history.replaceState(null, null, newUrl);
        }
    }
})();

