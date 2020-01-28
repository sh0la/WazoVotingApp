import React, { Component } from 'react';
import IdeaImage from './IdeaImage';
import CountVotes from './CountVotes';
import IdeaName from './IdeaName';
import UserImage from './UserImage';
import IdeaDescription from './IdeaDescription';


class Cards extends Component {

  constructor() {
    super();
    this.handleClickTransfer = this.handleClickTransfer.bind(this)
  }
    
  handleClickTransfer() {
    let sumClicks = this.props.spots.counter + 1;
    this.props.handleAllClicks(sumClicks, this.props.spots.id)
  }

  render() {
    const cards = 
        <section className="postCard">
          <IdeaImage productImage={this.props.spots.productImageUrl}/>
          <div className="rightCard">
            <CountVotes updateCount={this.props.spots.counter}
                        voteCounts={this.handleClickTransfer}
            />
            <IdeaName locationName={this.props.spots.location}
                      locationUrl={this.props.spots.url}
            />
            <IdeaDescription description={this.props.spots.description}/>
          </div>
          <div>
            <UserImage avatarUrl={this.props.spots.avatarUrl}/>
          </div>       
        </section>
     
    return (
      <React.Fragment>
        {cards}
      </React.Fragment>
    )
  }
}

export default Cards;



