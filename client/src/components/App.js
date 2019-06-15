import React, { Component } from "react";
import SearchBar from "./Search/SearchBar";
import { dailyWeatherByLocation } from "../services/weatherApi";
import WeatherDisplay from "./Weather/WeatherDisplay";
import "../weather-icons-master/css/weather-icons.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { dailyForecast: "", country: "", location: "" };
  }

  onInputSubmit = async (event, value) => {
    event.preventDefault();
    //TODO - IMPLEMENT ERROR HANDLING
    const forecastData = await dailyWeatherByLocation(value);

    this.setState({
      dailyForecast: forecastData.list.slice(0, 5),
      country: forecastData.city.country,
      location: forecastData.city.name
    });
    console.log(this.state.dailyForecast);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onInputSubmit={this.onInputSubmit} />
        <WeatherDisplay
          forecastData={this.state.dailyForecast}
          location={this.state.location}
        />
      </div>
    );
  }
}

export default App;
