import assert from "assert";
import { startTimer } from "..";

const part1 = async (fileName: `${string}.txt`): Promise<number> => {
    const file = Bun.file(fileName);
    const data = await file.text();

    const elves = data
        .split("\n\n")
        .map((elfData) => elfData.split("\n").map(Number));
    const mostCalories = Math.max(
        ...elves.map((elf) => elf.reduce((acc, cur) => acc + cur, 0))
    );

    return mostCalories;
};

const part1Timer = startTimer()
const part1ExampleResult = await part1("example.txt");
assert.strictEqual(part1ExampleResult, 24000);

const part1Result = await part1("input.txt");
console.log('part1: ', part1Result)

part1Timer()

console.log('\n')

const part2 = async (fileName: `${string}.txt`): Promise<number> => {
    const file = Bun.file(fileName);
    const data = await file.text();

    const elves = data
        .split("\n\n")
        .map((elfData) => elfData.split("\n").map(Number));
    const calories = elves.map((elf) => elf.reduce((acc, cur) => acc + cur, 0)).sort((a, b) => (b - a));

    return calories[0] + calories[1] + calories[2];
}

const part2Timer = startTimer()
const part2ExampleResult = await part2("example.txt");
assert.strictEqual(part2ExampleResult, 45000);

const part2Result = await part2("input.txt");
console.log('part2: ', part2Result)

part2Timer()
