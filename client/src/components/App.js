import React, { Component } from "react";
import { withRedux } from "../Redux";
import WeatherDisplay from "./Weather/WeatherDisplay";
import "../weather-icons-master/css/weather-icons.css";
import SearchExampleCategory from "./Search/SearchBar";
import Layout from "./Layout";
import { convertISOCode } from "../utilities/convertIsoCode";

class App extends Component {
  componentDidMount() {
    convertISOCode("JAM");
  }

  render() {
    return (
      <Layout>
        <div className="ui container">
          <div className="ui segment">
            <SearchExampleCategory />
          </div>
          <div>
            <WeatherDisplay />
          </div>
        </div>
      </Layout>
    );
  }
}

export default withRedux(App);
