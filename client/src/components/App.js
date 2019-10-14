import React, { Component } from "react";
import { withRedux } from "../Redux";
import * as TYPES from "../Constants/Types";
import SearchBar from "./Search/SearchBar";
import { weatherByLocation } from "../services/weatherApi";
import WeatherDisplay from "./Weather/WeatherDisplay";
import "../weather-icons-master/css/weather-icons.css";
import WeatherDetail from "./Weather/WeatherDetailTable";
import SearchExampleCategory from "./Search/SearchExampleCategory";
import { autocompleteAPI } from "../services/LocationAPI";
import moment from "moment";

class App extends Component {
  componentDidMount() {}
  // onDateSelect = (event, date) => {
  //   //1 find out which date is selected
  //   this.setState({ selectedDate: date });
  //   //2 filter and return the hourly weather elements for given date
  // };

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <SearchExampleCategory />
      </div>

      // <div className="ui container">
      //   <SearchBar onInputSubmit={this.onInputSubmit} />
      //   <SearchExampleCategory />
      //   <WeatherDisplay dailyWeatherForecast={this.state.dailyForecast} location={this.state.location} onDateSelect={this.onDateSelect} />
      //   <WeatherDetail selectedDate={this.state.selectedDate} location={this.state.location} hourlyForecast={this.state.hourlyForecast} />
      // </div>
    );
  }
}

export default withRedux(App);
