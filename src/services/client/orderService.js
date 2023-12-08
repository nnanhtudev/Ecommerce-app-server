import mongoose from "mongoose";
import Order from "../../models/Order";
import Cart from "../../models/Cart";

const handleAddOrder = async (data) => {
  try {
    let cartReq = data.carts;
    const cartIds = cartReq.map((cartId) => new mongoose.Types.ObjectId(cartId));

    let totalAmount = await Cart.find({ _id: { $in: cartIds } });
    if (totalAmount) {
      const totalAmountSum = totalAmount.reduce((sum, cart) => sum + cart.totalAmount, 0);

      let order = await Order.create({
        user: data.user,
        fullName: data.fullname,
        email: data.email,
        phone: data.phone,
        address: data.address,
        carts: data.carts,
        total: totalAmountSum,
      });
      if (order) {
        // Cập nhật trạng thái `order` trong collection `Cart`
        await Cart.updateMany({ _id: { $in: cartIds } }, { $set: { order: true } });
        return {
          EM: "Order successfully added",
          EC: 0,
          DT: [],
        };
      }
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

const handleGetHistoryOder = async (idUser) => {
  try {
    if (idUser === "undefined") {
      return {
        EM: "Not Found User",
        EC: -1,
        DT: [],
      };
    }
    let userId = new mongoose.Types.ObjectId(idUser);
    let history = await Order.find({ user: userId });
    if (history) {
      return {
        EM: "Get history successfully",
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

const handleGetHistoryOderById = async (idOder) => {
  try {
    if (idOder === "undefined") {
      return {
        EM: "Not Found User",
        EC: -1,
        DT: [],
      };
    }
    // let idOder = new mongoose.Types.ObjectId(idUser);
    let history = await Order.findOne({ _id: idOder }).populate({
      path: "carts",
      populate: {
        path: "products",
        model: "Product", // tên model của collection Product
      },
    });
    if (history) {
      return {
        EM: "Get history by id order successfully",
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
module.exports = { handleAddOrder, handleGetHistoryOder, handleGetHistoryOderById };
