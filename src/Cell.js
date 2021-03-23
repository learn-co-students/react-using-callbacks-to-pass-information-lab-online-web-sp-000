import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }
  //number six, we now need to configure our Cell component 
  //so that when it is clicked, 
  //it changes color to the currently selected color.
  handleClick = () => {
    this.setState({
      color: this.props.selectedColor
    })
  }
  render() {
    return (
      //number seven, create click event
      <div onClick={this.handleClick} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}