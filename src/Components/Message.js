import React from "react";
import { useEffect, useRef } from "react";

export default function Message({ messages, currentMember }) {
  const scrolling = useRef(null);

  useEffect(() => {
    scrolling.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // console.log(messages);
  // console.log(currentMember);

  const renderMessage = (message, currentMember, id) => {
    const { member, textMessage } = message;
    const myMessage = member.id === currentMember.id;
    const allMessages = myMessage ? "messMessages mainUser" : "messMessages";

    return (
      <li key={id} className={allMessages}>
        <span
          className="avatar"
          style={{ backgroundColor: member.clientData.color }}
        />
        <div className="content">
          <div className="username">{member.clientData.username}</div>
          <div
            className="text"
            style={{ backgroundColor: member.clientData.color }}
          >
            {textMessage}
          </div>
        </div>
      </li>
    );
  };

  return (
    <ul className="messagesList">
      {messages.map((m, i) => renderMessage(m, currentMember, i))}
      <div ref={scrolling} />
    </ul>
  );
}
