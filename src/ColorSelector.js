import React, { Component } from 'react';

export default class ColorSelector extends Component {

  // renders row of colored divs 
  // Each div element is rendered from an array of hexadecimal color strings, 
  // with its backgroundColor set to the value of the current string in the mapping process.
  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      // 6. Define callback function 
      let callback = () => this.props.setSelectedColor(str)
      // 5. Create a click event and provide callback on color-swatch element 
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
