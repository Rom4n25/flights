import { useState } from "react";
import FlightDetails from "./FlightDetails";
const FlightsTable = ({flightsList}) => {
    
    const [flightDetail, setFlightDetail] = useState([]);

    const clickEffect = (flight) => {
        setFlightDetail(flight);
    }

    return (
        <div>
            <ul>
                {flightsList.map(flight => 
                    <li key={flight.callsign+flight.lastSeen}>{flight.callsign}<button onClick={()=>clickEffect(flight)}>Show</button></li>
                )}
            </ul>
            <FlightDetails flightDetail={flightDetail}/>
        </div>
    )
}

export default FlightsTable