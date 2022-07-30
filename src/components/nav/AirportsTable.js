import { useDispatch, useSelector } from "react-redux";
import {
  setAirport,
  setFlightsList,
  setFlightDetail,
  setMap,
} from "../../actions/index";

const styles = {
  container: {
    backgroundColor: "rgba(248, 247, 255, 0.8)",
    margin: "35px",
    borderRadius: "15px",
    padding: "25px",
    color: "#343a40",
  },

  table: {
    textAlign: "left",
    fontSize: "16px",
  },

  th: {
    paddingBottom: "5px",
  },

  td: {
    padding: "5px 0px",
    verticalAlign: "middle",
  },

  tr: {
    borderBottom: "1px black solid",
  },

  btn: {
    borderRadius: "15px",
    border: "none",
    cursor: "pointer",
    padding: "6px 12px",
    backgroundColor: "#00b4d8",
    color: "white",
  },
};

const AirportsTable = () => {
  const airportsList = useSelector((state) => state.airportsList);
  const dispatch = useDispatch();

  const displayAirportDetails = (airport) => {
    dispatch(setFlightsList([]));
    dispatch(setFlightDetail([]));
    dispatch(setAirport(airport));
    dispatch(setMap(true));
  };

  if (airportsList.length === 0) return <div></div>;

  return (
    <div style={styles.container}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Airport name</th>
          </tr>
        </thead>
        <tbody>
          {airportsList.map((airport) => (
            <tr style={styles.tr} key={airport.key}>
              <td style={styles.td}>{airport.name}</td>
              <td style={styles.td}>
                <button
                  style={styles.btn}
                  onClick={() => displayAirportDetails(airport)}
                >
                  Show
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AirportsTable;
