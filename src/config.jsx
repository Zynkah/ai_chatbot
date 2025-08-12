import { createChatBotMessage } from "react-chatbot-kit";
import { NineSAvatar } from "./components/avatars/BotAvatar";
import { MyAvatar } from "./components/avatars/MyAvatar";
import Overview from "./widgets/Overview";
import YoRHaInfo from "./widgets/YoRHaInfo";
import AndroidInfo from "./widgets/AndroidInfo";
import ModelTypes from "./widgets/ModelTypes";
import AndroidBehaviors from "./widgets/AndroidBehaviors";
import { MoralAmbiguity } from "./widgets/MoralAmbiguity";
import { MoreInfo } from "./widgets/MoreInfo";
import Purpose from "./widgets/Purpose";
import EthicalImplications from "./widgets/EthicalImplications";
import Organization from "./widgets/Organization";
import AskAnother from "./widgets/AskAnother";
import GeneralYoRHa from "./widgets/GeneralQuestionWidgets/YoRHa";
import GeneralAndroids from "./widgets/GeneralQuestionWidgets/Androids";
import GeneralThemes from "./widgets/GeneralQuestionWidgets/Themes";

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
    { widgetName: "whatIsYoRHa", widgetFunc: withAskAnother(YoRHaInfo) },
    { widgetName: "androidInfo", widgetFunc: withAskAnother(AndroidInfo) },
    { widgetName: "modelTypes", widgetFunc: withAskAnother(ModelTypes) },
    {
      widgetName: "moralAmbiguity",
      widgetFunc: withAskAnother(MoralAmbiguity),
    },
    {
      widgetName: "androidBehaviors",
      widgetFunc: withAskAnother(AndroidBehaviors),
    },
    { widgetName: "purpose", widgetFunc: withAskAnother(Purpose) },
    { widgetName: "withdraw", widgetFunc: withAskAnother(EthicalImplications) },
    { widgetName: "organization", widgetFunc: withAskAnother(Organization) },
    { widgetName: "moreInfo", widgetFunc: (props) => <MoreInfo {...props} /> },
  ],
  botName: botName,
  customComponents: {
    header: () => (
      <div
        style={{
          backgroundColor: "black",
          border: "1px solid #FDBD01",
          borderRadius: "3px",
          padding: "10px",
          borderTopLeftRadius: "6px",
          borderTopRightRadius: "6px",
          borderBottom: "1px solid #FDBD01",
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
      backgroundColor: "black",
  
    },
  },
};

export default config;
