import "./faq.css";

export function initFAQ() {
  const faqHTML = `
    <section class="faq" aria-labelledby="faq-title">
  <div class="container content-width">
    <h2 id="faq-title">Questions fréquemment posées</h2>
    <div class="accordion">
      
      <!-- Question 1 -->
      <div class="accordion-item">
        <button class="accordion-header">
          <span class="accordion-arrow">►</span>
          <span class="accordion-text">Pourquoi nos fiches ?</span>
        </button>
        <div class="accordion-content">
          <p>
            Nos fiches pédagogiques sont conçues pour vous offrir des outils fiables, pratiques et inspirants afin de transformer vos cours en véritables moments d’apprentissage efficaces.
          </p>
          <ul>
            <li>✅ <strong class="accordion-content__item">Qualité</strong> : un contenu clair, précis et conforme aux programmes.</li>
            <li>✅ <strong class="accordion-content__item">Efficience</strong> : gagnez du temps grâce à des supports prêts à l’emploi.</li>
            <li>✅ <strong class="accordion-content__item">Productivité</strong> : optimisez vos séances avec des activités variées et bien structurées.</li>
            <li>✅ <strong class="accordion-content__item">Créativité</strong> : des exercices originaux qui stimulent l’intérêt et la participation des élèves.</li>
            <li>✅ <strong class="accordion-content__item">Efficacité</strong> : des résultats visibles dans l’apprentissage et la compréhension.</li>
            <li>✅ <strong class="accordion-content__item">Flexibilité</strong> : des fiches adaptables selon vos besoins et vos classes.</li>
            <li>✅ <strong class="accordion-content__item">Modernité</strong> : des supports numériques faciles à utiliser, projeter ou imprimer.</li>
          </ul>
        </div>
      </div>

      <!-- Question 2 -->
      <div class="accordion-item">
        <button class="accordion-header">
          <span class="accordion-arrow">►</span>
          <span class="accordion-text">Qui sommes-nous ?</span>
        </button>
        <div class="accordion-content">
          <p>
            Je m’appelle Yassine ZAGHLAMANE, professeur de français langue étrangère au cycle secondaire qualifiant dans le secteur public.
          </p>
          <p>
            Titulaire d’un Master en Littérature et culture documentaliste informatisée, j’ai acquis une solide expertise dans l’enseignement, la conception pédagogique et l’utilisation des outils numériques pour faciliter l’apprentissage.
          </p>
          <p>
            Passionné par la langue française, la culture et la transmission du savoir, j’ai décidé de mettre mon expérience au service des enseignants et des apprenants à travers la création de fiches pédagogiques claires, pratiques et modernes.
          </p>
          <p>
            Mon objectif est simple : rendre l’enseignement du français plus efficace, motivant et accessible à tous.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

  `;

  const main = document.querySelector("#main-content");
  main.insertAdjacentHTML("beforeend", faqHTML);
}

// Drop and hide answers functionality

export function initFAQAccordion() {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    const arrow = header.querySelector(".accordion-arrow");
    const content = header.nextElementSibling;

    // Initially hide content
    content.style.display = "none";

    header.addEventListener("click", () => {
      const isOpen = content.style.display === "block";

      if (isOpen) {
        // Close
        content.style.display = "none";
        arrow.textContent = "►";
      } else {
        // Open
        content.style.display = "block";
        arrow.textContent = "▼";
      }
    });
  });
}

// Call the function after DOM is loaded
document.addEventListener("DOMContentLoaded", initFAQAccordion);
