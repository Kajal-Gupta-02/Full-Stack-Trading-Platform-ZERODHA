import React, { useState } from "react";

const Signup = () => {
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleGetOtp = async () => {
    if (!/^\d{10}$/.test(mobile)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    setError("");
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSent(true);
  };

  const accountTypes = [
    {
      title: "Indian citizen",
      desc: "For retail individual investors and traders",
      link: "#",
    },
    {
      title: "NRI",
      desc: "For Non-Resident Indians looking to invest in Indian markets",
      link: "#",
    },
    {
      title: "Minor account",
      desc: "Teach your little ones about money & invest for their future with them",
      link: "#",
    },
    {
      title: "Corporate / LLP / Partnership",
      desc: "Manage your business surplus and investments easily",
      link: "#",
    },
  ];

  const faqs = [
    { q: "What is a Zerodha account?", a: "A Zerodha account allows you to invest in equity, mutual funds, bonds, IPOs, and more." },
    { q: "What documents are required to open a demat account?", a: "PAN, Aadhaar, bank proof, and a photo are required to open an account." },
    { q: "Is Zerodha account opening free?", a: "Account opening is free. Some services may have small charges." },
    { q: "Are there any maintenance charges?", a: "There are minimal annual maintenance charges for your demat account." },
    { q: "What is a Basic Services Demat Account (BSDA)?", a: "BSDA is a low-cost demat account for investors with a holding value less than ₹50,000." },
    { q: "Can I open an account using the mobile app?", a: "Yes, you can start the account opening process through the Zerodha mobile app." },
  ];

  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      {/* ── Hero / OTP Section ── */}
      <section style={{ padding: "64px 0", backgroundColor: "#fff" }}>
        <div className="container" style={{ maxWidth: "80%" }}>
          <h1 className="fw-bold mb-2" style={{ fontSize: "2.2rem", color: "#1a1a1a" }}>
            Open a free demat &amp; trading account online
          </h1>
          <p className="text-muted mb-4" style={{ fontSize: "1.2rem" }}>
            Start investing brokerage‑free and join a community of 1.5+ crore investors and traders
          </p>
          <h5 className="fw-semibold mb-1" style={{ fontSize: "1.1rem" }}>Signup now</h5>
          <p className="text-muted mb-3" style={{ fontSize: "0.9rem" }}>Or track your existing application</p>

          {sent ? (
            <div className="alert alert-success" style={{ maxWidth: 480 }}>
              OTP sent to +91-{mobile}. Please check your messages.
            </div>
          ) : (
            <>
              <div
                className="d-flex align-items-center border rounded p-2 mb-2"
                style={{ maxWidth: 480, borderColor: "#ccc" }}
              >
                <span className="me-2 ps-1" style={{ fontSize: "1.1rem", color: "#444", whiteSpace: "nowrap" }}>
                  🇮🇳 +91
                </span>
                <input
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  placeholder="Enter your mobile number"
                  className="form-control border-0 shadow-none"
                  style={{ fontSize: "1rem" }}
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/, ""))}
                />
              </div>
              {error && <p className="text-danger mb-2" style={{ fontSize: "0.85rem" }}>{error}</p>}
              <button
                className="btn btn-primary px-4 py-2"
                style={{ backgroundColor: "#387ed1", border: "none", minWidth: 160 }}
                onClick={handleGetOtp}
                disabled={loading}
              >
                {loading ? "Sending…" : "Get OTP"}
              </button>
            </>
          )}
        </div>
      </section>

      {/* ── Steps ── */}
      <section style={{ padding: "60px 0", backgroundColor: "#f8f9fb" }}>
        <div className="container" style={{ maxWidth: "80%" }}>
          <h2 className="fw-bold text-center mb-5" style={{ fontSize: "1.8rem" }}>
            How to open an account in 3 steps
          </h2>
          <div className="row g-4 text-center">
            {[
              { icon: "fa-mobile", step: "1", title: "Enter mobile & Aadhaar details", desc: "Sign up with your mobile number and enter your Aadhaar-linked email for OTP verification." },
              { icon: "fa-id-card-o", step: "2", title: "Upload your documents", desc: "Upload PAN, bank statement, signature image, and a selfie. All online—no physical paperwork." },
              { icon: "fa-check-circle", step: "3", title: "Start investing", desc: "Once verified (usually within a day), access your account and start trading or investing." },
            ].map(({ icon, step, title, desc }) => (
              <div className="col-12 col-md-4" key={step}>
                <div className="p-4 h-100 rounded" style={{ backgroundColor: "#fff", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                  <div
                    className="mb-3 mx-auto d-flex align-items-center justify-content-center rounded-circle"
                    style={{ width: 56, height: 56, backgroundColor: "#e8f0fe" }}
                  >
                    <i className={`fa ${icon}`} style={{ fontSize: 22, color: "#387ed1" }}></i>
                  </div>
                  <span className="badge mb-2" style={{ backgroundColor: "#387ed1" }}>Step {step}</span>
                  <h6 className="fw-bold mb-2">{title}</h6>
                  <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Account types ── */}
      <section style={{ padding: "60px 0", backgroundColor: "#fff" }}>
        <div className="container" style={{ maxWidth: "80%" }}>
          <h2 className="fw-bold text-center mb-2" style={{ fontSize: "1.8rem" }}>Who can open an account?</h2>
          <p className="text-center text-muted mb-5">Choose the account type that suits you</p>
          <div className="row g-3">
            {accountTypes.map(({ title, desc }) => (
              <div className="col-12 col-md-6" key={title}>
                <div
                  className="p-4 h-100 rounded border"
                  style={{ cursor: "pointer", transition: "box-shadow 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 4px 20px rgba(56,126,209,0.12)")}
                  onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
                >
                  <h6 className="fw-bold mb-2" style={{ color: "#1a1a1a" }}>{title}</h6>
                  <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section style={{ padding: "60px 0", backgroundColor: "#f8f9fb" }}>
        <div className="container" style={{ maxWidth: "80%" }}>
          <h2 className="fw-bold text-center mb-5" style={{ fontSize: "1.8rem" }}>Frequently asked questions</h2>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="border-bottom">
                <button
                  className="btn btn-link w-100 text-start d-flex justify-content-between align-items-center py-3 px-0 text-decoration-none"
                  style={{ color: "#1a1a1a", fontWeight: 500 }}
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                >
                  {q}
                  <i className={`fa fa-chevron-${openFaq === i ? "up" : "down"} text-muted ms-2`} />
                </button>
                {openFaq === i && (
                  <p className="text-muted pb-3 mb-0" style={{ fontSize: "0.95rem" }}>{a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section style={{ padding: "60px 0", backgroundColor: "#fff" }}>
        <div className="container text-center" style={{ maxWidth: "80%" }}>
          <h2 className="fw-bold mb-2">Open a Zerodha account</h2>
          <p className="text-muted mb-4">Simple and intuitive apps · ₹0 for investments · ₹20 for intraday and F&amp;O trades.</p>
          <button
            className="btn btn-primary px-4 py-2"
            style={{ backgroundColor: "#387ed1", border: "none", fontSize: "1rem" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Signup for free
          </button>
        </div>
      </section>
    </>
  );
};

export default Signup;
