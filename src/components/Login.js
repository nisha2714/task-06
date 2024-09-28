import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { app } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = getAuth(app);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/list");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "400px", borderRadius: "10px" }}>
        <h1 className="text-center mb-4" style={{ fontSize: "30px" }}>Log In</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-describedby="emailHelp"
              style={{ borderRadius: "5px", borderColor: "#ced4da" }}
            />
            <div id="emailHelp" className="form-text">We'll never share your email.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ borderRadius: "5px", borderColor: "#ced4da" }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{ borderRadius: "5px" }}
          >
            Log In
          </button>
        </form>
        <p className="text-center mt-3">
          Don't have an account?{" "}
          <a href="/signup" className="text-primary">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
