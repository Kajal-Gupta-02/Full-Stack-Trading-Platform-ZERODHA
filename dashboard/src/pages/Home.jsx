import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../context/AuthContext";

const AuthHome = () => {
  const { isAuthenticated, username, logout, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  if (loading)
    return (
      <div className="home_page">
        <div className="spinner" />
      </div>
    );

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (isAuthenticated) {
    return (
      <div className="home_page">
        <img
          src="/logo.png"
          alt="Zerodha"
          style={{ width: 80, marginBottom: 8 }}
          onError={(e) => { e.target.style.display = "none"; }}
        />
        <h4>
          Welcome back, <span>{username}</span>!
        </h4>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Link to="/dashboard">
            <button className="btn-primary">Go to Dashboard</button>
          </Link>
          <button className="btn-secondary" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <ToastContainer />
      </div>
    );
  }

  return (
    <div className="home_page">
      <img
        src="/logo.png"
        alt="Zerodha"
        style={{ width: 100, marginBottom: 8 }}
        onError={(e) => { e.target.style.display = "none"; }}
      />
      <h3>Zerodha Kite</h3>
      <p>India's #1 trading platform</p>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/login">
          <button className="btn-primary">Login</button>
        </Link>
        <Link to="/signup">
          <button className="btn-secondary">Sign Up</button>
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AuthHome;
