import Options from "../Options";

const GeneralFunding = (props) => {
  const options = [
    {
      name: "Supported Networks?",
      handler: props.actionProvider.handleSupportedNetworks,
      id: 1,
    },
    {
      name: "How to withdraw winnings?",
      handler: props.actionProvider.handleWithdraw,
      id: 2,
    },
    {
      name: "Trouble funding account?",
      handler: props.actionProvider.handleTroubleFunding,
      id: 3,
    },
  ];
  return <Options options={options} title="Funding Questions" {...props} />;
};

export default GeneralFunding;
