import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
    selectedColor: '#fff'
    }
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  selector = (col) => {
    this.setState({
      selectedColor: col
    })
  }

  getSelectedColor = () => (this.state.selectedColor)
// access the currently selected color from Matrix and pass to Cell
  render() {
    return (
      <div id="app">
        <ColorSelector selector={this.selector}/>   // giving child a parent method
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
