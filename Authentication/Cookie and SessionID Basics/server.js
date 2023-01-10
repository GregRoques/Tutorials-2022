const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://127.0.0.1:5500", crendtials: true }));
app.use(cookieParser);

const USERS = new Map();
USERS.set("Callie", { id: 1, username: "Callie", role: "Admin" });
USERS.set("Midnight", { id: 2, username: "Midnight", role: "User" });

const SESSIONS = new Map();

app.post("/login", (req, res) => {
  const user = USERS.get(req.body.username);
  if (!user) {
    res.sendStatus(401); // 401 is "Unauthorized";
    return;
  }

  const sessionID = crypto.randomUUID();
  SESSIONS.set(sessionID, user);
  res
    .cookie("sessionID", sessionID, {
      secure: true, // only https
      httpOnly: true, // not available in JS/client... prevents leaking data
      sameSite: "none", // b/c server hosted on different port than client
    })
    .send(`Logged in as ${req.body.username}`);
});

app.get("/adminData", (req, res) => {
  //console.log(req.cookies);
  const user = SESSIONS.get(req.cookies.sessionID);
  if (!user) {
    res.sendStatus(401);
    return;
  }

  if (user.role != "Admin") {
    res.sendStatus(403); // 403 is "Forbidden";
    return;
  }

  res.send("Your are an admin!");
});

app.listen(3000);
