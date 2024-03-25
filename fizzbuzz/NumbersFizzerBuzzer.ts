import { Data } from "../models/data";
import { ConditionalFunc, InConditionalFunc, ToType } from "../models/func";

export class DataWorker<T, U> implements DataWorker<T, U> {
  private data: Data<T>;
  private funcs: (ConditionalFunc<T, U> | InConditionalFunc<T, U>)[] = [];
  private toType: ToType<T, U>;

  constructor(
    data: Data<T>,
    funcs: (ConditionalFunc<T, U> | InConditionalFunc<T, U>)[],
    toType: ToType<T, U>
  ) {
    this.data = data;
    this.funcs = funcs;
    this.toType = toType;
    return this;
  }
  work(): U[] {
    return this.data.useFunction((num: T) => {
      for (let func of this.funcs) {
        const result = func.work(num);
        if (result) {
          return result;
        }
      }
      return this.toType.serialize(num);
    });
  }
}

export class NumbersFizzerBuzzer extends DataWorker<number, string> {
  constructor(
    data: Data<number>,
    funcs: (
      | ConditionalFunc<number, string>
      | InConditionalFunc<number, string>
    )[],
    toType: ToType<number, string>
  ) {
    super(data, funcs, toType);
    return this;
  }
}
