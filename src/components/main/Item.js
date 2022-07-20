import React from "react";

const Item = ({ title, content }) => {
  const styles = {
    item: {
      height: "200px",
      width: "300px",
      backgroundColor: "rgba(248, 247, 255, 0.8)",
      borderRadius: "25px",
      boxShadow: "8px 8px 24px 0px rgba(66, 68, 90, 1)",
      padding: "25px",
    },
    h1: {
      marginBottom: "20px",
    },
  };

  return (
    <div style={styles.item}>
      <h1 style={styles.h1}>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default Item;
