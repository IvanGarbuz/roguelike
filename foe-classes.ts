import { cursedCastle, dungeon, forest, LocationSite } from "./locations";

type FoeClass = {
    name: string;
    location: LocationSite;
};

const createFoe = (name: string, location: LocationSite): FoeClass => {
  return {
    name,
    location,
  };
};

export const skeleton: FoeClass = createFoe("Skeleton", dungeon)
 
export const zombie: FoeClass = createFoe("Zombie", dungeon)

export const slime: FoeClass = createFoe("Slime", dungeon)

export const vampire: FoeClass = createFoe("Vampire", dungeon)
 
const wolf: FoeClass = createFoe("Wolf", forest)

const darkelf: FoeClass = createFoe("Dark Elf", forest)

const ork: FoeClass = createFoe("Ork", forest)

const witch: FoeClass = createFoe("Witch", forest)

const goblin: FoeClass = createFoe("Goblin", forest)

const deathknight: FoeClass = createFoe("Death Knight", cursedCastle)

const necromancer: FoeClass = createFoe("Necromancer", cursedCastle)

const wrath: FoeClass = createFoe("Wrath", cursedCastle)

const ghoul: FoeClass = createFoe("Ghoul", cursedCastle)

const gargoyle: FoeClass = createFoe("Gargoyle", cursedCastle)
