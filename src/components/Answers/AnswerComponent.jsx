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
  listItem_6,
  listItem_7,
  listItem_8,
  listItem_9,
  listItem_10,
  listItem_11,
  listItem_12,
  listItem_13,
  listItem_14,
  listItem_15,
  bottom_info,
}) => {
  return (
    <div className="answerWrapper">
      <p>{info}</p>
      {info_2 && <p>{info_2}</p>}
      {info_3 && <p>{info_3}</p>}

      {(listItem ||
        listItem_2 ||
        listItem_3 ||
        listItem_4 ||
        listItem_5 ||
        listItem_6 ||
        listItem_7 ||
        listItem_8 ||
        listItem_9 ||
        listItem_10 ||
        listItem_11 ||
        listItem_12 ||
        listItem_13 ||
        listItem_14 ||
        listItem_15) && (
        <ol>
          {listItem && <li>{listItem}</li>}
          {listItem_2 && <li>{listItem_2}</li>}
          {listItem_3 && <li>{listItem_3}</li>}
          {listItem_4 && <li>{listItem_4}</li>}
          {listItem_5 && <li>{listItem_5}</li>}
          {listItem_6 && <li>{listItem_6}</li>}
          {listItem_7 && <li>{listItem_7}</li>}
          {listItem_8 && <li>{listItem_8}</li>}
          {listItem_9 && <li>{listItem_9}</li>}
          {listItem_10 && <li>{listItem_10}</li>}
          {listItem_11 && <li>{listItem_11}</li>}
          {listItem_12 && <li>{listItem_12}</li>}
          {listItem_13 && <li>{listItem_13}</li>}
          {listItem_14 && <li>{listItem_14}</li>}
          {listItem_15 && <li>{listItem_15}</li>}
        </ol>
      )}
      {bottom_info && <p>{bottom_info}</p>}
    </div>
  );
};
