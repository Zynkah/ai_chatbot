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
      name: "Why do we us Privy?",
      handler: props.actionProvider.handleWhyPrivy,
      id: 3,
    },
    {
      name: "Supported Networks?",
      handler: props.actionProvider.handleSupportedNetworks,
      id: 4,
    },
    {
      name: "How do I find my wallet?",
      handler: props.actionProvider.handleFindWallet,
      id: 5,
    },
    {
      name: "Are there any fees?",
      handler: props.actionProvider.handleAssociatedFees,
      id: 6,
    },
    {
      name: "Minimum to play?",
      handler: props.actionProvider.handleMinimumAmount,
      id: 7,
    },
    {
      name: "Where to buy FARE?",
      handler: props.actionProvider.handleBuyFare,
      id: 8,
    },
    {
      name: "How to withdraw winnings?",
      handler: props.actionProvider.handleWithdraw,
      id: 9,
    },
    {
      name: "Trouble funding account?",
      handler: props.actionProvider.handleTroubleFunding,
      id: 10,
    },
    {
      name: "Building your Casino?",
      handler: props.actionProvider.handleCasino,
      id: 11,
    },
    {
      name: "More Information",
      handler: props.actionProvider.handleMoreInfo,
      id: 12,
    },
  ];
  return <Options options={options} title="Options" {...props} />;
};

export default GeneralOptions;
