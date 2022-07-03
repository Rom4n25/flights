import SearchCity from './SearchCity';
import AirportsTable from "./AirportsTable";

const Nav = () => {

    const style = {
        width:"450px",
    }

    return (
        <nav style={style}>
            <SearchCity/>
            <AirportsTable/>
        </nav>
    )
}

export default Nav