import {useDispatch, useSelector} from "react-redux";
import {setAirport, setFlightsList, setFlightDetail} from "../../actions/index"

const styles = {
    
    wrapper:{
        padding: "0px 25px 25px 25px",
    },

    table:{
        textAlign:"left",
        fontSize: "18px",
        width: "100%"
    },

    th:{
        paddingBottom: "10px"
    },

    td:{
        padding: "5px 0px",
        verticalAlign: "middle",
    },

    tr:{
        borderBottom: "1px black solid",
    },

    btn:{
        borderRadius: "15px",
        border: "none",
        cursor: "pointer",
        padding: "6px 12px",
        backgroundColor: "#00b4d8",
        color: "white",
    }
}

const AirportsTable = () =>{
    
    const airportsList = useSelector(state => state.airportsList)
    const dispatch = useDispatch();
    
    const displayAirportDetails = (airport) =>{
        dispatch(setFlightsList([]))
        dispatch(setFlightDetail([]));
        dispatch(setAirport(airport));
    }

    if(airportsList.length===0) return <div></div>
 
    return (
        <div style={styles.wrapper}>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Airport Name</th>
                    </tr>
                </thead>
                <tbody>
                    {airportsList.map(airport => 
                    <tr style={styles.tr} key={airport.key}>
                        <td style={styles.td}>{airport.name}</td>
                        <td style={styles.td}>
                            <button style={styles.btn} onClick={()=>displayAirportDetails(airport)}>Details</button>
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default AirportsTable