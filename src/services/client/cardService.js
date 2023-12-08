import Product from "../../models/Product";
import Cart from "../../models/Cart";

const handleAddCard = async (idUser, idProduct, count) => {
  try {
    if (idUser === "undefined") {
      return {
        EM: "Not found idUser",
        EC: -1,
        DT: [],
      };
    }
    if (!idProduct && !count) {
      return {
        EM: "Not found product/count",
        EC: -1,
        DT: [],
      };
    }
    let findPriceProduct = await Product.findOne({ _id: idProduct }, "_id price");
    let totalAmount = findPriceProduct.price * +count;
    let findCardByUser = await Cart.findOne({ user: idUser, products: idProduct });
    if (findCardByUser) {
      let countUpdates = count <= findCardByUser.count ? +count + findCardByUser.count : count;
      let totalAmountUpdates = findPriceProduct.price * countUpdates;
      console.log(totalAmountUpdates);
      let updateCard = await Cart.updateOne(
        { user: idUser, products: idProduct },
        {
          $set: {
            count: countUpdates,
            totalAmount: totalAmountUpdates,
          },
        }
      );
      return {
        EM: "Update Carts successfully",
        EC: 0,
        DT: [],
      };
    } else {
      let data = await Cart.create({
        user: idUser,
        products: idProduct,
        count: count,
        totalAmount,
      });
      if (data) {
        return {
          EM: "Add Carts successfully",
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

const handleGetCardByUser = async (idUser) => {
  try {
    if (idUser === "undefined") {
      return {
        EM: "Not found info user",
        EC: -1,
        DT: [],
      };
    }
    let data = await Cart.find({ user: idUser }).populate("products");
    if (!data) {
      return {
        EM: "User has no carts",
        EC: -1,
        DT: [],
      };
    }
    return {
      EM: "Get card user successfully!",
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

const handleEditCartsByUser = async (idUser, idProduct, count) => {
  try {
    if (idUser === "undefined") {
      return {
        EM: "Not found idUser",
        EC: -1,
        DT: [],
      };
    }
    if (!idProduct && !count) {
      return {
        EM: "Not found product/count",
        EC: -1,
        DT: [],
      };
    }
    let findCardByUser = await Cart.findOne({ user: idUser, products: idProduct }).populate("products");
    if (findCardByUser) {
      let totalAmountUpdates = findCardByUser.products.price * count;
      console.log(totalAmountUpdates);
      let updateCard = await Cart.updateOne(
        { user: idUser, products: idProduct },
        {
          $set: {
            count: count,
            totalAmount: totalAmountUpdates,
          },
        }
      );
      if (updateCard) {
        return {
          EM: "Update Carts successfully",
          EC: 0,
          DT: updateCard,
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

const handleDeleteCartsByUser = async (idUser, idProduct) => {
  try {
    if (idUser === "undefined" || !idProduct) {
      return {
        EM: "Not found user/product",
        EC: -1,
        DT: [],
      };
    }
    let deleteProductByUser = await Cart.deleteOne({ user: idUser, products: idProduct });
    if (deleteProductByUser) {
      return {
        EM: "Delete Carts successfully",
        EC: 0,
        DT: deleteProductByUser,
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
module.exports = { handleAddCard, handleGetCardByUser, handleEditCartsByUser, handleDeleteCartsByUser };
