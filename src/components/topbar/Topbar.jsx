import './topbar.css'
import { Search, Person, Chat, Notifications } from '@material-ui/icons'
import { Link } from "react-router-dom"
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

export default function Topbar() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const {user} = useContext(AuthContext);
  
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{textDecoration:0}}>
         <span className="logo">Discourse <HeadsetMicIcon/></span>
        </Link>
      </div>
      
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className='searchIcon'/>
          <input placeholder="Search..." className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
        </div>
          <div className="topbarIcons">
            <Link to={'/messenger'}>
              <div className="topbarIconItem">
              <Chat/>
              <span className="topbarIconBadge">2</span>
            </div>
            </Link>
          </div>
          <Link to={`/profile/${user.username}`}>
            <img src={user.profilePicture ? PF + "profile/" + user.profilePicture : `${PF}profile/noAvatar.png`} alt="" className="topbarImg" />
          </Link>
      </div>
    </div>
  )
}
