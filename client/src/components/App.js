import React, { Component } from "react";
import { withRedux } from "../Redux";
import WeatherDisplay from "./Weather/WeatherDisplay";
import "../weather-icons-master/css/weather-icons.css";
import SearchExampleCategory from "./Search/SearchBar";
import { imageSearchAPI } from "../services/ImageApi";

class App extends Component {
  componentDidMount() {
    imageSearchAPI("light rain", null);
  }
  render() {
    return (
      <div className="ui container">
        <div className="ui segment">
          <SearchExampleCategory />
        </div>
        <div>
          <WeatherDisplay />
        </div>
      </div>
    );
  }
}

export default withRedux(App);
