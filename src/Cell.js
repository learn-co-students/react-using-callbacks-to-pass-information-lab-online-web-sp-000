import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  setCellColor = () => {
    // alert(this.props.getCurrentColor())
    this.setState({
      color: this.props.getCurrentColor()
    })
    // alert(this.state.color)
    // this.render()
  }
  
  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.setCellColor}>
      </div>
    )
  }
  
}
