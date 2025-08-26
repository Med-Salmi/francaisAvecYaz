import "./footer.css";

export function initFooter() {
  const footerHTML = `
    <footer class="footer">
    <div class="footer-container content-width">
        <div class="footer-logo">
        <img src="/logo.png" alt="FrançaisAvecYaz Logo" />
        </div>

        <div class="footer-social">
  <a 
    href="https://www.instagram.com/yourusername" 
    target="_blank" 
    rel="noopener noreferrer" 
    aria-label="Instagram"
  >
    <i class="fa-brands fa-instagram"></i>
  </a>
  <a 
    href="https://www.facebook.com/profile.php?id=61564744162514&locale=fr_FR" 
    target="_blank" 
    rel="noopener noreferrer" 
    aria-label="Facebook"
  >
    <i class="fa-brands fa-facebook"></i>
  </a>
  <a 
    href="https://www.linkedin.com/in/yassine-zaghlamane-53a06223a" 
    target="_blank" 
    rel="noopener noreferrer" 
    aria-label="LinkedIn"
  >
    <i class="fa-brands fa-linkedin"></i>
  </a>
  <a 
  href="mailto:yzaghlamane@gmail.com" 
  aria-label="Send email to Yassine ZAGHLAMANE" 
  class="footer__social-link"
>
  <i class="fas fa-envelope"></i>
</a>

</div>


        <div class="footer-links">
        <h4>Liens utiles:</h4>
        <ul>
            <li><a href="/fiches.html">Fiches pédagogiques</a></li>
        </ul>
        </div>

        <div class="footer-copy">
        <p>© 2024 FrançaisAvecYaz, tous droits réservés.</p>
        </div>
    </div>
    </footer>

  `;

  const main = document.querySelector("#main-content");
  main.insertAdjacentHTML("beforeend", footerHTML);
}
