import assert from "assert";
import {
  OpponentShape,
  ResponseShape,
  extractData,
  getOutcomeScore,
  getShapeScore,
} from ".";
import { startTimer } from "..";

const part1 = async (filePath: string): Promise<number> => {
  const data = await extractData(filePath);

  const plays = data.split("\n").map((playData) => playData.split(" ")) as [
    OpponentShape,
    ResponseShape
  ][];

  const scores = plays.map(
    ([shape, response]) =>
      getShapeScore(response) + getOutcomeScore(shape, response)
  );

  return scores.reduce((acc, score) => acc + score, 0);
};

const part1Timer = startTimer();
const part1ExampleResult = await part1("./example.txt");
assert.strictEqual(part1ExampleResult, 15);

const part1Result = await part1("input.txt");
console.log("part1: ", part1Result);

part1Timer();
