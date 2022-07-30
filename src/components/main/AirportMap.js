import { useSelector } from "react-redux";

const AirportMap = () => {
  const airport = useSelector((state) => state.airport);
  return (
    <iframe
      title="frame"
      width="600"
      height="380"
      frameBorder="0"
      scrolling="no"
      marginHeight="0"
      marginWidth="0"
      src={`https://www.openstreetmap.org/export/embed.html?bbox=${
        airport.lon
      }%2C${airport.lat}%2C${airport.lon}%2C${
        airport.lat - 0.02
      }&amp;layer=mapnik`}
    ></iframe>
  );
};

export default AirportMap;
