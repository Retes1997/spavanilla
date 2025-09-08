import routes from "../routes.js";
import { render } from "./renderer.js";

export function initRouter() {
  console.log("🔀 Router inicializado");
  handleRoute(location.pathname);

  window.addEventListener("popstate", () => {
    handleRoute(location.pathname);
  });

  document.body.addEventListener("click", (e) => {
    const link = e.target.closest("a[data-link]");
    if (link) {
      e.preventDefault();
      navigate(link.getAttribute("href"));
    }
  });
}

export function navigate(path) {
  history.pushState({}, "", path);
  handleRoute(path);
}

async function handleRoute(path) {
  console.log("📍 Navegando a:", path);

  try {
    let module;

    if (routes[path]) {
      module = await routes[path]();
    } else {
      module = await import("../404/index.js");
    }

    render(module.default()); // 👈 usamos renderer aquí
  } catch (err) {
    console.error("❌ Error al cargar la ruta:", err);
    document.getElementById(
      "app"
    ).innerHTML = `<h1>Error cargando la ruta</h1>`;
  }
}
