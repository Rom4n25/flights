import flightData from "../../services/flightData";
import { setFlightsList, setFlightsLoadImg, setMap } from "../../actions/index";
import { useSelector, useDispatch } from "react-redux";

const AirportInfo = () => {
  const airport = useSelector((state) => state.airport);
  const dispatch = useDispatch();

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      lineHeight: "1.2",
      gap: "4px",
      padding: "20px",
      fontSize: "18px",
      backgroundColor: "rgba(248, 247, 255, 0.8)",
      borderRadius: "15px",
      color: "#343a40",
      minWidth: "340px",
    },

    h1: {
      fontSize: "28px",
    },

    input: {
      marginRight: "10px",
      borderRadius: "20px",
      border: "none",
      padding: "7px",
      cursor: "pointer",
      margin: "5px 15px 5px 0px",
    },

    btn: {
      borderRadius: "15px",
      border: "none",
      cursor: "pointer",
      padding: "7px 12px",
      backgroundColor: "#00b4d8",
      color: "white",
      fontSize: "14px",
    },
  };

  const getCalendarMaxDate = () => {
    const currentDate = new Date();
    const twoDaysAgoDateMs = currentDate.getTime(currentDate) / 1000 - 172800;
    const maxDate = new Date(twoDaysAgoDateMs * 1000)
      .toISOString()
      .replace(/T.*/, "")
      .split("-")
      .join("-")
      .toString();
    return maxDate;
  };

  const getCalendarMinDate = () => {
    const currentDate = new Date();
    const monthAgoDateMs = currentDate.getTime(currentDate) / 1000 - 2592000;
    const minDate = new Date(monthAgoDateMs * 1000)
      .toISOString()
      .replace(/T.*/, "")
      .split("-")
      .join("-")
      .toString();
    return minDate;
  };

  const submitEffect = (e, type) => {
    e.preventDefault();
    dispatch(setMap(false));
    dispatch(setFlightsLoadImg());

    const beginDate = e.target[0].value;
    const endDate = e.target[1].value;

    const beginDateTimestamp = new Date(beginDate).getTime() / 1000;
    const endDateTimestamp = new Date(endDate).getTime() / 1000;

    if (type === "arrivals") {
      flightData()
        .findArrivals(airport.key, beginDateTimestamp, endDateTimestamp)
        .then((data) => {
          dispatch(setFlightsList(data));
          dispatch(setFlightsLoadImg());
        });
    } else if (type === "departures") {
      flightData()
        .findDepartures(airport.key, beginDateTimestamp, endDateTimestamp)
        .then((data) => {
          dispatch(setFlightsList(data));
          dispatch(setFlightsLoadImg());
        });
    }
  };

  if (airport.length === 0) <div></div>;

  return (
    <div name="wrapper">
      <div name="container" style={styles.container}>
        <h1 style={styles.h1}>{airport.name}</h1>
        <p>City: {airport.city}</p>
        <p>Country: {airport.country}</p>
        <p>ICAO: {airport.icao}</p>
        <p>IATA: {airport.iata}</p>
        Arrivals:
        <form
          onSubmit={(e) => {
            submitEffect(e, "arrivals");
          }}
        >
          <input
            style={styles.input}
            type="date"
            min={getCalendarMinDate()}
            max={getCalendarMaxDate()}
            required
          ></input>
          <input
            style={styles.input}
            type="date"
            min={getCalendarMinDate()}
            max={getCalendarMaxDate()}
            required
          ></input>
          <button style={styles.btn}>Check</button>
        </form>
        Departures:
        <form
          onSubmit={(e) => {
            submitEffect(e, "departures");
          }}
        >
          <input
            style={styles.input}
            type="date"
            min={getCalendarMinDate()}
            max={getCalendarMaxDate()}
            required
          ></input>
          <input
            style={styles.input}
            type="date"
            min={getCalendarMinDate()}
            max={getCalendarMaxDate()}
            required
          ></input>
          <button style={styles.btn}>Check</button>
        </form>
      </div>
    </div>
  );
};

export default AirportInfo;
