import React from "react";
import { faDownload, faQrcode } from "@fortawesome/free-solid-svg-icons";
import { faGooglePlay, faAppStore } from "@fortawesome/free-brands-svg-icons";
import { Button } from "react-bootstrap";
// Components
import Price from "../components/home/price";
import CoinHeading from "../components/home/coinslist/heading";
import CoinItem from "../components/home/coinslist";
import AppItem from "../components/home/app";
// Slider Styles
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SupportItem from "../components/home/support";
// Translation
import { useTranslation } from "react-i18next";

const Home = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    pauseOnHover: true,
    cssEase: "linear",
    rtl: true,
  };

  const { t } = useTranslation();

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="contents">
            <div className="content__1">
              <h1 className="content__title FirstDayNight">{t("header.title")}</h1>
              <h2 className="content__text SecondDayNight">{t("header.text")}</h2>
              <div className="content__button">
                <Button variant="warning">{t("registerNow")}</Button>
              </div>
            </div>
            <div className="content__2">
              <div className="coin__items">
                <Slider {...settings}>
                  <Price name="Bitcoin" tag="BTC" price="56,100" percent="10.27" />
                  <Price name="Ethereum" tag="ETH" price="3,864" percent="2.26" />
                  <Price name="Dogecoin" tag="DOGE" price="0.23" percent="-6.78" />
                  <Price name="Binancecoin" tag="BNB" price="345.21" percent="-0.8" />
                  <Price name="Litecoin" tag="LTC" price="56,100" percent="10.27" />
                  <Price name="Stellar" tag="XLM" price="0.3873" percent="-1.26" />
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="container">
          <div className="coins__list">
            <h3 className="heading__text">{t("list.heading")}</h3>
            <CoinHeading titleName={t("title.currencyName")} titlePrice={t("price")} titleChanges={t("title.currencyChanges")} titleValue={t("title.currencyValue")} />
            <div className="coin__items">
              <CoinItem />
              <CoinItem />
              <CoinItem />
              <CoinItem />
              <CoinItem />
            </div>
          </div>

          <div className="app__content">
            <h3 className="app__title">{t("app.heading")}</h3>
            <div className="app__box">
              <div className="app__pic">
                <img src="./img/svg/phone.svg" alt="" />
              </div>
              <div className="download__box">
                <AppItem href="app/android" icon={faGooglePlay} title={t("app.googleplay")} />
                <AppItem href="app/ios" icon={faAppStore} title={t("app.appstore")} />
                <AppItem href="app/direct" icon={faDownload} title={t("app.directdownload")} />
                <AppItem href="#barcode" icon={faQrcode} title={t("app.qrcode")}>
                  <div className="barcode__box">
                    <img src="/img/qr.png" alt="barcode app downloader" />
                  </div>
                </AppItem>
              </div>
            </div>
          </div>

          <div className="support__box">
            <SupportItem href="/support" src="./img/support/24hour.svg" title={t("support.title.24")} desc={t("support.text.24")} />
            <SupportItem href="/faq" src="./img/support/blog.svg" title={t("support.title.blog")} desc={t("support.text.blog")} />
            <SupportItem href="/profile/security" src="./img/support/security.svg" title={t("support.title.security")} desc={t("support.text.security")} />
            <SupportItem href="/exchange" src="./img/support/exchange.svg" title={t("support.title.exchange")} desc={t("support.text.exchange")} />
          </div>
        </div>

        <div className="join__box">
          <div className="container">
            <h4>{t("join.heading")}</h4>
            <div className="buttons">
              <Button variant="warning">{t("register")}</Button>
              <Button variant="warning">{t("start.trade.text")}</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
