import Options from "./Options";

const GeneralOptions = (props) => {
  const options = [
    {
      name: "What is Privy?",
      handler: props.actionProvider.handlePrivy,
      id: 1,
    },
    {
      name: "How do I find my wallet?",
      handler: props.actionProvider.handleFindWallet,
      id: 2
    }
  ];
  return <Options options={options} title="Options" {...props} />;
};

export default GeneralOptions;
