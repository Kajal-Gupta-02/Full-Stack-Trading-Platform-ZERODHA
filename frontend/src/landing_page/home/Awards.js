import React from "react";

function Awards() {
  const items = [
    ["Futures and Options", "Stocks & IPOs"],
    ["Commodity derivatives", "Direct mutual funds"],
    ["Currency derivatives", "Bonds and Govt. Securities"],
  ];

  return (
    <div className="container py-5">
      <div className="row align-items-center g-5">
        <div className="col-12 col-md-6 text-center">
          <img
            src="/Media/largestBroker.svg"
            alt="Largest broker in India"
            className="img-fluid"
            style={{ maxWidth: 460 }}
            onError={(e) => { e.target.style.opacity = 0.3; }}
          />
        </div>
        <div className="col-12 col-md-6">
          <h2 className="fw-bold mb-3" style={{ fontSize: "1.8rem" }}>Largest stock broker in India</h2>
          <p className="text-muted mb-4" style={{ fontSize: "1.05rem" }}>
            2+ crore Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            {[0, 1].map((col) => (
              <div className="col-6" key={col}>
                <ul className="list-unstyled">
                  {items.map((row) => (
                    <li key={row[col]} className="mb-2" style={{ fontSize: "1rem" }}>
                      <span className="text-muted">— </span>{row[col]}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-3">
            <img
              src="/Media/pressLogos.png"
              alt="Press logos"
              className="img-fluid"
              style={{ maxWidth: "85%", opacity: 0.75 }}
              onError={(e) => { e.target.style.display = "none"; }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
