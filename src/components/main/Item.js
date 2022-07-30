const Item = ({ title, content }) => {
  const styles = {
    item: {
      height: "200px",
      width: "300px",
      backgroundColor: "rgba(248, 247, 255, 0.8)",
      borderRadius: "15px",
      boxShadow: "8px 8px 24px 0px rgba(66, 68, 90, 1)",
      padding: "30px",
      color: "#343a40",
    },
    h1: {
      marginBottom: "20px",
    },
    p: { fontSize: "15px", fontWeight: "400" },
  };

  return (
    <div style={styles.item}>
      <h1 style={styles.h1}>{title}</h1>
      <p style={styles.p}>{content}</p>
    </div>
  );
};

export default Item;
