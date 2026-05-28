import React from "react";
import { Link } from "react-router-dom";

const trustPoints = [
  {
    title: "Customer-first always",
    body: "That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores worth of equity investments.",
  },
  {
    title: "No spam or gimmicks",
    body: "No gimmicks, spam, \"gamification\", or annoying push notifications. High quality apps that you use at your pace.",
  },
  {
    title: "The Zerodha Universe",
    body: "Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer tailored services for your needs.",
  },
  {
    title: "Do better with money",
    body: "With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better.",
  },
];

function Stats() {
  return (
    <div className="container py-5">
      <div className="row g-5 align-items-center">
        <div className="col-12 col-md-6">
          <h2 className="fw-bold mb-4" style={{ fontSize: "1.8rem" }}>Trust with confidence</h2>
          {trustPoints.map(({ title, body }) => (
            <div className="mb-4" key={title}>
              <h6 className="fw-bold mb-1" style={{ fontSize: "1rem", color: "#1a1a1a" }}>{title}</h6>
              <p className="text-muted mb-0" style={{ fontSize: "0.95rem" }}>{body}</p>
            </div>
          ))}
        </div>
        <div className="col-12 col-md-6 text-center">
          <img
            src="/Media/ecosystem.png"
            alt="Zerodha ecosystem"
            className="img-fluid mb-3"
            style={{ maxWidth: 440 }}
            onError={(e) => { e.target.style.opacity = 0.3; }}
          />
          <div className="d-flex justify-content-center gap-4">
            <Link to="/products" style={{ textDecoration: "none", fontSize: "0.95rem" }}>
              Explore our products &rarr;
            </Link>
            <a href="https://kite.zerodha.com" target="_blank" rel="noreferrer" style={{ textDecoration: "none", fontSize: "0.95rem" }}>
              Try Kite demo &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
