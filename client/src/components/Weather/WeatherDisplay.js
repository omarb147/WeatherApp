import React from "react";
import moment from "moment";
import { withRedux } from "../../Redux";

class WeatherDisplay extends React.Component {
  onForecastSelect = (e, forecast) => {
    const { getImageForForecast, selectForecast } = this.props;

    selectForecast(forecast);

    //1.CALL API FOR BACKGROUND IMAGE
    //1.B => if it already exists show image. (don't call again)
    //2.CALL API FOR HOURLY RESULTS (if any)
  };

  render() {
    const { selectedLocation, city, country, dailyForecast, selectedForecast } = this.props;

    if (!selectedForecast && dailyForecast.data.length > 0) this.onForecastSelect(null, dailyForecast.data[0]);

    return (
      <div>
        {city && (
          <div className="ui segment">
            <h1>
              Weather for {selectedLocation.title}, {selectedLocation.country}
            </h1>
          </div>
        )}
        <div class="ui five column grid">
          {dailyForecast.loading && (
            <div className="five column centred row">
              <div className="ui text active loader">Loading</div>
            </div>
          )}
          {!dailyForecast.error &&
            selectedForecast &&
            dailyForecast.data.map(forecast => (
              <WeatherBox {...forecast} selectedForecast={selectedForecast} onForecastSelect={this.onForecastSelect} />
            ))}
        </div>
      </div>
    );
  }
}

const WeatherBox = props => {
  const { wid, date, minTemp, maxTemp, description, onForecastSelect, selectedForecast } = props;

  const selected = selectedForecast.date === date ? "inverted green" : "";

  return (
    <div className="column" onClick={event => onForecastSelect(event, props)}>
      <div className={`ui ${selected} segment`}>
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
