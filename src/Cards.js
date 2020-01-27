import React from 'react';
import IdeaImage from './IdeaImage';
import CountVotes from './CountVotes';
import IdeaName from './IdeaName';
import UserImage from './UserImage';
import IdeaCategory from './IdeaCategory';


function Cards(props) {

    console.log(props.spots)
    const cards = props.spots.map((spot) => {
      console.log(spot)
      return (
        <section className="postCard">
          <IdeaImage key={spot.id} productImage={spot.productImageUrl}/>
          <div className="rightCard">
            <CountVotes updateCount={spot.counter}/>
            <IdeaName key={spot.id} locationName={spot.location}
                      locationUrl={spot.url}
            />
            <IdeaCategory key={spot.id} description={spot.description}/>
          </div>
          <div>
            <UserImage key={spot.id} avatarUrl={spot.avatarUrl}/>
          </div>       
        </section>
      )
    })



    return (
      <React.Fragment>
        {cards}
      </React.Fragment>
    )
  }

export default Cards;



