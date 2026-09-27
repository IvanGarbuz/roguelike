import { Characteristics, defaultCharacteristics } from "./characteristics";
import { CharacterInventory, defaultInventory } from "./inventory";
import { Ability } from "./types";

type CharacterClass = "Healer" | "Mage" | "Rogue" | "Warrior";

type Character = {
  name: string;
  characterClass: CharacterClass;
  inventory: CharacterInventory;
  abilities: Ability[];
  characteristics: Characteristics;
};

const createCharacter = (
  name: string,
  characterClass: CharacterClass,
): Character => {
  return {
    name,
    characterClass,
    inventory: defaultInventory,
    abilities: [],
    characteristics: defaultCharacteristics,
  };
};
