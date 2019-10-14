import React from "react";
import moment from "moment";

const WeatherBox = props => {
  const { weatherID, date, minTemp, maxTemp, description } = props;
  const { onDateSelect } = props;
  return (
    <div className="column" onClick={event => onDateSelect(event, date)}>
      <div className="ui segment">
        <div class="ui top left attached label">{moment.unix(date).format("MMM Do")}</div>
        <div className="ui grid">
          <div className="eleven wide column">
            <i className={`wi wi-owm-${weatherID}`} style={{ fontSize: "30pt" }} />
          </div>
          <div className="one wide column">
            <div className="ui list">
              <div className="item">{maxTemp}</div>
              <div className="item">{minTemp}</div>
            </div>
          </div>
        </div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default WeatherBox;
