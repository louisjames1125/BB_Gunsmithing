const menuBtn = document.querySelector(".menu-btn");
const verticalLinks = document.querySelector(".verticalLinksGroup");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    verticalLinks.classList.add("verticalLinksGroup--open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    verticalLinks.classList.remove("verticalLinksGroup--open");
    menuOpen = false;
  }
});
