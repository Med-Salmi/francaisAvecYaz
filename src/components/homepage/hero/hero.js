import "./hero.css";

export function initHero() {
  const heroHTML = `
    <section class="hero" aria-labelledby="hero-title" aria-describedby="hero-subtitle">
      <div class="hero__container">
        <h1 class="hero__title" id="hero-title">
          Des fiches prêtes à l'emploi pour vos cours de français
        </h1>
        <p class="hero__subtitle" id="hero-subtitle">
          Pensées pour les enseignants, prêtes à être utilisées en classe
        </p>
        <div class="hero__actions">
          <a 
            href="/fiches.html" 
            class="button button--primary hero__button" 
            aria-label="Explorer nos fiches pédagogiques"
          >
            Explorez nos fiches
          </a>
          <a 
            href="https://wa.me/212658227705" 
            class="button button--secondary hero__button" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Contactez-nous via WhatsApp"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  `;

  const main = document.querySelector("#main-content");
  main.insertAdjacentHTML("afterbegin", heroHTML);
}
