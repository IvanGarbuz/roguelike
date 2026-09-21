export type Ability = {
    name: string;
    description: string;
    damage: number;
};

const axeThrow: Ability = {
    name: "Axe throw",
    description: "The warrior hurls his axe at the enemy with all his might",
    damage: 20,
};

const heavySwing: Ability = {
    name: "Heavy swing",
    description: "The warrior delivers a horizontal slash hitting all enemies",
    damage: 12,
};

const earthTremor: Ability = {
    name: "Earth tremor",
    description: "The warrior slams the ground with all his might, dealing massive damage to everyone",
    damage: 35,
};