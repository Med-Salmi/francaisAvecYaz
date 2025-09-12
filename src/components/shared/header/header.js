import "./header.css";

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
                href="https://wa.me/212687229846?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20vos%20fiches%20p%C3%A9dagogiques%20et%20je%20souhaite%20obtenir%20plus%20d%E2%80%99informations."
                class="header__cta button" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Contactez-nous via WhatsApp"
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

// Header Menu Functionality

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
    void navMenu.offsetHeight; // Force reflow
    setTimeout(() => (navMenu.style.transition = ""), 10);
  }
}

function handleResize() {
  clearTimeout(resizeTimeout);

  navMenu.style.transition = "none";

  if (window.innerWidth >= 768) {
    // Desktop: force menu closed and hide hamburger
    navMenu.classList.remove("is-visible");
    hamburger.style.display = "none";
    closeIcon.style.display = "none";
  } else {
    // Mobile: show hamburger if menu is closed
    if (!navMenu.classList.contains("is-visible")) {
      hamburger.style.display = "inline-block";
      closeIcon.style.display = "none";
    }
  }

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

// Instantly snap menu closed when tab becomes visible to avoid slow closing animation
function handleVisibilityChange() {
  if (document.visibilityState === "visible") {
    // Menu fix
    if (!navMenu.classList.contains("is-visible")) {
      navMenu.style.transition = "none";
      navMenu.style.transform = "";
      void navMenu.offsetHeight;
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
