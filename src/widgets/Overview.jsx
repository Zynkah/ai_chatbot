import Options from "./Options";

const GeneralOptions = (props) => {
  const options = [
    {
      name: "What is Privy?",
      handler: props.actionProvider.handlePrivy,
      id: 1,
    },
    {
      name: "Supported Networks?",
      handler: props.actionProvider.handleSupportedNetworks,
      id: 2,
    },
    {
      name: "How do I fund my wallet?",
      handler: props.actionProvider.handleFindWallet,
      id: 3,
    },
    {
      name: "Are there any fees?",
      handler: props.actionProvider.handleAssociatedFees,
      id: 4,
    },
    {
      name: "Minimum to play?",
      handler: props.actionProvider.handleMinimumAmount,
      id: 5,
    },
    {
      name: "Trouble funding account?",
      handler: props.actionProvider.handleTroubleFunding,
      id: 6,
    },
    {
      name: "More Information",
      handler: props.actionProvider.handleMoreInfo,
      id: 6,
    },
    
  ];
  return <Options options={options} title="Options" {...props} />;
};

export default GeneralOptions;
