import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/signup",   label: "Signup" },
    { to: "/about",    label: "About" },
    { to: "/products", label: "Products" },
    { to: "/pricings", label: "Pricing" },
    { to: "/support",  label: "Support" },
  ];

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: "#fff",
        borderBottom: "1px solid #e8e8e8",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.08)" : "none",
        transition: "box-shadow 0.3s",
      }}
    >
      <div className="container" style={{ maxWidth: 1200 }}>
        {/* Logo */}
        <Link className="navbar-brand me-auto" to="/">
          <svg width="110" height="30" viewBox="0 0 110 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="23" fontFamily="'Trebuchet MS', sans-serif" fontSize="22" fontWeight="700" fill="#387ed1">zerodha</text>
          </svg>
        </Link>

        {/* Mobile toggler */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMain"
          aria-controls="navMain"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav links */}
        <div className="collapse navbar-collapse" id="navMain">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
            {links.map(({ to, label }) => (
              <li className="nav-item" key={to}>
                <Link
                  className="nav-link px-3"
                  to={to}
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: location.pathname === to ? "700" : "500",
                    color: location.pathname === to ? "#387ed1" : "#424242",
                    borderBottom: location.pathname === to ? "2px solid #387ed1" : "2px solid transparent",
                    paddingBottom: "4px",
                    transition: "color 0.2s, border-color 0.2s",
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
