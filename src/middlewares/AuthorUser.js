import { extractToken, verifyToken } from "./JWTAction";

const nonSecurePaths = ["/logout", "/login", "/register"];

const checkUserJWT = (req, res, next) => {
  if (nonSecurePaths.includes(req.path)) return next();
  let cookies = req.cookies;
  let tokenFormHeader = extractToken(req);
  if ((cookies && cookies.account) || tokenFormHeader) {
    let token = cookies && cookies.account ? cookies.account : tokenFormHeader;
    let decoded = verifyToken(token);
    if (decoded) {
      req.user = decoded;
      req.token = token;
      next();
    } else {
      return res.status(401).json({
        EM: "Not authorized the user",
        EC: -1,
        DT: "",
      });
    }
  } else {
    return res.status(401).json({
      EM: "Not authorized the user",
      EC: -1,
      DT: "",
    });
  }
};

module.exports = { checkUserJWT };
