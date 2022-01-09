const lang = (state = "fa", action) => {
  console.log(action);
  switch (action.type) {
    case "changeLang":
      state = action.payload;
    default:
      return state;
  }
};

export default lang;
