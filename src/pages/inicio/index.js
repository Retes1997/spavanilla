import Slider from "./components/Slider/index.js";
import Historia from "./components/Historia/Historia.js";

export default function InicioPage() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("inicio");

  wrapper.appendChild(Slider());
  wrapper.appendChild(Historia());

  return wrapper;
}
