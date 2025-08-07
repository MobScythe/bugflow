export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface UpdateRequest {
  name: string;
  email: string;
  password: string;
}

export type SafeUser = {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
};

declare global {
  namespace Express {
    interface Request {
      user?: SafeUser;
    }
  }
}

export interface CreateProjectRequest {
  name: string;
  description?: string;
}
