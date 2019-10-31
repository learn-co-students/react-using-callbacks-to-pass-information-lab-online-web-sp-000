import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: '#333'
    }
  }

  setSelectedColor = (color) => {
    
    this.setState( {
      selectedColor: color    
    })
  }

  getSelectedColor = ()=> {
    return this.state.selectedColor
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

 
  render() {
    console.log(this.getSelectedColor)
    return (
      <div id="app">
        <ColorSelector clickColor = {this.setSelectedColor.bind(this)}/>
        <Cell setCellColor = {this.getSelectedColor.bind(this)}/>
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
