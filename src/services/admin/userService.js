import User from "../../models/User";

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

module.exports = { handleGetAllUsers };
