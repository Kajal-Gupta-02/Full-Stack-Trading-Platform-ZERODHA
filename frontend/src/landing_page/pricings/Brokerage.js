import React from "react";

const charges = [
  { segment: "Equity Delivery", brokerage: "Zero", stt: "0.1% on buy & sell", transact: "NSE: 0.00297% | BSE: 0.00375%", gst: "18% on brokerage + transaction charges", sebi: "₹10 per crore", stamp: "0.015% on buy side" },
  { segment: "Equity Intraday", brokerage: "0.03% or ₹20, whichever is lower", stt: "0.025% on sell side", transact: "NSE: 0.00297% | BSE: 0.00375%", gst: "18% on brokerage + transaction charges", sebi: "₹10 per crore", stamp: "0.003% on buy side" },
  { segment: "Futures (Equity)", brokerage: "0.03% or ₹20, whichever is lower", stt: "0.02% on sell side", transact: "NSE: 0.002%", gst: "18% on brokerage + transaction charges", sebi: "₹10 per crore", stamp: "0.002% on buy side" },
  { segment: "Options (Equity)", brokerage: "₹20 per order", stt: "0.1% on sell side (on premium)", transact: "NSE: 0.053%", gst: "18% on brokerage + transaction charges", sebi: "₹10 per crore", stamp: "0.003% on buy side" },
];

function Brokerage() {
  return (
    <div className="container py-5 border-top">
      <div className="row g-5">
        {/* Brokerage calculator notes */}
        <div className="col-12 col-md-8">
          <h4 className="fw-bold mb-4">Brokerage details &amp; notes</h4>
          <ul className="text-muted" style={{ lineHeight: 2.1, fontSize: "0.95rem" }}>
            <li>Call &amp; Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
            <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
            <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
            <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20.</li>
          </ul>

          {/* Charges table */}
          <h4 className="fw-bold mt-5 mb-3">List of charges</h4>
          <div className="table-responsive">
            <table className="table table-bordered" style={{ fontSize: "0.88rem" }}>
              <thead style={{ backgroundColor: "#f8f9fb" }}>
                <tr>
                  <th>Segment</th>
                  <th>Brokerage</th>
                  <th>STT/CTT</th>
                  <th>Transaction charges</th>
                  <th>GST</th>
                  <th>SEBI charges</th>
                  <th>Stamp duty</th>
                </tr>
              </thead>
              <tbody>
                {charges.map((r) => (
                  <tr key={r.segment}>
                    <td className="fw-semibold">{r.segment}</td>
                    <td>{r.brokerage}</td>
                    <td>{r.stt}</td>
                    <td>{r.transact}</td>
                    <td>{r.gst}</td>
                    <td>{r.sebi}</td>
                    <td>{r.stamp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick links */}
        <div className="col-12 col-md-4">
          <div className="p-4 rounded" style={{ backgroundColor: "#f8f9fb", border: "1px solid #e8e8e8" }}>
            <h5 className="fw-bold mb-3">Quick links</h5>
            {[
              "Brokerage calculator",
              "Margin calculator",
              "Span calculator",
              "Charges explained",
              "Open an account",
            ].map((l) => (
              <a key={l} href="#" className="d-block mb-2" style={{ textDecoration: "none", fontSize: "0.9rem" }}>
                {l} &rarr;
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
