const Header = () => {

    const style = {
        display: "flex",
        alignItems: "flex-end",
        backgroundColor:"#00b4d8",
        fontSize:"72px",
        padding:"20px",
        color: "#edf6f9",
        gridColumnStart: "1",
        gridColumnEnd: "3",
    }

    return (
        <header style={style}>World Airports</header>
    )
}

export default Header;