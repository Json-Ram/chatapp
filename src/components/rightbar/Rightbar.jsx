import "./rightbar.css";
import { Cake } from "@material-ui/icons";
import { Users } from "../../dummyData";
import Online from "../online/Online";


export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <Cake/>
          <span className="birthdayText"><b>Jason</b> and 3 <b>other friend</b> have a birthday today</span>
        </div>
        <img className="rightbarAd" src="" alt="ADVERTISE" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u)=>(
            <Online key={u.id} user={u}/>
          ))}
        </ul>
      </div>
    </div>
  )
}
