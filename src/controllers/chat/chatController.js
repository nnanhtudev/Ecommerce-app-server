import chatService from "../../services/chat/chatService";

const createNewRoom = async (req, res) => {
  try {
    let roomChat = await chatService.handleCreateNewRoom();
    return res.status(200).json({
      EM: roomChat.EM,
      EC: roomChat.EC,
      DT: roomChat.DT,
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

const addMessage = async (req, res) => {
  try {
    let messages = await chatService.handleAddMessage(req.body);
    return res.status(200).json({
      EM: messages.EM,
      EC: messages.EC,
      DT: messages.DT,
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

const getMessageByRoomId = async (req, res) => {
  try {
    const { roomId } = req.query;
    let messages = await chatService.handleGetMessageByRoomId(roomId);
    return res.status(200).json({
      EM: messages.EM,
      EC: messages.EC,
      DT: messages.DT,
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

//admin

const getAllRoom = async (req, res) => {
  try {
    let messages = await chatService.handleGetAllRoom();
    return res.status(200).json({
      EM: messages.EM,
      EC: messages.EC,
      DT: messages.DT,
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
module.exports = { createNewRoom, addMessage, getMessageByRoomId, getAllRoom };
