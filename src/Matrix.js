import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  //set initial state of selectedColor
  constructor() { 
    super()
    this.state = {
      selectedColor: '#FFF'
    }
  }

  //add a method that can change that state value.
  //To keep it abstract, this method updates selectedColor with whatever is passed into it as an argument.
  setSelectedColor = (newColor) => {
    this.setState({
      selectedColor: newColor
    })
  }

  //Cell only needs to know the selected color. Pass it in to every Cell as a prop called selectedColor
  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.state.selectedColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  //ColorSelector needs access to setSelectedColor. We can pass the needed function down as a prop:
  render() {
    return (
      <div id="app">
        <ColorSelector setSelectedColor={this.setSelectedColor} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: learnSymbol
}