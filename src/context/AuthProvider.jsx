import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");
    if (storedAuth) {
      setAuth(JSON.parse(storedAuth));
    }
  }, []);

  const login = async (username, password) => {
    try {
      const url = `${import.meta.env.VITE_BACKEND_URL}/auth/log-in`;
      const response = await axios.post(url, { username, password });
      const userData = response.data;
      console.log(response)
      setAuth(userData);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
        
      }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthContext;