import React from "react";

function Education() {
  return (
    <div className="container py-5">
      <div className="row align-items-center g-5">
        <div className="col-12 col-md-6 text-center">
          <img
            src="/Media/education.svg"
            alt="Market education"
            className="img-fluid"
            style={{ maxWidth: 420 }}
            onError={(e) => { e.target.style.opacity = 0.3; }}
          />
        </div>
        <div className="col-12 col-md-6">
          <h2 className="fw-bold mb-3" style={{ fontSize: "1.8rem" }}>Free and open market education</h2>
          <p className="text-muted mb-2" style={{ fontSize: "0.95rem" }}>
            Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
          </p>
          <a href="https://zerodha.com/varsity/" target="_blank" rel="noreferrer" style={{ textDecoration: "none", fontSize: "0.95rem" }}>
            Varsity &rarr;
          </a>
          <p className="text-muted mb-2 mt-4" style={{ fontSize: "0.95rem" }}>
            TradingQ&amp;A, the most active trading and investment community in India for all your market related queries.
          </p>
          <a href="https://tradingqna.com" target="_blank" rel="noreferrer" style={{ textDecoration: "none", fontSize: "0.95rem" }}>
            TradingQ&amp;A &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
