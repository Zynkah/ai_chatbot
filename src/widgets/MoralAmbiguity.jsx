import { AnswerComponent } from "../components/Answers/AnswerComponent";
import { FaqData } from "../data/FAQdata.json";

export const MoralAmbiguity = () => {
  const moralityData = FaqData[3];
  return (
    <AnswerComponent
      info={moralityData.answer.info}
      listItem={moralityData.answer.features[0].list_item}
      listItem_2={moralityData.answer.features[0].list_item_2}
    />
  );
};
