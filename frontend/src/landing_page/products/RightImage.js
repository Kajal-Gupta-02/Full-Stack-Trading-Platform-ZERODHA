import React from "react";

function RightImage({ product }) {
  const { name, img, desc, learnMore } = product;
  return (
    <div className="container my-5 py-3">
      <div className="row align-items-center g-5">
        <div className="col-12 col-md-6">
          <h2 className="fw-bold mb-3">{name}</h2>
          <p className="text-muted mb-4" style={{ fontSize: "0.97rem", lineHeight: 1.8 }}>{desc}</p>
          {learnMore && (
            <a href={learnMore} style={{ textDecoration: "none", fontSize: "0.95rem" }}>
              Learn more &rarr;
            </a>
          )}
        </div>
        <div className="col-12 col-md-6 text-center">
          <img
            src={img}
            alt={name}
            className="img-fluid"
            style={{ maxWidth: 400, borderRadius: 10, boxShadow: "0 8px 30px rgba(23,31,81,0.1)" }}
            onError={(e) => { e.target.style.opacity = 0.3; }}
          />
        </div>
      </div>
    </div>
  );
}

export default RightImage;
