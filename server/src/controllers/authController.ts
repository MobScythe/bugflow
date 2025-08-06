import { Request, Response } from "express";
import { LoginRequest, RegisterRequest, UpdateRequest } from "../types";
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
      res.status(409).json({ message: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });
    const token = generateToken(newUser.id);
    const { password: _, ...safeUser } = newUser;
    return res.status(201).json({ newUser: safeUser, token });
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request<{}, {}, LoginRequest>,
  res: Response,
  next: Function
) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const token = generateToken(user.id);
    const { password: _, ...safeUser } = user;
    return res.status(200).json({ user: safeUser, token });
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (
  req: Request<{}, {}, UpdateRequest>,
  res: Response,
  next: Function
) => {
  const { name, email, password } = req.body;
};

export const checkAuth = async (
  req: Request,
  res: Response,
  next: Function
) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    next(error);
  }
};
