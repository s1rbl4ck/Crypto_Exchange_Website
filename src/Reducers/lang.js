import i18n from "i18next";
const prevLang = localStorage.getItem("i18nextLng");
const lang = (state = prevLang ? prevLang : 'fa', action) => {
  switch (action.type) {
    case "changeLang":
      state = action.payload;
      i18n.changeLanguage(action.payload);
      break;
    default:
      return state;
  }
};

export default lang;
