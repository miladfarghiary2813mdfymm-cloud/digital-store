import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const register = (userData) => {
    const savedUsers = localStorage.getItem("users");

    const users = savedUsers ? JSON.parse(savedUsers) : [];

    const existingUser = users.find(
      (item) => item.email === userData.email
    );

    if (existingUser) {
      return false;
    }

    const newUser = {
      id: Date.now(),
      name: userData.name,
      email: userData.email,
      password: userData.password,
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    const loggedInUser = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    };

    localStorage.setItem("user", JSON.stringify(loggedInUser));
    setUser(loggedInUser);

    return true;
  };

  const login = (email, password) => {
    const savedUsers = localStorage.getItem("users");

    if (!savedUsers) {
      return false;
    }

    const users = JSON.parse(savedUsers);

    const foundUser = users.find(
      (item) =>
        item.email === email &&
        item.password === password
    );

    if (!foundUser) {
      return false;
    }

    const loggedInUser = {
      id: foundUser.id,
      name: foundUser.name,
      email: foundUser.email,
    };

    localStorage.setItem("user", JSON.stringify(loggedInUser));
    setUser(loggedInUser);

    return true;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}