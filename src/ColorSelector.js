import React, { Component } from "react";

export default class ColorSelector extends Component {
  constructor(props) {
    super(props);
    this.setColorCallback = props.setColorCallback;
    this.state = {selectedColor: '#000'}
  }

  makeColorSwatches() {
    return [
      "#F00",
      "#F80",
      "#FF0",
      "#0F0",
      "#00F",
      "#508",
      "#90D",
      "#FFF",
      "#000"
    ].map((str, idx) => {
      return (
        <div
          onClick={() => this.setColorCallback(str)}
          key={idx}
          className="color-swatch"
          style={{ backgroundColor: str }}
        />
      );
    });
  }

  render() {
    return <div id="colorSelector">{this.makeColorSwatches()}</div>;
  }
}
