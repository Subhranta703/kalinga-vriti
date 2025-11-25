import { useState, useEffect } from 'react';

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem('kv_token');
      setIsAuthenticated(!!token && token !== 'undefined' && token !== 'null');
    };

    checkToken();

    // Listen for token changes across tabs or after login
    window.addEventListener('storage', checkToken);

    return () => {
      window.removeEventListener('storage', checkToken);
    };
  }, []);

  return isAuthenticated;
}