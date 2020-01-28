import React from 'react';

function IdeaImage(props) {
  
  console.log(props.productImage)
  return(
    <img class='ideaImg' 
         //src={require("./images/cat.jpg")} 
         src={props.productImage}
         alt="" 
    />
  )
  
}


export default IdeaImage;

