import React from 'react';

function IdeaName(props) {
  return(
    <a className="ideaName"
       href={props.locationUrl} 
    >
      {props.locationName}
    </a>
  )
}


export default IdeaName;