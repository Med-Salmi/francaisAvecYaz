import { initHeader } from "../components/shared/header/header";
import { initHeaderMenu } from "../components/shared/header/header";

function activateButtonsOnTouch() {
  const buttons = document.querySelectorAll(".button");

  buttons.forEach((button) => {
    button.addEventListener("touchstart", () => {
      button.classList.add("is-active");
    });

    button.addEventListener("touchend", () => {
      // Use requestAnimationFrame for a more reliable, instant visual update
      requestAnimationFrame(() => {
        button.classList.remove("is-active");
      });
    });
  });
}

export function initCommon() {
  initHeader();
  initHeaderMenu();
  document.addEventListener("DOMContentLoaded", activateButtonsOnTouch);
}
