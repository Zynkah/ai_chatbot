import config from "../config.jsx";
import MessageParser from "./MessageParser.jsx";
import ActionProvider from "./ActionProvider.jsx";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import { useState } from "react";

export const ChatComponent = () => {
  const [showBot, toggleBot] = useState(false);

  // const saveMessages = (messages, HTMLString) => {
  //   localStorage.setItem("chat_messages", JSON.stringify(messages));
  // };

  // const loadMessages = () => {
  //   const messages = JSON.parse(localStorage.getItem("chat_messages"));
  //   return messages;
  // };

  return (
    <div>
      {showBot && (
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
          // messageHistory={loadMessages()}
          // saveMessages={saveMessages}
        />
      )}
      <button onClick={() => toggleBot((prev) => !prev)}>Bot</button>
    </div>
  );
};
