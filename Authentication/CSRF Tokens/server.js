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
    res.status(401).json({ message: "You are Unauthorized" }); // 401 is "Unauthorized";
    return;
  }

  const sessionID = crypto.randomUUID();
  const csrfToken = crypto.randomUUID();
  SESSIONS.set(sessionID, { user, csrfToken });
  res
    .cookie("sessionID", sessionID, {
      secure: true, // only https
      httpOnly: true, // not available in JS/client... prevents leaking data
      sameSite: "none", // b/c server hosted on different port than client
    })
    .json({ csrfToken, message: `Logged in as ${req.body.username}` });
});

app.get("/adminData", (req, res) => {
  const session = SESSIONS.get(req.cookies.sessionID);
  if (!session || !session.user) {
    res.sendStatus(401);
    return;
  }

  if (session.user.role != "Admin") {
    res.status(401).json({ message: "You are bit an Admin" }); // 401 is "Unauthorized";
    return;
  }

  res.send("Your are an admin!");
});

app.post("/delete-user", (req, res) => {
  const session = SESSIONS.get(req.cookies.sessionID);
  if (!session || !session.user || !session.csrfToken !== req.body.csrfToken) {
    res.sendStatus(401);
    return;
  }
  USERS.delete(session.user.username);
  SESSIONS.delete(req.cookies.sessionID);
  res.send(`Deleted ${session.user.username}`);
});

app.listen(3000);
