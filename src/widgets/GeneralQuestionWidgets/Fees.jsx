import Options from "../Options";

const GeneralFees = (props) => {
  const options = [
    {
      name: "Are there any fees?",
      handler: props.actionProvider.handleAssociatedFees,
      id: 1,
    },
    {
      name: "Minimum to play?",
      handler: props.actionProvider.handleMinimumAmount,
      id: 2,
    },
  ];
  return <Options options={options} title="Fees Questions" {...props} />;
};

export default GeneralFees;
