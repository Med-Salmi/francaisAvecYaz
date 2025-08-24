import "./fiches-section.css";

// Function to create and manage the image overlay
function createImageOverlay(imgSrc, imgAlt) {
  const overlay = document.createElement("div");
  overlay.className = "image-preview-overlay";
  Object.assign(overlay.style, {
    position: "fixed",
    inset: "0",
    background: "rgba(0,0,0,0.85)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2147483647,
    cursor: "zoom-out",
  });

  const previewImg = document.createElement("img");
  previewImg.src = imgSrc;
  previewImg.alt = imgAlt || "";
  Object.assign(previewImg.style, {
    maxWidth: "92%",
    maxHeight: "92%",
    borderRadius: "12px",
    boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
    display: "block",
  });

  const closeBtn = document.createElement("button");
  closeBtn.setAttribute("aria-label", "Fermer l'aperçu");
  closeBtn.innerHTML = "&times;";
  Object.assign(closeBtn.style, {
    position: "absolute",
    top: "16px",
    right: "16px",
    fontSize: "2rem",
    color: "#fff",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    lineHeight: "1",
    padding: "0",
  });

  overlay.appendChild(previewImg);
  overlay.appendChild(closeBtn);

  function removeOverlay() {
    if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
    document.removeEventListener("keydown", onKeyDown);
  }

  function onKeyDown(e) {
    if (e.key === "Escape") removeOverlay();
  }

  // Close events
  closeBtn.addEventListener("click", removeOverlay);
  overlay.addEventListener("click", (ev) => {
    if (ev.target === overlay) removeOverlay();
  });

  document.addEventListener("keydown", onKeyDown);

  return { overlay, removeOverlay };
}

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
            <li class="fiches-section__benefit">
              Un gain de temps précieux : prêtes à l'emploi.
            </li>
            <li class="fiches-section__benefit">
              Entièrement conformes au programme officiel.
            </li>
            <li class="fiches-section__benefit">
              Téléchargeables en PDF, simples à utiliser.
            </li>
            <li class="fiches-section__benefit">
              Présentation claire, professionnelle et engageante.
            </li>
          </ul>
        </div>
        </div>

    <div class="fiches-section__cards">
      <div class="content-width">
      <article class="fiche-card">
      <div class="fiche-card__carousel" aria-label="Aperçu du pack 1ère Année Bac">
        <div class="fiche-card__track">
          <img src="/tronc-commun-carousel/fiche-preview1.png"
              alt="Aperçu 1"
              class="fiche-card__carousel-image" />
          <img src="/tronc-commun-carousel/fiche-preview2.png"
              alt="Aperçu 2"
              class="fiche-card__carousel-image" />
          <img src="/tronc-commun-carousel/fiche-preview3.png"
              alt="Aperçu 3"
              class="fiche-card__carousel-image" />
        </div>

        <button class="fiche-card__control fiche-card__control--prev" aria-label="Image précédente">‹</button>
        <button class="fiche-card__control fiche-card__control--next" aria-label="Image suivante">›</button>

        <div class="fiche-card__dots" role="tablist" aria-label="Choisir l’image"></div>
      </div>

      <div class = "fiche-card__content">
        <h3 class="fiche-card__title">Pack Tronc Commun</h3>

      <ul class="fiche-card__features">
          <li class="fiche-card__feature">
            <i
              class="fa-solid fa-check fiche-card__icon"
              aria-hidden="true"
            ></i>
            Séquences complètes prêtes à l'usage.
          </li>
          <li class="fiche-card__feature">
            <i
              class="fa-solid fa-check fiche-card__icon"
              aria-hidden="true"
            ></i>
            Exercices différenciés avec corrigés inclus.
          </li>
          <li class="fiche-card__feature">
            <i
              class="fa-solid fa-check fiche-card__icon"
              aria-hidden="true"
            ></i>
            Fiches de compréhension et de production.
          </li>
        </ul>

        <p class="fiche-card__price">Prix : 69DH</p>

        <a
          <a href="https://wa.me/212658227705?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20vos%20fiches%20p%C3%A9dagogiques%20du%20tronc%20commun."
          class="fiche-card__button button button--primary"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Commander Pack Tronc Commun sur WhatsApp"
        >
          Commandez sur WhatsApp
        </a>
      </div>
    </article>


      <article class="fiche-card">
        <div
          class="fiche-card__carousel"
          aria-label="Aperçu du pack Tronc Commun"
        >
          <div class="fiche-card__track">
            <img
              src="/1ere-bac-carousel/fiche-preview1.png"
              alt="Aperçu 1"
              class="fiche-card__carousel-image"
            />
            <img
              src="/1ere-bac-carousel/fiche-preview2.png"
              alt="Aperçu 2"
              class="fiche-card__carousel-image"
            />
            <img
              src="/1ere-bac-carousel/fiche-preview3.png"
              alt="Aperçu 3"
              class="fiche-card__carousel-image"
            />
          </div>

          <button class="fiche-card__control fiche-card__control--prev" aria-label="Image précédente">‹</button>
          <button class="fiche-card__control fiche-card__control--next" aria-label="Image suivante">›</button>
          <div class="fiche-card__dots" role="tablist" aria-label="Choisir l’image"></div>
        </div>

        <div class = "fiche-card__content">
        <h3 class="fiche-card__title">Pack 1ère Année Bac</h3>

      <ul class="fiche-card__features">
          <li class="fiche-card__feature">
            <i
              class="fa-solid fa-check fiche-card__icon"
              aria-hidden="true"
            ></i>
            Grilles d’évaluation adaptables.
          </li>
          <li class="fiche-card__feature">
            <i
              class="fa-solid fa-check fiche-card__icon"
              aria-hidden="true"
            ></i>
            Activités orales et écrites variées.
          </li>
          <li class="fiche-card__feature">
            <i
              class="fa-solid fa-check fiche-card__icon"
              aria-hidden="true"
            ></i>
            Fiches prêtes à l’emploi.
          </li>
        </ul>

        <p class="fiche-card__price">Prix : 89DH</p>

        <a
          <a href="https://wa.me/212658227705?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20vos%20fiches%20p%C3%A9dagogiques%20de%201%C3%A8re%20ann%C3%A9e%20Bac."
          class="fiche-card__button button button--primary"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Commander Pack Tronc Commun sur WhatsApp"
        >
          Commandez sur WhatsApp
        </a>
      </div>
      </article>

      <article class="fiche-card">
        <div
          class="fiche-card__carousel"
          aria-label="Aperçu du pack Tout en Un"
        >
          <div class="fiche-card__track">
            <img
              src="/tout-en-un-carousel/fiche-preview1.png"
              alt="Aperçu 1"
              class="fiche-card__carousel-image"
            />
            <img
              src="/tout-en-un-carousel/fiche-preview2.png"
              alt="Aperçu 2"
              class="fiche-card__carousel-image"
            />
            <img
              src="/tout-en-un-carousel/fiche-preview3.png"
              alt="Aperçu 3"
              class="fiche-card__carousel-image"
            />
          </div>

          <button class="fiche-card__control fiche-card__control--prev" aria-label="Image précédente">‹</button>
          <button class="fiche-card__control fiche-card__control--next" aria-label="Image suivante">›</button>
          <div class="fiche-card__dots" role="tablist" aria-label="Choisir l’image"></div>
        </div>

        <div class = "fiche-card__content">
        <h3 class="fiche-card__title">Pack tout-en-un</h3>

      <ul class="fiche-card__features">
          <li class="fiche-card__feature">
            <i
              class="fa-solid fa-check fiche-card__icon"
              aria-hidden="true"
            ></i>
            Deux thématiques réunies.
          </li>
          <li class="fiche-card__feature">
            <i
              class="fa-solid fa-check fiche-card__icon"
              aria-hidden="true"
            ></i>
            Plus de 60 fiches pédagogiques.
          </li>
          <li class="fiche-card__feature">
            <i
              class="fa-solid fa-check fiche-card__icon"
              aria-hidden="true"
            ></i>
            Approche complète
          </li>
        </ul>

        <p class="fiche-card__price">Prix : 129DH</p>

        <a
        <a href="https://wa.me/212658227705?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20votre%20pack%20complet%20de%20fiches%20p%C3%A9dagogiques."
          class="fiche-card__button button button--primary"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Commander Pack Tronc Commun sur WhatsApp"
        >
          Commandez sur WhatsApp
        </a>
      </div>
      </article>
    </div>
      </div>
  </div>
</section>
  `;

  const main = document.querySelector("#main-content");
  main.insertAdjacentHTML("beforeend", fichesSectionHTML);

  // Initialize carousels after HTML is added
  initCarousels();
}

// Preview images carousel functionality
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
    let isDragging = false;
    let startX = 0;
    let deltaX = 0;

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

    // Swipe handling
    track.addEventListener("pointerdown", (e) => {
      isDragging = true;
      startX = e.clientX;
      deltaX = 0;
      track.setPointerCapture(e.pointerId);
    });

    track.addEventListener("pointermove", (e) => {
      if (!isDragging) return;
      deltaX = e.clientX - startX;
    });

    track.addEventListener("pointerup", (e) => {
      if (!isDragging) return;
      isDragging = false;
      track.releasePointerCapture(e.pointerId);

      // Only handle swipe movement
      if (deltaX < -30) next();
      else if (deltaX > 30) prev();

      render();
    });

    // Image click handler (always works)
    track.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("fiche-card__carousel-image") &&
        !e.target.closest("button, a")
      ) {
        const { overlay } = createImageOverlay(e.target.src, e.target.alt);
        document.body.appendChild(overlay);
      }
    });

    root.tabIndex = 0;
    render();
  }
}
