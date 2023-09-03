import React from "react";
import "./footer.css";
import logo from "./../../logo.png";
export default function Footer() {
  return (
    <div className="footer-div">
      <div className="left-footer">
        <div className="logo-div-footer">
          <img src={logo} alt="" className="logo" />
        </div>
        <div className="addr-div">
          <h5>Address</h5>
          Shrimant'A-34 , Swaralap music academy, Trimurti Colony,
          <br />
          Kavadenagar, Pimple Gurav, Sangavi
          <br />
          Pune 411060 Maharashtra
          <h5>Phone</h5>
          094204 26951
          <h5>Email</h5>
          abc@xyz.com
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15127.095321364592!2d73.8130623!3d18.5842326!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b90bd8d3fb51%3A0x33a5ea13c41e7b0d!2sSWARALAP%20MUSIC%20ACADEMY%2C%20Pune.!5e0!3m2!1sen!2sin!4v1692890077291!5m2!1sen!2sin"
          width="300"
          height="300"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
