import { foeCharacteristics, sceletonCharacteristics, slimeCharacteristics, vampireCharacteristics, zombieCharacteristics } from "./foes-characteristics";
import { FoesInventory, sceletonInventory, slimeInventory, vampireInventory, zombieInventory } from "./foes-inventory";

type DungeonFoe = {
  name: string;
  inventory: FoesInventory
  characteristics: foeCharacteristics;
};

const createDungeonFoe = (
  name: string,
  inventory: FoesInventory,
  characteristics: foeCharacteristics 
): DungeonFoe => {
  return {
    name,
    characteristics,
    inventory
  };
};

const sceleton = createDungeonFoe("Sceleton", sceletonInventory, sceletonCharacteristics)

const slime = createDungeonFoe("Slime", slimeInventory, slimeCharacteristics)

const vampire = createDungeonFoe("Movart", vampireInventory, vampireCharacteristics)

const zombie = createDungeonFoe("iWantYourBrain", zombieInventory, zombieCharacteristics)