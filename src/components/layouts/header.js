import React, { useContext, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainContext from "../../context/main";
import { NavLink } from "react-router-dom";
import Cookie from "../../helpers/cookie";

export default function Header() {
  const [darkMode, setDarkMode] = useState(Cookie.getCookie("darkMode"));
  const mainContext = useContext(MainContext);

  let setMode = () => {
    Cookie.setCookie("darkMode", !Cookie.getCookie("darkMode"), 7);
    setDarkMode(Cookie.getCookie("darkMode"));
    mainContext.dispatch({ type: "nightMode", payload: !darkMode });
  };

  return (
    <>
      <Navbar>
        <Navbar.Brand className="logo__item d-flex align-items-center" href="/">
          <img src="/favicon.ico" alt="" width="25px" height="25px" /> &nbsp; <span>Exchange</span>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav__items">
            <NavLink className="nav-link" exact to="/">
              خانه
            </NavLink>
            <NavLink className="nav-link" to="/trade">
              ترید
            </NavLink>
            <NavLink className="nav-link" to="/price">
              قیمت
            </NavLink>
            <NavLink className="nav-link" to="/faq">
              سوالات متداول
            </NavLink>
            <NavLink className="nav-link" to="/about">
              درباره
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              تماس
            </NavLink>
          </Nav>
          <Nav className="nav__items-2">
            <NavLink className="nav-link" to="/login">
              ورود
            </NavLink>
            <i className="vertical__line__seperator"></i>
            <NavLink className="nav-link" to="/register">
              ثبت نام
            </NavLink>
            <i className="vertical__line__seperator"></i>
            <Nav.Link className="dn__icon" onClick={setMode}>
              {!darkMode ? <FontAwesomeIcon className="moon" icon="moon" /> : <FontAwesomeIcon className="sun" icon="sun" />}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
