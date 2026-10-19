import { FoeArmor, naked, rags, rustyArmor, tailcoat } from "../foe-items/foe-armors";
import { bow, claws, fangs, FoeWeapon, jaws, tentacles } from "../foe-items/foe-weapons";
import { Armor } from "../items/armors";
import { Weapon } from "../items/weapons";

export type FoesInventory = {
    armor: FoeArmor;
    weapon: FoeWeapon[] | FoeWeapon; 
};

export const sceletonInventory: FoesInventory = {
    armor: rustyArmor,
    weapon: bow 
}

export const zombieInventory: FoesInventory = {
    armor: rags,
    weapon: [claws, jaws]
}

export const slimeInventory: FoesInventory = {
    armor: naked,
    weapon: tentacles
}

export const vampireInventory: FoesInventory = {
    armor: tailcoat,
    weapon: [fangs, claws]
}