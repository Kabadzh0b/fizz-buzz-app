export interface Data<T> {
  generateData(): T[];
  useFunction(func: (num: T) => any): any[];
  useFunctions(funcs: ((num: T) => any)[]): any;
}

export interface DataWorker<T, U> {
  work(): U[];
}