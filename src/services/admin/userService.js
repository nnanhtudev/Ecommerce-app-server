import User from "../../models/User";
import { hashPassWord, comparePassword } from "../../utils/isPassword";
import { createJWTUser } from "../../middlewares/JWTAction";

const handleGetAllUsers = async () => {
  try {
    let data = await User.find({});
    if (data) {
      return {
        EM: "Get all users success",
        EC: 0,
        DT: data,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      EM: "Error form with service",
      EC: -2,
      DT: [],
    };
  }
};

const handleLoginAdmin = async (data) => {
  try {
    console.log(data);
    let emailInput = data.email;
    let passwordInput = data.password;
    let checkExistsEmail = await User.findOne({ email: emailInput }).populate("role").lean();

    // Always respond with the same generic message for security reasons
    const genericErrorMessage = "Please Check Your Email & Password";

    if (!checkExistsEmail || !comparePassword(passwordInput, checkExistsEmail.password)) {
      return {
        EM: genericErrorMessage,
        EC: -1,
        DT: [],
      };
    }

    // Extract necessary data from the query result
    // Check if the user has the required role
    const allowedRoles = ["/admin", "/advisor"];
    const hasAllowedRole = checkExistsEmail.role.some((role) => allowedRoles.includes(role.url));

    if (!hasAllowedRole) {
      // Redirect the user to the client-side without revealing details
      return {
        EM: genericErrorMessage,
        EC: -2,
        DT: [], // Redirect URL
      };
    }
    let payload = {
      id: checkExistsEmail._id,
      fullName: checkExistsEmail.fullName,
      roleUser: checkExistsEmail.role,
    };
    let token = createJWTUser(payload);
    return {
      EM: "Login success",
      EC: 0,
      DT: {
        access_token: token,
        id: checkExistsEmail._id,
        fullName: checkExistsEmail.fullName,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "Error form with service",
      EC: -3,
      DT: [],
    };
  }
};

module.exports = { handleGetAllUsers, handleLoginAdmin };
