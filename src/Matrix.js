import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    //number one set the current state
    this.state = {
      selectedColor: '#F80'
    }
  }
  //number two set the new state (new selected color)
  setSelectedColor = (newColor) => {
    this.setState({
      selectedColor: newColor
    })
  }
  genRow = (vals) => ( //number four, send the selectedColor after the change has been made
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.state.selectedColor}/>)
  )

  genMatrix = () => (
    
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    //number three, pass the setSelectedColor fn to a child 
    return (
      <div id="app"> 
        <ColorSelector setSelectedColor={this.setSelectedColor}/>
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