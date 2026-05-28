import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  const sections = [
    {
      heading: "Company",
      links: ["About", "Products", "Pricing", "Referral programme", "Careers", "Zerodha.tech", "Press & media", "Zerodha Cares (CSR)"],
    },
    {
      heading: "Support",
      links: ["Contact", "Support Portal", "Z-Connect blog", "List of Charges", "Downloads & Resources", "Videos"],
    },
    {
      heading: "Account",
      links: ["Open an account", "Fund transfer", "60-day challenge"],
    },
  ];

  return (
    <footer style={{ backgroundColor: "#fafafa", borderTop: "1px solid #eee" }}>
      <div className="container py-5" style={{ maxWidth: 1200 }}>
        <div className="row g-4">
          {/* Brand column */}
          <div className="col-12 col-md-3">
            <svg width="110" height="30" viewBox="0 0 110 30" fill="none">
              <text x="0" y="23" fontFamily="'Trebuchet MS', sans-serif" fontSize="22" fontWeight="700" fill="#387ed1">zerodha</text>
            </svg>
            <p className="text-muted mt-3" style={{ fontSize: "0.85rem", lineHeight: 1.7 }}>
              &copy; 2010 – {year}, Zerodha Broking Ltd.<br />All rights reserved.
            </p>
          </div>

          {sections.map(({ heading, links }) => (
            <div className="col-6 col-md-3" key={heading}>
              <p className="fw-semibold mb-3" style={{ color: "#222", fontSize: "0.9rem" }}>{heading}</p>
              {links.map((l) => (
                <div key={l}>
                  <a href="#" className="text-muted d-block mb-1" style={{ textDecoration: "none", fontSize: "0.875rem" }}>
                    {l}
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Legal text */}
        <div className="mt-5 pt-4 border-top text-muted" style={{ fontSize: "0.78rem", lineHeight: 1.8 }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE &amp; BSE – SEBI Registration no.: INZ000031633. CDSL: Depository services through Zerodha Securities Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015. Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.: INZ000038238.
            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru – 560 078, Karnataka, India.
            For any complaints pertaining to securities broking please write to <a href="mailto:complaints@zerodha.com">complaints@zerodha.com</a>, for DP related complaints to <a href="mailto:dp@zerodha.com">dp@zerodha.com</a>.
          </p>
          <p className="mt-2">
            Investments in securities market are subject to market risks; read all the related documents carefully before investing. Attention investors: 1) Stock brokers can accept securities as margin from clients only by way of pledge in the depository system w.e.f. September 1, 2020. 2) Update your mobile number &amp; email ID with your stock broker / depository participant and receive OTP directly from depository on your email &amp; mobile number to create a pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
          </p>
        </div>

        {/* Bottom links */}
        <div className="mt-3 text-center">
          {["NSE", "BSE", "MCX", "Terms & conditions", "Privacy policy", "Disclosure"].map((l, i) => (
            <a key={i} href="#" className="text-muted mx-2" style={{ fontSize: "0.8rem", textDecoration: "none" }}>{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
