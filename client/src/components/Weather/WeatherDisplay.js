import React from "react";
import WeatherBox from "./WeatherBox";
import { kelvinToDegrees } from "../../utilities/weatherFunctions";

const WeatherDisplay = props => {
  let weatherBoxes;
  if (props.location) {
    weatherBoxes = renderDailyForecast(props);
  } else {
    weatherBoxes = "";
  }

  return <div class="ui five column grid">{weatherBoxes}</div>;
};

const renderDailyForecast = props => {
  return props.dailyWeatherForecast.map(forecast => {
    return (
      <WeatherBox
        date={forecast.dt}
        maxTemp={kelvinToDegrees(forecast.temp.max)}
        minTemp={kelvinToDegrees(forecast.temp.min)}
        description={forecast.weather[0].description}
        weatherID={forecast.weather[0].id}
        onDateSelect={props.onDateSelect}
      />
    );
  });
};

export default WeatherDisplay;
