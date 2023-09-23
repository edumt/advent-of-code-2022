import { resolve } from "path";

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
