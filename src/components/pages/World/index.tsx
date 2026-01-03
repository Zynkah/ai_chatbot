import { GridLayout } from "../../GridLayout";
import { icons } from "../../Icons";
import WorldMapDataJson from "../../../data/WorldMapData.json";

export const World = () => {
  const { WorldMapData } = WorldMapDataJson;
  return (
    <GridLayout
      title_1="World Map Locations"
      content_block_1={
        <>
          {WorldMapData.map((location) =>
            icons(
              location.id,
              location.title,
              location.image,
              location.alt,
              location.width
            )
          )}
        </>
      }
    />
  );
};
