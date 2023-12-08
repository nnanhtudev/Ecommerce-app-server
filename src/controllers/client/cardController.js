import cardService from "../../services/client/cardService";

const addCard = async (req, res) => {
  try {
    console.log(" req.query", req.query);
    const { idUser, idProduct, count } = req.query;
    let dataCard = await cardService.handleAddCard(idUser, idProduct, count);
    return res.status(200).json({
      EM: dataCard.EM, //error message,
      EC: dataCard.EC, //error code
      DT: dataCard.DT, //data
    });
  } catch (error) {
    return res.status(500).json({
      EM: "error from server", //error message,
      EC: -1, //error code
      DT: "", //data
    });
  }
};

const getCardByUser = async (req, res) => {
  try {
    const { idUser } = req.query;
    let dataCard = await cardService.handleGetCardByUser(idUser);
    return res.status(200).json({
      EM: dataCard.EM, //error message,
      EC: dataCard.EC, //error code
      DT: dataCard.DT, //data
    });
  } catch (error) {
    return res.status(500).json({
      EM: "error from server", //error message,
      EC: -1, //error code
      DT: "", //data
    });
  }
};
module.exports = { addCard, getCardByUser };
