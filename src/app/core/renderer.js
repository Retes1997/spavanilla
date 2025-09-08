import Navbar from "../../components/Navbar/index.js";
import Footer from "../../components/Footer/index.js";

export function render(pageContent) {
  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = ""; // limpiar

  app.appendChild(Navbar()); // header
  app.appendChild(pageContent); // contenido dinámico
  app.appendChild(Footer()); // footer
}
