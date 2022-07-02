import airportReducer from "./airport";
import flightsListReducer from "./flightsList";
import flightDetailReducer from "./flightDetail"
import cityReducer from "./city"
import airportsListReducer from "./airportsList"
import {combineReducers} from 'redux';


const allReducers = combineReducers({
    airport: airportReducer,
    flightsList: flightsListReducer,
    flightDetail: flightDetailReducer,
    city: cityReducer,
    airportsList: airportsListReducer
})

export default allReducers