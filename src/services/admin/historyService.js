import Order from "../../models/Order";

const handleGetAllOrder = async () => {
  try {
    let history = await Order.find({});
    if (history) {
      return {
        EM: "Get All Order Successful",
        EC: 0,
        DT: history,
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

module.exports = { handleGetAllOrder };
