document.addEventListener("DOMContentLoaded", () => {

    const header = document.getElementById("main_header");
    const menuToggle = document.getElementById("menu_toggle");
    const navMenu = document.getElementById("nav_menu");


    /* ========= Dropdown ========= */ 
    document.querySelectorAll("nav li.has-dropdown").forEach(item => {
        let closeTimeout;

        const openMenu = () => {
            clearTimeout(closeTimeout);
            item.classList.add("open");
        };

        const closeMenu = () => {
            closeTimeout = setTimeout(() => {
                item.classList.remove("open");
            }, 150);
        };

        item.addEventListener("mouseenter", openMenu);
        item.addEventListener("mouseleave", closeMenu);

        const link = item.querySelector("a");
        if (link) {
            link.addEventListener("click", (e) => {
                if (window.innerWidth <= 992){
                    e.preventDefault();
                    item.classList.toggle("open");
                }
            });
        }
    });


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