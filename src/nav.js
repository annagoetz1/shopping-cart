import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#333",
        color: "white",
      }}
    >
    
      <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>My Shop</div>

    
      <div style={{ display: "flex", gap: "1.5rem" }}>
        
        <Link to= "/" style={{ color: "white", textDecoration: "none" }}>
          Products
        </Link>
        <Link to= "/cart" style={{ color: "white", textDecoration: "none" }}>
          Cart
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
