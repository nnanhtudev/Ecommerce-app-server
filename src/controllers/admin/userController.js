import userService from "../../services/admin/userService";

const getAllUsers = async (req, res) => {
  try {
    let dataUser = await userService.handleGetAllUsers();
    return res.status(200).json({
      EM: dataUser.EM,
      EC: dataUser.EC,
      DT: dataUser.DT,
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

const loginAdmin = async (req, res) => {
  try {
    let dataUser = req.body;
    let data = await userService.handleLoginAdmin(dataUser.data);
    if (data && data.DT.access_token) {
      res.cookie("account", data.DT.access_token, {
        httpOnly: true,
        maxAge: 60 * 60 * 1000,
        sameSite: "None",
        secure: true,
      });
    }
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

module.exports = { getAllUsers, loginAdmin };
