import React from "react";
import { getGeminiResponse } from "./components/AI/geminiHelper";

export const ActionProvider = ({
  createChatBotMessage,
  setState,
  children,
}) => {
  const createMessage = (text, widgetName) => {
    const botMessage = createChatBotMessage(text, {
      widget: widgetName,
      loading: true,
      terminateLoading: true,
      withAvatar: true,
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handlers = {
    handleHello: () => {
      const botMessage = createChatBotMessage(
        "Nice to meet you. You can call me Nines."
      );
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    },
    handleOptions: (options = {}) => {
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
    },
    handleGemini: async (userMessage) => {
      const loadingMsg = createChatBotMessage("Thinking...");
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, loadingMsg],
      }));

      const aiResponse = await getGeminiResponse(userMessage);
      const botMsg = createChatBotMessage(aiResponse);

      setState((prev) => ({
        ...prev,
        messages: [...prev.messages.slice(0, -1), botMsg], // replace loading
      }));
    },
    handleGeneralFareplay: () =>
      createMessage(
        "Here are some Fareplay-related questions:",
        "generalFareplay"
      ),
    handleGeneralPrivy: () =>
      createMessage("Here are some Privy-related questions:", "generalPrivy"),
    handleGeneralFunding: () =>
      createMessage(
        "Here are some funding-related questions:",
        "generalFunding"
      ),
    handleGeneralFees: () =>
      createMessage("Here are some fees-related questions:", "generalFees"),
    handleFareplay: () =>
      createMessage(
        "Here is what you need to know about Fareplay:",
        "fareplayInfo"
      ),
    handlePrivy: () =>
      createMessage("Here is what you need to know about Privy:", "privyInfo"),
    handleWhyPrivy: () =>
      createMessage("Here is why we use Privy:", "whyPrivy"),
    handleFindWallet: () =>
      createMessage("Here is how you find your wallet in Privy:", "findWallet"),
    handleMinimumAmount: () =>
      createMessage("What is the minimum amount of FARE to play:", "minAmount"),
    handleBuyFare: () =>
      createMessage("Where can I buy FARE tokens:", "buyFare"),
    handleWithdraw: () =>
      createMessage("How do I withdraw my winnings from Fareplay:", "withdraw"),
    handleTroubleFunding: () =>
      createMessage(
        "If you have trouble funding your account:",
        "troubleFunding"
      ),
    handleSupportedNetworks: () =>
      createMessage(
        "Which networks does Fareplay support for funding my account:",
        "supportedNetworks"
      ),
    handleAssociatedFees: () =>
      createMessage(
        "What fees are associated with using Privy or playing on Fareplay:",
        "associatedFees"
      ),
    handleCasino: () =>
      createMessage("How to build your own casino:", "casino"),
    handleMoreInfo: () => createMessage("More information:", "moreInfo"),
    handleAskAnother: () => createMessage("", "askAnother"),
  };

  return (
    <div>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { actions: handlers })
      )}
    </div>
  );
};

export default ActionProvider;
