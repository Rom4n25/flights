import InputCity from './InputCity';
import AirportsTable from "./AirportsTable";

const Navigation = () => {

    const navStyle = {
        width:"450px",
    }

    return (
        <nav style={navStyle}>
            <InputCity />
            <AirportsTable/>
        </nav>
    )
}

export default Navigation