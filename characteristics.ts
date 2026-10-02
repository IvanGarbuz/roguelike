export type Characteristics = {
  HP: number;
  MP: number;
  str: number;
  dex: number;
  int: number;
  speed: number;
  pdef: number;
  mdef: number;
};

const defaultHP = 50;
const defaultMP = 0;
const defaultStr = 10;
const defaultDex = 10;
const defaultInt = 10;
const defaultSpeed = defaultDex * 5;
const defaultPdef = 5;
const defaultMdef = 5;

export const defaultCharacteristics: Characteristics = {
  HP: defaultHP,
  MP: defaultMP,
  str: defaultStr,
  dex: defaultDex,
  int: defaultInt,
  speed: defaultSpeed,
  pdef: defaultPdef,
  mdef: defaultMdef,
};

export const warriorCharacteristics: Characteristics = {
  ...defaultCharacteristics,
  HP: 150,
  str: 60,
  speed: 14,
};

export const healerCharacteristics: Characteristics = {
  ...defaultCharacteristics,
  HP: 85,
  MP: 110,
  int: 100,
  speed: 20,
};

export const rogueCharacteristics: Characteristics = {
  ...defaultCharacteristics,
  HP: 90,
  MP: 20,
  dex: 100,
  speed: 50,
};

export const mageCharacteristics: Characteristics = {
  ...defaultCharacteristics,
  HP: 15,
  MP: 150,
  int: 100,
  speed: 35,
};
