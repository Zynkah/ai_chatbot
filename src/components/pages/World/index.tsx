import { GridLayout } from "../../GridLayout";
import { icons } from "../../Icons";

export const World = () => {
  return (
    <GridLayout
      title_1="World Map Locations"
      content_block_1={
        <>
          
          {/* todo map this mofo */}
          {icons("bunker", "../Bunker.webp", "bunker image", 150)}
          {icons(
            "abandoned factory",
            "../Abandoned_Factory.webp",
            "abandoned factory",
            150
          )}
          {icons("city ruins", "../City_Ruins.webp", "city ruins", 150)}
           {icons(
            "resistance camp",
            "../Resistance_Camp.webp",
            "resistance camp",
            165
          )}
        </>
      }
    />
  );
};
