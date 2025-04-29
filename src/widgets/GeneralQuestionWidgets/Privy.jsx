import Options from "../Options";

const GeneralPrivy = (props) => {
  const options = [
    {
      name: "What is Privy?",
      handler: props.actionProvider.handlePrivy,
      id: 1,
    },
    {
      name: "Why do we us Privy?",
      handler: props.actionProvider.handleWhyPrivy,
      id: 2,
    },
    {
      name: "How do I find my wallet?",
      handler: props.actionProvider.handleFindWallet,
      id: 3,
    },
  ];
  return <Options options={options} title="Privy Questions" {...props} />;
};

export default GeneralPrivy;
