import React from "react";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import Moment from 'moment';

const CustomerHeader = ({ chat }) => {
  
  const handleChatTitleClass = (title) => {
    let classNM;
    if(!!title && typeof title === 'string'){
      classNM = title.includes("Ai")?
      "both":"";
    }
    return "header-text "+classNM;
  };

  function showChat(title){ 
    if(typeof title !== "string") return;
    let newTitle = title.split("");
    return newTitle.map((char,i)=>{
      return <span key={i.toPrecision()} >{char}</span>;
    })
  }

  return (
    <div className="chat-header">
      <div className="flexbetween">
        <ChatBubbleLeftRightIcon className="icon-chat" />
        {/* <h3 className="header-text">{chat.title}</h3> */}
        <div className={handleChatTitleClass(chat.title)}  >
          <div class="words word-1">
            {showChat(chat.title)}
          </div> 
        </div>
      </div>
      <div className="flexbetween">
        {chat.description !== "⬅️ ⬅️ ⬅️" ? (
          <p className="header-text">{chat.description}</p>
        ) : (
          <p className="header-text">no chat selected</p>
        )}
      </div>
    </div>
  );
};

export default CustomerHeader;
