import React from 'react';

function UserImage() {
  return(
    <div className="userImg">
      <span>Submitted by</span>
      <img src={require("./images/girl.jpg")} 
           alt=""/>
    </div>
  )
}


export default UserImage;