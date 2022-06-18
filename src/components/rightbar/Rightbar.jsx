import "./rightbar.css";
import Online from "../online/Online";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import SchoolIcon from '@mui/icons-material/School';
import Skeleton from '@mui/material/Skeleton';

export default function Rightbar({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const {user:currentUser, dispatch} = useContext(AuthContext);
  const [followed, setFollowed] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setFollowed(currentUser.following.includes(user?._id))
  }, [followed, currentUser.following, user]);

  useEffect(() => {
    const getFriends = async() => {
      if(user) {
        try {
          const friendList = await axios.get('/users/friends/' + user._id)
          setFriends(friendList.data)
        } catch (err) {
          console.log(err);
        }
      }
    };
    getFriends();
  },[user?._id, user]);

  useEffect(() => {
    const getFriends = async() => {
      if(currentUser) {
        try {
          const friendList = await axios.get('/users/friends/' + currentUser._id)
          setFriends(friendList.data)
        } catch (err) {
          console.log(err);
        }
      }
    };
    getFriends();
  },[currentUser]);

  const handleClick = async() => {
    try{
      if(followed) {
        await axios.put("/users/"+user._id+"/unfollow", {userId:currentUser._id});
        dispatch({type: "UNFOLLOW", payload:user._id})
      } else {
        await axios.put("/users/"+user._id+"/follow", {userId:currentUser._id});
        dispatch({type: "FOLLOW", payload:user._id})
      }
      setFollowed(!followed)
    }catch(err){
      console.log(err);
    }
  };

  const HomeRightBar = () => {
    return(
      <>
        <div className="birthdayContainer">
          <SchoolIcon/>
          <span className="birthdayText"><b>Jordan</b> and 30 <b>others</b> are graduating today!</span>
        </div>
        
        <h4 className="rightbarTitle">Online</h4>
        <ul className="rightbarFriendList">
          {friends.map((u)=>(
            <Online key={u._id} user={u}/>
          ))}
        </ul>
        <img className="rightbarAd" src={`${PF}nitro.png`} alt="ADVERTISE" />
        <img className="rightbarAd" src={`${PF}discourse_ad.png`} alt="ADVERTISE" />
        <img className="rightbarAd" src={`${PF}nitro.png`} alt="ADVERTISE" />
        <img className="rightbarAd" src={`${PF}discourse_ad.png`} alt="ADVERTISE" />
        <img className="rightbarAd" src={`${PF}nitro.png`} alt="ADVERTISE" />
        <img className="rightbarAd" src={`${PF}discourse_ad.png`} alt="ADVERTISE" />
        <img className="rightbarAd" src={`${PF}nitro.png`} alt="ADVERTISE" />
        <img className="rightbarAd" src={`${PF}discourse_ad.png`} alt="ADVERTISE" />
      </>
    )
  }

  useEffect(() => {
    const loadingFunc = () => {
      setLoading(false)
    }
    setTimeout(loadingFunc, 500)
  }, [user])

  const ProfileRightBar = () => {
    return(
      <>
      { 
        loading ? (<Skeleton variant="rectangular" width={100} height={50} />)
        : (
          (
          user.username !== currentUser.username && (
            <button className="rightbarFollowButton" onClick={handleClick}>
              {followed ? "Unfriend" : "Send Friend Request"}
              {followed ? <RemoveIcon /> : <AddIcon/>}
            </button>
          )
          ) 
        )
      }
        <h4 className="rightbarTitle">About</h4>
        <div className="rightbarInfo">
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
        <h4 className="rightbarTitle">Friends</h4>
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
        <img className="rightbarAd" src={`${PF}nitro.png`} alt="ADVERTISE" />
        <img className="rightbarAd" src={`${PF}discourse_ad.png`} alt="ADVERTISE" />
        <img className="rightbarAd" src={`${PF}nitro.png`} alt="ADVERTISE" />
        <img className="rightbarAd" src={`${PF}discourse_ad.png`} alt="ADVERTISE" />
        <img className="rightbarAd" src={`${PF}nitro.png`} alt="ADVERTISE" />
        <img className="rightbarAd" src={`${PF}discourse_ad.png`} alt="ADVERTISE" />
        <img className="rightbarAd" src={`${PF}nitro.png`} alt="ADVERTISE" />
        <img className="rightbarAd" src={`${PF}nitro.png`} alt="ADVERTISE" />
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
