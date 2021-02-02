import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  //1. creating a state to keep track of selectedColor
  constructor() {
    super()
    this.state = {
      selectedColor: '#FFF'
    }
  }

  //2. method to change the state value. This updates selectedColor with newColor 
  setSelectedColor = (newColor) => {
    this.setState({
      selectedColor: newColor
    })
  }

  genRow = (vals) => (
    // these are the values passed into cell 
    // 4.Passing selectedColor into genRow Cell as a prop so Cell.js knows the current selectedColor 
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.state.selectedColor}  />)
  )

  genMatrix = () => (
    // returning map of JSX divs 
    // then calling genRow which returns a collection of Cell components 
    // this returns a series of divs containing divs 
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="app">
        {/* component. 3. We are passing setSelectedColor as a prop into ColorSelector  */}
        <ColorSelector setSelectedColor={this.setSelectedColor} />
        <div id="matrix">
          {/* function call  */}
          {this.genMatrix()}
        </div>
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: learnSymbol
}