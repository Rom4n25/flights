import AirportDetail from "./AirportDetail";

const Main = () => {
    
    const mainStyle = {
        display:"flex",
        backgroundColor: "white",
        flex: "1",
        padding: "25px",
        overflow: "hidden"
    }

    return (
        <main style={mainStyle}>
            <AirportDetail/>
        </main>
    )
}

export default Main