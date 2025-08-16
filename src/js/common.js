import { initHeader } from "../components/shared/header/header";
import { initHeaderMenu } from "../components/shared/header/header";

function enableMobileActiveButtons() {
  const buttons = document.querySelectorAll(".button");

  buttons.forEach((btn) => {
    btn.addEventListener("touchstart", () => btn.classList.add("pressed"));
    btn.addEventListener("touchend", () => btn.classList.remove("pressed"));
    btn.addEventListener("touchcancel", () => btn.classList.remove("pressed"));
  });
}

export function initCommon() {
  initHeader();
  initHeaderMenu();
  enableMobileActiveButtons(); // initialize button pressed effect
}
