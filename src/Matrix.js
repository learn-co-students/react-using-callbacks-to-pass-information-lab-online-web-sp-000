import React, { Component } from "react"
import chromeBoi from "./data.js"
import Cell from "./Cell.js"
import ColorSelector from "./ColorSelector.js"

export default class Matrix extends Component {
  state = { color: "#FFF" }

  genRow = vals =>
    vals.map((val, idx) => (
      <Cell getSelectedColor={this.state.color} key={idx} color={val} />
    ))

  genMatrix = () =>
    this.props.values.map((rowVals, idx) => (
      <div key={idx} className="row">
        {this.genRow(rowVals)}
      </div>
    ))
  selectedColor = newColor => {
    this.setState({ color: newColor })
  }

  getSelectedColor = () => this.state.getSelectedColor
  render() {
    return (
      <div id="app">
        <ColorSelector selectedColor={this.selectedColor} />
        <div id="matrix">{this.genMatrix()}</div>
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: chromeBoi
}
