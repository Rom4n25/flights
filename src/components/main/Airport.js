import FlightsTable from "./FlightsTable";
import AirportInfo from "./AirportInfo";
import {useSelector} from "react-redux";

const Airport = () => {
    const loadedImg = useSelector(state => state.flightsLoadingImg);

    const styles = {
    
        container:{
            display: "grid",
            gridTemplateColumns: "1fr 3fr",
        },

        flightsTable:{
            backgroundColor: "rgba(248, 247, 255, 0.8)",
            borderRadius: "25px",
            marginLeft: "40px",
            marinRight:"20px",
            justifyContent: "center",
            minWidth:"700px",
            display: "flex",
        },
    }

    return (
        <div name="container" style={styles.container}>
            <AirportInfo/>
            <div style={styles.flightsTable}>
                {loadedImg?<div style={styles.loadedImg}></div>:<FlightsTable/>}
            </div>
        </div>
    )
}

export default Airport