import { ListedAnswerComponents } from "../components/Answers/AnswerComponent";
import { FaqData } from "../data/FAQdata.json";

export const SupportedNetworks = () => {
  const networkData = FaqData[3];
  return (
    <ListedAnswerComponents
      info={networkData.answer.info}
      listItem={networkData.answer.features[0].list_item}
      listItem_2={networkData.answer.features[0].list_item_2}
    />
  );
};
