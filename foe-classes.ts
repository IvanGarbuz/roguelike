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

const skeleton: FoeClass = createFoe("Skeleton", dungeon)
 
const zombie: FoeClass = createFoe("Zombie", dungeon)

const slime: FoeClass = createFoe("Slime", dungeon)

const vampire: FoeClass = createFoe("Vampire", dungeon)
 
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
