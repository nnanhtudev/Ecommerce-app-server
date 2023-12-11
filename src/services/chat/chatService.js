import Session from "../../models/Session";

const handleCreateNewRoom = async () => {
  try {
    let createNewRoom = await Session.create({});
    if (createNewRoom) {
      return {
        EM: "Create new room successfully",
        EC: 0,
        DT: createNewRoom,
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

const handleAddMessage = async (data) => {
  try {
    let rooms = data;
    let findRoomId = await Session.findOne({ _id: rooms.roomId });
    if (findRoomId) {
      let sessionChat = await Session.updateOne(
        { _id: rooms.roomId },
        {
          $push: {
            messages: {
              role: rooms.role,
              content: rooms.message,
              is_admin: rooms.is_admin,
            },
          },
        }
      );
      if (sessionChat) {
        return {
          EM: "Add Message success",
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

const handleGetMessageByRoomId = async (roomId) => {
  try {
    const session = await Session.findOne({ _id: roomId });

    if (!session) {
      return {
        EM: "Room not found",
        EC: -1,
        DT: [],
      };
    }
    const messages = session.messages;
    return {
      EM: "Success",
      EC: 0,
      DT: messages,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "Error from service",
      EC: -2,
      DT: [],
    };
  }
};
//admin
const handleGetAllRoom = async () => {
  try {
    const session = await Session.find({});

    if (!session) {
      return {
        EM: "Room not found",
        EC: -1,
        DT: [],
      };
    }
    return {
      EM: "Success",
      EC: 0,
      DT: session,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "Error from service",
      EC: -2,
      DT: [],
    };
  }
};
module.exports = { handleCreateNewRoom, handleAddMessage, handleGetMessageByRoomId, handleGetAllRoom };
