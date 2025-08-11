import { AnswerComponent } from "../components/Answers/AnswerComponent";
import { FaqData } from "../data/FAQdata.json";

const AndroidInfo = () => {
  const androidData = FaqData[1];
  return (
    <AnswerComponent
      info={androidData.answer.info}
      listItem={androidData.answer.listItem}
      listItem_2={androidData.answer.listItem_2}
      listItem_3={androidData.answer.listItem_3}
      listItem_4={androidData.answer.listItem_4}
      listItem_5={androidData.answer.listItem_5}
      listItem_6={androidData.answer.listItem_6}
      listItem_7={androidData.answer.listItem_7}
      listItem_8={androidData.answer.listItem_8}
      listItem_9={androidData.answer.listItem_9}
      listItem_10={androidData.answer.listItem_10}
      listItem_11={androidData.answer.listItem_11}
      listItem_12={androidData.answer.listItem_12}
      listItem_13={androidData.answer.listItem_13}
      listItem_14={androidData.answer.listItem_14}
      listItem_15={androidData.answer.listItem_15}
    />
  );
};
export default AndroidInfo;
