const routes = {
  "/": () => import("../pages/inicio/index.js"),
  "/nosotros": () => import("../pages/nosotros/index.js"),
};

export default routes;
