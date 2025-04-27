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

    if (message.includes('minimum')) {
      actions.handleMinimumAmount();
    }

    if (message.includes('trouble')) {
      actions.handleTroubleFunding();
    }

    if (message.includes('network')) {
      actions.handleSupportedNetworks();
    }

    if (message.includes('fees')) {
      actions.handleAssociatedFees();
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
