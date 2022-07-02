import FlightDetails from "./FlightDetails";
import { useSelector } from "react-redux";

const wrapperStyle = {
    padding: "20px",
    overflowY: "scroll",
    overflowX: "hidden",
    height: "200px"
}

const tableStyle = {
    width:"850px",
    textAlign:"left",
    fontSize: "18px",
}

const thStyle = {
    paddingBottom: "10px"
}

const FlightsTable = () => {

    let flightsList = useSelector(state => state.flightsList)
    console.log(flightsList)
    if(flightsList.length===0){
        return <div></div>
    }


    return (
        <div style={wrapperStyle}>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>First seen</th>
                        <th style={thStyle}>Last seen</th>
                        <th style={thStyle}>Dep. airport</th>
                        <th style={thStyle}>Callsign</th>
                        <th style={thStyle}>ICAO 24</th>
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