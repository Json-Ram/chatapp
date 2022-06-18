import React from 'react';
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import Feed from "../../components/feed/Feed"
import "./profile.css";
import {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams} from 'react-router'

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async() => {
      const res = await axios.get(`/users?username=${username}`)
      setUser(res.data)
    }
    fetchUser()
  },[username]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth"})
  }, [user])

  return (
    <>
      <Topbar/>
      <div className="profile">
      <Sidebar/>
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
            <img loading='lazy' className="profileCoverImg" src={user.coverPicture ? PF+"cover/"+user.coverPicture : PF+"cover/noCover.png"} alt="" />
            <img className="profileUserImg" src={user.profilePicture ? PF+"profile/"+user.profilePicture :  PF+"/profile/noAvatar.png"} alt="" />
          </div>
          <div className="profileInfo">
            <h4 className='profileInfoName'>{user.username}</h4>
            <span className='profileInfoDesc'>{user.desc}</span>
          </div>
        </div>
        <div className="profileRightBottom">
          <Feed username={username}/>
          <Rightbar user={user}/>
        </div>
      </div>
      </div>
    </>
  )
}
