const Options = (props) => {
  return (
    <div>
      <h1 style={{ color: "black", fontSize: "18px" }}>{props.title}</h1>
      <div>
        {props.options.map((option) => {
          return (
            <div
              style={{
                margin: "5px",
                padding: "10px",
                backgroundColor: "hotpink",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
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
