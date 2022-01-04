import express from "express";
const router = express.Router();

import { userSignup, userLogin } from "../controller/userAuthentication.js";
import { authenticate } from "../middleware/authenticate.js";

router.post("/register", userSignup);
router.post("/login", userLogin);
router.get("/about", authenticate, (req, res) => {
  res.send(req.rootUser);
});

export default router;
