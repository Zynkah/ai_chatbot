import { AnswerComponent } from "../components/Answers/AnswerComponent";
import { FaqData } from "../data/FAQdata.json";

const PrivyInfo = () => {
  const privyData = FaqData[1];

  return (
    <AnswerComponent
      info={privyData.answer.info}
      info_2={privyData.answer.info_2}
      info_3={privyData.answer.info_3}
    />
  );
};
export default PrivyInfo;
