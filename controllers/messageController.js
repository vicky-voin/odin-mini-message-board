const db = require("../db/messageQueries")

async function getMessages(req, res)
{
    let messages = await db.getAllMessages();

    res.render("index", {title : "Mini Message Board", messages: messages});
};

async function getNewMessage(req, res)
{
    res.render("form");
};

async function getMessageById(req, res)
{
    let messages = await db.getMessageById(req.params.id);

    res.render("details", {message: messages[0]});
};

async function addNewMessage(req, res)
{
    await db.insertMessage({
        text: req.body.message,
        user: req.body.user,
        added: new Date()
    });

    res.redirect("/");
};

module.exports = 
{
    getMessages,
    getNewMessage,
    getMessageById,
    addNewMessage
}