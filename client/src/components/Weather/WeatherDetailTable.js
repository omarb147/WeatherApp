import React, { Fragment, Component } from "react";
import moment from "moment";
import { formatKelvinToDegrees } from "../../utilities/formatUnits";

class WeatherDetail extends Component {
  render() {
    const { selectedDate } = this.props;

    return (
      <>
        {selectedDate && (
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
              <tbody>{}</tbody>
            </table>
          </div>
        )}
      </>
    );
  }
}

const WeatherTableRow = props => {
  return (
    <Fragment>
      <tr>
        <td className="collapsing">
          <h4 className="ui image header">{`${props.timeFrom} - ${props.timeTo}`}</h4>
        </td>
        <td>
          <i className={`wi wi-owm-${props.tempID}`} style={{ fontSize: "30pt" }} />
        </td>
        <td>{props.description}</td>
        <td>{props.maxTemp}</td>
        <td>{props.minTemp}</td>
      </tr>
    </Fragment>
  );
};

function listOfTimesToRender(props) {
  const selectedDate = moment.unix(props.selectedDate).format("MMM Do");

  return props.hourlyForecast.filter(element => {
    let elementDate = moment.unix(element.dt).format("MMM Do");

    if (elementDate == selectedDate) {
      return element;
    }
  });
}

function renderTableRows(list) {
  return list.map(element => {
    const timeFrom = moment.unix(element.dt);
    const timeTo = moment(timeFrom).add(3, "hours");

    return (
      <WeatherTableRow
        timeFrom={timeFrom.format("HH:mm")}
        timeTo={timeTo.format("HH:mm")}
        maxTemp={formatKelvinToDegrees(element.main.temp_max)}
        minTemp={formatKelvinToDegrees(element.main.temp_min)}
        description={element.weather[0].description}
        tempID={element.weather[0].id}
      />
    );
  });
}

export default WeatherDetail;
