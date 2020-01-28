import React, { Component } from 'react';

class CountVotes extends Component {
  
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.props.voteCounts()
  }

  render() {  
    return (
      <React.Fragment>
        <div class="counter">
          <span id="triangle" 
            onClick={this.handleClick} 
            counter={this.props.counter}
            key={this.props.id} 
          >
          </span>
            {this.props.updateCount}
        </div>
      </React.Fragment>
    )
  }
}



export default CountVotes;