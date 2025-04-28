import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (["hello", "hi"].some((word) => message.includes(word))) {
      actions.handleHello();
    }
    if (message.includes("fareplay")) {
      actions.handleFareplay();
    }

    if (message.includes("privy")) {
      actions.handlePrivy();
    }

    if (message.includes("why")) {
      actions.handleWhyPrivy();
    }

    if (message.includes("wallet")) {
      actions.handleFindWallet();
    }

    if (message.includes("options")) {
      actions.handleOptions();
    }

    if (message.includes("minimum")) {
      actions.handleMinimumAmount();
    }

    if (message.includes("buy")) {
      actions.handleBuyFare();
    }

    if (message.includes("trouble")) {
      actions.handleTroubleFunding();
    }

    if (message.includes("network")) {
      actions.handleSupportedNetworks();
    }

    if (message.includes("fees")) {
      actions.handleAssociatedFees();
    }
    if (message.includes("info")) {
      actions.handleMoreInfo();
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
