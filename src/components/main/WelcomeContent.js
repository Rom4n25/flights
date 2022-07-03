const WelcomeContent = () => {

    const styles = {
        
        table:{
            backgroundColor: "rgba(248, 247, 255, 0.9)",
            marginTop: "35px",
            borderRadius: "25px",
            height: "400px"
        }
    }


    return (
        <div>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th>Airport</th>
                        <th>Location</th>
                        <th>Country</th>
                        <th>Total passengers</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Hartsfield–Jackson Atlanta International Airport</td>
                        <td>Atlanta, Georgia</td>
                        <td>United States</td>
                        <td>75,537,213</td>
                    </tr>
                    <tr>
                        <td>Dallas Fort Worth International Airport</td>
                        <td>Dallas-Fort Worth, Texas</td>
                        <td>United States</td>
                        <td>62,465,756</td>
                    </tr>
                    <tr>
                        <td>Denver International Airport</td>
                        <td>Denver, Colorado</td>
                        <td>United States</td>
                        <td>658,828,552</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default WelcomeContent