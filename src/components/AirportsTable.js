import { useDispatch, useSelector } from "react-redux";
import { setAirport, setFlightsList, setFlightDetail } from "../actions/index"

const wrapperStyle = {
    padding: "20px",
}

const tableStyle = {
    width:"410px",
    textAlign:"left",
    fontSize: "18px",
}

const thStyle = {
    paddingBottom: "10px"
}

const tdStyle = {
    padding: "5px 0px",
    verticalAlign: "middle",
}

const trStyle = {
    borderBottom: "1px black solid",
}

const AirportsTable = () =>{
    
    const airportsList = useSelector(state => state.airportsList)
    const dispatch = useDispatch();
    
    const clickEffect = (airport) =>{
        dispatch(setFlightsList([]))
        dispatch(setFlightDetail([]));
        dispatch(setAirport(airport));
    }

    if(airportsList.length===0) return <div></div>
 
    return (
        <div style={wrapperStyle}>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>Airport Name</th>
                        <th style={thStyle}>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {airportsList.map(airport => 
                    <tr style={trStyle} key={airport.key}>
                        <td style={tdStyle}>{airport.name}</td>
                        <td style={tdStyle}><button onClick={()=>clickEffect(airport)}>Details</button></td>
                    </tr>)}
                </tbody>
            </table>
            
        </div>
    )
}

export default AirportsTable