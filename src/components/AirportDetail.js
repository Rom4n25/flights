import FlightsTable from "./FlightsTable"
import flightData from "../services/flightData";
import { useSelector, useDispatch } from "react-redux";
import { setFlightsList} from "../actions/index";


const AirportDetail = () => {
    const airport = useSelector(state => state.airport);
   
    const dispatch = useDispatch();
    
    const maxDate = () => {
        const currentDate = new Date();
        const twoDaysAgoDateMs = (currentDate.getTime(currentDate)/1000)-172800
        const maxDate = new Date(twoDaysAgoDateMs*1000).toISOString().replace(/T.*/,'').split('-').join('-').toString();

     return maxDate;
    }

    const submitEffect = (e) => {
        e.preventDefault();
        const beginDate = e.target[0].value;
        const endDate = e.target[1].value;
 
        const beginDateTimestamp = new Date(beginDate).getTime()/1000;
        const endDateTimestamp = new Date(endDate).getTime()/1000;

        flightData().findFlights(airport.key,beginDateTimestamp,endDateTimestamp).then(
            data => dispatch(setFlightsList(data)));
        
    }


    if(airport.length===0){
        return(
            <>
            </>
        )
        
    }

    return (
        <div>
            <div>
                {airport.key}
                <form onSubmit={submitEffect}>
                    <input type="date"></input>
                    <input  type="date" max={maxDate()} ></input>
                    <button>Check arrivals</button>
                </form>
            </div>
            <FlightsTable/>
        </div>
    )
}

export default AirportDetail