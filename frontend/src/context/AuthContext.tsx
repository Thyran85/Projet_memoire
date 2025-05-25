import { createContext, useContext, useState } from "react";
import type  { ReactNode } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  userType: "client" | "admin" | null;
  login: (type: "client" | "admin") => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<"client" | "admin" | null>(null);

  const login = (type: "client" | "admin") => {
    setIsLoggedIn(true);
    setUserType(type);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserType(null);
    localStorage.removeItem("token"); // Simuler la suppression du token
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userType, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};