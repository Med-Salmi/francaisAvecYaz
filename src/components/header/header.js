export default function createHeader() {
  return `
    <header class="header">
      <div class="header__container">
        
        <!-- Logo -->
        <a href="/" class="header__logo">
          <img 
            src="/src/assets/logo.png" 
            alt="Nom du site" 
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
          hidden
        >
          <i class="fa-solid fa-xmark"></i>
        </button>

      </div>
    </header>
  `;
}
