import React from "react";
import { connect } from "react-redux";
import * as ACTION from "./Actions";

const withRedux = Component => {
  class WithRedux extends React.Component {
    render() {
      return <Component {...this.props} />;
    }
  }
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithRedux);
};

const mapStateToProps = state => {
  return {
    city: state.weatherAPI.city,
    country: state.weatherAPI.country,
    dailyForecast: state.weatherAPI.daily,
    hourlyForecast: state.weatherAPI.hourly,
    searchSuggestions: state.search.suggestions,
    searchQuery: state.search.searchQuery,
    selectedLocation: state.search.selectedLocation,
    images: state.images,
    selectedForecast: state.selectedForecast,
    forecastUnits: state.weatherAPI.units
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getWeatherByLocation: (city, period) => dispatch(ACTION.getWeatherByLocation(city, period)),
    getSearchSuggestions: query => dispatch(ACTION.getAutocompleteSuggestions(query)),
    getImageForForecast: (query, key) => dispatch(ACTION.getImageForForecast(query, key)),
    selectForecast: forecast => dispatch(ACTION.selectForecast(forecast)),
    selectLocation: location => dispatch(ACTION.selectLocation(location)),
    editSearchQuery: query => dispatch(ACTION.editSearchQuery(query)),
    switchForecastUnits: (units, forecasts) => dispatch(ACTION.switchForecastUnits(units, forecasts))
  };
};

export default withRedux;
