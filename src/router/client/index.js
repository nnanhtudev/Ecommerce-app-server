//router/admin/index.js
import userRoutes from "./user";

const initAPIRoutesClient = (app, prefix) => {
  app.use(`/${prefix}/user`, userRoutes);
  // app.use(`/${prefix}/products`, productsRoutes);
  return app;
};

export default initAPIRoutesClient;
