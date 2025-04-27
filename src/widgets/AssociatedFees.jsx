import { AnswerComponent } from "../components/Answers/AnswerComponent";
import { FaqData } from "../data/FAQdata.json";

const AssociatedFees = () => {
  const feesData = FaqData[5];
  return (
    <AnswerComponent
      info={feesData.answer.info}
      listItem={feesData.answer.features[0].list_item}
      listItem_2={feesData.answer.features[0].list_item_2}
      listItem_3={feesData.answer.features[0].list_item_3}
    />
  );
};
export default AssociatedFees;
