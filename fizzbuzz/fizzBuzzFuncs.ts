import { ConditionalFunc, InConditionalFunc } from "../models/func";

export class FizzFunc implements ConditionalFunc<number, string> {
  private condition: (num: number) => boolean;
  constructor(fizzCondition: (num: number) => boolean) {
    this.condition = fizzCondition;
  }

  work(data: number): string | null {
    return this.condition(data) ? "Fizz" : null;
  }
}

export class BuzzFunc implements ConditionalFunc<number, string> {
  private condition: (num: number) => boolean;
  constructor(buzzCondition: (num: number) => boolean) {
    this.condition = buzzCondition;
  }

  work(data: number): string | null {
    return this.condition(data) ? "Buzz" : null;
  }
}

export class FizzBuzzFunc implements ConditionalFunc<number, string> {
  private fizzBuzzCondition: (num: number) => boolean;
  constructor(fizzBuzzCondition: (num: number) => boolean) {
    this.fizzBuzzCondition = fizzBuzzCondition;
  }

  work(data: number): string | null {
    return this.fizzBuzzCondition(data) ? "FizzBuzz" : null;
  }
}

export class DefaultFunc implements InConditionalFunc<number, string> {
  work(data: number): string {
    return data.toString();
  }
}
