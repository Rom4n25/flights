import FlightsTable from "./FlightsTable"
import flightData from "../services/flightData";
import { useSelector, useDispatch } from "react-redux";
import { setFlightsList} from "../actions/index";


const AirportDetail = () => {
    const airport = useSelector(state => state.airport);
    const dispatch = useDispatch();
    
    const wrapperStyle = {
        border: "10px solid #eccbd9",
        overflow: "hidden"
    }

    const airportDetailStyle = {
        display: "flex",
        width: "905px",
        flexDirection: "column",
        gap: "4px",
        padding: "20px",
        fontSize: "18px",
        backgroundColor: "#eccbd9",
        color: "#182825"
    }

    const h1Style = {
        fontSize: "28px"
    }

    const maxDate = () => {
        const currentDate = new Date();
        const twoDaysAgoDateMs = (currentDate.getTime(currentDate)/1000)-172800
        const maxDate = new Date(twoDaysAgoDateMs*1000).toISOString().replace(/T.*/,'').split('-').join('-').toString();

     return maxDate;
    }

    const minDate = () => {
        const currentDate = new Date();
        const monthAgoDateMs = (currentDate.getTime(currentDate)/1000)-2592000
        const minDate = new Date(monthAgoDateMs*1000).toISOString().replace(/T.*/,'').split('-').join('-').toString();

        console.log(minDate)

     return minDate;
    }

    const submitEffect = (e,type) => {
        e.preventDefault();
        const beginDate = e.target[0].value;
        const endDate = e.target[1].value;
 
        const beginDateTimestamp = new Date(beginDate).getTime()/1000;
        const endDateTimestamp = new Date(endDate).getTime()/1000;

        if(type==="arrivals"){
            flightData().findArrivals(airport.key,beginDateTimestamp,endDateTimestamp).then(
                data => dispatch(setFlightsList(data)));
        }else if(type==="departures"){
            flightData().findDepartures(airport.key,beginDateTimestamp,endDateTimestamp).then(
                data => dispatch(setFlightsList(data)));
        }
        
    }

    if(airport.length===0) <div></div>
  
    return (
        <div style={wrapperStyle}>
                <div style={airportDetailStyle}>
                    <h1 style={h1Style}>{airport.name}</h1>
                    <p>City: {airport.city}</p>
                    <p>Country: {airport.country}</p>
                    <p>ICAO: {airport.icao}</p>
                    <p>IATA: {airport.iata}</p>

                    Arrivals:
                    <form onSubmit={(e)=>{submitEffect(e,"arrivals")}}>
                        <input type="date" min={minDate()} max={maxDate()}></input>
                        <input type="date" min={minDate()} max={maxDate()}></input>
                        <button>Check</button>
                    </form>

                    Departures:
                    <form onSubmit={(e)=>{submitEffect(e,"departures")}}>
                        <input type="date" min={minDate()} max={maxDate()}></input>
                        <input type="date" min={minDate()} max={maxDate()}></input>
                        <button>Check</button>
                    </form>
                </div>
            <FlightsTable/>
        </div>
    )
}

export default AirportDetail