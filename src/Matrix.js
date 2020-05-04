import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: '#FFF' //Lines 10 and 11 enable Matrix to keep track of the selectedColor.
    }
  }

  setSelectedColor = (newColor) => {
    this.setState({
      selectedColor: newColor //setSelectedColor enables Matrix to change the state value that is selectedColor.
    })
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.state.selectedColor} />)//Endowing Cell with the prop, selectedColor, enables Cell to know which color to be.
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="app">
        <ColorSelector setSelectedColor={this.setSelectedColor} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div> //Endowing ColorSelector with the prop, setSelectedColor, enables ColorSelector to access the setSelectedColor method.
    )
  }

}

Matrix.defaultProps = {
  values: learnSymbol
}
