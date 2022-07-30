const flightsListReducer = (state = [], action) => {
  switch (action.type) {
    case "setFlightsList":
      return action.data;
    default:
      return state;
  }
};

export default flightsListReducer;
