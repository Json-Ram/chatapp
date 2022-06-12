import './topbar.css'
import { Search } from '@material-ui/icons'

export default function Topbar() {
  return (
    <div classname="topbar-Container">
      <div className="topbar-Left">
      <span className="logo">ChatApp</span>
      </div>
      
      <div className="topbar-Center">
        <div className="searchbar">
          <Search />
          <input placeholder="Search..." className="searchInput" />
        </div>
      </div>

      <div className="topbar-Right">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          .topbarIcon
        </div>
      </div>

      
      

      
    </div>
  )
}
