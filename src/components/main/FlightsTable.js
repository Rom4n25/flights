import FlightDetails from "./FlightDetails";
import {useSelector} from "react-redux";

const styles = {
    
    wrapper: {
        padding: "20px",
        overflowY: "scroll",
        overflowX: "hidden",
        maxHeight: "400px",
        borderBottom: "20px solid #edf6f9",
        borderLeft: "20px solid #edf6f9",
    },

    table: {
        width:"850px",
        textAlign:"left",
        fontSize: "18px",
    },

    th: {
        paddingBottom: "10px"
    }
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
                <tbody>
                    {flightsList.map(flight => 
                        <FlightDetails flight={flight}/>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default FlightsTable