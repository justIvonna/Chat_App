import "./App.css";
import React, { useEffect, useState } from "react";
import Message from "./Components/Message";
import Header from "./Components/Header";
import Input from "./Components/Input";

const randomName = () => {
  const names = [
    "Ante Anić",
    "Anica Anković",
    "Teddy Bear",
    "Mickey Mouse",
    "Minnie Mouse",
    "Mara Marić",
    "Ivo Ivić",
    "Milka Milena",
    "Graško Grašak",
    "Bubić Pablo",
    "Kvrga Kvrg",
    "mačak Zoko",
    "maca Molly",
    "Garava",
    "Mik Mikonja",
    "Slavko Slavić",
  ];
  const namesRandom = names[Math.floor(Math.random() * names.length)];
  return namesRandom;
};
const randomColor = () => {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
};
const App = () => {
  // eslint-disable-next-line
  const [member, setMember] = useState({
    username: randomName(),
    color: randomColor(),
  });
  const [drone, setDrone] = useState(null);
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    if (!drone) {
      const drone = new window.Scaledrone("yJ7dWBpcyutbBfPj", {
        data: member,
      });
      drone.on("open", (error) => {
        if (error) {
          return console.error(error);
        }
        member.id = drone.clientId;
      });
      setDrone(drone);
    } else {
      const room = drone.subscribe("observable-room");
      room.on("message", (message) => {
        const { member, data } = message;
        setMessages((mess) => [...mess, { member, textMessage: data }]);
      });
    }
  }, [drone, member]);
  const onSendMessage = (message) => {
    drone.publish({
      room: "observable-room",
      message,
    });
  };
  return (
    <div className="chatContainer">
      <Header />
      <Message messages={messages} currentMember={member} />
      <Input onSendMessage={onSendMessage} />
    </div>
  );
};
export default App;
