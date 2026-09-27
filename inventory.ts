import {Armor, peasantCloth} from "./items/armors"
import {Weapon, stick} from "./items/weapons"
import {Amulet} from "./items/amulets"

export type CharacterInventory = {
    armor: Armor;
    weapon: Weapon;
    amulet?: Amulet;
};

export const defaultInventory: CharacterInventory = {
    armor: peasantCloth,
    weapon: stick,
};
