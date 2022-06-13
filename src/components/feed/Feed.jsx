import "./feed.css"
import Share from "../share/Share"
import Post from "../post/Post"
import { useState, useEffect } from "react"
import axios from "axios"
import { Posts } from "../../dummyData"

export default function Feed() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
  const fetchPosts = async() => {
    const res = await axios.get("posts/timeline/62a4f6b18dd36c57e967fe14")
    setPosts(res.data)
  };
  fetchPosts()
  },[])
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        {posts.map((p)=> (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  )
}
