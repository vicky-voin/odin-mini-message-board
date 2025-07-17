const {Router} = require("express");

const messageController = require("../controllers/messageController")
const messageRouter = Router();

messageRouter.get("/", messageController.getMessages);

messageRouter.get("/new", messageController.getNewMessage);

messageRouter.get("/message/:id", messageController.getMessageById);

messageRouter.post("/new", messageController.addNewMessage);

module.exports = messageRouter;