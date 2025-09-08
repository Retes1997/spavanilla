export function initSlider(wrapper) {
  const slides = wrapper.querySelectorAll(".slide");
  const prevBtn = wrapper.querySelector(".slider__btn--prev");
  const nextBtn = wrapper.querySelector(".slider__btn--next");
  const dotsContainer = wrapper.querySelector(".slider__dots");

  let currentIndex = 0;

  // Crear puntos dinámicamente
  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll("button");

  function showSlide(index) {
    slides.forEach((s, i) => {
      s.classList.toggle("active", i === index);
      dots[i].classList.toggle("active", i === index);
    });
    currentIndex = index;
  }

  function goToSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    showSlide(index);
  }

  prevBtn.addEventListener("click", () => goToSlide(currentIndex - 1));
  nextBtn.addEventListener("click", () => goToSlide(currentIndex + 1));

  // Auto-play
  setInterval(() => goToSlide(currentIndex + 1), 5000);

  // Mostrar primera slide
  showSlide(currentIndex);
}
