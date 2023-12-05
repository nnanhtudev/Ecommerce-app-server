import handleUserService from "../../services/client/userService";

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

module.exports = { handleRegister };
