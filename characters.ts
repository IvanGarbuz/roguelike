import { healerAbilities } from "./abilities/healer-abilities";
import { mageAbilities } from "./abilities/mage-abilities";
import { rogueAbilities } from "./abilities/rogue-abilities";
import { warriorAbilities } from "./abilities/warrior-abilities";
import { Characteristics, defaultCharacteristics, healerCharacteristics, mageCharacteristics, rogueCharacteristics, warriorCharacteristics } from "./characteristics";
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
  abilities: Ability[],
  characteristics: Characteristics 
): Character => {
  return {
    name,
    characterClass,
    inventory,
    abilities,
    characteristics,
  };
};

const jonny = createCharacter("Jonny","Warrior", warriorInventory, warriorAbilities, warriorCharacteristics)

const albert = createCharacter("Albert","Mage", mageInventory, mageAbilities, mageCharacteristics)

const felix = createCharacter("Felix", "Healer", healerInventory, healerAbilities, healerCharacteristics)

const luka = createCharacter("Luka", "Rogue", rogueInventory, rogueAbilities, rogueCharacteristics)
