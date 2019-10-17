import React, { Component } from "react";
import { withRedux } from "../../Redux";

export class Layout extends Component {
  state = { imageNumber: 0 };
  componentDidMount() {
    //Set random number for image Grab
    const imageNumber = Math.round(Math.random() * 9);
    this.setState({ imageNumber });
  }
  normalisedString = str => str.split(" ").join("_");

  selectBackgroundImage = () => {
    const { dailyForecast, selectedLocation, images, getImageForForecast } = this.props;
    const { imageNumber } = this.state;

    let backgroundImage = "";

    if (dailyForecast.data.length > 0 && selectedLocation) {
      const { location_key } = selectedLocation;

      const imagesForKey = images[location_key];

      backgroundImage = imagesForKey ? `url(${imagesForKey[imageNumber].url})` : "";
    }

    return backgroundImage;
  };

  render() {
    const image = this.selectBackgroundImage();
    return <div style={{ backgroundImage: image, backgroundSize: "cover", height: "120vh" }}>{this.props.children}</div>;
  }
}

export default withRedux(Layout);
