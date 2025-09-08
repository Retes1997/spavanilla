export function initNavbar(wrapper) {
  const hamburger = wrapper.querySelector("#hamburger");
  const menu = wrapper.querySelector("#menu");

  if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
      menu.classList.toggle("navbar__menu--active");
      hamburger.classList.toggle("navbar__hamburger--active");
    });
  }
}
