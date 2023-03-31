// src/App.js
import React from "react";
import AuthForm from "./components/AuthForm";

const App = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const token = localStorage.getItem("token");

  return (
    <div className="App">
      {token ? (
        <button onClick={handleLogout}>Log Out</button>
      ) : (
        <>
          <AuthForm type="register" />
          <AuthForm type="login" />
        </>
      )}
    </div>
  );
};

export default App;
