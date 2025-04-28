import { AnswerComponent } from "../components/Answers/AnswerComponent";
import { FaqData } from "../data/FAQdata.json";

export const BuyFare = () => {
  const buyFareData = FaqData[7];
  return (
    <AnswerComponent
      info={buyFareData.answer.info}
      listItem={buyFareData.answer.features[0].list_item}
      listItem_2={buyFareData.answer.features[0].list_item_2}
      listItem_3={buyFareData.answer.features[0].list_item_3}
      listItem_4={buyFareData.answer.features[0].list_item_2}
      bottom_info={buyFareData.answer.bottom_info}
    />
  );
};
export default BuyFare;
