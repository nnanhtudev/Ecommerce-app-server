import { handleGetDashBoard } from "../../services/admin/dashboardService";

const getDashboard = async (req, res) => {
  try {
    const currentDate = new Date();
    const targetMonth = currentDate.getMonth() + 1; // Tháng trong JavaScript bắt đầu từ 0, nên cần cộng thêm 1
    let data = await handleGetDashBoard(targetMonth);
    return res.status(404).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.error(error);
    return res.status(404).json({
      EM: "Error form server",
      EC: -2,
      DT: [],
    });
  }
};

module.exports = { getDashboard };
