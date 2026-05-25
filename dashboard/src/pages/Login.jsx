import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated, setUsername } = useContext(AuthContext);
  const [form, setForm]     = useState({ email: "", password: "" });
  const [busy, setBusy]     = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBusy(true);
    try {
      const { data } = await axios.post(
        "http://localhost:4000/login",
        form,
        { withCredentials: true }
      );
      if (data.success) {
        setIsAuthenticated(true);
        setUsername(data.user);
        toast.success(data.message || "Logged in!", { position: "bottom-right" });
        setTimeout(() => navigate("/dashboard"), 800);
      } else {
        toast.error(data.message || "Login failed", { position: "bottom-left" });
      }
    } catch (err) {
      const msg =
        err?.response?.data?.message || "Login failed — is the backend running?";
      toast.error(msg, { position: "bottom-left" });
    } finally {
      setBusy(false);
      setForm({ email: "", password: "" });
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="form_container">
        <div className="form-logo">
          <img src="/logo.png" alt="Zerodha" onError={(e) => { e.target.style.display = "none"; }} />
          <span>Kite</span>
        </div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              placeholder="Enter your email"
              onChange={handleChange}
              autoComplete="email"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              value={form.password}
              placeholder="Enter your password"
              onChange={handleChange}
              autoComplete="current-password"
              required
            />
          </div>
          <button type="submit" disabled={busy}>
            {busy ? "Logging in…" : "Login"}
          </button>
          <span className="switch-link">
            Don't have an account?{" "}
            <Link to="/signup">Sign up</Link>
          </span>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
