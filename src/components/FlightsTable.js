import FlightDetails from "./FlightDetails";
import { setFlightDetail } from "../actions/index";
import { useSelector, useDispatch} from "react-redux";


const FlightsTable = () => {
    const dispatch = useDispatch();
    let flightsList = useSelector(state => state.flightsList)
    if(flightsList.length===0){
        return <div></div>
    }


    const clickEffect = (flight) => {
        dispatch(setFlightDetail(flight));
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Callsign</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                {flightsList.map(flight => 
                    <tr key={flight.callsign+flight.lastSeen}><td>{flight.callsign}</td><td><button onClick={()=>clickEffect(flight)}>Show</button></td></tr>
                )}
                </tbody>
            </table>


            <ul>
               
            </ul>
            <FlightDetails/>
        </div>
    )
}

export default FlightsTable