import Cookie from "../helpers/cookie";

const themeMode = (state = Cookie.getCookie("darkMode"), action) => {
  switch (action.type) {
    case "changeTheme":
      return !state;
    default:
      return state;
  }
};

export default themeMode;
