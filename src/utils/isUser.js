import User from "../models/User";

const isExistEmail = async (email) => {
  try {
    let check = false;
    let emailExists = await User.findOne({ email });
    if (emailExists) {
      return (check = true);
    }
    return check;
  } catch (error) {
    console.log(error);
  }
};

const isExistPhone = async (phone) => {
  try {
    let check = false;
    let phoneExists = await User.findOne({ phone });
    if (phoneExists) {
      return (check = true);
    }
    return check;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { isExistEmail, isExistPhone };
