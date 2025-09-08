import html from "./Footer.html?raw";
import "./Footer.css";
import { initFooter } from "./Footer.js";

export default function Footer() {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = html;

  // inicializar la lógica
  initFooter(wrapper);

  return wrapper;
}
