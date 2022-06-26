import { useState } from 'react'
import InputCity from "./components/InputCity";
import AirportsTable from './components/AirportsTable';
import Header from './components/Header';

const App = () => {

  const [city, setCity] = useState("");
  const [airportsList, setAirportsList] = useState([]);


  return (
    <div>
      <Header />
      <InputCity city={city} setCity={setCity} setAirportsList={setAirportsList} />
      <AirportsTable airportsList={airportsList} />
      
    </div>
  );
}

export default App;
