const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello world!",
        user: "Charles",
        added: new Date()
    }
]

const express = require("express");
const path = require("node:path");

const app = express();

const assetPath = path.join(__dirname, "public");

app.use(express.static(assetPath));
app.use(express.urlencoded({extended: true}));

app.set('views', path.join(__dirname, "views"));
app.set('view engine', "ejs");

app.get("/", (req, res) => 
{
    res.render("index", {title : "Mini Message Board", messages: messages});
});

app.get("/new", (req, res) => 
{
    res.render("form");
});

app.post("/new", (req, res) => 
{
    messages.push({
        text: req.body.message,
        user: req.body.user,
        added: new Date()
    });

    res.redirect("/");
});

const PORT = 8000;

app.listen(PORT);