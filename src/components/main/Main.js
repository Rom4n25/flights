import AirportDetails from "./AirportDetails";
import WelcomeContent from "./WelcomeContent";
import {useSelector} from "react-redux";

const Main = () => {
    
    const airport = useSelector(state => state.airport)

    const style = {

        container:{
            backgroundColor: "rgba(248, 247, 255, 0.2)",
            padding: "25px",
            margin: "35px",
            borderRadius: "25px",
        }
    }

    if(airport.length===0){
        return (
            <main>
                <div name="container" style={style.container}>
                    <WelcomeContent/>
                </div>
            </main>
        )
    }

    return (
        <main>
            <div name="container" style={style.container}>
                <AirportDetails/>
            </div>
        </main>
    )
}

export default Main