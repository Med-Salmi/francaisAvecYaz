import "./feedback.css";

export function initFeedback() {
  const feedbackHTML = `
   <section class="feedback" aria-labelledby="feedback-title" aria-describedby="feedback-desc">
  <div class="feedback__container content-width">
    <h2 class="feedback__title" id="feedback-title">
      Remarques et propositions
    </h2>
    <p class="feedback__text" id="feedback-desc">
      Parce que votre avis compte, nous mettons à votre disposition un espace où vous pouvez partager librement vos remarques, vos suggestions et vos idées.
      Chaque retour est une opportunité pour améliorer nos fiches pédagogiques et développer de nouvelles ressources adaptées à vos besoins.
    </p>
    <p class="feedback__text">
      ✅ Vous êtes ainsi acteur du projet : vos propositions nous aident à créer des supports toujours plus pratiques, efficaces et proches de vos attentes.
    </p>
    <p class="feedback__text">
      Pour nous envoyer directement vos idées ou suggestions, écrivez-nous à 
      <a href="mailto:yzaghlamane@gmail.com" aria-label="Send email to Yassine ZAGHLAMANE">
        yzaghlamane@gmail.com
      </a>.
    </p>
  </div>
</section>
  `;

  const main = document.querySelector("#main-content");
  main.insertAdjacentHTML("beforeend", feedbackHTML);
}
