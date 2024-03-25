import { Data } from "../models/data";
import { ToType } from "../models/func";

export class Numbers implements Data<number> {
  private data: number[] = [];
  constructor(
    private readonly start: number = 0,
    private readonly end: number = 100
  ) {
    if (start > end) {
      throw new Error("Start should be less than end");
    }
    if (start <= 0) {
      throw new Error("Start should be greater than 0");
    }
    this.data = this.generateData();
    return this;
  }

  generateData(): number[] {
    return Array.from(
      { length: this.end - this.start + 1 },
      (_, i) => i + this.start
    );
  }

  useFunction(func: (num: number) => string): string[] {
    return this.data.map(func);
  }

  useFunctions(funcs: ((num: number) => string)[]): string[][] {
    return funcs.map((func) => this.data.map(func));
  }
}

export class NumberToString implements ToType<number, string> {
  serialize(data: number): string {
    return data.toString();
  }
}
