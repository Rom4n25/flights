import AirportDetails from "./AirportDetails";
import WelcomeContent from "./WelcomeContent";
import { useSelector } from "react-redux";

const Main = () => {
    
    const airport = useSelector(state => state.airport)

    const style = {
        display:"flex",
        backgroundColor: "rgba(248, 247, 255, 0.9)",
        padding: "25px",
        overflow: "hidden",
        margin: "35px",
        borderRadius: "25px",
        minWidth: "300px"
    }

    if(airport.length===0) return <WelcomeContent/>

    return (
        <main style={style}>
            <AirportDetails/>
        </main>
    )
}

export default Main