import { AnswerComponent } from "../components/Answers/AnswerComponent";
import { FaqData } from "../data/FAQdata.json";

const WhyPrivy = () => {
  const whyPrivyData = FaqData[2];
  return (
    <AnswerComponent
      info={whyPrivyData.answer.info}
      listItem={whyPrivyData.answer.features[0].list_item}
      listItem_2={whyPrivyData.answer.features[0].list_item_2}
      listItem_3={whyPrivyData.answer.features[0].list_item_3}
    />
  );
};
export default WhyPrivy;
