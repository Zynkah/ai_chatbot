import "./styles.css";

const Options = (props) => {
  return (
    <div>
      <h1 className="optionsHeader">{props.title}</h1>
      <div>
        {props.options.map((option) => {
            return (
              <div
                className="optionsNameContainer"
                onClick={option.handler}
                key={option.id}
              >
                {option.name}
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default Options;
