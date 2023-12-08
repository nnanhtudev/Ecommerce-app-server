import Product from "../../models/Product";

const getAllProducts = async () => {
  try {
    let products = await Product.find({});
    if (!products) {
      return {
        EM: "Get all products not found",
        EC: -1,
        DT: [],
      };
    }
    return {
      EM: "Get all products successfully!",
      EC: 0,
      DT: products,
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

const handleGetProductById = async (id) => {
  try {
    let productsById = await Product.findOne({ _id: id });
    if (!productsById) {
      return {
        EM: "Get all products not found",
        EC: -1,
        DT: [],
      };
    }
    return {
      EM: "Get all products successfully!",
      EC: 0,
      DT: productsById,
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

module.exports = { getAllProducts, handleGetProductById };
