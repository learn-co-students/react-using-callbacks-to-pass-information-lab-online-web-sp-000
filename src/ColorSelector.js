import React, { Component } from 'react';

export default class ColorSelector extends Component {
  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      let callback = () =>
       this.props.setSelectedColor(str)
      return <div onClick={callback} key={idx} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )///Clicking on a particular div inside ColorSelector should now set state in Matrix.

  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
}
//Each div element is rendered from an array of hexadecimal color strings,
// with its backgroundColor set to the value of the current string in the mapping process.

//We need to update this code so that when any one of these divs is clicked the hexadecimal color value of that div
// becomes the selected color in Matrix. For click events, we know we'll have to add an event and provide 
//a callback on the div element itself:

