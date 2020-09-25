//ColorSelector has a way to set a selected color in Matrix when user selects a color 
//data passed into matrix, data mapped to JSX elements 

//importing functions/splitting code into files, modular code 
import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = { //use state to keep track of selected color
      selectedColor: '#FFF' //white
    }
  }
//method that can change that state value 
  setSelectedColor = (newColor) => {
    this.setState({
      selectedColor: newColor
    })
  }

//returns a collection of Cell components, which returns series of divs 
//pass method as a prop, cell only needs to know currently selected color
//when clicked, changes color
genRow = (vals) => (
  vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.state.selectedColor} />)
)

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  //renders a div containing ColorSelector component and another div
  //call to this.genMatrix() 
  //this function this.props.values is used to return a map of JSX divs
  //pass function needed down as a prop (setselectedcolor)
  render() {
    return (
      <div id="app">
        <ColorSelector setSelectedColor= {this.setSelectedColor} /> 
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