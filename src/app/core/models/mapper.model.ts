export interface IMapperIn<T> {
  map(payload: any): T;
}

export interface IMapperOut<T> {
  map(payload: T): any;
}
