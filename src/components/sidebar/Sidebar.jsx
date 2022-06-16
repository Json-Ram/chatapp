import "./sidebar.css"
import { RssFeed, Chat, PlayCircleFilledOutlined } from "@mui/icons-material"
import { Link } from 'react-router-dom';
import ServerList from "../serverList/ServerList";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          
            <li className="sidebarListItem">
            <Link to="/">
            <RssFeed className="sidebarIcon"/>
            <span className="sidebarListItemText">Feed</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link to="/messenger">
            <Chat className="sidebarIcon"/>
            <span className="sidebarListItemText">Chats</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon"/>
            <span className="sidebarListItemText">Videos</span>
          </li>   
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr"/>
        
        <ServerList/>
      </div>
    </div>
  )
}
