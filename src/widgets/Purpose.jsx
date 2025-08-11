import { AnswerComponent } from "../components/Answers/AnswerComponent";
import { FaqData } from "../data/FAQdata.json";

export const Purpose = () => {
  const purposeData= FaqData[7];
  return (
    <AnswerComponent
      info={purposeData.answer.info}
      listItem={purposeData.answer.features[0].list_item}
      listItem_2={purposeData.answer.features[0].list_item_2}
      listItem_3={purposeData.answer.features[0].list_item_3}
      listItem_4={purposeData.answer.features[0].list_item_4}
      listItem_5={purposeData.answer.features[0].list_item_5}
      listItem_6={purposeData.answer.features[0].list_item_6}
      listItem_7={purposeData.answer.features[0].list_item_7}
      listItem_8={purposeData.answer.features[0].list_item_8}
      listItem_9={purposeData.answer.features[0].list_item_9}
      bottom_info={purposeData.answer.bottom_info}
    />
  );
};
export default Purpose;
