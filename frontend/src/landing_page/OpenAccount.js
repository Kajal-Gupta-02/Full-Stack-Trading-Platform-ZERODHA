import React from "react";
import { useNavigate } from "react-router-dom";

function OpenAccount() {
  const navigate = useNavigate();
  return (
    <div className="container text-center py-5 my-4">
      <h2 className="mb-3 fw-bold">Open a Zerodha account</h2>
      <p className="text-muted fs-5 mb-4">
        Excellent platforms and apps, ₹0 investments and flat ₹20 intraday and F&amp;O trades.
      </p>
      <button
        className="btn btn-primary px-4 py-2"
        style={{ backgroundColor: "#387ed1", border: "none", fontSize: "1.05rem", borderRadius: 4 }}
        onClick={() => navigate("/signup")}
      >
        Sign up for free
      </button>
    </div>
  );
}

export default OpenAccount;
