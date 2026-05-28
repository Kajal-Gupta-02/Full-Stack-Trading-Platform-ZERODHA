import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="container text-center py-5 mb-2" style={{ maxWidth: 900 }}>
      {/* Hero illustration */}
      <div className="mb-4">
        <img
          src="/Media/homeHero.png"
          alt="Invest in everything"
          className="img-fluid"
          style={{ maxHeight: 380, objectFit: "contain" }}
          onError={(e) => {
            // Fallback if image not found
            e.target.style.display = "none";
          }}
        />
      </div>

      <h1 style={{ fontWeight: 600, fontSize: "2.2rem", color: "#1a1a1a", marginBottom: "0.75rem" }}>
        Invest in everything
      </h1>
      <p className="text-muted" style={{ fontSize: "1.1rem", maxWidth: 520, margin: "0 auto 2rem" }}>
        Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
      </p>
      <button
        className="btn btn-primary px-4 py-2"
        style={{
          backgroundColor: "#387ed1",
          border: "none",
          fontSize: "1.05rem",
          fontWeight: 500,
          borderRadius: 4,
          minWidth: 220,
        }}
        onClick={() => navigate("/signup")}
      >
        Sign up for free
      </button>
    </div>
  );
}

export default Hero;
