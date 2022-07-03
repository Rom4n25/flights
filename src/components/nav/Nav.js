import SearchCity from './SearchCity';
import AirportsTable from "./AirportsTable";

const Nav = () => {

    const style = {
        width:"450px",
        backgroundColor: "rgba(248, 247, 255, 0.8)",
        margin: "35px",
        borderRadius: "25px"
    }

    return (
        <nav style={style}>
            <SearchCity/>
            <AirportsTable/>
        </nav>
    )
}

export default Nav