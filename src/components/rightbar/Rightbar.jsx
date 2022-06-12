import "./rightbar.css"
import { Cake } from "@material-ui/icons"


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
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="./assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Jason Ram</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="./assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Jason Ram</span>
          </li><li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="./assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Jason Ram</span>
          </li><li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="./assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Jason Ram</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
