import FlightsTable from "./FlightsTable"
import flightData from "../../services/flightData";
import loading from "../../img/loading.svg";
import {useSelector, useDispatch} from "react-redux";
import {setFlightsList, setFlightsLoadImg} from "../../actions/index";


const AirportDetails = () => {
    const airport = useSelector(state => state.airport);
    const loadedImg = useSelector(state => state.flightsLoadingImg);
    const dispatch = useDispatch();
    
    const styles = {
        
        wrapper:{
            flex: "1",
            display: "flex",
            overflowX: "auto"
        },

        airportDetail:{
            flexDirection: "column",
            lineHeight: "1.2",
            gap: "4px",
            padding: "20px",
            fontSize: "18px",
            backgroundColor: "rgba(108, 117, 125, 0.15)",
            borderRadius: "25px",
            color: "#182825"
        },

        h1:{
            fontSize: "28px"
        },

        loadImg:{
            margin: "auto",
            height: "60px",
            width: "60px",
            backgroundImage:`url(${loading})`,
            animation: "rotation 2s infinite linear"
        },

        flightsTable:{
            display: "flex",
            justifyContent: "center",
            flex:"1",
            overflowY: "auto",
            minWidth:"500px"
        },

        input: {
            marginRight: "10px", 
            borderRadius: "20px",
            border: "none",
            padding: "7px",
            cursor: "pointer",
            margin: "5px 15px 5px 0px"
        },

        btn:{
            borderRadius: "15px",
            border: "none",
            cursor: "pointer",
            padding: "7px 12px",
            backgroundColor: "#00b4d8",
            color: "white",
            fontSize: "14px"
        }
    }

    const getCalendarMaxDate = () => {
        const currentDate = new Date();
        const twoDaysAgoDateMs = (currentDate.getTime(currentDate)/1000)-172800
        const maxDate = new Date(twoDaysAgoDateMs*1000).toISOString().replace(/T.*/,'').split('-').join('-').toString();

     return maxDate;
    }

    const getCalendarMinDate = () => {
        const currentDate = new Date();
        const monthAgoDateMs = (currentDate.getTime(currentDate)/1000)-2592000
        const minDate = new Date(monthAgoDateMs*1000).toISOString().replace(/T.*/,'').split('-').join('-').toString();

     return minDate;
    }

    const submitEffect = (e,type) => {
        e.preventDefault();
        dispatch(setFlightsLoadImg());
        
        const beginDate = e.target[0].value;
        const endDate = e.target[1].value;
 
        const beginDateTimestamp = new Date(beginDate).getTime()/1000;
        const endDateTimestamp = new Date(endDate).getTime()/1000;

        if(type==="arrivals"){
            flightData().findArrivals(airport.key,beginDateTimestamp,endDateTimestamp).then(
                data => {
                    dispatch(setFlightsList(data));
                    dispatch(setFlightsLoadImg());        
                });
        }else if(type==="departures"){
            flightData().findDepartures(airport.key,beginDateTimestamp,endDateTimestamp).then(
                data => {
                    dispatch(setFlightsList(data));
                    dispatch(setFlightsLoadImg()); 
                });
        }
    }

    if(airport.length===0) <div></div>
  
    return (
        <div style={styles.wrapper}>
                <div style={styles.airportDetail}>
                    <h1 style={styles.h1}>{airport.name}</h1>
                    <p>City: {airport.city}</p>
                    <p>Country: {airport.country}</p>
                    <p>ICAO: {airport.icao}</p>
                    <p>IATA: {airport.iata}</p>

                    Arrivals:
                    <form onSubmit={(e)=>{submitEffect(e,"arrivals")}}>
                        <input style={styles.input} type="date" min={getCalendarMinDate()} max={getCalendarMaxDate()}></input>
                        <input style={styles.input} type="date" min={getCalendarMinDate()} max={getCalendarMaxDate()}></input>
                        <button style={styles.btn}>Check</button>
                    </form>

                    Departures:
                    <form onSubmit={(e)=>{submitEffect(e,"departures")}}>
                        <input style={styles.input} type="date" min={getCalendarMinDate()} max={getCalendarMaxDate()}></input>
                        <input style={styles.input} type="date" min={getCalendarMinDate()} max={getCalendarMaxDate()}></input>
                        <button style={styles.btn}>Check</button>
                    </form>
                </div>
                <div style={styles.flightsTable}>
                    {loadedImg?<div style={styles.loadImg}></div>:<FlightsTable/>}
                </div>
                
        </div>
    )
}

export default AirportDetails