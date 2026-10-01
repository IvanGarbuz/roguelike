import { Characteristics, defaultCharacteristics } from "./characteristics";
import { CharacterInventory, defaultInventory, healerInventory, mageInventory, rogueInventory, warriorInventory } from "./inventory";
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
  inventory: CharacterInventory,
): Character => {
  return {
    name,
    characterClass,
    inventory,
    abilities: [],
    characteristics: defaultCharacteristics,
  };
};

const jonny = createCharacter("Jonny","Warrior", warriorInventory)

const albert = createCharacter("Albert","Mage", mageInventory)

const felix = createCharacter("Felix", "Healer", healerInventory)

const luka = createCharacter("Luka", "Rogue", rogueInventory)