const Button = ({text}) => {

    const style = {
        padding: "10px 12px",
        borderRadius: "20px",
        border: "none",
        fontSize: "14px",
        fontWeight: "600",
        cursor: "pointer",
        backgroundColor:"#00b4d8",
        color:"#edf6f9",
        margin:"10px"
    }

    return (
        <button style={style} >{text}</button>
    )
}

export default Button