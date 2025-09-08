import html from "./Slider.html?raw";
import "./Slider.css";
import { initSlider } from "./Slider.js";

export default function Slider() {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = html;

  // Inicializamos la lógica del slider
  initSlider(wrapper);

  return wrapper;
}
