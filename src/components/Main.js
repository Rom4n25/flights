import AirportDetail from "./AirportDetail";

const Main = () => {
    
    const mainStyle = {
        display:"flex",
        backgroundColor: "white",
        flex: "1"

    }

    return (
        <main style={mainStyle}>
            <AirportDetail/>
        </main>
    )
}

export default Main