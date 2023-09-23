import assert from "assert";
import { startTimer } from "..";
import {
  extractData,
  getPriority,
  getRuckSackItemsIntersection,
  splitRucksack,
} from ".";

const part1 = async (filePath: string): Promise<number> => {
  const data = await extractData(filePath);
  const rucksacks = data.split("\n");
  const splitRucksacks = rucksacks.map(splitRucksack);
  const intersections = splitRucksacks.map(getRuckSackItemsIntersection);
  const intersectionsPriorities = intersections.map((intersection) =>
    intersection.reduce((acc, item) => acc + getPriority(item), 0)
  );

  return intersectionsPriorities.reduce((acc, priority) => acc + priority, 0);
};

const part1Timer = startTimer();
const part1ExampleResult = await part1("./example.txt");
assert.strictEqual(part1ExampleResult, 157);

const part1Result = await part1("input.txt");
console.log("part1: ", part1Result);

part1Timer();
