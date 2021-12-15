import express from "express";
import { chats } from "./data/data.js";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.listen(PORT, (req, res) => {
  console.log(`API listening on port http://localhost:${PORT}`);
});
