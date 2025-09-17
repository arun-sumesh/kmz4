import React from "react";
import "./Footer.css";
import { FaPhoneAlt, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdWork } from "react-icons/md";

const Footer = () => {
  const brands = [
    { name: "Alexa", logo: "/logos/alexa.svg" },
    { name: "Apple HomeKit", logo: "/logos/Apple_HomeKit_logo.svg" },
    { name: "Cisco", logo: "/logos/cisco.svg" },
    { name: "Dahua", logo: "/logos/dahua.png" },
    { name: "Excel", logo: "/logos/excel.png" },
    { name: "FEB", logo: "/logos/feb.jpeg" },
    { name: "Fortinet", logo: "/logos/Fortinet-01.jpg" },
    { name: "Google Home", logo: "/logos/google-home.svg" },
    { name: "Hikvision", logo: "/logos/hikvision.svg" },
    { name: "KNX", logo: "/logos/KN-Logo.svg" },
    { name: "Reolink", logo: "/logos/reolink.svg" },
    { name: "Samsung SmartThings", logo: "/logos/samsung-smart-things.png" },
    { name: "Schneider Electric", logo: "/logos/Schneider-Electric-Logo.svg" },
    { name: "Shelly", logo: "/logos/shelly.svg" },
    { name: "Ubiquiti UniFi", logo: "/logos/ubiquiti-unifi.svg" },
    { name: "Zigbee", logo: "/logos/zigbee-seeklogo.svg" },
  ];

  return (
    <footer className="footer">
      <h2>Partners We Work With</h2>
      {/* Brand Logos */}
      <div className="footer-brands">
        {brands.map((brand, idx) => (
          <div className="brand-box" key={idx} title={brand.name}>
            <img src={brand.logo} alt={brand.name} />
          </div>
        ))}
      </div>
      <hr className="animated-hr" />

      {/* Info Section */}
      <div className="footer-info">
        {/* Company Info */}
        <div className="info-box">
          <h4>KMZ Information Technology Network Services</h4>
          <p>License Number: 1516816</p>
          <p>
            <FaMapMarkerAlt className="icon" /> M Floor, Office 33, Al Khabisi
            Showroom Building
          </p>
          <p>
            <MdEmail className="icon" /> info@kmztech.ae
          </p>
          <p>
            <FaPhoneAlt className="icon" /> +971 56 411 2322
          </p>
        </div>

        {/* Careers */}
        <div className="info-box">
          <h4>
            <MdWork className="icon" /> Careers
          </h4>
          <p>Join our team and grow with us.</p>
          <p>
            Send your CV to <b>info@kmztech.ae</b>
          </p>
        </div>

        {/* Map */}
        <div className="info-box map-box">
          <h4>Our Location</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.88226873366!2d55.3410423!3d25.2689042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d9c2d6ac38d%3A0xbdae2167112931b!2sGinger%20Business%20Center!5e1!3m2!1sen!2sae!4v1758044471831!5m2!1sen!2sae"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="KMZ Location"
          ></iframe>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom ">
        <p style={{ fontSize: "0.9rem" }}>
          © {new Date().getFullYear()} KMZ IT Network Services. All Rights
          Reserved | Designed & Developed by Arun. <FaLinkedin />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
