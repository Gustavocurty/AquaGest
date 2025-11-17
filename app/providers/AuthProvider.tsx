"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { MOCK_USER } from "@/lib/mockUser";
import { storage } from "@/lib/storage";

interface User {
  email: string;
  name: string;
  role: string;
  id: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const savedAuth = storage.getAuth();
    if (savedAuth) {
      setUser(savedAuth);
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate async login
    await new Promise(resolve => setTimeout(resolve, 500));

    if (email === MOCK_USER.email && password === MOCK_USER.password) {
      const userData = {
        email: MOCK_USER.email,
        name: MOCK_USER.name,
        role: MOCK_USER.role,
        id: MOCK_USER.id,
        avatar: MOCK_USER.avatar
      };
      setUser(userData);
      storage.setAuth(userData);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    storage.clearAuth();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
