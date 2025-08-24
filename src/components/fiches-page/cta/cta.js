import "./cta.css";

export function initCta() {
  const ctaHTML = `
    <section class="cta" aria-labelledby="cta-title" aria-describedby="cta-subtitle">
      <div class="cta__container content-width">
        <h2 id="cta-title" class="cta__title">
          Vous êtes prêts à commander&nbsp;?
        </h2>
        <p id="cta-subtitle" class="cta__subtitle">
          Profitez dès maintenant de nos fiches pédagogiques de qualité
        </p>
        <a
          class="button button--primary cta__button"
          href="https://wa.me/212658227705?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20vos%20fiches%20p%C3%A9dagogiques%20et%20je%20souhaite%20commander."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Commander sur WhatsApp"
        >
          Commandez sur WhatsApp
        </a>
      </div>
    </section>
  `;

  const main = document.querySelector("#main-content");
  main.insertAdjacentHTML("beforeend", ctaHTML);
}
