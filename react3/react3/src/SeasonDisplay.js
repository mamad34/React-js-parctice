import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    text: "lets's hit the beach",
    iconName: "sun",
  },
  winter: {
    text: "Burr it is cold",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  console.log(season);
  console.log(props.lat);

  const { iconName, text } = seasonConfig[season]; //{text , iconName}

  return (
    <div className={`season-display ${season}`}>
      <i className={`iconLeft massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`iconRight massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
