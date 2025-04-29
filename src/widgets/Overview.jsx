import Options from "./Options";

const GeneralOptions = (props) => {
  const options = [
    {
      name: "Fareplay Questions?",
      handler: props.actionProvider.handleGeneralFareplay,
      id: 1,
    },
    {
      name: "Privy Questions?",
      handler: props.actionProvider.handleGeneralPrivy,
      id: 2,
    },

    {
      name: "Supported Networks?",
      handler: props.actionProvider.handleSupportedNetworks,
      id: 7,
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
