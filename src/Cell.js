//Cell needs to know about the currently slected color  when clicked
//using callbacks as props 
import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color //color prop used to set initial state of the component 
    }
  }

  //click event 
  handleClick = () => {
    this.setState({
      color: this.props.selectedColor
    })
  }
  
   //state value is used to modify the background color of the returned div
   render() {
    return (
      <div onClick={this.handleClick} className="cell"
           style={{backgroundColor: this.state.color}}
      >
      </div>
    )
  }
 
}