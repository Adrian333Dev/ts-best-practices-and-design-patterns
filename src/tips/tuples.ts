/* eslint-disable @typescript-eslint/no-unused-vars */
type Tuple = [string, number, boolean];

const arr: Tuple = ['1', 1, true]; // => OK
// const arr2: Tuple = ['1', 1, 'true']; // => Error
// const arr3: Tuple = ['1', 1]; // => Error

type TupleToUnion<T> = T extends Array<infer U> ? U : never;

type Union = TupleToUnion<Tuple>; // => string | number | boolean
const union: Union = '1'; // => OK
const union2: Union = 1; // => OK
const union3: Union = true; // => OK

type Tuple2 = [string, number, ...boolean[]];

const arr4: Tuple2 = ['1', 1, true, false]; // => OK
const arr5: Tuple2 = ['1', 1]; // => OK
// const arr6: Tuple2 = ['1', 1, 'true']; // => Error
