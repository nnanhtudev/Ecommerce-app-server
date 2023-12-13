//router/admin/index.js
import userRoutes from "./user";
import historyRoutes from "./history";
import productRoutes from "./product";
const initAPIRoutesAdmin = (app, prefix) => {
  app.use(`/${prefix}/users`, userRoutes);
  app.use(`/${prefix}/history`, historyRoutes);
  app.use(`/${prefix}/products`, productRoutes);

  return app;
};

export default initAPIRoutesAdmin;
