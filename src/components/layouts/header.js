import React, { useContext, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import Cookie from "../../helpers/cookie";
import { useSelector, useDispatch } from "react-redux";
import { changeLang } from "../../actions";
import { changeTheme } from "../../actions";

export default function Header() {
  const darkMode = useSelector((state) => state.themeMode),
    lang = useSelector((state) => state.lang),
    dispatch = useDispatch();

  let setLang = () => {
    // console.log(lang);
    lang == "fa" ? dispatch(changeLang("en")) : dispatch(changeLang("fa"));
  };

  let setdarkMode = () => {
    dispatch(changeTheme(!darkMode));
    Cookie.setCookie("darkMode", !darkMode);
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
            <Nav.Link className="nav-link lang" onClick={() => setLang()}>
              EN
            </Nav.Link>
            <i className="vertical__line__seperator"></i>
            <Nav.Link className="dn__icon" onClick={() => setdarkMode(!darkMode)}>
              {!darkMode ? <FontAwesomeIcon className="moon" icon="moon" /> : <FontAwesomeIcon className="sun" icon="sun" />}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
