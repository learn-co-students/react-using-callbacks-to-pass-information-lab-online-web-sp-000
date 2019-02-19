import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      currentColor: '#FFF'
    }
  }

  setCurrentColor = (hex) => {
    this.setState({
      currentColor: hex
    });
  }

  getCurrentColor = () => (this.state.currentColor)

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} getCurrentColor={this.getCurrentColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector
          setCurrentColor={this.setCurrentColor}
        />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
