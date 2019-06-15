import React, { Component } from "react";
import SearchBar from "./Search/SearchBar";
import { dailyWeatherByLocation } from "../services/weatherApi";

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
      dailyForecast: forecastData.list,
      country: forecastData.city.country,
      location: forecastData.city.name
    });
    console.log(this.state.dailyForecast);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onInputSubmit={this.onInputSubmit} />
      </div>
    );
  }
}

export default App;
