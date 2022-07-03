const Header = () => {

    const styles = {
        
        header:{
            display: "flex",
            alignItems: "flex-end",
            backgroundColor: "rgba(248, 247, 255, 0.4)",
            fontSize:"86px",
            padding:"15px",
            gridColumnStart: "1",
            gridColumnEnd: "3",
            borderBottom: "3px solid black"
        },
    }

    return (
        <header style={styles.header}><div>World Airports</div></header>
    )
}

export default Header;