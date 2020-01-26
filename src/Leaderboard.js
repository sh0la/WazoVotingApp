import React, { Component } from 'react';
import Cards from './Cards';

class Leaderboard extends Component {
  
  handleCounter () {
    this.setState({counter: this.state.counter + 1})
  }

  render() {
    return (
      <main>
        <Cards sumVotes={this.props.handleCounter}/>
      </main>
    )
  }
}

export default Leaderboard;
