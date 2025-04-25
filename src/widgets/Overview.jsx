import Options from "./Options";

const GeneralOptions = (props) => {
  const options = [
    {
      name: "What is Privy?",
      handler: props.actionProvider.handlePrivy,

      id: 1,
    },
  ];
  console.log(options);
  return <Options options={options} title="Options" {...props} />;
};

export default GeneralOptions;
