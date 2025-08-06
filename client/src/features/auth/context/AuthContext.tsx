import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { clearToken, getToken, setToken } from "@/shared/utils/authStorage";

interface AuthContextProps {
  isAuthenticated: boolean;
  setAuthenticated: (token: string) => void;
  clearAuthentication: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!getToken());

  const setAuthenticated = (token: string) => {
    setToken(token);
    setIsAuthenticated(true);
  };

  const clearAuthentication = () => {
    clearToken();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setAuthenticated, clearAuthentication }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
