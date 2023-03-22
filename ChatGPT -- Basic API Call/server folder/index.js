var express = require("express");
var app = express();
const cors = require("cors");
const helmet = require("helmet");

const chatGPT = require("./getChatGPT");

app.use(cors());
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", chatGPT);

const PORT = 2000;
app.listen(PORT, () => {
  console.log("Listening on ", PORT);
});