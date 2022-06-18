import React from 'react';
import "./online.css";
import { Link } from 'react-router-dom';

export default function Online({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="rightbarFriend">
      <Link to='/messenger'>
     <div className="rightbarProfileImgContainer">
       <img src=
       { user ? 
          PF+"profile/"+user.profilePicture :
          PF+"profile/noAvatar.png"
       } 
       alt="" className="rightbarProfileImg" />
       <span className="rightbarOnline"></span>
     </div>
     </Link>
     <span className="rightbarUsername">{user.username}</span>
    </li>
  )
}


