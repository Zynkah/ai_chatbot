import Options from "../Options";

const GeneralYoRHa = (props) => {
  const options = [
    {
      name: "What is YoRHa?",
      handler: props.actionProvider.handleYoRHa,
      id: 1,
    },
    {
      name: "YoRHa's Purpose?",
      handler: props.actionProvider.handlePurpose,
      id: 2,
    },
    {
      name: "YoRHa Organization?",
      handler: props.actionProvider.handleOrganization,
      id: 3,
    },
  ];
  return <Options options={options} title="YoRHa Questions" {...props} />;
};

export default GeneralYoRHa;
