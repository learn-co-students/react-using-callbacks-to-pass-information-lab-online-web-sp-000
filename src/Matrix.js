import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
    colorBoi: '#fff'
   }
  }

  setColours = (col) => (
    this.setState({
      colorBoi: col
    })
   )

   getColours = () => (this.state.colorBoi)



   genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} getColours={this.getColours} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )




  render() {
    return (
      <div id="app">
        <ColorSelector setColours={this.setColours} />
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
