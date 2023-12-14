import Order from "../../models/Order";
import User from "../../models/User";

const handleGetDashBoard = async (targetMonth) => {
  try {
    let user = await User.find({});
    if (!user) {
      return {
        EM: "Total Users not found",
        EC: -2,
        DT: [],
      };
    }
    let currentUser = user.length;

    // Fetch all orders
    const allOrders = await Order.find({});

    // Filter orders for the target month
    const ordersInTargetMonth = allOrders.filter((order) => {
      const orderMonth = order.timeOder.getMonth() + 1; // Months are zero-indexed in JavaScript
      return orderMonth === targetMonth;
    });

    // Calculate total revenue for the target month
    const totalRevenueForMonth = ordersInTargetMonth.reduce((sum, order) => sum + order.total, 0);

    let data = {
      currentUser,
      totalRevenueForMonth,
    };

    return {
      EM: "Get dashboard data successfully",
      EC: 0,
      DT: data,
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
module.exports = { handleGetDashBoard };
