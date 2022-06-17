import "./message.css"
import { useContext, useEffect, useState } from "react";
import { format } from "timeago.js"
import { AuthContext } from '../../context/AuthContext';
import axios from "axios";

export default function Message({message,own}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  const [friend, setFriend] = useState(null);
  const [conversation, setConversation] = useState(null);

  useEffect(() => {
    const getConversation = async () => {
      try {
        const res = await axios.get("/conversations/convo/" + message.conversationId);
        setConversation(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversation();
  }, [user._Id, message.conversationId]);

  useEffect(() => {
    if (conversation) {
      const friendId = conversation.members.find((m) => m !== user._id);
      const getUser = async () => {
        try {
          const res = await axios("/users?userId=" + friendId);
          setFriend(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      getUser();
    }
  }, [conversation, user._Id]);

  return (
    <div className={own ? "message own" : "message"} >
      <div className="messageTop">
        <img className="messageImg" src={ own ? PF + "profile/" + user.profilePicture : PF + "profile/" + friend.profilePicture} alt="" />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  )
}
