import { defaultCharacteristics } from "../characteristics";
import { vampireInventory } from "./foes-inventory";

export type foeCharacteristics = {
  HP: number;
  MP: number;
  str: number;
  dex: number;
  int: number;
  speed: number;
  pdef: number;
  mdef: number;
};

 const defaultHP = 20;
 const defaultMP = 0;
 const defaultStr = 5;
 const defaultDex = 10;
 const defaultInt = 10;
 const defaultSpeed = defaultDex * 5;
 const defaultPdef = 5;
 const defaultMdef = 5;

export const defaultFoeCharacteristics: foeCharacteristics = {
  HP: defaultHP,
  MP: defaultMP,
  str: defaultStr,
  dex: defaultDex,
  int: defaultInt,
  speed: defaultSpeed,
  pdef: defaultPdef,
  mdef: defaultMdef,
};

export const sceletonCharacteristics = {
  ...defaultCharacteristics,
  dex: 20
};

export const zombieCharacteristics = {
    ...defaultCharacteristics,
    HP: 35,
    str: 10,
    int: 5,
    pdef: 15,
    mdef: 10
};

export const slimeCharacteristics = {
    ...defaultCharacteristics,
    str: 8,
    dex: 5,
    int: 1,
    mdef: 13
}

export const vampireCharacteristics = {
    ...defaultCharacteristics,
    HP: 45,
    MP: 50,
    str: 30,
    dex: 20,
    int: 25,
    pdef: 22,
    mdef: 18
}
 