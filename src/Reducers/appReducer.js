function AppReducer(prevState, action) {
  switch (action.type) {
    case "nightMode":
      return NightMode(prevState, action);
    default:
      return prevState;
  }
}

export default AppReducer;

let NightMode = (prevState, action) => {
  let nightMode = action.payload;
  return {
    nightMode
  };
};
