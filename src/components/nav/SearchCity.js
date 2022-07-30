import flightData from "../../services/flightData";
import { useDispatch, useSelector } from "react-redux";
import {
  setAirport,
  setCity,
  setAirportsList,
  setLoadImg,
} from "../../actions/index";
import loading from "../../img/loading.svg";

const SearchCity = () => {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.city);
  let dataIsLoaded = useSelector((state) => state.airportsLoadingImg);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      padding: "25px",
      backgroundColor: "rgba(248, 247, 255, 0.8)",
      margin: "35px",
      borderRadius: "15px",
    },

    input: {
      borderRadius: "20px",
      border: "none",
      fontSize: "22px",
      padding: "8px",
      textIndent: "10px",
      marginBottom: "12.5px",
      color: "#343a40",
    },

    imgDiv: {
      position: "absolute",
      top: "4px",
      right: "70px",
      height: "30px",
      width: "30px",
      backgroundImage: `url(${loading})`,
      animation: "rotation 2s infinite linear",
    },

    btn: {
      padding: "10px 12px",
      borderRadius: "25px",
      border: "none",
      fontSize: "15px",
      fontWeight: "600",
      cursor: "pointer",
      backgroundColor: "#00b4d8",
      color: "#edf6f9",
      margin: "auto",
    },

    wrapper: {
      position: "relative",
      display: "flex",
    },
  };

  const displayInput = (e) => {
    dispatch(setCity(e.target.value));
  };

  const displayAirports = (e) => {
    e.preventDefault();
    const city = e.target.city.value;

    dispatch(setLoadImg());
    dispatch(setAirport([]));

    flightData()
      .findAirports(city)
      .then((data) => {
        dispatch(setAirportsList(data));
        dispatch(setLoadImg());
      });
  };

  return (
    <div name="container" style={styles.container}>
      <form onSubmit={displayAirports}>
        <input
          name="city"
          style={styles.input}
          value={city}
          onChange={displayInput}
          placeholder="Type City..."
          required
        ></input>
        <div name="wrapper" style={styles.wrapper}>
          <button disabled={dataIsLoaded} style={styles.btn}>
            Search
          </button>
          {dataIsLoaded ? (
            <div name="imgDiv" style={styles.imgDiv}></div>
          ) : (
            <div></div>
          )}
        </div>
      </form>
    </div>
  );
};

export default SearchCity;
