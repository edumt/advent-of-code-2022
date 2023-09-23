import assert from "assert";
import {
  OpponentShape,
  Outcome,
  extractData,
  getOutcomeScore,
  getResponse,
  getShapeScore,
} from ".";
import { startTimer } from "..";

const part2 = async (filePath: string): Promise<number> => {
  const data = await extractData(filePath);

  const plays = data.split("\n").map((playData) => playData.split(" ")) as [
    OpponentShape,
    Outcome
  ][];

  const scores = plays.map(([shape, outcome]) => {
    const response = getResponse(shape, outcome);
    return getShapeScore(response) + getOutcomeScore(shape, response);
  });

  return scores.reduce((acc, score) => acc + score, 0);
};

const part1Timer = startTimer();
const part1ExampleResult = await part2("./example.txt");
assert.strictEqual(part1ExampleResult, 12);

const part1Result = await part2("input.txt");
console.log("part1: ", part1Result);

part1Timer();
