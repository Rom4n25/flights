const WelcomeContent = () => {

    const styles = {
        
        gridContainer:{
            display: "grid",
            gap: "40px",
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr)",
            justifyItems: "center",
            alignItems: "center",
        },

        item:{
            height: "200px",
            width: "300px",
            backgroundColor: "rgba(248, 247, 255, 0.8)",
            borderRadius: "25px",
            boxShadow: "8px 8px 24px 0px rgba(66, 68, 90, 1)",
        }
    }

    return (
        <div style={styles.gridContainer}>
            <div style={styles.item}></div>
            <div style={styles.item}></div>
            <div style={styles.item}></div>
            <div style={styles.item}></div>
            <div style={styles.item}></div>
            <div style={styles.item}></div>
        </div>
    )
}

export default WelcomeContent