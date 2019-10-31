import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }
  
  handleCellClick =()=> {
    let newColor = this.props.setCellColor()
    this.setState( {
      color: newColor         
    })
    console.log("updated cell state to ", this.state.color)
  }

  render() {
    return (
      <div className="cell" onClick = {this.handleCellClick} style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}
