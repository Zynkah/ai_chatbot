import Options from "../Options";

const GeneralAndroids = (props) => {
  const options = [
    {
      name: "List of Androids?",
      handler: props.actionProvider.handleAndroids,
      id: 1,
    },
    {
      name: "Model Types?",
      handler: props.actionProvider.handleModelTypes,
      id: 2,
    },
    {
      name: "Android Programmed Behaviors?",
      handler: props.actionProvider.handleAndroidBehaviors,
      id: 3,
    },
  ];
  return <Options options={options} title="Privy Questions" {...props} />;
};

export default GeneralAndroids;
