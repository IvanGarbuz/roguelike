import { Amulet } from "./amulets";
import { Armor, peasantCloth, fullPlate, leatherArmor, robe, healerRobe } from "./armors";
import { Weapon, stick, longSword, dagger, staff, healingScroll } from "./weapons";

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


