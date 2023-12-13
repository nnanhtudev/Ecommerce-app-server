import productService from "../../services/admin/productService";

const createNewProduct = async (req, res) => {
  try {
    console.log(req.files);
    let image = req.files;
    let dataProduct = req.body;
    let data = await productService.handleCreateNewProduct(dataProduct, image);
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
const getPagination = async (req, res) => {
  try {
    console.log(req.query);
    let { category, count, page, search } = req.query;
    let data = await productService.handleGetProductPaginate(category, count, page, search);
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
module.exports = { createNewProduct, getPagination };
