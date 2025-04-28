import "./styles.css";

export const AnswerComponent = ({
  info,
  info_2,
  info_3,
  listItem,
  listItem_2,
  listItem_3,
  listItem_4,
  listItem_5,
  bottom_info,
}) => {
  return (
    <div className="answerWrapper">
      <p>{info}</p>
      {info_2 && <p>{info_2}</p>}
      {info_3 && <p>{info_3}</p>}

      {(listItem || listItem_2 || listItem_3 || listItem_4 || listItem_5) && (
        <ol>
          {listItem && <li>{listItem}</li>}
          {listItem_2 && <li>{listItem_2}</li>}
          {listItem_3 && <li>{listItem_3}</li>}
          {listItem_4 && <li>{listItem_4}</li>}
          {listItem_5 && <li>{listItem_5}</li>}
        </ol>
      )}
      {bottom_info && <p>{bottom_info}</p>}
    </div>
  );
};
