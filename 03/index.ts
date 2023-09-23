import { resolve } from "path";

// should be global util
export const extractData = async (filePath: string): Promise<string> => {
  const file = Bun.file(resolve(import.meta.dir, filePath));
  const data = await file.text();

  return data;
};

type SplitRucksack = [string, string];
export const splitRucksack = (rucksack: string): SplitRucksack => {
  const len = rucksack.length / 2;
  return [rucksack.slice(0, len), rucksack.slice(len)];
};

export const getRuckSackItemsIntersection = ([
  leftItems,
  rightItems,
]: SplitRucksack) => {
  const leftItemsSet = new Set(leftItems);
  const rightItemsSet = new Set(rightItems);

  const intersection: string[] = [];

  for (const item of leftItemsSet) {
    if (rightItemsSet.has(item)) {
      intersection.push(item);
    }
  }

  return intersection;
};

const priorities: Record<string, number> = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  A: 27,
  B: 28,
  C: 29,
  D: 30,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I: 35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52,
};

export const getPriority = (item: string) => priorities[item];
