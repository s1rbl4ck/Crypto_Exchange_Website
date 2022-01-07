import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer__box">
        <div className="container">
          <div className="items">
            <h5 className="heading">درباره</h5>
            <div className="item">
              <ul>
                <li>
                  <a className="SecondDayNight" href="/">
                    درباره ما
                  </a>
                </li>
                <li>
                  <a className="SecondDayNight" href="/">
                    قوانین
                  </a>
                </li>
                <li>
                  <a className="SecondDayNight" href="/">
                    حریم خصوصی
                  </a>
                </li>
                <li>
                  <a className="SecondDayNight" href="/">
                    اخبار
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="items">
            <h5 className="heading">سرویس ها</h5>
            <div className="item">
              <ul>
                <li>
                  <a className="SecondDayNight" href="/">
                    ترید
                  </a>
                </li>
                <li>
                  <a className="SecondDayNight" href="/">
                    معامله P2P
                  </a>
                </li>
                <li>
                  <a className="SecondDayNight" href="/">
                    خرید مستقیم
                  </a>
                </li>
                <li>
                  <a className="SecondDayNight" href="/">
                    دریافت وام
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="items">
            <h5 className="heading">مقاله ها</h5>
            <div className="item">
              <ul>
                <li>
                  <a className="SecondDayNight" href="/">
                    نحوه خرید مستقیم
                  </a>
                </li>
                <li>
                  <a className="SecondDayNight" href="/">
                    بیت کوین چیست؟
                  </a>
                </li>
                <li>
                  <a className="SecondDayNight" href="/">
                    چگونه ترید کنیم؟
                  </a>
                </li>
                <li>
                  <a className="SecondDayNight" href="/">
                    بهترین ارز ها کدامند؟
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="items">
            <h5 className="heading">راه های ارتباطی</h5>
            <div className="item">
              <ul>
                <li>
                  <a className="SecondDayNight" href="/">
                    تلگرام
                  </a>
                </li>
                <li>
                  <a className="SecondDayNight" href="/">
                    اینستاگرام
                  </a>
                </li>
                <li>
                  <a className="SecondDayNight" href="/">
                    دیسکورد
                  </a>
                </li>
                <li>
                  <a className="SecondDayNight" href="/">
                    گیت هاب
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom FirstDayNight">
          copyright by <a href="https://instagram.com/dmhs82">s1rbl4ck</a> ©{new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
