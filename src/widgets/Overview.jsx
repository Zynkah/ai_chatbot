import Options from "./Options";

const GeneralOptions = (props) => {
  const options = [
    {
      name: "YoHRa",
      handler: props.actionProvider.handleGeneralYoRHa,
      id: 1,
    },
    {
      name: "Androids",
      handler: props.actionProvider.handleGeneralAndroids,
      id: 2,
    },
    {
      name: "Themes",
      handler: props.actionProvider.handleGeneralThemes,
      id: 3,
    },
    {
      name: "More Information",
      handler: props.actionProvider.handleMoreInfo,
      id: 5,
    },
  ];
  return <Options options={options} title="Options" {...props} />;
};

export default GeneralOptions;
