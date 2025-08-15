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
}

// Header manu functionality

// headerMenu.js

let navMenu, hamburger, closeIcon, navLinks;
let resizeTimeout;

// --- Helper Functions ---

function openMobileMenu() {
  if (window.innerWidth >= 768) return; // Only mobile

  navMenu.classList.add("is-visible");
  hamburger.style.display = "none";
  closeIcon.style.display = "inline-block";
}

function closeMobileMenu(immediate = false) {
  if (window.innerWidth >= 768) return; // Only mobile

  if (immediate) navMenu.style.transition = "none";

  navMenu.classList.remove("is-visible");
  hamburger.style.display = "inline-block";
  closeIcon.style.display = "none";

  if (immediate) {
    // Force reflow and restore transition
    void navMenu.offsetHeight;
    setTimeout(() => (navMenu.style.transition = ""), 10);
  }
}

function handleResize() {
  clearTimeout(resizeTimeout);

  navMenu.style.transition = "none";

  if (window.innerWidth >= 768) {
    // Desktop view: force menu closed
    navMenu.classList.remove("is-visible");
    hamburger.style.display = "none";
    closeIcon.style.display = "none";
  } else {
    // Mobile view: show hamburger if menu is closed
    if (!navMenu.classList.contains("is-visible")) {
      hamburger.style.display = "inline-block";
      closeIcon.style.display = "none";
    }
  }

  // Re-enable transitions after resizing ends
  resizeTimeout = setTimeout(() => {
    navMenu.style.transition = "";
  }, 150);
}

function handleLinkClick() {
  if (window.innerWidth < 768) closeMobileMenu();
}

function handleOutsideClick(event) {
  if (
    window.innerWidth < 768 &&
    navMenu.classList.contains("is-visible") &&
    !navMenu.contains(event.target) &&
    !hamburger.contains(event.target) &&
    !closeIcon.contains(event.target)
  ) {
    closeMobileMenu();
  }
}

function handleVisibilityChange() {
  if (document.visibilityState === "visible") {
    if (!navMenu.classList.contains("is-visible")) {
      navMenu.style.transition = "none";
      navMenu.style.transform = "";
      void navMenu.offsetHeight; // Force reflow
      setTimeout(() => (navMenu.style.transition = ""), 50);
    }
  }
}

// --- Initialization Function ---

export function initHeaderMenu() {
  navMenu = document.querySelector(".header__nav");
  hamburger = document.querySelector(".header__menu-toggle--open");
  closeIcon = document.querySelector(".header__menu-toggle--close");

  if (!navMenu || !hamburger || !closeIcon) return;

  navLinks = navMenu.querySelectorAll("a");

  // Event bindings
  hamburger.addEventListener("click", openMobileMenu);
  closeIcon.addEventListener("click", () => closeMobileMenu());
  navLinks.forEach((link) => link.addEventListener("click", handleLinkClick));
  document.addEventListener("click", handleOutsideClick);
  window.addEventListener("resize", handleResize);
  document.addEventListener("visibilitychange", handleVisibilityChange);

  // Initial state
  handleResize();
}
