import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    let e = document.querySelector("input[type='checkbox']");
    setshowMenu(false);
    e.checked = false;
  };
  const goToServices = async () => {
    await navigate("/");
    window.scrollTo(0, 1300);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="logo-content">
            <img src={logo} alt="logo" className="logo" />
            <Link className="navbar-brand" to="/">
              Ramita
            </Link>
          </div>
          <ul className="nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                الصفحه الرئيسية
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={goToServices}>
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
          <div className="full-menu">
            <div
              className="menu"
              onClick={() => {
                setshowMenu(true);
              }}
            >
              <label className="buttons__burger" htmlFor="burger">
                <input type="checkbox" id="burger" />
                <span />
                <span />
                <span />
              </label>
            </div>
          </div>
        </div>
        {showMenu && (
          <div className="full-screen menu" onClick={handleClick}>
            <div className="navbar">
              <ul className="nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    الصفحه الرئيسية
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={goToServices}>
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
        )}
      </nav>
    </div>
  );
};

export default Navbar;
