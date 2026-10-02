import {Armor, fullPlate, healerRobe, leatherArmor, peasantCloth, robe} from "./items/armors"
import {Weapon, dagger, healingScroll, longSword, staff, stick} from "./items/weapons"
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

export const warriorInventory: CharacterInventory = {
    armor: fullPlate,
    weapon: longSword,
};

export const rogueInventory: CharacterInventory = {
    armor: leatherArmor,
    weapon: dagger,
};

export const mageInventory: CharacterInventory = {
    armor: robe,
    weapon: staff,
};

export const healerInventory: CharacterInventory = {
    armor: healerRobe,
    weapon: healingScroll,
};
