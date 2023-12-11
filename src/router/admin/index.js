//router/admin/index.js
import userRoutes from "./user";
import historyRoutes from "./history";

const initAPIRoutesAdmin = (app, prefix) => {
  app.use(`/${prefix}/users`, userRoutes);
  app.use(`/${prefix}/history`, historyRoutes);

  return app;
};

export default initAPIRoutesAdmin;
