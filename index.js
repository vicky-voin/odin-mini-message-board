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

app.get("/", (req, res) => 
{
    console.log("/");
    res.send();
});

app.get("/new", (req, res) => 
{
    console.log("/new");
    res.send();
});

const PORT = 8000;

app.listen(PORT);