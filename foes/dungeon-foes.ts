import { Characteristics } from "../characteristics";
import { Character } from "../characters";
import { FoeInventory } from "../foe-items/foe-inventory";

type Foe = Omit<Character, "characterClass" | "abilities"> 

const createCharacter = (
  name: string,
  inventory: FoeInventory,
  characteristics: Characteristics 
): Foe => {
  return {
    name,
    inventory,
    characteristics,
  };
};
