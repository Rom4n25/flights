import airportReducer from "./airport";
import flightsListReducer from "./flightsList";
import flightDetailReducer from "./flightDetail"
import cityReducer from "./city"
import airportsListReducer from "./airportsList"
import airportsLoadingImgReducer from "./airportsLoadingImg";
import flightsLoadingImgReducer from "./flightsLoadingImg";
import {combineReducers} from 'redux';


const allReducers = combineReducers({
    airport: airportReducer,
    flightsList: flightsListReducer,
    flightDetail: flightDetailReducer,
    city: cityReducer,
    airportsList: airportsListReducer,
    airportsLoadingImg: airportsLoadingImgReducer,
    flightsLoadingImg: flightsLoadingImgReducer
})

export default allReducers