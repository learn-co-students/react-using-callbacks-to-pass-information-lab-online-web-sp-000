//user interface to select specific color 
//when Cell is clicked, background color becomes whatever selected color is 
//need to modify the selected color based on user input 
//MATRIX is the parent component keeps track of current selected color
import React, { Component } from 'react';

export default class ColorSelector extends Component {


  //when any one of divs is clicked, color becomes selected color
  //click events 
  //set state in the Matrix 
  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      let callback = () => this.props.setSelectedColor(str)
      return <div onClick={callback} key={idx} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )

  
  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
}
