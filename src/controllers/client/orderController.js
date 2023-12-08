import orderService from "../../services/client/orderService";

const addOrder = async (req, res) => {
  try {
    let { data } = req.body;
    console.log(data);
    let order = await orderService.handleAddOrder(data);
    return res.status(200).json({
      EM: order.EM, //error message,
      EC: order.EC, //error code
      DT: order.DT, //data
    });
  } catch (error) {
    return res.status(500).json({
      EM: "error from server", //error message,
      EC: -1, //error code
      DT: "", //data
    });
  }
};

const getHistoryOrder = async (req, res) => {
  try {
    console.log(req.query);
    let { idUser } = req.query;
    let historyOder = await orderService.handleGetHistoryOder(idUser);
    return res.status(200).json({
      EM: historyOder.EM, //error message,
      EC: historyOder.EC, //error code
      DT: historyOder.DT, //data
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

const getHistoryOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    let historyOder = await orderService.handleGetHistoryOderById(id);
    return res.status(200).json({
      EM: historyOder.EM, //error message,
      EC: historyOder.EC, //error code
      DT: historyOder.DT, //data
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
module.exports = { addOrder, getHistoryOrder, getHistoryOrderById };
