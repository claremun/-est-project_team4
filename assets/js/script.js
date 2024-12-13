const sideMenu = document.querySelector(".moblie-menu");

document.querySelector(".btn-hamburger").addEventListener("click", () => {
  sideMenu.classList.add("active");
});

document
  .querySelector(".btn-mobile-menu-close")
  .addEventListener("click", () => {
    sideMenu.classList.remove("active");
  });
