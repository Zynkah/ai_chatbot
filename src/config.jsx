import { createChatBotMessage } from "react-chatbot-kit";
import { NineSAvatar } from "./components/avatars/BotAvatar";
import { MyAvatar } from "./components/avatars/MyAvatar";
import Overview from "./widgets/Overview";
import FareplayInfo from "./widgets/FareplayInfo";
import PrivyInfo from "./widgets/PrivyInfo";
import WhyPrivy from "./widgets/WhyPrivy";
import FindWallet from "./widgets/FindWallet";
import MinimumAmount from "./widgets/MinimumAmount";
import TroubleFunding from "./widgets/TroubleFunding";
import { SupportedNetworks } from "./widgets/SupportedNetworks";
import AssociatedFees from "./widgets/AssociatedFees";
import { MoreInfo } from "./widgets/MoreInfo";
import BuyFare from "./widgets/BuyFare";
import Withdraw from "./widgets/Withdraw";
import Casino from "./widgets/Casino";
import AskAnother from "./widgets/AskAnother";
import GeneralFareplay from "./widgets/GeneralQuestionWidgets/Fareplay";

const botName = "9S";

const withAskAnother = (Widget) => (props) => {
  return (
    <>
      {Widget && <Widget {...props} />}
      <AskAnother {...props} />
    </>
  );
};

const config = {
  initialMessages: [
    createChatBotMessage(`Hello, I am ${botName}. How can I assist you?`),
    createChatBotMessage(
      "Here's a quick overview of what I can help you with. You can also type in.",
      {
        withAvatar: false,
        delay: 400,
        widget: "overview",
      }
    ),
  ],
  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <Overview {...props} />,
      mapStateToProps: ["messages"],
      props: {
        actions: {},
      },
    },
    {
      widgetName: "generalFareplay",
      widgetFunc: withAskAnother(GeneralFareplay),
    },
    { widgetName: "fareplayInfo", widgetFunc: withAskAnother(FareplayInfo) },
    { widgetName: "privyInfo", widgetFunc: withAskAnother(PrivyInfo) },
    { widgetName: "whyPrivy", widgetFunc: withAskAnother(WhyPrivy) },
    {
      widgetName: "supportedNetworks",
      widgetFunc: withAskAnother(SupportedNetworks),
    },
    { widgetName: "findWallet", widgetFunc: withAskAnother(FindWallet) },
    {
      widgetName: "associatedFees",
      widgetFunc: withAskAnother(AssociatedFees),
    },
    { widgetName: "minAmount", widgetFunc: withAskAnother(MinimumAmount) },
    { widgetName: "buyFare", widgetFunc: withAskAnother(BuyFare) },
    { widgetName: "withdraw", widgetFunc: withAskAnother(Withdraw) },
    {
      widgetName: "troubleFunding",
      widgetFunc: withAskAnother(TroubleFunding),
    },
    { widgetName: "casino", widgetFunc: withAskAnother(Casino) },
    { widgetName: "moreInfo", widgetFunc: (props) => <MoreInfo {...props} /> },
  ],
  botName: botName,
  customComponents: {
    header: () => (
      <div
        style={{
          backgroundColor: "#d900d5",
          padding: "10px",
          borderTopLeftRadius: "3px",
          borderTopRightRadius: "3px",
          borderBottom: "2px solid black",
        }}
      >
        Conversation with 9S
      </div>
    ),
    botAvatar: (props) => <NineSAvatar {...props} />,
    // botChatMessage: (props) => <QuestionSelector {...props} />,
    userAvatar: (props) => <MyAvatar {...props} />,
    // userChatMessage: (props) => <QuestionSelector {...props} />,
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#000",
    },
    chatButton: {
      backgroundColor: "#d900d5",
    },
  },
};

export default config;
