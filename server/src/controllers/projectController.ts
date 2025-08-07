import { Request, Response, NextFunction } from "express";
import { CreateProjectRequest } from "../types";

export const createProject = async (
  req: Request<{}, {}, CreateProjectRequest>,
  res: Response,
  next: Function
) => {
  try {
  } catch (error) {
    next(error);
  }
};
