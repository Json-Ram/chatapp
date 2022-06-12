import React, {useState} from 'react'
import "./post.css"
import {MoreVert, ThumbUp, Favorite} from "@material-ui/icons"
import { Users } from '../../dummyData'

export default function Post({post}) {
  const [like, setLike] = useState(post.like);
  const [isliked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isliked ? like-1 : like+1)
    setIsLiked(!isliked)
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={Users.filter(u => u.id === post.userId)[0].profilePicture} alt=""/>
            <span className="postUsername">{Users.filter(u => u.id === post.userId)[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert/>
          </div>
        </div>
      </div>
      <div className="postCenter">
        <span className="postText">{post?.desc}</span>
        <img className="postImg" src="./assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg" alt="" />
      </div>
      <div className="postBottom">
        <div className="postBottomLeft">
          <div onClick={likeHandler}>
            <ThumbUp />
          </div>
          <div onClick={likeHandler}>
            <Favorite />
          </div>
          <span className="likeCounter">{like} People Like it</span>
        </div>
        <div className="postBottomRight">
          <span className="postCommentText">{post.comment} Comments</span>
        </div>

      </div>
    </div>
  )
}
