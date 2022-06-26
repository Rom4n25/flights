const FlightDetails = ( {flightDetail} ) => {


 if(flightDetail.length===0){
     return (
         <></>
     )
 }
    return (
        <div>
            <h1>Details</h1>
            <p>First seen: {flightDetail.firstSeen}</p>
            <p>Last seen: {flightDetail.lastSeen}</p>
        </div>
    )
}

export default FlightDetails