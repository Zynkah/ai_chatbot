import { AnswerComponent } from "../components/Answers/AnswerComponent";
import { FaqData } from "../data/FAQdata.json";

export const Casino = () => {
  const casinoData = FaqData[10];
  return (
    <AnswerComponent
      info={casinoData.answer.info}
      info_2={casinoData.answer.info_2}
      listItem={casinoData.answer.features[0].list_item}
      listItem_2={casinoData.answer.features[0].list_item_2}
      listItem_3={casinoData.answer.features[0].list_item_3}
      listItem_4={casinoData.answer.features[0].list_item_2}
      listItem_5={casinoData.answer.features[0].list_item_2}
    />
  );
};
export default Casino;
