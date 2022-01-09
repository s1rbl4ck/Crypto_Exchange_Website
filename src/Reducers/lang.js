import i18n from "i18next";
const prevLang = localStorage.getItem("i18nextLng");
const lang = (state = prevLang ? prevLang : 'fa', action) => {
  console.log(action.payload);
  switch (action.type) {
    case "changeLang":
      i18n.changeLanguage(action.payload);
      return state = action.payload;
    default:
      return state;
  }
};

export default lang;
