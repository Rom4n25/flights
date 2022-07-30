import { useSelector } from "react-redux";

const AirportMap = () => {
  const airport = useSelector((state) => state.airport);

  const style = {
    frame: {
      padding: "40px",
    },
  };
  return (
    <iframe
      style={style.frame}
      title="frame"
      width="850"
      height="400"
      frameBorder="0"
      scrolling="no"
      marginHeight="0"
      marginWidth="0"
      src={`https://www.openstreetmap.org/export/embed.html?bbox=${
        airport.lon
      }%2C${airport.lat - 0.022}%2C${airport.lon}%2C${
        airport.lat
      }&amp;layer=mapnik`}
    ></iframe>
  );
};

export default AirportMap;
