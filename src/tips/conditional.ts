/* eslint-disable @typescript-eslint/no-unused-vars */
// type Conditional<T> = T extends string ? number : boolean;

// const a: Conditional<string> = 1; // => OK
// // const b: Conditional<string> = true; // => Error
// // const c: Conditional<string> = '1'; // => Error

// type Data = { value: string };
// type Car = { name: string; model: string };

// type DataOrCar<T> = T extends string ? Data : Car;

// const todo = <T>(args: T): DataOrCar<T> => {
// 	throw new Error('Not implemented');
// };

// const data = todo('123'); // => Data
// data.value; // => OK (Property 'value' exists on type 'Data'.)
// data.name; // => Error (Property 'name' does not exist on type 'Data'.)

// const car = todo(123); // => Car
// car.name; // => OK (Property 'name' exists on type 'Car'.)
// car.value; // => Error (Property 'value' does not exist on type 'Car'.)
