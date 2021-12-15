import express from "express";

import { registerUser } from "../controllers/userControllers.js";

const router = express.Router();

router.route("/").post(registerUser);
// router.rpost("/login", authUser);

export default router;
