import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

// const retrieveStoredToken = () => {
//   const tokenData = localStorage.getItem("token");
//   return tokenData;
// };
export const AuthContextProvider = (props) => {
  let initialToken;
  if (typeof window !== "undefined") {
    initialToken = localStorage.getItem("token");
  } else {
    initialToken = null;
  }

  console.log("InitialToken :", initialToken);
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const LoginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const LogoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: LoginHandler,
    logout: LogoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
