import Options from "./Options";

const GeneralOptions = (props) => {
  const options = [
    {
      name: "What is Privy?",
      handler: props.actionProvider.handlePrivy,
      id: 1,
    },
    {
      name: "How do I fund my wallet?",
      handler: props.actionProvider.handleFindWallet,
      id: 2,
    },
    {
      name: "Minimum to play?",
      handler: props.actionProvider.handleMinimumAmount,
      id: 3,
    },
    {
      name: "Trouble funding account?",
      handler: props.actionProvider.handleTroubleFunding,
      id: 4,
    },
  ];
  return <Options options={options} title="Options" {...props} />;
};

export default GeneralOptions;
