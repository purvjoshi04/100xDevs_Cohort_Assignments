import express from "express";

const app = express();

import { userMiddleware, kidneyMiddleware } from "./middleware.js";

app.listen(3000);

app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
  res.send("Your heart is healthy");
});

app.get("/kidney-check", userMiddleware, kidneyMiddleware, (req, res) => {
  res.send("Your kidney is in good condition");
});
