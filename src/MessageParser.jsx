import React from "react";
import Fuse from "fuse.js";

const MessageParser = ({ children, actions }) => {
  const messageHandlers = [
    { keyword: "hello", handler: actions.handleHello },
    { keyword: "hi", handler: actions.handleHello },
    { keyword: "YoRHa", handler: actions.handleYoRHa },
    { keyword: "Androids", handler: actions.handleAndroids },
    { keyword: "models", handler: actions.handleModelTypes },
    { keyword: "behaviors", handler: actions.handleAndroidBehaviors },
    { keyword: "options", handler: actions.handleOptions },
    { keyword: "purpose", handler: actions.handlePurpose },
    { keyword: "ethical", handler: actions.handleEthicalImplications },
    { keyword: "morality", handler: actions.handleMoralAmbiguity },
    { keyword: "organization", handler: actions.handleOrganization },
    { keyword: "info", handler: actions.handleMoreInfo },
  ];

  const fuse = new Fuse(messageHandlers, {
    keys: ["keyword"],
    threshold: 0.4,
  });

  const parse = async (message) => {
    const lowercaseMessage = message.toLowerCase();
    const result = fuse.search(lowercaseMessage);

    if (result.length > 0) {
      result[0].item.handler();
    } else {
      await actions.handleGemini(message);
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          parse,
          actions,
        })
      )}
    </div>
  );
};

export default MessageParser;
