import "./styles.css";

const AskAnother = (props) => {
  return (
    <div
      onClick={() => props.actionProvider.handleOptions()}
      className="askAnotherBtn"
    >
      Do you have another question?
    </div>
  );
};

export default AskAnother;
