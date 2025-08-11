import { AnswerComponent } from "../components/Answers/AnswerComponent";
import { FaqData } from "../data/FAQdata.json";

const AndroidBehaviors = () => {
  const behaviorsData = FaqData[4];
  return (
    <AnswerComponent
      listItem={behaviorsData.answer.info}
      listItem_2={behaviorsData.answer.info_2}
      listItem_3={behaviorsData.answer.info_3}
    />
  );
};
export default AndroidBehaviors;
