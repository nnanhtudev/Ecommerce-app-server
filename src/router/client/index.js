//router/admin/index.js
import userRoutes from "./user";
import productRoutes from "./product";
import cardRoutes from "./cart";
import orderRoutes from "./order";

const initAPIRoutesClient = (app, prefix) => {
  app.use(`/${prefix}/order`, orderRoutes);
  app.use(`/${prefix}/carts`, cardRoutes);
  app.use(`/${prefix}/products`, productRoutes);
  app.use(`/${prefix}/user`, userRoutes);

  return app;
};

export default initAPIRoutesClient;
