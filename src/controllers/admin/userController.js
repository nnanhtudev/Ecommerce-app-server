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

module.exports = { getAllUsers };
