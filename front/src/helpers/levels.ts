export interface Level {
  level: number;
  xp: number;
  skillBonus: number;
}

const levels: Level[] = [
  { level: 1, xp: 300, skillBonus: 2 },
  { level: 2, xp: 600, skillBonus: 2 },
  { level: 3, xp: 900, skillBonus: 2 },
  { level: 4, xp: 2700, skillBonus: 2 },
  { level: 5, xp: 6500, skillBonus: 3 },
  { level: 6, xp: 14000, skillBonus: 3 },
  { level: 7, xp: 23000, skillBonus: 3 },
  { level: 8, xp: 34000, skillBonus: 3 },
  { level: 9, xp: 48000, skillBonus: 4 },
  { level: 10, xp: 64000, skillBonus: 4 },
  { level: 11, xp: 85000, skillBonus: 4 },
  { level: 12, xp: 100000, skillBonus: 4 },
  { level: 13, xp: 120000, skillBonus: 5 },
  { level: 14, xp: 140000, skillBonus: 5 },
  { level: 15, xp: 165000, skillBonus: 5 },
  { level: 16, xp: 195000, skillBonus: 5 },
  { level: 17, xp: 225000, skillBonus: 6 },
  { level: 18, xp: 265000, skillBonus: 6 },
  { level: 19, xp: 305000, skillBonus: 6 },
  { level: 20, xp: 355000, skillBonus: 6 },
];

export const getLevel = (level: number): Level| undefined => levels
  .find((l: Level) => (l.level === level));
