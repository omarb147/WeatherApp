import _ from "lodash";
import React, { Component } from "react";
import { Search, Grid, Header, Segment } from "semantic-ui-react";
import { selectResult } from "./selectResult";
import { withRedux } from "../../Redux";

const initialState = { isLoading: false, value: "", results: [] };

class SearchBar extends Component {
  handleResultSelect = (e, { result }) => {
    selectResult(result, this.props);
  };

  handleSearchChange = (e, { value }) => {
    this.props.editSearchQuery(value);
    this.props.getSearchSuggestions(value);
  };

  render() {
    // const { value, results } = this.state;
    const { searchQuery } = this.props;
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
        placeholder="Enter a city to search for weather forecast..."
        minCharacters={4}
        results={data}
        value={searchQuery}
        fluid
      />
    );
  }
}

export default withRedux(SearchBar);
