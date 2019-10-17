import React, { Component } from "react";
import { Checkbox } from "semantic-ui-react";
import { withRedux } from "../../Redux";
import * as TYPES from "../../Constants/Types";

export class UnitSwitcher extends Component {
  state = { checked: false };

  onChange = e => {
    const { dailyForecast, hourlyForecast, switchForecastUnits } = this.props;
    const units = this.state.checked ? TYPES.CELCIUS : TYPES.FARENHEIGHT;

    switchForecastUnits(units, { dailyData: dailyForecast.data, hourlyData: hourlyForecast.data });

    this.setState(prevState => ({ checked: !prevState.checked }));
  };

  render() {
    return (
      <>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
          <div style={{ paddingRight: "10px" }}>°C</div>
          <div>
            <Checkbox toggle onChange={this.onChange} checked={this.state.checked} name="units" />
          </div>
          <div style={{ paddingLeft: "10px" }}>°F</div>
        </div>
      </>
    );
  }
}

export default withRedux(UnitSwitcher);
