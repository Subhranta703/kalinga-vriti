import { createContext, useState, useEffect } from "react";


export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("kv_user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const login = (userData, token) => {
    localStorage.setItem("kv_user", JSON.stringify(userData));
    localStorage.setItem("kv_token", token);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("kv_user");
    localStorage.removeItem("kv_token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
