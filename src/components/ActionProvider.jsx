import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
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

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleOptions,
            handlePrivy,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
