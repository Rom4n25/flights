const Header = () => {
  const styles = {
    header: {
      display: "flex",
      alignItems: "flex-end",
      backgroundImage:
        "linear-gradient(to left, rgba(248, 247, 255, 0), rgba(248, 247, 255,0.85))",
      fontSize: "86px",
      padding: "15px",
      gridColumnStart: "1",
      gridColumnEnd: "3",
      borderBottom: "2px solid rgba(0, 0, 0, 0.4)",
    },
  };

  return (
    <header style={styles.header}>
      <div>World Airports</div>
    </header>
  );
};

export default Header;
