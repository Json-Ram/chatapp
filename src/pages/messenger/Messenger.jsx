import {useState, useContext, useEffect, useRef} from 'react'
import "./messenger.css"
import Topbar from "../../components/topbar/Topbar"
import Conversation from '../../components/conversation/Conversation';
import Message from '../../components/message/Message';
import ChatOnline from '../../components/chatOnline/ChatOnline';
import axios from "axios";
import { AuthContext } from '../../context/AuthContext';

export default function Messenger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("/conversations/" + user._id);
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user._id]);
  return (
    <>
      <Topbar/>
      <div className='messenger'>
       <div className="chatMenu">
        <div className="chatMenuWrapper">
          <input placeholder="Search for Friends" className='chatMenuInput' />
          {conversations.map((c) => (
              <div onClick={() => setCurrentChat(c)}>
                <Conversation conversation={c} currentUser={user} />
              </div>
            ))}
        </div>
       </div>
       <div className="chatBox">
        <div className="chatBoxWrapper">
          <div className="chatBoxTop">
            <Message/>
            <Message own={true}/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
          </div>
        </div>
        <div className="chatBoxBottom">
          <textarea className='chatMessageInput' placeholder='write something...'></textarea>
          <button className='chatSubmitButton'>Send</button>
        </div>
       </div>
       <div className="chatOnline">
        <div className="chatOnlineWrapper">
          <ChatOnline/>
        </div>
       </div>
      </div>
    </>
  )
}
