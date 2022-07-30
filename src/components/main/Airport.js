import FlightsTable from "./FlightsTable";
import AirportInfo from "./AirportInfo";
import loading from "../../img/loading.svg";
import { useSelector } from "react-redux";
import AirportMap from "./AirportMap";

const Airport = () => {
  const loadedImg = useSelector((state) => state.flightsLoadingImg);
  const mapDisplay = useSelector((state) => state.map);
  const styles = {
    container: {
      display: "grid",
      gridTemplateColumns: "1fr 3fr",
    },

    loadedImg: {
      margin: "auto",
      height: "60px",
      width: "60px",
      backgroundImage: `url(${loading})`,
      animation: "rotation 2s infinite linear",
    },

    flightsTable: {
      backgroundColor: "rgba(248, 247, 255, 0.8)",
      borderRadius: "15px",
      marginLeft: "40px",
      marinRight: "20px",
      justifyContent: "center",
      minWidth: "700px",
      display: "flex",
    },
  };

  return (
    <div name="container" style={styles.container}>
      <AirportInfo />
      <div style={styles.flightsTable}>
        {mapDisplay ? <AirportMap /> : ""}
        {loadedImg ? <div style={styles.loadedImg}></div> : <FlightsTable />}
      </div>
    </div>
  );
};

export default Airport;
