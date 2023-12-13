import handleUserService from "../../services/client/userService";
import "dotenv/config";

const handleRegister = async (req, res) => {
  try {
    let dataUser = req.body;
    let data = await handleUserService.handleRegisterUser(dataUser.data);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      EM: "Error form server",
      EC: -2,
      DT: [],
    });
  }
};

const handleLogin = async (req, res) => {
  try {
    let dataUser = req.body;
    let data = await handleUserService.handleLoginUser(dataUser.data);
    console.log(data);
    res.cookie("account", data.DT.access_token, {
      httpOnly: true,
      maxAge: 60 * 60 * 1000,
    });
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      EM: "Error form server",
      EC: -2,
      DT: [],
    });
  }
};

const handleGetAccount = (req, res) => {
  try {
    return res.status(200).json({
      EM: "Ok!", //error message,
      EC: 0, //error code
      DT: {
        access_token: req.token,
        role: req.user.roleUser,
        id_User: req.user.id,
        fullName: req.user.fullName,
      }, //data
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "error from server", //error message,
      EC: -1, //error code
      DT: "", //data
    });
  }
};

const handleLogOut = (req, res) => {
  try {
    res.clearCookie("account");
    return res.status(200).json({
      EM: "Logout Success!",
      EC: 0, //error code
      DT: "", //data
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "error from server", //error message,
      EC: -1, //error code
      DT: "", //data
    });
  }
};
module.exports = { handleRegister, handleLogin, handleGetAccount, handleLogOut };
