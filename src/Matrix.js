import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: null
    }
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} getNewColor={this.sendSelectedColor}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  setSelectedColor = (hex) => (
    this.setState({selectedColor: hex})
  )

  sendSelectedColor = () => (
    this.state.selectedColor
  )


  render() {
    return (
      <div id="app">
        <ColorSelector setColor={this.setSelectedColor} />
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
