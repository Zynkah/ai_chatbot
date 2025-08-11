import { AnswerComponent } from "../components/Answers/AnswerComponent";
import { FaqData } from "../data/FAQdata.json";

export const Organization = () => {
  const organizationData = FaqData[10];
  return (
    <AnswerComponent
      info={organizationData.answer.info}
      info_2={organizationData.answer.info_2}
      listItem={organizationData.answer.features[0].list_item}
      listItem_2={organizationData.answer.features[0].list_item_2}
      listItem_3={organizationData.answer.features[0].list_item_3}
      listItem_4={organizationData.answer.features[0].list_item_4}
      listItem_5={organizationData.answer.features[0].list_item_5}
    />
  );
};
export default Organization;
