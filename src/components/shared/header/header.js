import "../../shared/header/header.css";

export function initHeader() {
  //Create header html
  const headerHTML = `
    <header class="header">
      <div class="header__container">
        
        <!-- Logo -->
        <a href="/" class="header__logo">
          <img 
            src="/logo.png" 
            alt="Francais avec yaz" 
            class="header__logo-image"
          />
        </a>

        <!-- Navigation -->
        <nav class="header__nav" aria-label="Navigation principale">
          <ul class="header__nav-list">
            <li class="header__nav-item">
              <a href="/" class="header__nav-link">Accueil</a>
            </li>
            <li class="header__nav-item">
              <a href="/fiches.html" class="header__nav-link">Fiches pédagogiques</a>
            </li>
            <li class="header__nav-item">
              <a 
                href="https://wa.me/212658227705" 
                class="header__cta button" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <!-- Menu toggle buttons -->
        <button 
          class="header__menu-toggle header__menu-toggle--open" 
          aria-label="Ouvrir le menu"
          type="button"
        >
          <i class="fa-solid fa-bars"></i>
        </button>

        <button 
          class="header__menu-toggle header__menu-toggle--close" 
          aria-label="Fermer le menu"
          type="button"
        >
          <i class="fa-solid fa-xmark"></i>
        </button>

      </div>
    </header>
  `;

  document.body.insertAdjacentHTML("afterbegin", headerHTML);

  // Mobile menu logic
  const navMenu = document.querySelector(".header__nav");
  const hamburger = document.querySelector(".header__menu-toggle--open");
  const closeIcon = document.querySelector(".header__menu-toggle--close");

  hamburger.addEventListener("click", () => {
    navMenu.classList.add("is-visible");
    hamburger.style.display = "none";
    closeIcon.style.display = "inline-block";
  });

  closeIcon.addEventListener("click", () => {
    navMenu.classList.remove("is-visible");
    hamburger.style.display = "inline-block";
    closeIcon.style.display = "none";
  });

  // Reset menu on resize
  let resizeTimeout;

  function handleResize() {
    clearTimeout(resizeTimeout);

    // Disable transitions during resizing
    navMenu.style.transition = "none";

    if (window.innerWidth >= 768) {
      // Desktop: reset state
      navMenu.classList.remove("is-visible");
      hamburger.style.display = "none";
      closeIcon.style.display = "none";
    } else {
      // Mobile: ensure menu closed by default
      if (!navMenu.classList.contains("is-visible")) {
        hamburger.style.display = "inline-block";
        closeIcon.style.display = "none";
      }
    }

    // Re-enable transitions after resize ends
    resizeTimeout = setTimeout(() => {
      navMenu.style.transition = "";
    }, 150); // Wait 150ms after resizing stops
  }

  window.addEventListener("resize", handleResize);

  // Close menu when a link inside it is clicked
  const navLinks = navMenu.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-visible");
      hamburger.style.display = "inline-block";
      closeIcon.style.display = "none";
    });
  });

  // Close menu if user clicks outside
  document.addEventListener("click", (event) => {
    const isClickInsideNav = navMenu.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);

    if (
      navMenu.classList.contains("is-visible") &&
      !isClickInsideNav &&
      !isClickOnHamburger
    ) {
      navMenu.classList.remove("is-visible");
      hamburger.style.display = "inline-block";
      closeIcon.style.display = "none";
    }
  });

  // Instantly snap menu closed if tab becomes visible again (avoids slow close animation)
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      if (!navMenu.classList.contains("is-visible")) {
        navMenu.style.transition = "none";
        navMenu.style.transform = ""; // reset transform state if you use it for menu
        void navMenu.offsetHeight; // force reflow
        setTimeout(() => {
          navMenu.style.transition = "";
        }, 50);
      }
    }
  });
}
