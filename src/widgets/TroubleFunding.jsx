import { AnswerComponent } from "../components/Answers/AnswerComponent";
import { FaqData } from "../data/FAQdata.json";

const FindWallet = () => {
  const troubleFunding = FaqData[9];
  return (
    <AnswerComponent
      info={troubleFunding.answer.info}
      info_2={troubleFunding.answer.info_2}
      info_3={troubleFunding.answer.info_3}
    />
  );
};
export default FindWallet;
