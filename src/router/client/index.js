//router/admin/index.js
import userRoutes from "./user";
import productRoutes from "./product";

const initAPIRoutesClient = (app, prefix) => {
  app.use(`/${prefix}/user`, userRoutes);
  app.use(`/${prefix}/products`, productRoutes);
  // app.use(`/${prefix}/products`, productsRoutes);
  return app;
};

export default initAPIRoutesClient;
