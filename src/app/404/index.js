import "./index.css";

export default function NotFoundPage() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("not-found");

  wrapper.innerHTML = `
    <h1>404</h1>
    <p>Página no encontrada</p>
    <a href="/" data-link>Volver al inicio</a>
  `;

  return wrapper;
}
