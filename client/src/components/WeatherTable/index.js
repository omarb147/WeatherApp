import React, { Fragment, Component } from "react";
import { withRedux } from "../../Redux";

class WeatherDetail extends Component {
  filterTimesForDay = () => {
    const { selectedForecast, hourlyForecast } = this.props;
    if (selectedForecast && hourlyForecast.data.length > 0) {
      return hourlyForecast.data.filter(hourly => hourly.day == selectedForecast.day);
    }
    return null;
  };

  render() {
    const { forecastUnits } = this.props;
    const weatherByTime = this.filterTimesForDay();

    return (
      <>
        {weatherByTime && (
          <div className="ui segment">
            <table className="ui very basic celled table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Weather</th>
                  <th>Description</th>
                  <th>High Temp</th>
                  <th>Low Temp</th>
                </tr>
              </thead>
              <tbody>
                {weatherByTime.map(data => (
                  <WeatherTableRow {...data} forecastUnits={forecastUnits} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </>
    );
  }
}

const WeatherTableRow = props => {
  const { timeFrom, timeTo, wid, description, maxTemp, minTemp, forecastUnits } = props;
  return (
    <Fragment>
      <tr>
        <td className="collapsing">
          <h4 className="ui image header">{`${timeFrom} - ${timeTo}`}</h4>
        </td>
        <td>
          <i className={`wi wi-owm-${wid}`} style={{ fontSize: "30pt" }} />
        </td>
        <td>{description}</td>
        <td>
          {maxTemp}°{forecastUnits}
        </td>
        <td>
          {minTemp}°{forecastUnits}
        </td>
      </tr>
    </Fragment>
  );
};

export default withRedux(WeatherDetail);
