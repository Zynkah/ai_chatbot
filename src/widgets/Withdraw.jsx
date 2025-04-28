import { AnswerComponent } from "../components/Answers/AnswerComponent";
import { FaqData } from "../data/FAQdata.json";

export const Withdraw = () => {
  const withdrawData = FaqData[8];
  return (
    <AnswerComponent
      info={withdrawData.answer.info}
      listItem={withdrawData.answer.features[0].list_item}
      listItem_2={withdrawData.answer.features[0].list_item_2}
      listItem_3={withdrawData.answer.features[0].list_item_3}
      bottom_info={withdrawData.answer.bottom_info}
    />
  );
};
export default Withdraw;
