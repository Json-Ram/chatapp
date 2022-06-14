import React from 'react'
import "./messenger.css"
import Topbar from "../../components/topbar/Topbar"
import Conversation from '../../components/conversation/Conversation';

export default function Messenger() {
  return (
    <>
      <Topbar/>
      <div className='messenger'>
       <div className="chatMenu">
        <div className="chatMenuWrapper">
          <input placeholder="Search for Friends" className='chatMenuInput' />
          <Conversation/>
        </div>
       </div>
       <div className="chatBox">
        <div className="chatBoxWrapper">box</div>
       </div>
       <div className="chatOnline">
        <div className="chatOnlineWrapper">online</div>
       </div>
      </div>
    </>
  )
}
