import "./faq.css";

export function initFAQ() {
  const faqHTML = `
    <section class="faq" aria-labelledby="faq-title">
  <div class="container content-width">
    <h2 id="faq-title">Questions fréquemment posées</h2>
    <div class="accordion">
      <div class="accordion-item">
        <button class="accordion-header">
          <span class="accordion-arrow">►</span>
          <span class="accordion-text">Quel est l’objectif de cette plateforme ?</span>
        </button>
        <div class="accordion-content">
          <p>
            Cette plateforme a pour but de mettre à disposition des enseignants de français des fiches pédagogiques adaptées aux niveaux Tronc Commun et Première Année. Elle a été conçue pour leur offrir un accès simple et structuré à des ressources de qualité.
          </p>
        </div>
      </div>

      <div class="accordion-item">
        <button class="accordion-header">
          <span class="accordion-arrow">►</span>
          <span class="accordion-text">Comment puis-je télécharger un cours ?</span>
        </button>
        <div class="accordion-content">
          <p>
            Pour télécharger un cours, il vous suffit de cliquer sur le bouton « Télécharger » présent en bas de chaque fiche ou ressource. Le document sera directement enregistré sur votre appareil.
          </p>
        </div>
      </div>

      <div class="accordion-item">
        <button class="accordion-header">
          <span class="accordion-arrow">►</span>
          <span class="accordion-text">Les documents sont-ils gratuits ?</span>
        </button>
        <div class="accordion-content">
          <p>
            La majorité des documents sont accessibles gratuitement. Toutefois, certaines ressources premium peuvent nécessiter un abonnement ou un paiement symbolique afin de soutenir la création de contenus pédagogiques.
          </p>
        </div>
      </div>

      <div class="accordion-item">
        <button class="accordion-header">
          <span class="accordion-arrow">►</span>
          <span class="accordion-text">Comment puis-je contacter l’administrateur ?</span>
        </button>
        <div class="accordion-content">
          <p>
            Vous pouvez contacter l’administrateur via la page « Contact » du site ou directement par e-mail à l’adresse indiquée dans le pied de page.
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
