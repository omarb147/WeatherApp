import _ from "lodash";
import React, { Component } from "react";
import { Search, Grid, Header, Segment } from "semantic-ui-react";
import { withRedux } from "../../Redux";
import * as TYPES from "../../Constants/Types";

const initialState = { isLoading: false, value: "", results: [] };

class SearchBar extends Component {
  state = initialState;

  handleResultSelect = (e, { result }) => {
    const { district, country_code, description } = result;
    this.setState({ value: description });
    this.props.getWeatherByLocation({ district, country_code }, TYPES.DAILY);
  };

  handleSearchChange = (e, { value }) => {
    this.setState({ value });
    this.props.getSearchSuggestions(value);
  };

  render() {
    const { value, results } = this.state;
    const { data } = this.props.searchSuggestions;

    return (
      <Search
        category
        input={{ fluid: true }}
        loading={this.props.searchSuggestions.loading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={_.debounce(this.handleSearchChange, 500, {
          leading: true
        })}
        minCharacters={4}
        results={data}
        value={value}
        fluid
      />
    );
  }
}

export default withRedux(SearchBar);
