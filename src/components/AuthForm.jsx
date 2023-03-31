// src/components/AuthForm.js
import React, { useState } from "react";
import axios from "axios";

const AuthForm = ({ type }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `http://localhost:8000/api/accounts/${type}/`;
    try {
      const response = await axios.post(url, formData);
      if (type === "login") {
        localStorage.setItem("token", response.data.token);
      }
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{type === "register" ? "Sign Up" : "Log In"}</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">
        {type === "register" ? "Sign Up" : "Log In"}
      </button>
    </form>
  );
};

export default AuthForm;
