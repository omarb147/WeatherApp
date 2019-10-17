import React, { Component } from "react";
import Cookies from "js-cookie";
import * as TYPES from "../../Constants/Types";
import { selectResult } from "../Search/selectResult";
import { withRedux } from "../../Redux";

const labelColors = { 1: "red", 2: "orange", 3: "yellow", 4: "olive", 5: "green", default: "grey" };

export class SuggestionsBar extends Component {
  state = { suggestions: 0 };

  componentDidMount() {
    const locations = this.getLocationsFromCookie();

    let locationLength;

    if (locations) {
      this.onClickSuggestionHandler(null, locations[0].key);
      locationLength = locations.length;
    }
    this.setState({ suggestions: locationLength });
  }

  getLocationsFromCookie = () => {
    const locationsCookie = Cookies.get(TYPES.SEARCH_COOKIE);

    if (locationsCookie) {
      const locations = JSON.parse(locationsCookie);
      return Object.keys(locations)
        .map(key => locations[key])
        .sort((loc_1, loc2) => loc_1.value > loc2.value);
    }
    return null;
  };

  onClickSuggestionHandler = (e, key) => {
    const selectedLocation = this.getLocationsFromCookie().find(location => location.key === key);

    selectResult(selectedLocation, this.props);
  };

  onClickClearSuggestionsHandler = () => {
    Cookies.set(TYPES.SEARCH_COOKIE, "");
    this.setState({ suggestions: 0 });
  };

  render() {
    const locations = this.getLocationsFromCookie();
    return (
      <div style={{ display: "flex", alignItems: "flex-end" }}>
        <div style={{ flex: "5" }}>
          {locations && (
            <div style={{ paddingTop: "10px" }}>
              <h5>Previously Searched locations:</h5>
              {locations.map(location => (
                <div
                  key={location.key}
                  id={location.key}
                  onClick={e => {
                    this.onClickSuggestionHandler(e, location.key);
                  }}
                  className={`ui label ${labelColors[location.value]}`}
                >
                  {location.searchTitle}
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          {locations && (
            <button class="ui negative tiny button" onClick={this.onClickClearSuggestionsHandler}>
              Clear Suggestions
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default withRedux(SuggestionsBar);
