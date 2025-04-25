import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (["hello", "hi"].some((word) => message.includes(word))) {
      actions.handleHello();
    }

    if (message.includes("privy")) {
      actions.handlePrivy();
    }

    if (message.includes("wallet")) {
      actions.handleFindWallet();
    }

    if (message.includes("options")) {
      actions.handleOptions();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
