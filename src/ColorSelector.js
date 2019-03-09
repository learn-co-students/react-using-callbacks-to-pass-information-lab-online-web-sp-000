import React, { Component } from "react";

export default class ColorSelector extends Component {
  makeColorSwatches = () =>
    [
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
          onClick={this.selectColor(str)}
          key={idx}
          className="color-swatch"
          style={{ backgroundColor: str }}
        />
      );
    });

  selectColor(str) {
    // call parent's setColor method
    console.log(`selectColor: ${str}`);
  }

  render() {
    return <div id="colorSelector">{this.makeColorSwatches()}</div>;
  }
}
