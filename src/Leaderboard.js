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
          submitterAvatarUrl: require('./images/boy.jpg'),
          productImageUrl: require('./images/cat.jpg'),
          description: 'The small island of Bora Bora (just about 6 miles long and a little more than 2 miles wide) overflows with beauty. A dormant volcano rises up at its center and fans out into lush jungle before spilling into an aquamarine lagoon',
          avatarUrl: require('./images/boy.jpg'),
          productImageUrl: require('./images/bora-bora.jpeg'),
        },
        {
          id: 2,
          location: 'Cancun, Mexico',
          counter: 0,
          url: 'https://travel.usnews.com/Bora_Bora/',
          //votes: CountVotes(),
          submitterAvatarUrl: require('./images/girl.jpg'),
          productImageUrl: require('./images/cat.jpg'),
          description: 'the black and red sands make for a memorable visit. Next up, indulge in the archaeological delights of the impressively preserved Ancient Akrotiri or hike to Ancient Thera to see the ruins of three empires.',
          avatarUrl: require('./images/girl.jpg'),
          productImageUrl: require('./images/cancun.jpg'),
        },
        {
          id: 3,
          location: 'Rome, Italy',
          counter: 0,
          url: 'https://travel.usnews.com/Argentine_Patagonia/',
          //votes: CountVotes(),
          submitterAvatarUrl: './images/boy.jpg',
          productImageUrl: './images/cat.jpg',
          description: 'Rome, the city of seven hills, enjoyed a mythic beginning. Romulus and Remus – twin brothers who were nursed by a she-wolf and fathered by a war god – reportedly founded the Eternal City. And although historians are a little skeptical about this epic entry into the world, most travelers are absolutely certain that there is something magical about Rome.',
          avatarUrl: require('../src/images/cat.jpg'),
          productImageUrl: require('../src/images/rome.jpg'),
        },
        {
          id: 4,
          location: 'Argentine Patagonia, Argentina',
          counter: 0,
          url: 'https://travel.usnews.com/St_Lucia/',
          //votes: CountVotes(),
          submitterAvatarUrl: './src/images/boy.jpg',
          productImageUrl: './src/images/cat.jpg',
          description: 'Cobalt lakes, azure-tinted glaciers, emerald trees, and turquoise skies stretch as far as the eye can see. In fact, Argentine Patagonia\'s vistas are so sweeping that Charles Darwin once described the region as "boundless.',
          avatarUrl: require('../src/images/girl.jpg'),
          productImageUrl: require('../src/images/pantagonia.jpg'),
        }
      ]
    }

    this.activateClicks = this.activateClicks.bind(this)
    //this.sortSpots = this.sortSpots.bind(this)
  }

  activateClicks(newCounter, id) {

    let newSpots = [...this.state.vacationSpots]

    newSpots.forEach((spot) => {
      if(spot.id === id) {
        Object.assign(spot, {counter: newCounter})
      }
    })
    this.setState({vacationSpots: newSpots})
  }

  sortSpots() {
    let listOfSpots = this.state.vacationSpots.sort(
    (a,b) => {
      return (b.counter - a.counter)
    }
    );
  
    return (
      listOfSpots.map(spot => {
        return(
          <main>
            <Cards spots={spot}
                   handleAllClicks={this.activateClicks}
            />
          </main>
        )
      })
    )
  }

  render() {
    return (
      <React.Fragment>
        {this.sortSpots()}
      </React.Fragment>
      
    )
  }
}

export default Leaderboard;
