
import AirportDetail from './AirportDetail.js'
import { useState } from 'react';

const AirportsTable = ( {airportsList} ) =>{

    const [airport, setAirport] = useState([]);

    return (
        <div>
            <div>
                {airportsList.map(airport => <li key={airport.key}>{airport.name} {airport.city} <button onClick={()=>setAirport(airport)}>Details</button></li>)}
            </div>
            <AirportDetail airport={airport}/>
        </div>
    )
}

export default AirportsTable