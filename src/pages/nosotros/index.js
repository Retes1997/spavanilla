import "./index.css";
import Mision from "./components/Mision/Mision.js";
import Vision from "./components/Vision/Vision.js";

export default function NosotrosPage() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("nosotros");

  wrapper.innerHTML = `<h1>Nosotros</h1>`;

  wrapper.appendChild(Mision());
  wrapper.appendChild(Vision());

  return wrapper;
}
