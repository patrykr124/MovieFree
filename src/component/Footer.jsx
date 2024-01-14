import React from "react";
import "./Footer.scss";
import { YouTube,Facebook,Instagram } from "@mui/icons-material";

function Footer() {
  return (
    <div className="footer_section">
      <div className="container">
        <div className="footer_img">
          <img src="img/logo.png" alt="logo" />
        </div>
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem minus enim modi quo, dolores accusamus voluptate iure
            eaque necessitatibus veritatis?
          </p>
        </div>
        <div className="footer_menu">
          <ul>
            <li>
              <a href="#">Serial</a>
            </li>
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">New</a>
            </li>
          </ul>
        </div>
        <div className="footer_social">
            <YouTube className="footer_icon"></YouTube>
            <Facebook className="footer_icon"></Facebook>
            <Instagram className="footer_icon"></Instagram>
        </div>
      </div>
    </div>
  );
}

export default Footer;
