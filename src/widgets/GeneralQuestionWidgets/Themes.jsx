import Options from "../Options";

const GeneralThemes = (props) => {
  const options = [
    {
      name: "Moral Ambiguity?",
      handler: props.actionProvider.handleSupportedNetworks,
      id: 1,
    },
    {
      name: "Ethical Implications?",
      handler: props.actionProvider.handleWithdraw,
      id: 2,
    },
    {
      name: "Unveiling the truth?",
      handler: props.actionProvider.handleTroubleFunding,
      id: 3,
    },
  ];
  return <Options options={options} title="Funding Questions" {...props} />;
};

export default GeneralThemes;
