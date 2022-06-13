import "./rightbar.css";
import { Cake } from "@material-ui/icons";
import { Users } from "../../dummyData";
import Online from "../online/Online";


export default function Rightbar({profile}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const HomeRightBar = () => {
    return(
      <>
        <div className="birthdayContainer">
          <Cake/>
          <span className="birthdayText"><b>Jason</b> and 3 <b>other friend</b> have a birthday today</span>
        </div>
        <img className="rightbarAd" src={`${PF}michael-dam-mEZ3PoFGs_k-unsplash.jpg`} alt="ADVERTISE" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u)=>(
            <Online key={u.id} user={u}/>
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightBar = ({ profile }) => {
    return(
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightBarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={`${PF}michael-dam-mEZ3PoFGs_k-unsplash.jpg`} alt="" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={`${PF}michael-dam-mEZ3PoFGs_k-unsplash.jpg`} alt="" />
            <span className="rightbarFollowingName">Bohn Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={`${PF}michael-dam-mEZ3PoFGs_k-unsplash.jpg`} alt="" />
            <span className="rightbarFollowingName">Tohn Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={`${PF}michael-dam-mEZ3PoFGs_k-unsplash.jpg`} alt="" />
            <span className="rightbarFollowingName">Hohn Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={`${PF}michael-dam-mEZ3PoFGs_k-unsplash.jpg`} alt="" />
            <span className="rightbarFollowingName">Lohn Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={`${PF}michael-dam-mEZ3PoFGs_k-unsplash.jpg`} alt="" />
            <span className="rightbarFollowingName">Pohn Carter</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar/> : <HomeRightBar />}
      </div>
    </div>
  )
}
