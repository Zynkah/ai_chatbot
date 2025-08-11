import { AnswerComponent } from "../components/Answers/AnswerComponent";
import { FaqData } from "../data/FAQdata.json";

export const YoRHAInfo = () => {
  const yoRHaData = FaqData[0];
  return (
    <AnswerComponent
      info={yoRHaData.answer.info}
      listItem={yoRHaData.answer.features[0].list_item}
      listItem_2={yoRHaData.answer.features[0].list_item_2}
      listItem_3={yoRHaData.answer.features[0].list_item_3}
      listItem_4={yoRHaData.answer.features[0].list_item_4}
      listItem_5={yoRHaData.answer.features[0].list_item_5}
      bottom_info={yoRHaData.answer.bottom_info}
    />
  );
};
export default YoRHAInfo;
