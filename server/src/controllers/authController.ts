import { Request, Response } from "express";
import { RegisterRequest } from "../types";
import prisma from "../utils/database";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwt";

export const register = async (
  req: Request<{}, {}, RegisterRequest>,
  res: Response,
  next: Function
) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password must be at least 6 characters" });
  }
  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });
    const token = generateToken(newUser.id);
    return res.status(201).json({ newUser, token });
  } catch (error) {
    next(error);
  }
};

export const login = async (req: Request, res: Response, next: Function) => {
  try {
    return res.status(200).json({ message: "success" });
  } catch (error) {
    next(error);
  }
};
