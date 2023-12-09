//router/admin/index.js
import userRoutes from "./user";

const initAPIRoutesAdmin = (app, prefix) => {
  app.use(`/${prefix}/users`, userRoutes);
  // app.use(`/${prefix}/products`, productsRoutes);
  return app;
};

export default initAPIRoutesAdmin;
