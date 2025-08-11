import { createChatBotMessage } from "react-chatbot-kit";
import { NineSAvatar } from "./components/avatars/BotAvatar";
import { MyAvatar } from "./components/avatars/MyAvatar";
import Overview from "./widgets/Overview";
import YoRHaInfo from "./widgets/YoRHaInfo";
import AndroidInfo from "./widgets/AndroidInfo";
import ModelTypes from "./widgets/ModelTypes";
import AndroidBehaviors from "./widgets/AndroidBehaviors";
import MinimumAmount from "./widgets/MinimumAmount";
import TroubleFunding from "./widgets/TroubleFunding";
import { SupportedNetworks } from "./widgets/SupportedNetworks";
import AssociatedFees from "./widgets/AssociatedFees";
import { MoreInfo } from "./widgets/MoreInfo";
import Purpose from "./widgets/Purpose";
import Withdraw from "./widgets/Withdraw";
import Organization from "./widgets/Organization";
import AskAnother from "./widgets/AskAnother";
import GeneralYoRHa from "./widgets/GeneralQuestionWidgets/YoRHa";
import GeneralAndroids from "./widgets/GeneralQuestionWidgets/Androids";
import GeneralThemes from "./widgets/GeneralQuestionWidgets/Themes";
import GeneralFees from "./widgets/GeneralQuestionWidgets/Fees";

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
      widgetName: "generalYoRHa",
      widgetFunc: withAskAnother(GeneralYoRHa),
    },
    {
      widgetName: "generalAndroids",
      widgetFunc: withAskAnother(GeneralAndroids),
    },
    {
      widgetName: "generalThemes",
      widgetFunc: withAskAnother(GeneralThemes),
    },
    {
      widgetName: "generalFees",
      widgetFunc: withAskAnother(GeneralFees),
    },
    { widgetName: "whatIsYoRHa", widgetFunc: withAskAnother(YoRHaInfo) },
    { widgetName: "androidInfo", widgetFunc: withAskAnother(AndroidInfo) },
    { widgetName: "modelTypes", widgetFunc: withAskAnother(ModelTypes) },
    {
      widgetName: "supportedNetworks",
      widgetFunc: withAskAnother(SupportedNetworks),
    },
    {
      widgetName: "androidBehaviors",
      widgetFunc: withAskAnother(AndroidBehaviors),
    },
    {
      widgetName: "associatedFees",
      widgetFunc: withAskAnother(AssociatedFees),
    },
    { widgetName: "minAmount", widgetFunc: withAskAnother(MinimumAmount) },
    { widgetName: "purpose", widgetFunc: withAskAnother(Purpose) },
    { widgetName: "withdraw", widgetFunc: withAskAnother(Withdraw) },
    {
      widgetName: "troubleFunding",
      widgetFunc: withAskAnother(TroubleFunding),
    },
    { widgetName: "organization", widgetFunc: withAskAnother(Organization) },
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
