import { AnswerComponent } from "../components/Answers/AnswerComponent";
import { FaqData } from "../data/FAQdata.json";

export const FareplayInfo = () => {
  const fareplayData = FaqData[0];
  return (
    <AnswerComponent
      info={fareplayData.answer.info}
      listItem={fareplayData.answer.features[0].list_item}
      listItem_2={fareplayData.answer.features[0].list_item_2}
      listItem_3={fareplayData.answer.features[0].list_item_3}
      listItem_4={fareplayData.answer.features[0].list_item_4}
      listItem_5={fareplayData.answer.features[0].list_item_5}
      bottom_info={fareplayData.answer.bottom_info}
    />
  );
};
export default FareplayInfo;
