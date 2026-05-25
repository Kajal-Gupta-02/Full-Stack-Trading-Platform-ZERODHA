import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username,        setUsername]        = useState("");
  const [loading,         setLoading]         = useState(true);

  useEffect(() => {
    const verify = async () => {
      try {
        const { data } = await axios.post(
          "http://localhost:4000/",
          {},
          { withCredentials: true }
        );
        if (data.status) {
          setIsAuthenticated(true);
          setUsername(data.user || "");
        } else {
          setIsAuthenticated(false);
        }
      } catch {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };
    verify();
  }, []);

  const logout = async () => {
    // Clear cookie server-side by expiring it
    document.cookie = "token=; Max-Age=0; path=/;";
    setIsAuthenticated(false);
    setUsername("");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated, setIsAuthenticated,
        username,        setUsername,
        loading,         logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
