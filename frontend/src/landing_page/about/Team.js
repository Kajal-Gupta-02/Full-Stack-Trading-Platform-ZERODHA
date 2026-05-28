import React from "react";

const teamMembers = [
  {
    name: "Nithin Kamath",
    role: "Founder & CEO",
    img: "/Media/nithinKamath.jpg",
    bio: "Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade-long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.",
    extra: "He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC). Playing basketball is his zen.",
  },
];

function Team() {
  return (
    <div className="container py-5 border-top">
      <h2 className="fw-bold text-center mb-5">People</h2>
      {teamMembers.map(({ name, role, img, bio, extra }) => (
        <div className="row align-items-center g-5 mb-5" key={name}>
          <div className="col-12 col-md-4 text-center">
            <img
              src={img}
              alt={name}
              className="rounded-circle mb-3"
              style={{ width: 200, height: 200, objectFit: "cover", boxShadow: "0 4px 16px rgba(0,0,0,0.12)" }}
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=200&background=387ed1&color=fff`;
              }}
            />
            <h4 className="fw-bold mb-1">{name}</h4>
            <p className="text-muted">{role}</p>
            <div className="d-flex gap-3 justify-content-center">
              {["Twitter", "LinkedIn", "TradingQnA"].map((s) => (
                <a key={s} href="#" style={{ textDecoration: "none", fontSize: "0.85rem", color: "#387ed1" }}>{s}</a>
              ))}
            </div>
          </div>
          <div className="col-12 col-md-8" style={{ color: "#5a6570", lineHeight: 1.9 }}>
            <p>{bio}</p>
            <p>{extra}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Team;
