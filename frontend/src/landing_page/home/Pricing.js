import React from "react";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <div className="container py-5">
      <div className="row align-items-center g-4">
        <div className="col-12 col-md-4">
          <h2 className="fw-bold mb-3" style={{ fontSize: "1.8rem" }}>Unbeatable pricing</h2>
          <p className="text-muted mb-3" style={{ fontSize: "0.95rem" }}>
            We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
          </p>
          <Link to="/pricings" style={{ textDecoration: "none", fontSize: "0.95rem" }}>
            See pricing &rarr;
          </Link>
        </div>

        <div className="col-12 col-md-4">
          <div className="border rounded text-center p-4">
            <h2 className="fw-bold mb-2" style={{ fontSize: "2.5rem", color: "#1a1a1a" }}>₹0</h2>
            <p className="text-muted mb-0">Free equity delivery and<br />direct mutual funds</p>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="border rounded text-center p-4">
            <h2 className="fw-bold mb-2" style={{ fontSize: "2.5rem", color: "#1a1a1a" }}>₹20</h2>
            <p className="text-muted mb-0">Intraday and F&O<br />trades</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
