export type Armor = {
    name: string;
    pdef: number;
    mdef: number;
};

export const fullPlate: Armor = {
    name: "Full Plate",
    pdef: 20,
    mdef: 10,
};

export const leatherArmor: Armor = {
    name: "Leather Armor",
    pdef: 10,
    mdef: 10,
};

export const robe: Armor = {
    name: "Robe",
    pdef: 5,
    mdef: 15,
};

export const healerRobe: Armor = {
    name: "Healer Robe",
    pdef: 5,
    mdef: 20,
};

export const peasantCloth: Armor = {
    name: "Peasant Cloth",
    pdef: 1,
    mdef: 0,
};
