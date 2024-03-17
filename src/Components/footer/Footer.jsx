import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  const goToServices = async () => {
    await navigate("/");
    window.scrollTo(0, 1300);
  };
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>Ramita</h2>
            <p>شركتك انجح معنا</p>
          </div>
          <div className="footer-section links">
            <ul>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  الصفحه الرئيسية
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={goToServices}
                >
                  خدماتنا
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Packages">
                  الباقات
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">© 2024 Ramita. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
