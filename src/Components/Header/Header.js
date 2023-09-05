import React from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="header-div">
      <div className="logo-div">
        <img src={`./logo.png`} alt="" className="logo" />
      </div>
      <div className="menu-div">
      <button className="nav-btn" onClick={()=>navigate("/")}>Home</button>
      <button className="nav-btn" onClick={()=>navigate("/about")}>Our Gurus</button>
      </div>
    </div>
  );
}
