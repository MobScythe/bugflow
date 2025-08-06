import { apiClient } from "@/shared/lib/api";
import type { AuthResponse, LoginRequest, RegisterRequest } from "../types";

export const register = async (credentials: RegisterRequest) => {
  const response = await apiClient.post<AuthResponse>(
    "/api/auth/register",
    credentials
  );
  return response.data;
};

export const login = async (credentials: LoginRequest) => {
  const response = await apiClient.post<AuthResponse>(
    "/api/auth/login",
    credentials
  );
  return response.data;
};
