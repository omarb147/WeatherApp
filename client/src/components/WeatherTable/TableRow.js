import React from "react";

const WeatherTableRow = props => {
  const { timeFrom, timeTo, tempID, description, maxTemp, minTemp } = props;
  return (
    <Fragment>
      <tr>
        <td className="collapsing">
          <h4 className="ui image header">{`${timeFrom} - ${timeTo}`}</h4>
        </td>
        <td>
          <i className={`wi wi-owm-${tempID}`} style={{ fontSize: "30pt" }} />
        </td>
        <td>{description}</td>
        <td>{maxTemp}</td>
        <td>{minTemp}</td>
      </tr>
    </Fragment>
  );
};

export default WeatherTableRow;
