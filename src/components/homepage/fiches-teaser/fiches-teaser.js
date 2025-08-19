import "./fiches-teaser.css";

export function initFichesTeaser() {
  const fichesTeaserHTML = `
    <section class="fiches-teaser" aria-labelledby="fiches-teaser__headline">
  <div class="fiches-teaser__container  content-width">
    <!-- Headline -->
    <h2 id="fiches-teaser__headline" class="fiches-teaser__headline">
      Fiches pédagogiques premium
    </h2>
    <!-- Subheadline -->
    <p class="fiches-teaser__subheadline">
      Trouvez le pack qui vous convient <br />
      parmi nos offres
    </p>

    <!-- Cards wrapper -->
    <div class="fiches-teaser__cards">
      <!-- Card 1 -->
      <article class="fiche-card">
        <img
          src="/public/fiche-teaser-preview.png"
          alt="Pack Tronc Commun - fiches pédagogiques prêtes à l'emploi"
          class="fiche-card__image"
        />

        <div class="fiche-card__content">
          <h3 class="fiche-card__title">Pack Tronc Commun</h3>
          <p class="fiche-card__description">
            Fiches prêtes à l'emploi pour enseigner efficacement les notions
            clés du programme Tronc Commun.
          </p>
          <a
            href="../../../../fiches.html"
            class="fiche-card__button button"
            aria-label="Aller aux fiches pédagogiques - Pack Tronc Commun"
          >
            Aller à fiches pédagogiques
          </a>
        </div>
      </article>

      <!-- Card 2 -->
      <article class="fiche-card">
        <img
          src="/public/fiche-teaser-preview.png"
          alt="Pack 1ère année Bac - fiches pédagogiques prêtes à l'emploi"
          class="fiche-card__image"
        />
        <div class="fiche-card__content">
          <h3 class="fiche-card__title">Pack Tronc Commun</h3>
          <p class="fiche-card__description">
            Fiches prêtes à l'emploi pour enseigner efficacement les notions
            clés du programme Tronc Commun.
          </p>
          <a
            href="../../../../fiches.html"
            class="fiche-card__button button"
            aria-label="Aller aux fiches pédagogiques - Pack Tronc Commun"
          >
            Aller à fiches pédagogiques
          </a>
        </div>
      </article>

      <!-- Card 3 -->
      <article class="fiche-card">
        <img
          src="/public/fiche-teaser-preview.png"
          alt="Pack Tout en Un - fiches pédagogiques prêtes à l'emploi"
          class="fiche-card__image"
        />
        <div class="fiche-card__content">
          <h3 class="fiche-card__title">Pack Tronc Commun</h3>
          <p class="fiche-card__description">
            Fiches prêtes à l'emploi pour enseigner efficacement les notions
            clés du programme Tronc Commun.
          </p>
          <a
            href="../../../../fiches.html"
            class="fiche-card__button button"
            aria-label="Aller aux fiches pédagogiques - Pack Tronc Commun"
          >
            Aller à fiches pédagogiques
          </a>
        </div>
      </article>
    </div>
  </div>
</section>

  `;

  const main = document.querySelector("#main-content");
  main.insertAdjacentHTML("beforeend", fichesTeaserHTML);
}
