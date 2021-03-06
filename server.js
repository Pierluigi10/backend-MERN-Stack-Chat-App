import "./config/config.js";
import "./config/db.js";
import express from "express";
import dotenv from "dotenv";
import { chats } from "./data/data.js";
import cors from "cors";
import colors from "colors";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleswares/errorMiddleware.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json()); // to accept Json data

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, // accept incoming cookies
  })
);

app.get("/", (req, res) => {
  res.send("Api is running");
});

// app.get("/api/chat", (req, res) => {
//   res.send(chats);
// });

// app.get("/api/chat/:id", (req, res) => {
//   // console.log(req.params.id)
//   const singleChat = chats.find((chat) => chat._id === req.params.id);
//   res.send(singleChat);
// });

app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, (req, res) => {
  console.log(
    "API Listening on port ".yellow +
      `http://localhost:${PORT}`.yellow.underline.bold
  );
});
