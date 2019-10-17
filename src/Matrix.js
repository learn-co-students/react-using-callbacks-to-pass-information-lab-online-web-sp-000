import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: '#fff'
    }
  }

  trackSelectedColor = (str) => {
    this.setState({
      color: str 
    })
  }

  returnSelectedColor = () => {
    return this.state.color
  }

  genRow = (vals) => (    
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.returnSelectedColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    console.log(this);
    
    return (
      <div id="app">
        <ColorSelector onClick={this.trackSelectedColor} />
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
