import { icons } from "../../Icons";
import { SGridWrapper, SGridContainer, SSmallGridContainer } from "./styles";
import AndroidListData from "../../../data/AndroidListData.json";

export const Androids = () => {
  const { YoRHaAndroidListData, ResistanceAndroidListData, V1AndroidListData } =
    AndroidListData;
  return (
    <SGridWrapper>
      <h2>YoRHa Android Models</h2>
      <SGridContainer>
        {YoRHaAndroidListData.map((android) =>
          icons(android.id, android.name, android.image, android.alt)
        )}
      </SGridContainer>
      <h2>Resistance Android Models</h2>
      <SSmallGridContainer>
        {ResistanceAndroidListData.map((android) =>
          icons(android.id, android.name, android.image, android.alt)
        )}
      </SSmallGridContainer>
      <h2>Ver1.1a Android Models</h2>
      <SGridContainer>
        {V1AndroidListData.map((android) =>
          icons(android.id, android.name, android.image, android.alt)
        )}
      </SGridContainer>
    </SGridWrapper>
  );
};
