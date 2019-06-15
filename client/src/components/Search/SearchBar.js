import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: "" };
  }

  onInputChange(event) {
    this.setState({ inputValue: event.target.value });
    console.log(this.state.inputValue);
  }

  render() {
    return (
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
            value={this.state.inputValue}
          />
        </div>
      </form>
    );
  }
}

export default SearchBar;
