const express = require("express");
const path = require("node:path");
const messageRouter = require("./routes/messageRouter")

const app = express();

const assetPath = path.join(__dirname, "public");

app.use(express.static(assetPath));
app.use(express.urlencoded({extended: true}));

app.set('views', path.join(__dirname, "views"));
app.set('view engine', "ejs");

app.use("/", messageRouter);

const PORT = 8000;

app.listen(PORT);