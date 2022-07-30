const airportsListReducer = (state = [], action) => {
  switch (action.type) {
    case "setAirportsList":
      return action.data;
    default:
      return state;
  }
};

export default airportsListReducer;
