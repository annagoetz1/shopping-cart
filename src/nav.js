import React from "react";

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
      {/* Logo or Brand */}
      <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>My Shop</div>

      {/* Nav Links */}
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <a href="#home" style={{ color: "white", textDecoration: "none" }}>
          Home
        </a>
        <a href="#products" style={{ color: "white", textDecoration: "none" }}>
          Products
        </a>
        <a href="#cart" style={{ color: "white", textDecoration: "none" }}>
          Cart
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
