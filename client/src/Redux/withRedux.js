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
    hourlyForecast: state.weatherAPI.hourly
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getWeatherByLocation: (city, period) => dispatch(ACTION.getWeatherByLocation(city, period))
  };
};

export default withRedux;
