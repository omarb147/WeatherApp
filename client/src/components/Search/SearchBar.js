import React, { Component } from "react";
import { Search } from "semantic-ui-react";
import _ from "lodash";

const initialState = { inputValue: "", results: [], isLoading: false };

//TODO GET all Cities and countries
const options = {
  "United Kingdom": {
    name: "United Kingdom",
    results: [
      { title: "London" },
      { title: "Manchester" },
      { title: "Liverpool" }
    ]
  },
  France: {
    name: "France",
    results: [{ title: "Lyon" }, { title: "Paris" }, { title: "Lille" }]
  }
};

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onInputChange = (event, { value }) => {
    this.setState({ isLoading: true, inputValue: value });

    setTimeout(() => {
      if (this.state.inputValue.length < 1) return this.setState(initialState);

      //TODO sort filtering
      const filteredList = options.filter(element =>
        element.title
          .toLowerCase()
          .includes(this.state.inputValue.toLowerCase())
      );

      this.setState({ isLoading: false, results: filteredList });

      console.log(this.state.results);
    }, 300);
  };

  render() {
    const { inputValue, results, isLoading } = this.state;

    return (
      <div>
        <Search
          isLoading={isLoading}
          onSearchChange={_.debounce(this.onInputChange, 50)}
          value={inputValue}
          results={results}
        />

        <form
          className="ui form segment"
          onSubmit={event => {
            this.props.onInputSubmit(event, this.state.inputValue);
          }}
        >
          <div className="field">
            <label>User Input</label>
            <input
              type="text"
              onChange={event => this.onInputChange(event)}
              // value={this.state.inputValue}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
