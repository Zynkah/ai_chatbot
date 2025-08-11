import { AnswerComponent } from "../components/Answers/AnswerComponent";
import { FaqData } from "../data/FAQdata.json";

const ModelTypes = () => {
  const modelTypesData = FaqData[2];
  return (
    <AnswerComponent
      info={modelTypesData.answer.info}
      listItem={modelTypesData.answer.features[0].list_item}
      listItem_2={modelTypesData.answer.features[0].list_item_2}
      listItem_3={modelTypesData.answer.features[0].list_item_3}
      listItem_4={modelTypesData.answer.features[0].list_item_4}
      listItem_5={modelTypesData.answer.features[0].list_item_5}
      listItem_6={modelTypesData.answer.features[0].list_item_6}
      listItem_7={modelTypesData.answer.features[0].list_item_7}
      listItem_8={modelTypesData.answer.features[0].list_item_8}
      listItem_9={modelTypesData.answer.features[0].list_item_9}
      bottom_info={modelTypesData.answer.bottom_info}
    />
  );
};
export default ModelTypes;
