import historyService from "../../services/admin/historyService";

const getAllOrder = async (req, res) => {
  try {
    let historyOrder = await historyService.handleGetAllOrder();
    return res.status(200).json({
      EM: historyOrder.EM,
      EC: historyOrder.EC,
      DT: historyOrder.DT,
    });
  } catch (error) {
    return res.status(404).json({
      EM: "Error form server",
      EC: -2,
      DT: [],
    });
  }
};

module.exports = { getAllOrder };
