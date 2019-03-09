import React, { Component } from "react";
import chromeBoi from "./data.js";
import Cell from "./Cell.js";
import ColorSelector from "./ColorSelector.js";

export default class Matrix extends Component {
  constructor() {
    super();
    this.state = { selectedColor: "#fff" };
  }

  setColor(str) {
    // this.methodName.bind(this) <-- THIS IS WHAT I NEED TO FIGURE OUT!!!!!!
    // "Two ways to bind functions into components."
    // SETTTER, çalled from ColorSelector, to SET the color
    this.setState({ selectedColor: str });
  }

  getColor = function() {
    // GETTER, called from Cell
    return this.state.selectedColor;
  };

  genRow = vals =>
    vals.map((val, idx) => (
      <Cell key={idx} color={val} getColorCallback={this.getColor.bind(this)} />
    ));

  genMatrix = () =>
    this.props.values.map((rowVals, idx) => (
      <div key={idx} className="row">
        {this.genRow(rowVals)}
      </div>
    ));

  render() {
    return (
      <div id="app">
        <ColorSelector setColorCallback={this.setColor.bind(this)} />
        <div id="matrix">{this.genMatrix()}</div>
      </div>
    );
  }
}

Matrix.defaultProps = {
  values: chromeBoi
};
