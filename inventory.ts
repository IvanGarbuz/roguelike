import { Armor, peasantCloth } from "./armors";
import { stick, Weapon } from "./weapons";
import { Amulet } from "./amulets";

export type CharacterInventory = {
  armor: Armor;
  weapon: Weapon;
  amulet?: Amulet;
};

export const defaultInventory: CharacterInventory = {
  armor: peasantCloth,
  weapon: stick,
};
