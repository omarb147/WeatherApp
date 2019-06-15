import React from "react";
import moment from "moment";

const WeatherBox = props => {
  return (
    <div
      className="column"
      onClick={event => props.onDateSelect(event, props.date)}
    >
      <div className="ui segment">
        <div class="ui top left attached label">
          {moment.unix(props.date).format("MMM Do")}
        </div>
        <div className="ui grid">
          <div className="eleven wide column">
            <i
              className={`wi wi-owm-${props.weatherID}`}
              style={{ fontSize: "30pt" }}
            />
          </div>
          <div className="one wide column">
            <div className="ui list">
              <div className="item">{props.maxTemp}</div>
              <div className="item">{props.minTemp}</div>
            </div>
          </div>
        </div>
        <div className="description">{props.description}</div>
      </div>
    </div>
  );
};

// function formatDate(date) {
//   return ;
// }

export default WeatherBox;
