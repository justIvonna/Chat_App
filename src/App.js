import "./App.css";
import React, { useEffect, useState } from "react";
import Message from "./Components/Message";
import Header from "./Components/Header";
import Input from "./Components/Input";
import Footer from "./Components/Footer";
import { randomColor, randomName } from "./Functions/Names";

const App = () => {
  const [member, setMember] = useState({
    username: randomName(),
    color: randomColor(),
  });

  const [drone, setDrone] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!drone) {
      const drone = new window.Scaledrone("mcrxToNY4tweJp7B", {
        data: member,
      });
      drone.on("open", (error) => {
        if (error) {
          return console.error(error);
        }
        member.id = drone.clientId;
        setMember(member);
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
      <Footer />
    </div>
  );
};
export default App;
