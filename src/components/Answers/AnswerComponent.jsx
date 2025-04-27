import "./styles.css";

export const AnswerComponent = ({
  info,
  info_2,
  info_3,
  listItem,
  listItem_2,
  listItem_3,
}) => {
  return (
    <div className="answerWrapper">
      <p>{info}</p>
      {info_2 && <p>{info_2}</p>}
      {info_3 && <p>{info_3}</p>}

      {/* Render list items if they exist */}
      {(listItem || listItem_2 || listItem_3) && (
        <ul>
          {listItem && <li>{listItem}</li>}
          {listItem_2 && <li>{listItem_2}</li>}
          {listItem_3 && <li>{listItem_3}</li>}
        </ul>
      )}
    </div>
  );
};
