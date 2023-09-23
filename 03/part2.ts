import assert from "assert";
import { extractData, getPriority } from ".";
import { setIntersection, startTimer } from "..";

const part2 = async (filePath: string): Promise<number> => {
  const data = await extractData(filePath);
  const rucksacks = data.split("\n");
  const groups = rucksacks.reduce((acc, rucksack, i) => {
    if (i % 3 === 0) {
      acc.push([rucksack]);
    } else {
      acc.at(-1)!.push(rucksack);
    }
    return acc;
  }, [] as string[][]) as [string, string, string][];
  const badges = groups.map((group) => [
    ...setIntersection(new Set(group[0]), new Set(group[1]), new Set(group[2])),
  ]);
  const priorities = badges.map((badge) =>
    badge.reduce((acc, item) => acc + getPriority(item), 0)
  );

  return priorities.reduce((acc, priority) => acc + priority, 0);
};

const part1Timer = startTimer();
const part1ExampleResult = await part2("./example.txt");
assert.strictEqual(part1ExampleResult, 70);

const part1Result = await part2("input.txt");
console.log("part1: ", part1Result);

part1Timer();
