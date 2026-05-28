import React, { useState } from "react";

const items = [
  {
    title: "Account Opening",
    icon: "fa-plus-circle",
    children: ["Online Account Opening", "Offline Account Opening", "Company, Partnership and HUF Account Opening", "NRI Account Opening", "Changes at Zerodha", "Zerodha IDFC FIRST Bank 3-in-1 Account", "Getting Started"],
  },
  {
    title: "Your Zerodha Account",
    icon: "fa-user-circle",
    children: ["Login Credentials", "Account Modifications and Segment Addition", "DP ID and bank details", "Your Profile", "Transfer and conversion of shares"],
  },
  {
    title: "Kite",
    icon: "fa-rocket",
    children: ["IPO", "Trading FAQs", "Margin Trading Facility (MTF) and Margins", "Charts and Orders", "Alerts and Nudges", "General"],
  },
  {
    title: "Funds",
    icon: "fa-inr",
    children: ["Add money", "Withdraw money", "Add bank accounts", "eMandates"],
  },
  {
    title: "Console",
    icon: "fa-cog",
    children: ["Portfolio", "Corporate actions", "Funds statement", "Reports", "Profile", "Segments"],
  },
  {
    title: "Coin",
    icon: "fa-circle-o-notch",
    children: ["Mutual funds", "National Pension Scheme (NPS)", "Features on Coin", "Payments and Orders", "General"],
  },
];

function RaiseTickets() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="container py-5" style={{ maxWidth: 1100 }}>
      <h5 className="mb-4 text-muted fw-normal">To create a ticket, select a relevant topic.</h5>
      <div className="row g-4">
        {/* Accordion */}
        <div className="col-12 col-lg-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="mb-3 rounded"
              style={{ border: "1px solid #e2e6ec", overflow: "hidden", transition: "box-shadow 0.2s" }}
            >
              <button
                className="w-100 d-flex align-items-center text-start"
                style={{ background: "#fff", border: "none", padding: "18px 20px", cursor: "pointer" }}
                onClick={() => toggle(i)}
              >
                <div
                  className="d-flex align-items-center justify-content-center me-4"
                  style={{ width: 56, height: 56, borderRight: "1px solid #eef1f5", color: "#387ed1", flexShrink: 0 }}
                >
                  <i className={`fa ${item.icon}`} style={{ fontSize: 20 }}></i>
                </div>
                <span style={{ flex: 1, fontWeight: 600, fontSize: "1rem", color: "#222" }}>{item.title}</span>
                <i
                  className={`fa fa-chevron-${openIndex === i ? "up" : "down"} me-1`}
                  style={{ color: "#9aa9b7", fontSize: 14, transition: "transform 0.2s" }}
                ></i>
              </button>

              {openIndex === i && (
                <div style={{ borderTop: "1px solid #f1f3f6", padding: "14px 20px 20px 96px", background: "#fff" }}>
                  <ul className="list-unstyled mb-0">
                    {item.children.map((c, idx) => (
                      <li key={idx} className="py-2" style={{ borderBottom: idx < item.children.length - 1 ? "1px solid #f5f6f8" : "none" }}>
                        <a href="#" style={{ color: "#387ed1", textDecoration: "none", fontSize: "0.93rem" }}>
                          {c}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="col-12 col-lg-4">
          {/* Highlight box */}
          <div
            className="p-3 mb-4 rounded"
            style={{ backgroundColor: "#fff8ee", borderLeft: "5px solid #f39c12" }}
          >
            <a href="#" className="d-block mb-2" style={{ color: "#387ed1", textDecoration: "none", fontSize: "0.9rem" }}>
              Latest Intraday leverages and Square-off timings
            </a>
            <a href="#" style={{ color: "#387ed1", textDecoration: "none", fontSize: "0.9rem" }}>
              Offer for sale (OFS) – Updates
            </a>
          </div>

          {/* Quick links */}
          <div className="rounded" style={{ border: "1px solid #e2e6ec", overflow: "hidden" }}>
            <div className="px-3 py-2" style={{ backgroundColor: "#f6f7f8", borderBottom: "1px solid #e2e6ec" }}>
              <h6 className="mb-0 fw-bold" style={{ fontSize: "0.9rem" }}>Quick links</h6>
            </div>
            <ol className="list-unstyled mb-0">
              {[
                "Track account opening",
                "Track segment activation",
                "Intraday margins",
                "Kite user manual",
                "Learn how to create a ticket",
              ].map((l, i) => (
                <li
                  key={i}
                  className="d-flex align-items-center gap-3 px-3 py-2"
                  style={{ borderBottom: i < 4 ? "1px solid #f2f3f5" : "none" }}
                >
                  <span
                    className="d-inline-flex align-items-center justify-content-center rounded-circle fw-bold"
                    style={{ width: 28, height: 28, backgroundColor: "#e8f0fe", color: "#387ed1", fontSize: "0.8rem", flexShrink: 0 }}
                  >
                    {i + 1}
                  </span>
                  <a href="#" style={{ color: "#387ed1", textDecoration: "none", fontSize: "0.9rem" }}>{l}</a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RaiseTickets;
