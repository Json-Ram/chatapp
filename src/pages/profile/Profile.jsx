import React from 'react';
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import Feed from "../../components/feed/Feed"
import "./profile.css";

export default function Profile() {
  return (
    <>
      <Topbar/>
      <div className="profile">
      <Sidebar/>
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
            <img className="profileCoverImg" src="assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg" alt="" />
            <img className="profileUserImg" src="/assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg" alt="" />
          </div>
          <div className="profileInfo">
            <h4 className='profileInfoName'>Brandon Felty</h4>
            <span className='profileInfoDesc'>Hello Friends!</span>
          </div>
        </div>
        <div className="profileRightBottom">
          <Feed/>
          <Rightbar profile/>
        </div>
      </div>
      </div>
    </>
  )
}
