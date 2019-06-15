import React, { Component } from "react";
import SearchBar from "./Search/SearchBar";
import { weatherByLocation } from "../services/weatherApi";
import WeatherDisplay from "./Weather/WeatherDisplay";
import "../weather-icons-master/css/weather-icons.css";
import WeatherDetail from "./Weather/WeatherDetail";
import moment from "moment";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { dailyForecast: "", country: "", location: "" };
  }

  onInputSubmit = async (event, value) => {
    event.preventDefault();
    //TODO - IMPLEMENT ERROR HANDLING
    const dailyWeatherForecast = await weatherByLocation(value, "daily");
    const hourlyWeatherForecast = await weatherByLocation(value, "");

    this.setState({
      dailyForecast: dailyWeatherForecast.list.slice(0, 5),
      hourlyForecast: hourlyWeatherForecast.list,
      selectedDate: dailyWeatherForecast.list[0].dt,
      country: dailyWeatherForecast.city.country,
      location: dailyWeatherForecast.city.name
    });
  };

  onDateSelect = (event, date) => {
    //1 find out which date is selected
    this.setState({ selectedDate: date });
    //2 filter and return the hourly weather elements for given date
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onInputSubmit={this.onInputSubmit} />
        <WeatherDisplay
          dailyWeatherForecast={this.state.dailyForecast}
          location={this.state.location}
          onDateSelect={this.onDateSelect}
        />
        <WeatherDetail
          selectedDate={this.state.selectedDate}
          location={this.state.location}
          hourlyForecast={this.state.hourlyForecast}
        />
      </div>
    );
  }
}

export default App;
