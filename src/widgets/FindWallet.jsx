import { AnswerComponent } from "../components/Answers/AnswerComponent";
import { FaqData } from "../data/FAQdata.json";

const FindWallet = () => {
  const walletData = FaqData[4];
  return (
    <AnswerComponent
      info={walletData.answer.info}
      info_2={walletData.answer.info_2}
      info_3={walletData.answer.info_3}
    />
  );
};
export default FindWallet;
