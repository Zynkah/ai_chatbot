import Options from "./Options";

const GeneralOptions = (props) => {
  const options = [
    {
      name: "Fareplay Questions?",
      handler: props.actionProvider.handleGeneralFareplay,
      id: 1,
    },

    {
      name: "What is Privy?",
      handler: props.actionProvider.handlePrivy,
      id: 5,
    },
    {
      name: "Why do we us Privy?",
      handler: props.actionProvider.handleWhyPrivy,
      id: 6,
    },
    {
      name: "Supported Networks?",
      handler: props.actionProvider.handleSupportedNetworks,
      id: 7,
    },
    {
      name: "How do I find my wallet?",
      handler: props.actionProvider.handleFindWallet,
      id: 8,
    },
    {
      name: "Are there any fees?",
      handler: props.actionProvider.handleAssociatedFees,
      id: 9,
    },
    {
      name: "Minimum to play?",
      handler: props.actionProvider.handleMinimumAmount,
      id: 10,
    },

    {
      name: "How to withdraw winnings?",
      handler: props.actionProvider.handleWithdraw,
      id: 11,
    },
    {
      name: "Trouble funding account?",
      handler: props.actionProvider.handleTroubleFunding,
      id: 12,
    },

    {
      name: "More Information",
      handler: props.actionProvider.handleMoreInfo,
      id: 13,
    },
  ];
  return <Options options={options} title="Options" {...props} />;
};

export default GeneralOptions;
