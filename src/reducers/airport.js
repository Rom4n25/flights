const airportReducer = (state = [],action) => {
    switch(action.type){
        case "setAirport":
            return action.data;
        default: 
            return state;
    }
}

export default airportReducer;