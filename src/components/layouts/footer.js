import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="footer__box">
        <div className="container">
          <div className="items">
            <h5 className="heading">{t("about")}</h5>
            <div className="item">
              <ul>
                <li>
                  <a className="SecondDayNight" href="/">
                    {t("aboutus")}
                  </a>
                </li>
                <li>
                  <a className="SecondDayNight" href="/">
                    {t("rules")}
                  </a>
                </li>
                <li>
                  <a className="SecondDayNight" href="/">
                    {t("privacy")}
                  </a>
                </li>
                <li>
                  <a className="SecondDayNight" href="/">
                    {t("news")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="items">
            <h5 className="heading">{t('services')}</h5>
            <div className="item">
              <ul>
                <li>
                  <a className="SecondDayNight" href="/">
                    {t('trade')}
                  </a>
                </li>
                <li>
                  <a className="SecondDayNight" href="/">
                    {t('p2p.exchange')}
                  </a>
                </li>
                <li>
                  <a className="SecondDayNight" href="/">
                    {t("buy.from.market")}
                  </a>
                </li>
                <li>
                  <a className="SecondDayNight" href="/">
                    {t("loan")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="items">
            <h5 className="heading">{t("articles")}</h5>
            <div className="item">
              <ul>
                <li>
                  <a className="SecondDayNight" href="/">
                    {t("article.buy.from.market")}
                  </a>
                </li>
                <li>
                  <a className="SecondDayNight" href="/">
                    {t("article.bitcoin")}
                  </a>
                </li>
                <li>
                  <a className="SecondDayNight" href="/">
                    {t("article.trade")}
                  </a>
                </li>
                <li>
                  <a className="SecondDayNight" href="/">
                    {t("article.currencies")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="items">
            <h5 className="heading">{t("social.medias")}</h5>
            <div className="item">
              <ul>
                <li>
                  <a className="SecondDayNight" href="/">
                    {t("telegram")}
                  </a>
                </li>
                <li>
                  <a className="SecondDayNight" href="/">
                    {t("instagram")}
                  </a>
                </li>
                <li>
                  <a className="SecondDayNight" href="/">
                    {t("discord")}
                  </a>
                </li>
                <li>
                  <a className="SecondDayNight" href="/">
                    {t("github")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom FirstDayNight">
          Developed by <a href="https://instagram.com/dmhs82">s1rbl4ck</a> ©{new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
