import React from "react";

function Hero() {
  return (
    <div className="container text-center py-5 border-bottom mb-4">
      <h1 className="fw-bold mb-3">Zerodha Products</h1>
      <h4 className="text-muted fw-normal mb-3">Sleek, modern and intuitive trading platforms</h4>
      <p className="text-muted">
        Check out our{" "}
        <a href="#" style={{ textDecoration: "none" }}>
          investment offerings &rarr;
        </a>
      </p>
    </div>
  );
}

export default Hero;
