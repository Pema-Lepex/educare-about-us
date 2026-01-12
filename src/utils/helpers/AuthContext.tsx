import React, { createContext, useContext, useState, useEffect } from "react";
import { getSharedAuthUser } from "./SharedAuth";

interface User {
  name: string;
  profile_picture: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    console.log("[AuthContext] useEffect running - v2");
    const authData = getSharedAuthUser();
    console.log("[AuthContext] getSharedAuthUser returned:", authData);

    if (authData) {
      const userData = {
        name: authData.profile?.name || "",
        profile_picture: authData.profile?.profile_picture || "",
      };
      console.log("[AuthContext] Setting user to:", userData);
      setUser(userData);
    } else {
      console.log("[AuthContext] No authData, setting user to null");
      setUser(null);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user?.name }}>
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
