import MachineListData from "../../../data/MachineListData.json";
import { GridLayout } from "../../GridLayout";
import { icons } from "../../Icons";

export const Machines = () => {
  const { MachineMapData } = MachineListData;

  return (
    <GridLayout
      title_1="Machine Lifeforms"
      content_block_1={
        <>
          {MachineMapData.map((machine) =>
            icons(
              machine.id,
              machine.title,
              machine.image,
              machine.alt,
              machine.width
            )
          )}
        </>
      }
    />
  );
};
