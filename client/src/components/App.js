import React, { Component } from "react";
import { withRedux } from "../Redux";

import WeatherDisplay from "./Weather/WeatherDisplay";
import WeatherTable from "./WeatherTable";
import SearchExampleCategory from "./Search/SearchBar";
import Layout from "./Layout";

import "../weather-icons-master/css/weather-icons.css";
import SuggestionsBar from "./SuggestionsBar";
import LogoIcon from "./LogoIcon";

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <Layout>
        <LogoIcon />
        <div className="ui container">
          <div className="ui segment">
            <SearchExampleCategory />
            <SuggestionsBar />
          </div>
          <div>
            <WeatherDisplay />
            <WeatherTable />
          </div>
        </div>
      </Layout>
    );
  }
}

export default withRedux(App);
