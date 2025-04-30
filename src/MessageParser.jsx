import React from "react";
import Fuse from "fuse.js";

const MessageParser = ({ children, actions }) => {
  const messageHandlers = [
    { keyword: "hello", handler: actions.handleHello },
    { keyword: "hi", handler: actions.handleHello },
    { keyword: "fareplay", handler: actions.handleFareplay },
    { keyword: "privy", handler: actions.handlePrivy },
    { keyword: "why", handler: actions.handleWhyPrivy },
    { keyword: "wallet", handler: actions.handleFindWallet },
    { keyword: "options", handler: actions.handleOptions },
    { keyword: "minimum", handler: actions.handleMinimumAmount },
    { keyword: "buy", handler: actions.handleBuyFare },
    { keyword: "withdraw", handler: actions.handleWithdraw },
    { keyword: "trouble", handler: actions.handleTroubleFunding },
    { keyword: "network", handler: actions.handleSupportedNetworks },
    { keyword: "fees", handler: actions.handleAssociatedFees },
    { keyword: "casino", handler: actions.handleCasino },
    { keyword: "info", handler: actions.handleMoreInfo },
  ];

  const fuse = new Fuse(messageHandlers, {
    keys: ["keyword"],
    threshold: 0.4,
  });

  const parse = (message) => {
    const lowercaseMessage = message.toLowerCase();
    const result = fuse.search(lowercaseMessage);

    if (result.length > 0) {
      result[0].item.handler();
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
