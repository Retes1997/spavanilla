export function initFooter(wrapper) {
  const yearSpan = wrapper.querySelector(".footer__year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}
