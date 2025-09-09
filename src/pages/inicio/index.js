import Slider from "./components/Slider/index.js";
import About from "./components/About/index.js";

export default function InicioPage() {
  const wrapper = document.createElement("div");

  wrapper.appendChild(Slider());
  wrapper.appendChild(About());

  return wrapper;
}
