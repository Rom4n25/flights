import AirportDetails from "./AirportDetails";

const Main = () => {
    
    const style = {
        display:"flex",
        backgroundColor: "white",
        flex: "1",
        padding: "25px",
        overflow: "hidden"
    }

    return (
        <main style={style}>
            <AirportDetails/>
        </main>
    )
}

export default Main