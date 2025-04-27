import { createChatBotMessage } from "react-chatbot-kit";
import { NineSAvatar } from "./components/Avatars/BotAvatar";
import { MyAvatar } from "./components/Avatars/MyAvatar";
import Overview from "./widgets/Overview";
import PrivyInfo from "./widgets/PrivyInfo";
import FindWallet from "./widgets/FindWallet";
import MinimumAmount from "./widgets/MinimumAmount";
import TroubleFunding from "./widgets/TroubleFunding";
import { SupportedNetworks } from "./widgets/SupportedNetworks";
import AssociatedFees from "./widgets/AssociatedFees";
import { MoreInfo } from "./widgets/MoreInfo";

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
      widgetName: "privyInfo",
      widgetFunc: () => <PrivyInfo />,
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
          backgroundColor: "hotpink",
          padding: "10px",
          borderRadius: "3px",
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
      backgroundColor: "black",
    },
    chatButton: {
      backgroundColor: "hotpink",
    },
  },
};

export default config;
