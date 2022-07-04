const FlightDetails = ({flight}) => {
  
    const convertTime = (time) => {
        const date = (new Date(time*1000)).toUTCString();
        return date
    }

    const styles = {

        td:{
            padding: "5px 0px",
            verticalAlign: "middle",
            textAlign: "left",
            
        },

        tr:{
            borderBottom: "1px black solid",
        }
    }

 if(flight.length===0) return <div></div>
  
    return (
        <tr key={flight.icao24+flight.firstSeen} style={styles.tr}>
            <td style={styles.td}>{convertTime(flight.firstSeen)}</td>
            <td style={styles.td}>{convertTime(flight.lastSeen)}</td>
            <td style={styles.td}>{flight.estDepartureAirport}</td>
            <td style={styles.td}>{flight.callsign}</td>
            <td style={styles.td}>{flight.icao24}</td>
        </tr>
    )
}

export default FlightDetails