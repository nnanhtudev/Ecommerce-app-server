import "dotenv/config";

const configCors = (app) => {
  // Add headers before the routes are defined
  app.use(function (req, res, next) {
    // Get the request origin
    const origin = req.get("Origin");

    // Check if the request origin is allowed
    if ([process.env.URL_CLIENT, process.env.URL_ADMIN].includes(origin)) {
      // Allow the request origin
      res.setHeader("Access-Control-Allow-Origin", origin);
    }

    // Request methods you wish to allow
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

    // Request headers you wish to allow
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type,Authorization,X-Current-Route,Accept");

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g., in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);
    if (req.method === "OPTIONS") {
      return res.sendStatus(200);
    }
    // Pass to the next layer of middleware
    next();
  });
};

export default configCors;
