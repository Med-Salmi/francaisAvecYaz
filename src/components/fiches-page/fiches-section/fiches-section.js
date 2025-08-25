import "./fiches-section.css";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

// Fiches section
export function initFichesSection() {
  const fichesSectionHTML = `
   <section class="fiches-section" aria-labelledby="fiches-section__headline">
      <div class="fiches-section__container">
        <div class="fiches-section__header">
          <div class="content-width">
            <h2 id="fiches-section__title" class="fiches-section__title">
              Fiches pédagogiques
            </h2>
            <p class="fiches-section__subtitle">
              Ressources premium pour enseignants
            </p>
            <p class="fiches-section__description">
              Pensées pour répondre aux besoins réels des enseignants, nos fiches
              pédagogiques vous permettent de préparer vos cours plus sereinement, tout
              en garantissant qualité et efficacité. Voici pourquoi elles font la
              différence :
            </p>
            <ul class="fiches-section__benefits">
              <li class="fiches-section__benefit">Un gain de temps précieux : prêtes à l'emploi.</li>
              <li class="fiches-section__benefit">Entièrement conformes au programme officiel.</li>
              <li class="fiches-section__benefit">Téléchargeables en PDF, simples à utiliser.</li>
              <li class="fiches-section__benefit">Présentation claire, professionnelle et engageante.</li>
            </ul>
          </div>
        </div>

        <div class="fiches-section__cards">
          <div class="content-width">
            ${generateFicheCard(
              "Pack Tronc Commun",
              "tronc-commun-carousel",
              "/tronc-commun-carousel/fiche-preview",
              3,
              69,
              "Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20vos%20fiches%20p%C3%A9dagogiques%20du%20tronc%20commun.",
              [
                "Séquences complètes prêtes à l'usage.",
                "Exercices différenciés avec corrigés inclus.",
                "Fiches de compréhension et de production.",
              ]
            )}
            ${generateFicheCard(
              "Pack 1ère Année Bac",
              "1ere-bac-carousel",
              "/1ere-bac-carousel/fiche-preview",
              3,
              89,
              "Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20vos%20fiches%20p%C3%A9dagogiques%20de%201%C3%A8re%20ann%C3%A9e%20Bac.",
              [
                "Grilles d’évaluation adaptables.",
                "Activités orales et écrites variées.",
                "Fiches prêtes à l’emploi.",
              ]
            )}
            ${generateFicheCard(
              "Pack tout-en-un",
              "tout-en-un-carousel",
              "/tout-en-un-carousel/fiche-preview",
              3,
              129,
              "Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20votre%20pack%20complet%20de%20fiches%20p%C3%A9dagogiques.",
              [
                "Deux thématiques réunies.",
                "Plus de 60 fiches pédagogiques.",
                "Approche complète",
              ]
            )}
          </div>
        </div>
      </div>
    </section>
  `;

  const main = document.querySelector("#main-content");
  main.insertAdjacentHTML("beforeend", fichesSectionHTML);

  // Initialize all carousels
  initCarousels();

  // Initialize PhotoSwipe for each carousel
  initPhotoSwipeLightbox();
}

// Helper to generate a fiche card HTML
function generateFicheCard(
  title,
  id,
  imgPrefix,
  imgCount,
  price,
  waMessage,
  features
) {
  const imgsHTML = Array.from(
    { length: imgCount },
    (_, i) => `
    <a href="${imgPrefix}${
      i + 1
    }.png" class="fiche-card__carousel-image-link" data-pswp-width="800" data-pswp-height="1067" target="_blank" rel="noopener noreferrer">
      <img src="${imgPrefix}${i + 1}.png" alt="Aperçu ${
      i + 1
    }" class="fiche-card__carousel-image"/>
    </a>
  `
  ).join("");

  const featuresHTML = features
    .map(
      (f) => `
    <li class="fiche-card__feature">
      <i class="fa-solid fa-check fiche-card__icon" aria-hidden="true"></i>
      ${f}
    </li>
  `
    )
    .join("");

  return `
    <article class="fiche-card">
      <div class="fiche-card__carousel">
        <div class="fiche-card__track" data-carousel-id="${id}">
          ${imgsHTML}
        </div>
        <button class="fiche-card__control fiche-card__control--prev" aria-label="Image précédente">‹</button>
        <button class="fiche-card__control fiche-card__control--next" aria-label="Image suivante">›</button>
        <div class="fiche-card__dots" role="tablist" aria-label="Choisir l’image"></div>
      </div>
      <div class="fiche-card__content">
        <h3 class="fiche-card__title">${title}</h3>
        <ul class="fiche-card__features">${featuresHTML}</ul>
        <p class="fiche-card__price">Prix : ${price}DH</p>
        <a href="https://wa.me/212658227705?text=${waMessage}" class="fiche-card__button button button--primary" target="_blank" rel="noopener noreferrer" aria-label="Commander ${title} sur WhatsApp">
          Commandez sur WhatsApp
        </a>
      </div>
    </article>
  `;
}

