import { resolve } from "path";

// should be global util
export const extractData = async (filePath: string): Promise<string> => {
  const file = Bun.file(resolve(import.meta.dir, filePath));
  const data = await file.text();

  return data;
};

export enum OpponentShape {
  Rock = "A",
  Paper = "B",
  Scissors = "C",
}

export enum ResponseShape {
  Rock = "X",
  Paper = "Y",
  Scissors = "Z",
}

const shapeScore: Record<ResponseShape, number> = {
  [ResponseShape.Rock]: 1,
  [ResponseShape.Paper]: 2,
  [ResponseShape.Scissors]: 3,
} as const;

export const getShapeScore = (shape: ResponseShape) => shapeScore[shape];

// loss: 0
// draw: 3
// win: 6
const responseScore: Record<OpponentShape, Record<ResponseShape, number>> = {
  [OpponentShape.Rock]: {
    [ResponseShape.Rock]: 3,
    [ResponseShape.Paper]: 6,
    [ResponseShape.Scissors]: 0,
  },
  [OpponentShape.Paper]: {
    [ResponseShape.Rock]: 0,
    [ResponseShape.Paper]: 3,
    [ResponseShape.Scissors]: 6,
  },
  [OpponentShape.Scissors]: {
    [ResponseShape.Rock]: 6,
    [ResponseShape.Paper]: 0,
    [ResponseShape.Scissors]: 3,
  },
} as const;

export const getOutcomeScore = (
  shape: OpponentShape,
  response: ResponseShape
) => responseScore[shape][response];

// part2

export enum Outcome {
  Lose = "X",
  Draw = "Y",
  Win = "Z",
}

const responseByOutcome: Record<
  OpponentShape,
  Record<Outcome, ResponseShape>
> = {
  [OpponentShape.Rock]: {
    [Outcome.Lose]: ResponseShape.Scissors,
    [Outcome.Draw]: ResponseShape.Rock,
    [Outcome.Win]: ResponseShape.Paper,
  },
  [OpponentShape.Paper]: {
    [Outcome.Lose]: ResponseShape.Rock,
    [Outcome.Draw]: ResponseShape.Paper,
    [Outcome.Win]: ResponseShape.Scissors,
  },
  [OpponentShape.Scissors]: {
    [Outcome.Lose]: ResponseShape.Paper,
    [Outcome.Draw]: ResponseShape.Scissors,
    [Outcome.Win]: ResponseShape.Rock,
  },
} as const;

export const getResponse = (shape: OpponentShape, outcome: Outcome) => {
  return responseByOutcome[shape][outcome];
};
