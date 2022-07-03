export const setAirport = (airport) => {
    return {
        type: "setAirport",
        data: airport
    };
};

export const setFlightsList = (flightList) => {
    return {
        type: "setFlightsList",
        data: flightList
    };
};

export const setFlightDetail = (flight) => {
    return {
        type: "setFlightDetail",
        data: flight
    }
}

export const setCity = (city) => {
    return {
        type: "setCity",
        data: city
    }
}

export const setAirportsList = (airportsList) => {
    return {
        type: "setAirportsList",
        data: airportsList
    }
}

export const setLoadImg = () => {
    return {
        type: "setLoadImg"
    }
}

export const setFlightsLoadImg = () => {
    return {
        type: "setFlightsLoadImg"
    }
}