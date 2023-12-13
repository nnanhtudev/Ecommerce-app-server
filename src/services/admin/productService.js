import Product from "../../models/Product";

const handleCreateNewProduct = (data, image) => {
  try {
    console.log(image);
  } catch (error) {
    console.log(error);
    return {
      EM: "Error form with service",
      EC: -3,
      DT: [],
    };
  }
};
const handleGetProductPaginate = async (category, count, page, search) => {
  try {
    let rows = await Product.find({}).skip(page).limit(count);
    let counts = await Product.countDocuments({});

    let totalPages = Math.ceil(counts / count);
    let data = {
      totalRow: count,
      totalPages,
      rows,
    };

    return {
      EM: "Get paginate success",
      EC: 0,
      DT: data,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "Error form with service",
      EC: -3,
      DT: [],
    };
  }
};
module.exports = { handleCreateNewProduct, handleGetProductPaginate };
