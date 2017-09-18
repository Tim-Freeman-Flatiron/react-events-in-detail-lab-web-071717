// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
  
  handleClick = (e) => {
    this.coordinates = [e.clientX, e.clientY]
    this.props.onReceiveCoordinates(this.coordinates)
  }

  render () {
    return (
      <button onClick={this.handleClick}>Click Me!</button>
    )
  }

}

export default CoordinatesButton;