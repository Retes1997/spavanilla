import html from "./Navbar.html?raw";
import "./Navbar.css";
import { initNavbar } from "./Navbar.js";

export default function Navbar() {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = html;

  // inicializar la lógica del Navbar
  initNavbar(wrapper);

  return wrapper;
}
