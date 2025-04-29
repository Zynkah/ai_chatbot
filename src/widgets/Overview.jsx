import Options from "./Options";

const GeneralOptions = (props) => {
  const options = [
    {
      name: "Fareplay",
      handler: props.actionProvider.handleGeneralFareplay,
      id: 1,
    },
    {
      name: "Privy",
      handler: props.actionProvider.handleGeneralPrivy,
      id: 2,
    },
    {
      name: "Funding",
      handler: props.actionProvider.handleGeneralFunding,
      id: 3,
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
      name: "More Information",
      handler: props.actionProvider.handleMoreInfo,
      id: 13,
    },
  ];
  return <Options options={options} title="Options" {...props} />;
};

export default GeneralOptions;
