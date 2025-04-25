import "./styles.css";

const Options = (props) => {
  return (
    <div>
      <h1 className="optionsHeader">{props.title}</h1>
      <div>
        {props.options.map((option) => {
            return (
              <button
                className="optionsNameContainer"
                onClick={option.handler}
                key={option.id}
              >
                {option.name}
              </button>
            );
        })}
      </div>
    </div>
  );
};

export default Options;
