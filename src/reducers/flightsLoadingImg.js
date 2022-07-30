const flightsLoadingImgReducer = (state = false, action) => {
  switch (action.type) {
    case "setFlightsLoadImg":
      return !state;
    default:
      return state;
  }
};

export default flightsLoadingImgReducer;
