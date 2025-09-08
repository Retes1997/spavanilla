export function initSlider(wrapper) {
  const slides = wrapper.querySelectorAll(".slide");
  const prevBtn = wrapper.querySelector(".prev");
  const nextBtn = wrapper.querySelector(".next");

  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  // Auto-play cada 5s
  setInterval(nextSlide, 5000);

  // Mostrar primera slide
  showSlide(currentIndex);
}
