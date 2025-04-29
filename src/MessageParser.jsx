import React from "react";

const MessageParser = ({ children, actions }) => {
  const messageHandlers = {
    hello: actions.handleHello,
    hi: actions.handleHello,
    fareplay: actions.handleFareplay,
    privy: actions.handlePrivy,
    why: actions.handleWhyPrivy,
    wallet: actions.handleFindWallet,
    options: actions.handleOptions,
    minimum: actions.handleMinimumAmount,
    buy: actions.handleBuyFare,
    withdraw: actions.handleWithdraw,
    trouble: actions.handleTroubleFunding,
    network: actions.handleSupportedNetworks,
    fees: actions.handleAssociatedFees,
    casino: actions.handleCasino,
    info: actions.handleMoreInfo,
  };

  const parse = (message) => {
    const lowercaseMessage = message.toLowerCase();

    Object.entries(messageHandlers).forEach(([keyword, handler]) => {
      if (lowercaseMessage.includes(keyword)) {
        handler();
      }
    });
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
