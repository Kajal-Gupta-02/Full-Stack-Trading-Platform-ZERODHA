import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container text-center py-5 my-5">
      <h1 className="display-1 fw-bold text-muted">404</h1>
      <h3 className="mb-3">Page not found</h3>
      <p className="text-muted mb-4">The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" className="btn btn-primary" style={{ backgroundColor: "#387ed1", border: "none" }}>
        Go to Homepage
      </Link>
    </div>
  );
}

export default NotFound;
