const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const env = require("dotenv");

env.config();
const jwtPassword = process.env.JWT_PASS

const app = express();
app.use(express.json());

const mySecret = process.env.MONGODB_URL;
mongoose.connect(mySecret);

const userModel = mongoose.model("Users", {
  name: String,
  userName: String,
  password: String,
});

function userExists(username, password) {
  return userModel.findOne({ userName: username, password: password });
}

app.post("/signup", async (req, res) => {
  const userName = req.body.userName;
  const password = req.body.password;
  const name = req.body.name;

  try {
    const existingUser = await userModel.findOne({ userName });
    if (existingUser) {
      return res.status(400).send("Username already exists");
    }

    const user = new userModel({ userName, password, name });
    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating user");
  }
});

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", async function (req, res) {
  const users = await userModel.find({});
  if (users.length === 0) {
    return res.status(404).json({ msg: "No users found" });
  }

  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const loggedInUsername = decoded.username;

    const filteredUsers = users.filter(
      (user) => user.userName !== loggedInUsername,
    );
    return res.status(200).json({ users: filteredUsers });
  } catch (err) {
    return res.status(403).json({ msg: "Invalid token" });
  }
});

app.listen(3000);
