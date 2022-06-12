import React from 'react'
import "./post.css"
import {MoreVert, ThumbUp, Favorite} from "@material-ui/icons"

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="./assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg" alt=""/>
            <span className="postUsername">Safak Kocaoglu</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert/>
          </div>
        </div>
      </div>
      <div className="postCenter">
        <span className="postText">Hey! Its my first post</span>
        <img className="postImg" src="./assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg" alt="" />
      </div>
      <div className="postBottom">
        <div className="postBottomLeft">
          <ThumbUp/>
          <Favorite/>
          <span className="likeCounter">31 People Like it</span>
        </div>
        <div className="postBottomRight">
          <span className="postCommentText">9 Comments</span>
        </div>

      </div>
    </div>
  )
}
