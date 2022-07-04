import FlightDetails from "./FlightDetails";
import {useSelector} from "react-redux";

const styles = {
    
    wrapper: {
        display: "flex",
        justifyContent: "center",
        margin: "20px 20px 20px 0px",
        overflow: "auto",
        maxHeight: "600px",
    },

    table: {
        borderCollapse: "separate",
        borderSpacing: "20px 2px",
        textAlign:"left",
        fontSize: "16px",
    },

    th: {
        paddingBottom: "10px"
    },
}

const FlightsTable = () => {

    let flightsList = useSelector(state => state.flightsList)

    if(flightsList.length===0) return (<div></div>)

    return (
        <div style={styles.wrapper}>
            <table style={styles.table}>
                <thead>
                    <tr key="head">
                        <th style={styles.th}>First seen</th>
                        <th style={styles.th}>Last seen</th>
                        <th style={styles.th}>Dep. airport</th>
                        <th style={styles.th}>Callsign</th>
                        <th style={styles.th}>ICAO 24</th>
                    </tr>
                </thead>
                <tbody style={styles.tBody}>
                    {flightsList.map(flight => 
                        <FlightDetails key={flight.firstSeen+flight.icao24} flight={flight}/>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default FlightsTable