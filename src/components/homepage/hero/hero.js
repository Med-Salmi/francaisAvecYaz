import "./hero.css";

export function initHero() {
  const heroHTML = `
    <section class="hero" aria-labelledby="hero-title" aria-describedby="hero-subtitle">
      <div class="hero__container content-width">
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
            href="https://wa.me/212658227705?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20vos%20fiches%20p%C3%A9dagogiques%20et%20je%20souhaite%20obtenir%20plus%20d%E2%80%99informations."
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
  main.insertAdjacentHTML("beforeend", heroHTML);
}
