import React, { Component } from 'react';
import Cards from './Cards';

class Leaderboard extends Component {
  constructor() {
    super();

    this.state = {
      vacationSpots: [
        {
          id: 1,
          location: 'Bora Bora, Tahiti',
          counter: 0,
          url: 'https://travel.usnews.com/Paris_France/',
          //votes: CountVotes(),
          submitterAvatarUrl: './images/boy.jpg',
          productImageUrl: './images/cat.jpg',
          description: 'the black and red sands make for a memorable visit. Next up, indulge in the archaeological delights of the impressively preserved Ancient Akrotiri or hike to Ancient Thera to see the ruins of three empires.',
          avatarUrl: './images/boy.jpg',
          productImageUrl: './images/cat.jpg',
        },
        {
          id: 2,
          location: 'Cancun, Mexico',
          counter: 0,
          url: 'https://travel.usnews.com/Bora_Bora/',
          //votes: CountVotes(),
          submitterAvatarUrl: './images/girl.jpg',
          productImageUrl: './images/cat.jpg',
          description: 'the black and red sands make for a memorable visit. Next up, indulge in the archaeological delights of the impressively preserved Ancient Akrotiri or hike to Ancient Thera to see the ruins of three empires.',
          avatarUrl: './images/boy.jpg',
          productImageUrl: './images/cat.jpg',
        },
        {
          id: 3,
          location: 'Rome, Italy',
          counter: 0,
          url: 'https://travel.usnews.com/Argentine_Patagonia/',
          //votes: CountVotes(),
          submitterAvatarUrl: './images/boy.jpg',
          productImageUrl: './images/cat.jpg',
          description: 'the black and red sands make for a memorable visit. Next up, indulge in the archaeological delights of the impressively preserved Ancient Akrotiri or hike to Ancient Thera to see the ruins of three empires.',
          avatarUrl: './images/boy.jpg',
          productImageUrl: './images/cat.jpg',
        },
        {
          id: 4,
          location: 'Argentine Patagonia, Argentina',
          counter: 33,
          url: 'https://travel.usnews.com/St_Lucia/',
          //votes: CountVotes(),
          submitterAvatarUrl: './images/boy.jpg',
          productImageUrl: './images/cat.jpg',
          description: 'the black and red sands make for a memorable visit. Next up, indulge in the archaeological delights of the impressively preserved Ancient Akrotiri or hike to Ancient Thera to see the ruins of three empires.',
          avatarUrl: './images/boy.jpg',
          productImageUrl: './images/cat.jpg',
        }
      ]
    }

    //this.state = {counter: 0}
  }

  handleCounter () {
    this.setState({counter: this.state.vacationSpots.counter + 1})
  }

  render() {
    console.log(this.state.vacationSpots)
    return (
      <main>
        <Cards spots={this.state.vacationSpots}/>
      </main>
    )
  }
}

export default Leaderboard;
