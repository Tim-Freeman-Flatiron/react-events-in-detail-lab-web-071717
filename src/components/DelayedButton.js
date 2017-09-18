// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {
//this.props.onDelayedClick
//this.props.delay
  handleClick = (e) => {
    e.persist()
    setTimeout(() => {
      this.props.onDelayedClick(e)}, this.props.delay)
  } 



  render() {
    return (
      <button onClick={this.handleClick}>Click Me Too!</button>
    )
  }


}


export default DelayedButton;