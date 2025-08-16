import { initHeader } from "../components/shared/header/header";
import { initHeaderMenu } from "../components/shared/header/header";

function activateButtonsOnTouch() {
  const buttons = document.querySelectorAll(".button");

  buttons.forEach((button) => {
    button.addEventListener("touchstart", () => {
      button.classList.add("is-active");
    });

    button.addEventListener("touchend", () => {
      // Use a brief timeout to allow the tap to register
      setTimeout(() => {
        button.classList.remove("is-active");
      }, 100);
    });
  });
}

export function initCommon() {
  initHeader();
  initHeaderMenu();
  activateButtonsOnTouch();
}
