import { AnswerComponent } from "../components/Answers/AnswerComponent";
import { FaqData } from "../data/FAQdata.json";

export const EthicalImplications = () => {
  const ethicalImplicationsData = FaqData[8];
  return (
    <AnswerComponent
      info={ethicalImplicationsData.answer.info}
      listItem={ethicalImplicationsData.answer.features[0].list_item}
      listItem_2={ethicalImplicationsData.answer.features[0].list_item_2}
      listItem_3={ethicalImplicationsData.answer.features[0].list_item_3}
      bottom_info={ethicalImplicationsData.answer.bottom_info}
    />
  );
};
export default EthicalImplications;
