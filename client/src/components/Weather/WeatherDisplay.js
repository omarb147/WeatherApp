import React from "react";
import moment from "moment";
import { withRedux } from "../../Redux";

class WeatherDisplay extends React.Component {
  onDateSelect = e => {
    //1.CALL API FOR BACKGROUND IMAGE
    //1.B => if it already exists show image. (don't call again)
    //2.CALL API FOR HOURLY RESULTS (if any)
    console.log(e);
  };

  render() {
    const { city, country, dailyForecast } = this.props;

    return (
      <div class="ui five column grid">
        {dailyForecast.loading && (
          <div className="five column centred row">
            <div className="ui text active loader">Loading</div>
          </div>
        )}
        {!dailyForecast.error && dailyForecast.data.map(forecast => <WeatherBox {...forecast} onDateSelect={this.onDateSelect} />)}
      </div>
    );
  }
}

const WeatherBox = props => {
  const { wid, date, minTemp, maxTemp, description, onDateSelect } = props;

  return (
    <div className="column" onClick={event => onDateSelect(event, date)}>
      <div className="ui segment">
        <div class="ui top left attached label">{moment.unix(date).format("MMM Do")}</div>
        <div className="ui grid">
          <div className="eleven wide column">
            <i className={`wi wi-owm-${wid}`} style={{ fontSize: "30pt" }} />
          </div>
          <div className="one wide column">
            <div className="ui list">
              <div className="item">{`${maxTemp}°C`}</div>
              <div className="item">{`${minTemp}°C`}</div>
            </div>
          </div>
        </div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default withRedux(WeatherDisplay);
