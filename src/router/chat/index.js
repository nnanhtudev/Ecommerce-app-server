import chatRoute from "../chat/chat";

const initAPIRoutesChat = (app, prefix) => {
  app.use(`/${prefix}/chat`, chatRoute);
  // app.use(`/${prefix}/products`, productsRoutes);
  return app;
};

export default initAPIRoutesChat;
