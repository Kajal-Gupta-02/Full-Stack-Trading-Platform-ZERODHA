import React, { useState } from "react";

function Hero() {
  const [query, setQuery] = useState("");

  return (
    <div style={{ backgroundColor: "#f6f7f8", borderBottom: "1px solid #efefef", padding: "36px 0 24px" }}>
      <div className="container" style={{ maxWidth: 1100 }}>
        <div className="d-flex align-items-center gap-3 mb-4 flex-wrap">
          <h1 className="fw-bold mb-0" style={{ fontSize: "2rem", flex: 1 }}>Support Portal</h1>
          <button
            className="btn"
            style={{ backgroundColor: "#387ed1", color: "#fff", borderRadius: 4, padding: "10px 20px", fontSize: "0.95rem" }}
          >
            My tickets
          </button>
        </div>
        <div
          className="d-flex align-items-center"
          style={{ background: "#fff", border: "1px solid #e0e4ea", borderRadius: 6, padding: "12px 18px", maxWidth: 700 }}
        >
          <i className="fa fa-search me-3" style={{ color: "#9aa9b7", fontSize: 17 }}></i>
          <input
            type="search"
            placeholder="Eg: How do I open my account, How do I activate F&O..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ border: 0, flex: 1, fontSize: "0.97rem", outline: "none", color: "#444" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
