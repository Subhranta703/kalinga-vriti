import { useEffect, useState } from "react";

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("kv_token")
  );

  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem("kv_token");
      setIsAuthenticated(!!token);
    };

    // 🔥 Listen for token changes (Google login, logout, manual login)
    window.addEventListener("storage", checkToken);

    // 🔥 Run once on mount
    checkToken();

    return () => {
      window.removeEventListener("storage", checkToken);
    };
  }, []);

  return isAuthenticated;
}
