document.addEventListener("DOMContentLoaded", () => {

    const header = document.getElementById("main_header");
    const menuToggle = document.getElementById("menu_toggle");
    const navMenu = document.getElementById("nav_menu");

    /* ===== Scroll Header ===== */
    if (header) {
        window.addEventListener("scroll", function() {
            const header = document.getElementById("main_header");

            if (this.window.scrollY > 120) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });
    }

    /* ===== Mobile Menu Toggle ===== */
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            header.classList.toggle("menu-open");
            navMenu.classList.toggle("open");
            menuToggle.classList.toggle("open");
        });

        // Close menu when clicking a link
        navMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                header.classList.remove("menu-open");
                navMenu.classList.remove("open");
                menuToggle.classList.remove("open");
            });
        });
    }

});