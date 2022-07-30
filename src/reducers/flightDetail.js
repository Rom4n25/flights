const flightDetailReducer = (state = [], action) => {
  switch (action.type) {
    case "setFlightDetail":
      return action.data;
    default:
      return state;
  }
};

export default flightDetailReducer;
