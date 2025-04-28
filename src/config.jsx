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

const botName = "9S";

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
      widgetName: "fareplayInfo",
      widgetFunc: () => <FareplayInfo />,
    },
    {
      widgetName: "privyInfo",
      widgetFunc: () => <PrivyInfo />,
    },
    {
      widgetName: "whyPrivy",
      widgetFunc: () => <WhyPrivy />,
    },
    {
      widgetName: "findWallet",
      widgetFunc: () => <FindWallet />,
    },
    {
      widgetName: "minAmount",
      widgetFunc: () => <MinimumAmount />,
    },
    {
      widgetName: "buyFare",
      widgetFunc: () => <BuyFare />,
    },
    {
      widgetName: "troubleFunding",
      widgetFunc: () => <TroubleFunding />,
    },
    {
      widgetName: "supportedNetworks",
      widgetFunc: () => <SupportedNetworks />,
    },
    {
      widgetName: "associatedFees",
      widgetFunc: () => <AssociatedFees />,
    },
    {
      widgetName: "moreInfo",
      widgetFunc: () => <MoreInfo />,
    },
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
