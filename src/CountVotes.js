import React, { Component } from 'react';

class CountVotes extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0}

    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(event) {
    console.log(event)
    this.handleCounter(this.state.counter)
    
  }

  render() {
    //console.log(count)
    return (
    <div class="counter">
      <span id="triangle" 
            onClick={this.handleClick} 
            count={this.props.updateCount}
            
            
      >
      </span>
        {this.state.counter}
    </div>
    )
  }
}

export default CountVotes;