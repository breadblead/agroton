document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".js-toggle");
  const menu = document.querySelector(".js-menu");

  if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
      menu.classList.toggle("menu--active");
    });
  }
});
