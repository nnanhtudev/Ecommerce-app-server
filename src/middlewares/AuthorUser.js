const nonSecurePaths = ["/logout", "/login", "/register"];

const checkUserPermission = (req, res, next) => {
  if (nonSecurePaths.includes(req.path)) return next();
  console.log("req.user", req.user);
  if (req.user) {
    let id = req.user.id;
    let roles = req.user.roleUser;
    const currentUrl = req.headers["x-current-route"] || "";
    console.log("currentUrl", currentUrl);

    // Check if the user has the 'admin' role
    if (roles.some((role) => role.url === "admin")) {
      // If the user is an admin, allow access
      next();
    } else if (roles.some((role) => role.url === "/advisor") && currentUrl !== "/chat") {
      // If the user is an advisor and the path is not /chat, deny access
      return res.status(403).json({
        EM: "Access denied. You don't have permission to access this resource.",
      });
    } else {
      // For any other cases, you may add additional checks or allow access
      next();
    }
  } else {
    // If there is no user, return a 401 Unauthorized status
    return res.status(401).json({
      EM: "Unauthorized. Please log in.",
    });
  }
};

module.exports = { checkUserPermission };
