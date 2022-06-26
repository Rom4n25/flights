import FlightsTable from "./FlightsTable"
import { useState } from "react";
import flightData from "../services/flightData";

const AirportDetail = ( {airport} ) => {

    const [flightsList, setFlightsList] = useState([]);


    const submitEffect = (e) => {
        e.preventDefault();
        const beginDate = e.target[0].value;
        const endDate = e.target[1].value;
        console.log(beginDate)
        console.log(endDate)
     
        const beginDateTimestamp = new Date(beginDate).getTime()/1000;
        const endDateTimestamp = new Date(endDate).getTime()/1000;

        flightData().findFlights(airport.key,beginDateTimestamp,endDateTimestamp).then(
            data => setFlightsList(data));
    
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
                    <input type="date"></input>
                    <button>Check arrivals</button>
                </form>
            </div>
            <FlightsTable flightsList={flightsList}/>
        </div>
    )
}

export default AirportDetail