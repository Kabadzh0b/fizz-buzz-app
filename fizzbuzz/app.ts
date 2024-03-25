import { ConditionalFunc } from "../models/func";
import { NumbersFizzerBuzzer } from "./NumbersFizzerBuzzer";
import { BuzzFunc, FizzBuzzFunc, FizzFunc } from "./fizzBuzzFuncs";
import { NumberToString, Numbers } from "./numbers";

const numbers = new Numbers(1, 100);

const fizzFunc: ConditionalFunc<number, string> = new FizzFunc(
  (num: number) => num % 3 === 0
);

const buzzFunc: ConditionalFunc<number, string> = new BuzzFunc(
  (num: number) => num % 5 === 0
);
const fizzBuzzFunc: ConditionalFunc<number, string> = new FizzBuzzFunc(
  (num: number) => num % 15 === 0
);

const funcs = [fizzBuzzFunc, fizzFunc, buzzFunc];

const toTyper = new NumberToString();

const numbersFizzerBuzzer = new NumbersFizzerBuzzer(numbers, funcs, toTyper);

console.log(numbersFizzerBuzzer.work());
