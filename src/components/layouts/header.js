import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import Cookie from "../../helpers/cookie";
import { useSelector, useDispatch } from "react-redux";
import { changeLang } from "../../actions";
import { changeTheme } from "../../actions";
import { useTranslation } from "react-i18next";

export default function Header() {
  const darkMode = useSelector((state) => state.themeMode),
    lang = useSelector((state) => state.lang),
    dispatch = useDispatch();

  const { t } = useTranslation();

  let setLang = () => {
    lang === "fa" ? dispatch(changeLang("en")) : dispatch(changeLang("fa"));
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
              {t("home")}
            </NavLink>
            <NavLink className="nav-link" to="/trade">
              {t("trade")}
            </NavLink>
            <NavLink className="nav-link" to="/price">
              {t("price")}
            </NavLink>
            <NavLink className="nav-link" to="/faq">
              {t("faq")}
            </NavLink>
            <NavLink className="nav-link" to="/about">
              {t("about")}
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              {t("contact")}
            </NavLink>
          </Nav>
          <Nav className="nav__items-2">
            <NavLink className="nav-link" to="/login">
              {t("login")}
            </NavLink>
            <i className="vertical__line__seperator"></i>
            <NavLink className="nav-link" to="/register">
              {t("register")}
            </NavLink>
            <i className="vertical__line__seperator"></i>
            <Nav.Link className="nav-link lang" onClick={() => setLang()}>
              {lang === "fa" ? "EN" : "FA"}
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
