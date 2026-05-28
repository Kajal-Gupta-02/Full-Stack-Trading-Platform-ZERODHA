import React from "react";

const pricingCards = [
  {
    img: "/Media/pricing0.svg",
    title: "Free equity delivery",
    desc: "All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.",
  },
  {
    img: "/Media/intradayTrades.svg",
    title: "Intraday and F&O trades",
    desc: "Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity.",
  },
  {
    img: "/Media/pricingMF.svg",
    title: "Free direct mutual funds",
    desc: "All direct mutual fund investments are absolutely free — ₹0 commissions and DP charges.",
  },
];

function Hero() {
  return (
    <div className="container py-5">
      <div className="text-center pb-4 mb-4 border-bottom">
        <h1 className="fw-bold mb-3">Pricing</h1>
        <h4 className="text-muted fw-normal">Free equity investments and flat ₹20 intraday and F&amp;O trades.</h4>
      </div>
      <div className="row g-4 text-center">
        {pricingCards.map(({ img, title, desc }) => (
          <div className="col-12 col-md-4" key={title}>
            <div className="p-4 h-100">
              <img
                src={img}
                alt={title}
                className="mb-4"
                style={{ height: 80, objectFit: "contain" }}
                onError={(e) => { e.target.style.opacity = 0.2; }}
              />
              <h5 className="fw-bold mb-3">{title}</h5>
              <p className="text-muted" style={{ fontSize: "0.95rem" }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
