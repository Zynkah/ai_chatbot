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
      name: "Fees",
      handler: props.actionProvider.handleGeneralFees,
      id: 4,
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
