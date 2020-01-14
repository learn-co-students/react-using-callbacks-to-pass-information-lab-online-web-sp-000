import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {
  
  constructor() {
    super()
    this.state = { selectColor: "#F00"}
  }

  setSelectColor = (newColor) => {
    this.setState({
      selectColor: newColor
    })
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} selectColor={this.state.selectColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  // setSelectColor = (newColor)=>{
  //   this.setState({ selectColor: newColor})
  // }



  render() {
    return (
      <div id="app">
        <ColorSelector setSelectColor= {this.setSelectColor} />
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