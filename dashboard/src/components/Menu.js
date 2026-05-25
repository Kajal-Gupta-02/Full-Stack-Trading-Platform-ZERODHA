import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const menuItems = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Orders",    path: "/dashboard/orders" },
  { label: "Holdings",  path: "/dashboard/holdings" },
  { label: "Positions", path: "/dashboard/positions" },
  { label: "Funds",     path: "/dashboard/funds" },
  { label: "Apps",      path: "/dashboard/apps" },
];

const Menu = () => {
  const location = useLocation();
  const navigate  = useNavigate();
  const { username, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="menu-container">
      <img
        src="/logo.png"
        alt="Zerodha"
        style={{ width: 36, height: "auto", flexShrink: 0 }}
        onError={(e) => { e.target.style.display = "none"; }}
      />
      <div className="menus">
        <ul>
          {menuItems.map(({ label, path }) => {
            const isActive =
              path === "/dashboard"
                ? location.pathname === "/dashboard"
                : location.pathname.startsWith(path);
            return (
              <li key={label}>
                <Link to={path} style={{ textDecoration: "none" }}>
                  <p className={isActive ? "menu selected" : "menu"}>{label}</p>
                </Link>
              </li>
            );
          })}
        </ul>
        <hr />
        <div
          className="profile"
          onClick={handleLogout}
          title="Click to logout"
        >
          <div className="avatar">
            {username ? username.slice(0, 2).toUpperCase() : "ZU"}
          </div>
          <p className="username">{username || "User"}</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
