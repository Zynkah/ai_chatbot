import Options from "./Options";

const GeneralOptions = (props) => {
  const options = [
    {
      name: "What is Fareplay?",
      handler: props.actionProvider.handleFareplay,
      id: 1,
    },
    {
      name: "What is Privy?",
      handler: props.actionProvider.handlePrivy,
      id: 2,
    },
    {
      name: "Supported Networks?",
      handler: props.actionProvider.handleSupportedNetworks,
      id: 3,
    },
    {
      name: "How do I fund my wallet?",
      handler: props.actionProvider.handleFindWallet,
      id: 4,
    },
    {
      name: "Are there any fees?",
      handler: props.actionProvider.handleAssociatedFees,
      id: 5,
    },
    {
      name: "Minimum to play?",
      handler: props.actionProvider.handleMinimumAmount,
      id: 6,
    },
    {
      name: "Trouble funding account?",
      handler: props.actionProvider.handleTroubleFunding,
      id: 7,
    },
    {
      name: "More Information",
      handler: props.actionProvider.handleMoreInfo,
      id: 8,
    },
  ];
  return <Options options={options} title="Options" {...props} />;
};

export default GeneralOptions;
