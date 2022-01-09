import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// Custome css
import "bootstrap/dist/css/bootstrap.css";
// Components
import Header from "./components/layouts/header";
import Routes from "./routes/routes";
// MainCSS & Icons
import "./assets/scss/app.scss";
import "./assets/js/fontawesome";
// Redux
import { useSelector } from "react-redux";
// Reducer
import Footer from "./components/layouts/footer";

function App() {
  const theme = useSelector((state) => state.themeMode);
  const lang = useSelector((state) => state.lang);

  return (
    <Router>
      <main className={theme ? "night" : "day"} dir={lang === "fa" ? "rtl" : "ltr"}>
        <Header />
        <Routes />
        <Footer />
      </main>
    </Router>
  );
}

export default App;
