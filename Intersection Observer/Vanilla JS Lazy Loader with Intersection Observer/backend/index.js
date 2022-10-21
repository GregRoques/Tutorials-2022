var express = require("express");
var app = express();
const cors = require("cors");
const helmet = require("helmet");

const pokemon = require("./routes/getPokes");

app.use(cors());
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/pokemon", pokemon);

const PORT = 2000;
app.listen(PORT, () => {
  console.log("Listening on ", PORT);
});
