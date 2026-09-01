import { Characteristics } from "./characteristics";
import { CharacterClass } from "./classes";
import { CharacterInventory } from "./inventory";

export type Character = {
  name: string;
  characterClass: CharacterClass;
  inventory: CharacterInventory;
  characteristics: Characteristics;
};

const createCharacter = (name, characterClass) => {};
