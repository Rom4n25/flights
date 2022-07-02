const FlightDetails = ( {flight}) => {
  
    const convertTime = (time) => {
        const date = (new Date(time*1000)).toUTCString();
        return date
    }

    const tdStyle = {
        padding: "5px 0px",
        verticalAlign: "middle",
        textAlign: "left"
    }
    
    const trStyle = {
        borderBottom: "1px black solid",
    }


 if(flight.length===0){
     return (
         <></>
     )
 }
    return (
        <tr style={trStyle}>
            <td style={tdStyle}>{convertTime(flight.firstSeen)} </td>
            <td style={tdStyle}>{convertTime(flight.lastSeen)} </td>
            <td style={tdStyle}>{flight.estDepartureAirport} </td>
            <td style={tdStyle}>{flight.callsign} </td>
            <td style={tdStyle}>{flight.icao24} </td>
        </tr>
          
    )
}

export default FlightDetails