// Initialise the custom carousel logic
function initCarousels() {
  const carousels = document.querySelectorAll(".fiche-card__carousel");
  carousels.forEach(setupCarousel);

  function setupCarousel(root) {
    const track = root.querySelector(".fiche-card__track");
    const slides = Array.from(
      root.querySelectorAll(".fiche-card__carousel-image")
    );
    const btnPrev = root.querySelector(".fiche-card__control--prev");
    const btnNext = root.querySelector(".fiche-card__control--next");
    const dotsWrap = root.querySelector(".fiche-card__dots");

    let index = 0;
    let startX = 0;
    let deltaX = 0;
    let isDragging = false;
    let activePointerId = null;

    track.style.touchAction = "pan-y";

    track.classList.add("is-initialized");

    // Build dots
    const dots = slides.map((_, i) => {
      const dot = document.createElement("button");
      dot.className = "fiche-card__dot";
      dot.type = "button";
      dot.setAttribute("role", "tab");
      dot.setAttribute("aria-label", `Aller à l’image ${i + 1}`);
      dot.addEventListener("click", () => goTo(i));
      dotsWrap.appendChild(dot);
      return dot;
    });

    // Accessibility
    function setAria() {
      slides.forEach((img, i) => {
        const isActive = i === index;
        img.setAttribute("aria-hidden", String(!isActive));
        img.tabIndex = isActive ? 0 : -1;
      });
      dots.forEach((dot, i) => {
        dot.setAttribute("aria-selected", String(i === index));
      });
      btnPrev.disabled = index === 0;
      btnNext.disabled = index === slides.length - 1;
    }

    function render() {
      track.style.transform = `translateX(-${index * 100}%)`;
      setAria();
    }

    function goTo(newIndex) {
      index = Math.max(0, Math.min(slides.length - 1, newIndex));
      render();
    }

    function next() {
      goTo(index + 1);
    }
    function prev() {
      goTo(index - 1);
    }

    // Controls
    btnNext.addEventListener("click", next);
    btnPrev.addEventListener("click", prev);

    // Keyboard navigation
    root.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    });

    // Pointer handlers for swipe
    function onPointerDown(e) {
      if (e.button && e.button !== 0) return;
      isDragging = true;
      startX = e.clientX;
      deltaX = 0;
      activePointerId = e.pointerId;

      try {
        track.setPointerCapture(activePointerId);
      } catch {
        activePointerId = null;
      }
    }

    function onPointerMove(e) {
      if (!isDragging) return;
      if (activePointerId != null && e.pointerId !== activePointerId) return;
      deltaX = e.clientX - startX;
    }

    function handlePointerUpOrCancel(e, wasCancelled = false) {
      if (activePointerId != null && e && e.pointerId !== activePointerId)
        return;

      if (activePointerId != null) {
        try {
          track.releasePointerCapture(activePointerId);
        } catch {}
        activePointerId = null;
      }

      const isClick = Math.abs(deltaX) < 10;

      // Don't slide the carousel if a link (image) was clicked
      if (isClick && e.target.closest("a.fiche-card__carousel-image-link")) {
        return;
      }

      // Handle swipe (ignore click logic)
      if (!wasCancelled) {
        if (deltaX < -30) next();
        else if (deltaX > 30) prev();
      }

      isDragging = false;
      deltaX = 0;
      render();
    }

    // Pointer listeners
    track.addEventListener("pointerdown", onPointerDown, { passive: true });
    track.addEventListener("pointermove", onPointerMove, { passive: true });
    track.addEventListener("pointerup", (e) =>
      handlePointerUpOrCancel(e, false)
    );
    track.addEventListener("pointercancel", (e) =>
      handlePointerUpOrCancel(e, true)
    );
    track.addEventListener("lostpointercapture", (e) =>
      handlePointerUpOrCancel(e, true)
    );

    render();
  }
}

// Initialize PhotoSwipeLightbox
function initPhotoSwipeLightbox() {
  // Select all carousel tracks to initialize PhotoSwipe for each one
  const carouselTracks = document.querySelectorAll(".fiche-card__track");

  carouselTracks.forEach((track, index) => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: track, // The container for this specific set of images
      children: "a.fiche-card__carousel-image-link", // The selector for individual images
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();
  });
}
