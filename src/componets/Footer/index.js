import React from "react";
import "./footer.css";
import { FiPhoneCall, FiInstagram, FiFacebook, FiGithub } from "react-icons/fi";

function Footer() {
  return (
    <nav className="nav-footer">
      <div className="line">
        <hr></hr>
      </div>
      <ul className="list-icons">
        <li>
          <FiFacebook />
        </li>
        <li>
          <FiInstagram />
        </li>
        <li>
          <FiGithub />
        </li>
        <li>
          <FiPhoneCall />
        </li>
      </ul>
    </nav>
  );
}

export default Footer;
