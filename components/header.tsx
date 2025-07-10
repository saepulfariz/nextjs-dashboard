import React from "react";

const headerStyle: React.CSSProperties = {
  backgroundColor: "#1976d2",
  color: "#fff",
  padding: "16px 24px",
  fontSize: "1.5rem",
  fontWeight: "bold",
  textAlign: "center",
  letterSpacing: "1px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
};

const Header: React.FC = () => {
  return <header style={headerStyle}>My Simple Header</header>;
};

export default Header;
