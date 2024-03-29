import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src="/public/images/DH.png" alt="Company Logo" />
      </div>
      <div className="footer-right">
        <a href="#">
          <img src="/images/ico-facebook.png" alt="Facebook" />
        </a>
        <a href="#">
          <img src="/images/ico-instagram.png" alt="Twitter" />
        </a>
        <a href="#">
          <img src="/images/ico-whatsapp.png" alt="Wpp" />
        </a>
        <a href="#">
          <img src="/images/ico-tiktok.png" alt="Instagram" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
