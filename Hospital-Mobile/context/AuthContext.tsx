import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type UserRole = "admin" | "doctor" | "patient";

export interface User {
  _id?: string;
  id?: string;
  firstName?: string;
  lastName?: string;
  name?: string;
  email?: string;
  role: UserRole;
  profileImage?: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  login: (user: User, token: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStoredSession();
  }, []);

  const loadStoredSession = async () => {
    try {
      const storedUser = await AsyncStorage.getItem("hospital_user");
      const storedToken = await AsyncStorage.getItem("hospital_token");

      if (storedUser && storedToken) {
        setUser(JSON.parse(storedUser));
        setToken(storedToken);
      }
    } catch (error) {
      console.log("Failed to restore session:", error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (userData: User, userToken: string) => {
    try {
      await AsyncStorage.setItem(
        "hospital_user",
        JSON.stringify(userData)
      );

      await AsyncStorage.setItem("hospital_token", userToken);

      setUser(userData);
      setToken(userToken);
    } catch (error) {
      console.log("Failed to save session:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("hospital_user");
      await AsyncStorage.removeItem("hospital_token");

      setUser(null);
      setToken(null);
    } catch (error) {
      console.log("Failed to logout:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside an AuthProvider"
    );
  }

  return context;
}