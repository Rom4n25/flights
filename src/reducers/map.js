const mapReducer = (state = true, action) => {
  switch (action.type) {
    case "setMap":
      return action.data;
    default:
      return state;
  }
};

export default mapReducer;
