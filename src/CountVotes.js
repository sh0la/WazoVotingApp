import React, { Component } from 'react';

class CountVotes extends Component {
  constructor(props) {
    super(props);
    this.state = {'counter': 0}
  }
  
  handleClick() {
    //this.setState({this.state.counter + 1})
  }

  render() {
    
    return (
    <div class="counter">
      <span id="triangle" 
            onClick={this.handleClick}
      >
      </span>
        25 
    </div>
    )
  }
}

export default CountVotes;