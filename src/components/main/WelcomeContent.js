import Item from "./Item";

const WelcomeContent = () => {
  const styles = {
    gridContainer: {
      display: "grid",
      gap: "40px",
      gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr)",
      justifyItems: "center",
      alignItems: "center",
    },
  };

  return (
    <div style={styles.gridContainer}>
      <Item
        title={"Busiest Airport In The World"}
        content={
          "The busiest airports of the world are measured by the number of passengers or travelers the airport gets every year. Currently, the busiest airports in the world are Hartsfield-Jackson Atlanta International Airport"
        }
      />
      <Item
        title={"History Of The First Airport"}
        content={
          "There is some debate on which is the first-built airport, the answer depends on how you look at the given information. The College Park Airport of Maryland, United States, is thought to be the oldest continuously working airport still in function. Hamburg Airport of Hamburg, Germany, is considered the second-oldest commercial airport still in function."
        }
      />
      <Item
        title={"The worst airport in the world"}
        content={
          "The criteria? Security checks, hygiene, service, waiting areas and restaurant and shopping facilities were the main categories considered. The result: Casablanca in Morocco was deemed the most likely to be the worst airport in the world."
        }
      />
      <Item
        title={"The smallest airport in the world"}
        content={
          "The unique airport that only has one airline in business (Flybe) is: the airport on the island Barra in Scotland. It’s open Monday to Friday for only a few hours at a time, but that’s not all. Unique to just this airport, Its runway is made of sand, meaning that arrival times can have a fair amount of leeway, given that every landing depends on how the tide is."
        }
      />
      <Item
        title={"The most dangerous airport in the world"}
        content={
          "Strong winds, extremely short runways or poor visibility can make take-off and landing quite unpleasant – and we’re not even talking about for the passengers on the plane. Take the Princess Juliana International Airport in St. Maarten. It’s an airport so close to the beach that those who are nearby can easily see planes from above, as they’re only 10 to 20 metres away."
        }
      />
      <Item
        title={"Keeping Birds Away From Airplanes"}
        content={
          "Toronto Pearson International Airport, Montreal-Trudeau International Airport and other airfields receive bird-strike prevention services. Various raptors, including falcons, hawks and bald eagles work 365 days a year to encourage other birds to leave the airport area."
        }
      />
    </div>
  );
};

export default WelcomeContent;
