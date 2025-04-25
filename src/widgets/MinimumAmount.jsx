import { AnswerComponent } from "../components/Answers/AnswerComponent";
import { FaqData } from "../data/FAQdata.json";

const FindWallet = () => {
  const minAmount = FaqData[6];
  return (
    <AnswerComponent
      info={minAmount.answer.info}
      info_2={minAmount.answer.info_2}
      info_3={minAmount.answer.info_3}
    />
  );
};
export default FindWallet;
