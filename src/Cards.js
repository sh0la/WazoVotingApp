import React, { Component } from 'react';
import IdeaImage from './IdeaImage';
import CountVotes from './CountVotes';
import IdeaName from './IdeaName';
import UserImage from './UserImage';
import IdeaCategory from './IdeaCategory';


class Cards extends Component {

  render() {
    return (
      <section className="postCard">
        <IdeaImage />
        <div className="rightCard">
          <CountVotes updateCount={this.props.sumVotes}/>
          <IdeaName />
          <IdeaCategory />
        </div>
        <div>
          <UserImage />
        </div>       
      </section>
    )
  }
}

export default Cards;



