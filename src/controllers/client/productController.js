import productService from "../../services/client/productService";

const getAllListProduct = async (req, res) => {
  try {
    let data = await productService.getAllProducts();
    return res.status(200).json({
      EM: data.EM, //error message,
      EC: data.EC, //error code
      DT: data.DT, //data
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
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    let data = await productService.handleGetProductById(id);
    return res.status(200).json({
      EM: data.EM, //error message,
      EC: data.EC, //error code
      DT: data.DT, //data
    });
  } catch (error) {
    return res.status(500).json({
      EM: "error from server", //error message,
      EC: -1, //error code
      DT: "", //data
    });
  }
};

module.exports = { getAllListProduct, getProductById };
