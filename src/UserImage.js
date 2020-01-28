import React from 'react';

function UserImage(props) {
  return(
    <div className="userImg">
      <span>Submitted by</span>
      <img //src={require("./images/girl.jpg")} 
           src={props.avatarUrl}
           alt=""/>
    </div>
  )
}


export default UserImage;