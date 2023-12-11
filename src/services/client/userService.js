import "dotenv/config";
import User from "../../models/User";
import Role from "../../models/Role";
import { isExistEmail, isExistPhone } from "../../utils/isUser";
import { hashPassWord, comparePassword } from "../../utils/isPassword";
import { createJWTUser } from "../../middlewares/JWTAction";

const handleRegisterUser = async (dataUser) => {
  try {
    //Check email isExist
    let existEmail = await isExistEmail(dataUser.email);
    let existPhone = await isExistPhone(dataUser.phone);

    if (existEmail === true && existPhone === true) {
      return {
        EM: "Email/phone already registered is exists!",
        EC: -1,
        DT: [],
      };
    }
    // compare hash password
    let hashPw = hashPassWord(dataUser.password);
    const customerRole = await Role.findOne({ name: "Customer" });
    let register = await User.create({
      email: dataUser.email,
      phone: dataUser.phone,
      password: hashPw,
      fullName: dataUser.fullname,
      role: [customerRole._id],
    });
    if (register) {
      return {
        EM: "Register account success!",
        EC: 0,
        DT: [],
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

const handleLoginUser = async (dataUser) => {
  try {
    let emailInput = dataUser.email;
    let passwordInput = dataUser.password;
    let getUserByEmail = await User.findOne({ email: emailInput }).populate("role");
    if (!getUserByEmail || !comparePassword(passwordInput, getUserByEmail.password)) {
      return {
        EM: "Please Check Your Email & Password",
        EC: -1,
        DT: [],
      };
    }
    let payload = {
      id: getUserByEmail._id,
      fullName: getUserByEmail.fullName,
      roleUser: getUserByEmail.role,
    };
    let token = createJWTUser(payload);
    return {
      EM: "Login account success!",
      EC: 0,
      DT: {
        access_token: token,
        id: getUserByEmail._id,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "Error form with service",
      EC: -2,
      DT: [],
    };
  }
};
module.exports = { handleRegisterUser, handleLoginUser };
