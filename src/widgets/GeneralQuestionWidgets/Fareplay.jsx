import Options from "../Options";

const GeneralFareplay = (props) => {
  const options = [
    {
      name: "What is Fareplay?",
      handler: props.actionProvider.handleFareplay,
      id: 1,
    },
    {
      name: "Where to buy FARE?",
      handler: props.actionProvider.handleBuyFare,
      id: 2,
    },
    {
      name: "Building your Casino?",
      handler: props.actionProvider.handleCasino,
      id: 3,
    },
  ];
  return <Options options={options} title="Fareplay Questions" {...props} />;
};

export default GeneralFareplay;
