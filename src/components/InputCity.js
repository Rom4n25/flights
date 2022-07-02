import flightData from "../services/flightData"
import Button from "./Button"
import { useDispatch, useSelector} from "react-redux";
import { setAirport, setCity, setAirportsList } from "../actions/index"

const Input = () => {
    
    const city = useSelector(state => state.city)
    const dispatch = useDispatch();

    const wrapperStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px"
    }

    const inputStyle = {
        borderRadius: "20px",
        border: "none",
        fontSize: "22px",
        padding: "8px",
        margin: "5px",
        textIndent: "10px"
    }

    const changeEffect = (e) => {
        dispatch(setCity(e.target.value));
    }

    const submitEffect = (e) => {
        e.preventDefault();
        dispatch(setAirport([]));
        const city = e.target[0].value;
        flightData().findAirports(city).then(data=>dispatch(setAirportsList(data)));
    }

    return(
        <div>
            <form onSubmit={submitEffect}>
                <div style={wrapperStyle}>
                    <input style={inputStyle} value={city} onChange={changeEffect} placeholder="Type City..."></input>
                    <Button text="Search" />
                </div>
            </form>
        </div>
    )
}

export default Input