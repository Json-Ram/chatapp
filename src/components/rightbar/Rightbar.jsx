import "./rightbar.css";
import { Add, Cake } from "@material-ui/icons";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import SchoolIcon from '@mui/icons-material/School';

export default function Rightbar({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const {user:currentUser, dispatch} = useContext(AuthContext);
  const [followed, setFollowed] = useState(currentUser.following.includes(user?.id));

  useEffect(() => {
    const getFriends = async() => {
      try {
        const friendList = await axios.get('/users/friends/' + user._id)
        setFriends(friendList.data)
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  },[user]);

  const handleClick = async() => {
    try{
      if(followed) {
        await axios.put("/users/"+user._id+"/unfollow", {userId:currentUser._id});
        dispatch({type: "UNFOLLOW", payload:user._id})
      } else {
        await axios.put("/users/"+user._id+"/follow", {userId:currentUser._id});
        dispatch({type: "FOLLOW", payload:user._id})
      }
    }catch(err){
      console.log(err);
    }
    setFollowed(!followed)
  };

  const HomeRightBar = () => {
    return(
      <>
        <div className="birthdayContainer">
          <SchoolIcon/>
          <span className="birthdayText"><b>Jordan</b> and 30 <b>others</b> are graduating today!</span>
        </div>
        
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u)=>(
            <Online key={u.id} user={u}/>
          ))}
        </ul>
        <img className="rightbarAd" src={`${PF}michael-dam-mEZ3PoFGs_k-unsplash.jpg`} alt="ADVERTISE" />
      </>
    )
  }

  const ProfileRightBar = () => {
    return(
      <>
      {user.username !== currentUser.username && (
        <button className="rightbarFollowButton" onClick={handleClick}>
          {followed ? "Unfollow" : "Follow"}
          {followed ? <RemoveIcon /> : <AddIcon/>}
        </button>
      )}
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightBarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
              {user.relationship ===1
                ? "Single"
                : user.relationship ===2
                ? "Married" 
                : "-"}
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          {friends.map((friend)=> (
            <Link to={'/profile/'+friend.username} style={{textDecoration:0}}>
              <div className="rightbarFollowing">
                <img 
                  src={friend.profilePicture ? PF+"profile/"+friend.profilePicture : PF+"profile/noAvatar.png"} 
                  alt="" 
                  className="rightbarFollowingImg" 
                />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        { user ? <ProfileRightBar/> : <HomeRightBar />}
      </div>
    </div>
  )
}
