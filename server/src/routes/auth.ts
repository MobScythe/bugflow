import express from "express";
import {
  checkAuth,
  login,
  register,
  updateUser,
} from "../controllers/authController";
import { authenticate } from "../middleware/auth";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.put("/user", authenticate, updateUser);
router.get("/user", authenticate, checkAuth);

export default router;
