import React from "react";

export const ActionProvider = ({
  createChatBotMessage,
  setState,
  children,
}) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage(
      "Nice to meet you. You can call me Nines."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleOptions = (options = {}) => {
    const botMessage = createChatBotMessage(
      "How can I help you? Below are some possible options.",
      {
        widget: "overview",
        loading: true,
        terminateLoading: true,
        ...options,
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleFareplay = () => {
    const botMessage = createChatBotMessage(
      "Here is what you need to know about Fareplay:",
      {
        widget: "fareplayInfo",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handlePrivy = () => {
    const botMessage = createChatBotMessage(
      "Here is what you need to know about Privy:",
      {
        widget: "privyInfo",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleWhyPrivy = () => {
    const botMessage = createChatBotMessage("Here is why we use Privy:", {
      widget: "whyPrivy",
      loading: true,
      terminateLoading: true,
      withAvatar: true,
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleFindWallet = () => {
    const botMessage = createChatBotMessage(
      "Here is how you find your wallet in Privy:",
      {
        widget: "findWallet",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleMinimumAmount = () => {
    const botMessage = createChatBotMessage(
      "What is the minimum amount of FARE to play:",
      {
        widget: "minAmount",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleBuyFare = () => {
    const botMessage = createChatBotMessage("Where can I buy FARE tokens:", {
      widget: "buyFare",
      loading: true,
      terminateLoading: true,
      withAvatar: true,
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleTroubleFunding = () => {
    const botMessage = createChatBotMessage(
      "If you have trouble funding your account:",
      {
        widget: "troubleFunding",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleSupportedNetworks = () => {
    const botMessage = createChatBotMessage(
      "Which networks does Fareplay support for funding my account:",
      {
        widget: "supportedNetworks",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleAssociatedFees = () => {
    const botMessage = createChatBotMessage(
      "What fees are associated with using Privy or playing on Fareplay:",
      {
        widget: "associatedFees",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleMoreInfo = () => {
    const botMessage = createChatBotMessage("More information:", {
      widget: "moreInfo",
      loading: true,
      terminateLoading: true,
      withAvatar: true,
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleOptions,
            handleFareplay,
            handlePrivy,
            handleWhyPrivy,
            handleFindWallet,
            handleMinimumAmount,
            handleBuyFare,
            handleTroubleFunding,
            handleSupportedNetworks,
            handleAssociatedFees,
            handleMoreInfo,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
