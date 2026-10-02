import { CharacterInventory } from "../items/character-inventory";

export type FoeInventory = Omit<CharacterInventory, "amulet">
