import React from 'react';

function IdeaName(props) {
  console.log(props.locationUrl)
  return(
    <a className="ideaName"
       href={props.locationUrl} 
    >
      {props.locationName}
    </a>
  )
}


export default IdeaName;