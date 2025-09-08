import { initRouter } from "./router.js";

/**
 * Arranca la aplicación SPA.
 * Aquí inicializamos las partes fundamentales.
 */
export function bootstrap() {
  console.log("🚀 Aplicación iniciada");

  // Inicia el router
  initRouter();
}
