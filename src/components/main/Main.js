import AirportDetails from "./AirportDetails";
import WelcomeContent from "./WelcomeContent";
import { useSelector } from "react-redux";

const Main = () => {
    
    const airport = useSelector(state => state.airport)

    const style = {
        display:"flex",
        backgroundColor: "rgba(248, 247, 255, 0.2)",
        padding: "25px",
        margin: "35px",
        borderRadius: "25px",
        minWidth: "750px",
        height: "70vh"
    }

    if(airport.length===0){
        return (
            <main style={style}>
                <WelcomeContent/>
            </main>
        )
    }

    return (
        <main style={style}>
            <AirportDetails/>
        </main>
    )
}

export default Main