import React, { useReducer } from "react";
import { BrowserRouter as Router } from "react-router-dom";
// Helpers
import Cookie from "./helpers/cookie";
// Custome css
import "bootstrap/dist/css/bootstrap.css";
// Components
import Header from "./components/layouts/header";
import Routes from "./routes/routes";
// MainCSS & Icons
import "./assets/scss/app.scss";
import "./assets/js/fontawesome";
// Context
import MainContext from "./context/main";
// Reducer
import AppReducer from "./Reducers/appReducer";
import Footer from "./components/layouts/footer";


function App() {
  const [state, dispatch] = useReducer(AppReducer, {
    nightMode: Cookie.getCookie("darkMode"),
  });

  return (
    <Router>
      <MainContext.Provider value={{ nightMode: state.nightMode, dispatch }}>
        <main className={state.nightMode ? "night" : "day"}>
          <Header />
          <Routes />
          <Footer />
        </main>
      </MainContext.Provider>
    </Router>
  );
}

export default App;
