import flightData from "../../services/flightData"
import {useDispatch, useSelector} from "react-redux";
import {setAirport, setCity, setAirportsList, setLoadImg} from "../../actions/index";
import loading from "../../img/loading.svg";

const Input = () => {

    const dispatch = useDispatch();
    const city = useSelector(state => state.city)
    let loadedImg = useSelector(state => state.loadingImg);
    
    const styles = {
        
        wrapper:{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px"
        },

        input:{
            borderRadius: "20px",
            border: "none",
            fontSize: "22px",
            padding: "8px",
            margin: "5px",
            textIndent: "10px"
        },

        loadImg:{
            height: "30px",
            width: "30px",
            backgroundImage:`url(${loading})`,
            animation: "rotation 2s infinite linear"
        },

        emptyDiv:{
            height: "30px",
            width: "30px",
        },

        btn:{
            padding: "10px 12px",
            borderRadius: "20px",
            border: "none",
            fontSize: "14px",
            fontWeight: "600",
            cursor: "pointer",
            backgroundColor:"#00b4d8",
            color:"#edf6f9",
            margin:"10px",
        }
    }

    const displayInput = (e) => {
        dispatch(setCity(e.target.value));
    }

    const displayAirports = (e) => {
        e.preventDefault();
        const city = e.target[0].value;

        dispatch(setLoadImg());
        dispatch(setAirport([]));
        
        flightData().findAirports(city).then(data=>{
            dispatch(setAirportsList(data));
            dispatch(setLoadImg());
        });
    }

    return(
        <div>
            <form onSubmit={displayAirports}>
                <div style={styles.wrapper}>
                    <input style={styles.input} value={city} onChange={displayInput} placeholder="Type City..."></input>
                    <button disabled={loadedImg} style={styles.btn}>Search</button>
                    {loadedImg? 
                        <div style={styles.loadImg}></div>:
                        <div style={styles.emptyDiv}></div>}
                </div>
            </form>
        </div>
    )
}

export default Input