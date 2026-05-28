import React from "react";
import { useNavigate } from "react-router-dom";

const partners = [
  { img: "/Media/smallcaseLogo.png", name: "smallcase", desc: "Thematic investment platform" },
  { img: "/Media/streakLogo.png",    name: "Streak",     desc: "Algo and strategy platform" },
  { img: "/Media/sensibullLogo.svg", name: "Sensibull",  desc: "Options trading platform" },
  { img: "/Media/zerodhaFundhouse.png", name: "Zerodha Fundhouse", desc: "Asset management" },
  { img: "/Media/goldenpiLogo.png",  name: "GoldenPi",  desc: "Bonds trading platform" },
  { img: "/Media/dittoLogo.png",     name: "Ditto",     desc: "Insurance" },
];

function Universe() {
  const navigate = useNavigate();
  return (
    <div className="container py-5 mt-3 text-center">
      <h2 className="fw-bold mb-2">The Zerodha Universe</h2>
      <p className="text-muted mb-5" style={{ fontSize: "1.05rem" }}>
        Extend your trading and investment experience even further with our partner platforms
      </p>
      <div className="row g-4 justify-content-center">
        {partners.map(({ img, name, desc }) => (
          <div className="col-6 col-md-4" key={name}>
            <div
              className="p-4 rounded border h-100 d-flex flex-column align-items-center justify-content-center"
              style={{ transition: "box-shadow 0.2s", minHeight: 180 }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 4px 20px rgba(56,126,209,0.12)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <img
                src={img}
                alt={name}
                style={{ maxHeight: 60, maxWidth: "70%", objectFit: "contain", marginBottom: 12 }}
                onError={(e) => { e.target.replaceWith(Object.assign(document.createElement("span"), { textContent: name, className: "fw-bold fs-5" })); }}
              />
              <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="btn btn-primary mt-5 px-4 py-2"
        style={{ backgroundColor: "#387ed1", border: "none" }}
        onClick={() => navigate("/signup")}
      >
        Sign up now
      </button>
    </div>
  );
}

export default Universe;
