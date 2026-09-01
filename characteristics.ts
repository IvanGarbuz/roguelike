export type Characteristics = {
  HP: number;
  MP: number;
  str: number;
  dex: number;
  int: number;
  con: number;
  speed: number;
  pdef: number;
  mdef: number;
};

const defaultHP = 50;
const defaultMP = 0;
const defaultStr = 10;
const defaultDex = 10;
const defaultInt = 10;
const defaultCon = 10;
const defaultSpeed = defaultDex * 5;
const defaultPdef = 5;
const defaultMdef = 5;

const defaultCharacteristics: Characteristics = {
  HP: defaultHP,
  MP: defaultMP,
  str: defaultStr,
  dex: defaultDex,
  int: defaultInt,
  con: defaultCon,
  speed: defaultSpeed,
  pdef: defaultPdef,
  mdef: defaultMdef,
};

const warriorCharacteristics: Characteristics = {};
